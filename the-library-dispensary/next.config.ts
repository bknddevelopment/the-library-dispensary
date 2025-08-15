import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // No basePath or assetPrefix needed for custom domain
  images: {
    unoptimized: true
  },
  // Ensure trailing slashes for better compatibility
  trailingSlash: true
};

export default nextConfig;
