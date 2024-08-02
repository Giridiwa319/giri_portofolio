/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
          {
            hostname: "api.microlink.io",
          },
        ],
      },
};

export default nextConfig;
