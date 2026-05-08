const { default: next } = require('next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['http://192.168.100.63'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  turbopack: {
    resolve: {
      alias: {
        'three$': 'three',
        three: 'three',
      },
    },
  },
};

module.exports = nextConfig;
