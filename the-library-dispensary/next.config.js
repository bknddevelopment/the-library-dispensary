/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // No basePath or assetPrefix needed for custom domain
  images: {
    unoptimized: true
  },
  // Ensure trailing slashes for better compatibility
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;