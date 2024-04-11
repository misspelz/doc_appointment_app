/** @type {import('next').NextConfig} */

const HOST_NAME = process.env.NEXT_PUBLIC_CLOUDINARY;
const PROTOCOL = process.env.NEXT_PUBLIC_PROTOCOL;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${PROTOCOL}://${HOST_NAME}/api/:path*`,
      },
      {
        source: "/uploads/:path*",
        destination: `${PROTOCOL}://${HOST_NAME}/uploads/:path*`,
      },
      {
        source: "/_next/:path*",
        destination: `/_next/:path*`,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        hostname: `${HOST_NAME}`,
        protocol: `${PROTOCOL}`,
      },
    ],
  },
};

module.exports = nextConfig;
