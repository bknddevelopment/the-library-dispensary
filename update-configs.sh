#!/bin/bash

# Create updated next.config.ts
cat > the-library-dispensary/next.config.ts << 'EOF'
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
EOF

# Update package.json to add export script
cd the-library-dispensary
npm pkg set scripts.export="next build && touch out/.nojekyll"
cd ..

echo "Configuration files updated!"