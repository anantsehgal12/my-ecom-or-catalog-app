/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.zyrosite.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
