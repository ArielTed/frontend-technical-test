import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  httpProxyMiddleware(req, res, {
    target: 'http://localhost:3005',
    pathRewrite: [
      {
        patternStr: '^/api',
        replaceStr: '',
      },
    ],
  });
};

export const config = {
  api: {
    externalResolver: true,
  },
};
