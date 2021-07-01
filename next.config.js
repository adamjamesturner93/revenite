/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const path = require('path');
const runtimeCaching = require('next-pwa/cache');

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    mode: 'production',
    runtimeCaching,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});

module.exports = nextConfig;
