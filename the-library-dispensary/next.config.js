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
  },
  // Performance optimizations
  compress: true, // Enable compression
  poweredByHeader: false, // Remove X-Powered-By header
  // Optimize production build
  productionBrowserSourceMaps: false, // Disable source maps in production
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'], // Optimize specific packages
  },
  // Configure webpack for better optimization
  webpack: (config, { isServer, dev }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Replace react with preact in production for smaller bundle
      // Commented out as it may cause compatibility issues with some components
      // config.resolve.alias = {
      //   ...config.resolve.alias,
      //   'react': 'preact/compat',
      //   'react-dom': 'preact/compat',
      // };

      // Optimize bundle splitting
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20
            },
            // Common components chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true
            },
            // Separate large libraries
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/]framer-motion/,
              priority: 30,
              chunks: 'all'
            },
            react: {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom)/,
              priority: 40,
              chunks: 'all'
            }
          }
        },
        minimize: true,
        runtimeChunk: {
          name: 'runtime'
        }
      };
    }

    return config;
  }
};

module.exports = nextConfig;