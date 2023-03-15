/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'https://paracuando-team1.academlo.tech/api/v1' // development api
        : 'https://paracuando-team1.academlo.tech/api/v1', // production api
  },
  reactStrictMode: true,
  
};

module.exports = nextConfig;
