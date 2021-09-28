/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const path = require('path');

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    publicExcludes: ['!**/*.png'],
    scope: '/app',
    disable: process.env.NODE_ENV === 'development',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    STRAVA__CLIENT_ID: process.env.STRAVA__CLIENT_ID,
    STRAVA__CLIENT_SECRET: process.env.STRAVA__CLIENT_SECRET,
    STRAVA__VERIFY: process.env.STRAVA__VERIFY,
    STRAVA__REDIRECT: process.env.STRAVA__REDIRECT,
  },
});

module.exports = nextConfig;
