import type { NextApiRequest, NextApiResponse } from 'next';
import Amplify, { withSSRContext } from 'aws-amplify';
import config from '../../../../aws-exports.js';
import { GraphQLAPIClass, GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import {
  Activity,
  CreateActivityInput,
  DeleteActivityInput,
  UpdateActivityInput,
  UpdateStravaUserInput,
} from '../../../API.js';
import { StravaUser } from '../../../../models';
import { AuthModeStrategyType, DataStoreClass } from '@aws-amplify/datastore';
import {
  createActivity,
  createStravaActivity,
  deleteActivity,
  updateActivity,
  updateStravaUser,
} from '../../../graphql/mutations';
import { ActivitiesOptions } from '../../../utils/constants';
import { format } from 'date-fns';
import { v4 } from 'uuid';
import { listActivitys } from '../../../graphql/queries';

type StravaActivity = {
  resource_state: number;
  athlete: { id: number; resource_state: number };
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  workout_type: number;
  id: number;
  external_id: string;
  upload_id: string;
  start_date: string;
  start_date_local: string;
  timezone: string;
  utc_offset: number;
  start_latlng: number[];
  end_latlng: number[];
  location_city: string;
  location_state: string;
  location_country: string;
  start_latitude: string;
  start_longitude: string;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  average_speed: number;
  max_speed: number;
  has_heartrate: boolean;
  heartrate_opt_out: boolean;
  display_hide_heartrate_option: boolean;
  pr_count: number;
  suffer_score: number;
  description: string;
  calories: number;
  perceived_exertion: number;
  prefer_perceived_exertion: unknown;
  segment_efforts: unknown[];
  best_efforts: unknown[];
  hide_from_home: boolean;
  available_zones: string[];
};

Amplify.configure({
  ...config,
  ssr: true,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const { API, DataStore }: { API: GraphQLAPIClass; DataStore: DataStoreClass } = withSSRContext({
    req,
  });
  try {
    switch (method) {
      case 'GET': {
        // Your verify token. Should be a random string.
        const VERIFY_TOKEN = process.env.STRAVA__VERIFY;
        // Parses the query params
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];
        // Checks if a token and mode is in the query string of the request
        if (mode && token) {
          // Verifies that the mode and token sent are valid
          if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            // Responds with the challenge token from the request
            res.status(200).send({ 'hub.challenge': challenge });
          } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.status(403).end();
          }
        }
        res.status(500).end();
        break;
      }
      case 'POST': {
        const { object_id, owner_id: athleteId, aspect_type, updates } = req.body;
        const uri = `https://www.strava.com/api/v3/activities/${object_id}`;

        const user = (
          await DataStore.query(StravaUser, (user) => user.athleteId('eq', athleteId))
        )[0];

        if (!user) {
          console.error('No user registered with that athlete id');
          res.status(500).end();
        }

        const current = new Date().valueOf() / 1000;
        const { id, userId } = user;
        let { access_token, expires_at, refresh_token } = user;

        if (expires_at < current) {
          console.log('expired');
          const resp = await fetch(
            `https://www.strava.com/oauth/token?client_id=${process.env.STRAVA__CLIENT_ID}&client_secret=${process.env.STRAVA__CLIENT_SECRET}&refresh_token=${refresh_token}&grant_type=refresh_token`,
            {
              method: 'POST',
            },
          );

          const data = await resp.json();
          refresh_token = data.refresh_token;
          access_token = data.access_token;
          expires_at = data.expires_at;

          const stravaUser: UpdateStravaUserInput = {
            id,
            refresh_token,
            expires_at,
            access_token,
          };

          await API.graphql({
            query: updateStravaUser,
            variables: { input: stravaUser },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
          });
        }

        switch (aspect_type) {
          case 'create': {
            const resp = await fetch(uri, {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            });
            const activity: StravaActivity = await resp.json();
            const { cardio, flex, strength, distance } =
              ActivitiesOptions[activity.type.toLowerCase()];
            const date = new Date(activity.start_date);

            const appActivity: CreateActivityInput = {
              date: format(date, 'yyyy-MM-dd'),
              distance: distance ? '' + activity.distance : '',
              duration: '' + Math.floor(activity.elapsed_time / 60),
              feeling: '5',
              perceivedExertion: '' + activity.perceived_exertion,
              activity: activity.type,
              cardio,
              flexibility: flex,
              strength,
              name: activity.name,
              id: v4(),
              stravaId: '' + activity.id,
              userId,
            };

            await API.graphql({
              query: createActivity,
              variables: { input: appActivity },
              authMode: GRAPHQL_AUTH_MODE.API_KEY,
            });
            await API.graphql({
              query: createStravaActivity,
              variables: {
                input: {
                  id: v4(),
                  userId,
                  stravaActivity: JSON.stringify(activity),
                },
              },
              authMode: GRAPHQL_AUTH_MODE.API_KEY,
            });
          }
          case 'update': {
            const response = (await API.graphql({
              query: listActivitys,
              variables: { input: { stravaId: object_id } },
              authMode: GRAPHQL_AUTH_MODE.API_KEY,
            })) as GraphQLResult<{ listActivitys: { items: Activity[] } }>;

            const { id, name, activity } = response.data?.listActivitys?.items.find(
              (a) => a.stravaId === '' + object_id,
            ) || { id: '', name: '', activity: '' };

            const update: UpdateActivityInput = {
              id,
              name: updates.title ?? name,
              activity: updates.type ?? activity,
            };

            await API.graphql({
              query: updateActivity,
              variables: { input: update },
              authMode: GRAPHQL_AUTH_MODE.API_KEY,
            });
          }
          case 'delete': {
            const response = (await API.graphql({
              query: listActivitys,
              variables: { input: { stravaId: object_id } },
              authMode: GRAPHQL_AUTH_MODE.API_KEY,
            })) as GraphQLResult<{ listActivitys: { items: Activity[] } }>;

            const { id } = response.data?.listActivitys?.items.find(
              (a) => a.stravaId === '' + object_id,
            ) || { id: '' };

            const deleteQuery: DeleteActivityInput = {
              id,
            };

            await API.graphql({
              query: deleteActivity,
              variables: { input: deleteQuery },
              authMode: GRAPHQL_AUTH_MODE.API_KEY,
            });
          }
        }

        res.status(200).send('EVENT_RECEIVED');
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

// https://dev.revenite.org/api/strava/callback?hub.mode=subscribe&hub.verify_token=1EBD4EDE-6DCD-4987-BBE3-E423DC9E2E93&hub.challenge=15f7d1a91c1f40f8a748fd134752feb3

// http://localhost:3000/api/strava/callback?hub.mode=subscribe&hub.verify_token=1EBD4EDE-6DCD-4987-BBE3-E423DC9E2E93&hub.challenge=15f7d1a91c1f40f8a748fd134752feb3
