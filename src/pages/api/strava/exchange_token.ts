import type { NextApiRequest, NextApiResponse } from 'next';
import Amplify, { AuthModeStrategyType, withSSRContext } from 'aws-amplify';
import config from '../../../../aws-exports.js';
import { createStravaUser } from '../../../graphql/mutations';
import { GraphQLAPIClass, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { CreateStravaUserInput } from '../../../API.js';
import { DataStoreClass } from '@aws-amplify/datastore';

Amplify.configure({
  ...config,
  ssr: true,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});
const scopes = { READ: 'read', ACTIVITY: 'activity:read_all' };
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.STRAVA__REDIRECT) {
    return res.status(500).end();
  }

  const { API }: { API: GraphQLAPIClass; DataStore: DataStoreClass } = withSSRContext({
    req,
  });

  try {
    const { scope, code, user } = req.query;

    console.log({ scope, code, user });
    console.error({ scope, code, user });

    const resp = await fetch(
      `https://www.strava.com/oauth/token?client_id=${process.env.STRAVA__CLIENT_ID}&client_secret=${process.env.STRAVA__CLIENT_SECRET}&code=${code}&grant_type=authorization_code`,
      {
        method: 'POST',
      },
    );

    const {
      refresh_token,
      access_token,
      expires_at,
      athlete: { id: athleteId, city, state, country },
    } = await resp.json();

    const stravaUser: CreateStravaUserInput = {
      refresh_token,
      access_token,
      expires_at,
      scope_activity: scope.includes(scopes.ACTIVITY),
      scope_read: scope.includes(scopes.READ),
      athleteId,
      userId: !Array.isArray(user) ? user : '',
      city,
      state,
      country,
    };

    console.log({ stravaUser });
    console.error({ stravaUser });

    await API.graphql({
      query: createStravaUser,
      variables: { input: stravaUser },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  } catch (error) {
    console.error(error);
    return res.redirect(process.env.STRAVA__REDIRECT);
  }

  console.log('Success');
  console.error('Success');

  return res.redirect(process.env.STRAVA__REDIRECT);
};
