/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // For components/Image.js
    loader: "custom",
  },
}

module.exports = nextConfig
