import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/the-library-dispensary',
  assetPrefix: '/the-library-dispensary',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
