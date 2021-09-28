process.env.STRAVA__CLIENT_ID;
process.env.STRAVA__CLIENT_SECRET;
process.env.STRAVA__VERIFY;
process.env.STRAVA__REDIRECT;

import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    STRAVA__CLIENT_ID: process.env.STRAVA__CLIENT_ID,
    STRAVA__CLIENT_SECRET: process.env.STRAVA__CLIENT_SECRET,
    STRAVA__VERIFY: process.env.STRAVA__VERIFY,
    STRAVA__REDIRECT: process.env.STRAVA__REDIRECT,
  });
};
