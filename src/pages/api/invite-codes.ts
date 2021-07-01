import type { NextApiRequest, NextApiResponse } from 'next';

const codes = ['RevenitePilot2021'];

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.body;
  if (!codes.includes(code)) return res.status(403).send('Invalid invite code');
  return res.status(200).end();
};
