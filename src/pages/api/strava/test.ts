import type { NextApiResponse } from 'next';

export default (res: NextApiResponse) => {
  return res.status(200).send({ url: process.env.STRAVA__REDIRECT });
};
