/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["framerusercontent.com"] },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
  transpilePackages: ['three'],
};
module.exports = nextConfig;