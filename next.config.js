/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  //output: "standalone",
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  env: {
    DOCKER_ENV: process.env.DOCKER_ENV,
    APP_ENV: process.env.APP_ENV,
  },
}

module.exports = nextConfig
