/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "api.microlink.io",
          },
        ],
      },
};

export default nextConfig;
