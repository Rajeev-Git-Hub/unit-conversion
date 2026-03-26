import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/unit-conversion' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/unit-conversion' : '',
};

export default nextConfig;
