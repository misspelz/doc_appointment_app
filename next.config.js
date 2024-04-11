/** @type {import('next').NextConfig} */

// config.js
const HOST_NAME = process.env.NEXT_PUBLIC_CLOUDINARY;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: `${HOST_NAME}`,
      },
    ],
  },
};

module.exports = nextConfig;
