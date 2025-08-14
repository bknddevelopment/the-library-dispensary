import type { NextConfig } from "next";

// Check if we're in production (GitHub Pages) or development
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Only use basePath and assetPrefix in production
  basePath: isProd ? '/the-library-dispensary' : '',
  assetPrefix: isProd ? '/the-library-dispensary' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
