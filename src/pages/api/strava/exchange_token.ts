import type { NextApiRequest, NextApiResponse } from 'next';
import Amplify, { AuthModeStrategyType, withSSRContext } from 'aws-amplify';
import config from '../../../../aws-exports.js';
import { createStravaUser } from '../../../graphql/mutations';
import { GraphQLAPIClass, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { CreateStravaUserInput } from '../../../API.js';

Amplify.configure({
  ...config,
  ssr: true,
});
const scopes = { READ: 'read', ACTIVITY: 'activity:read_all' };
export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('EXCHANGING TOKEN');
  if (!process.env.STRAVA__REDIRECT) {
    return res.status(500).end();
  }

  const { API }: { API: GraphQLAPIClass } = withSSRContext({
    req,
  });

  let stravaUser: CreateStravaUserInput | undefined = undefined;

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

    const response = await resp.json();

    console.log({ response });
    console.error({ response });

    const {
      refresh_token,
      access_token,
      expires_at,
      athlete: { id: athleteId, city, state, country },
    } = response;

    stravaUser = {
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

    console.log('STRAVA USER', stravaUser);
    console.log({ stravaUser });
    console.error({ stravaUser });

    await API.graphql({
      query: createStravaUser,
      variables: { input: stravaUser },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    return res.status(500).send({ error, stravaUser, test: 'test' });
  }

  console.log('Success');
  console.error('Success');

  return res.redirect(process.env.STRAVA__REDIRECT);
};
