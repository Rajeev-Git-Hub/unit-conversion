import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/unit-conversion',
  assetPrefix: '/unit-conversion',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
