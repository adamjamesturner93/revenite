const withPWA = require("next-pwa");
const path = require("path");

module.exports = withPWA({
  pwa: {
    dest: "public",
    mode: "production",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});
