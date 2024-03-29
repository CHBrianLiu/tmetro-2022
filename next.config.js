/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  images: {
    // for static pages export
    loader: "akamai",
    path: "",
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
});
