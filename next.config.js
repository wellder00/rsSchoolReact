/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { API_URL: 'https://pokeapi.co/api/v2/' },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
