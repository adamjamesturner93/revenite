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
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});

module.exports = nextConfig;
