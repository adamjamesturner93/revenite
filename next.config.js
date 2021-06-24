/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const path = require('path');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    mode: 'production',
    runtimeCaching,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
