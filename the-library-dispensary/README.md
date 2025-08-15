# The Library Cannabis Dispensary Website

A production-ready, fully compliant website for The Library cannabis dispensary in West Orange, NJ. This Next.js application is deployed to GitHub Pages with a custom domain (thelibrarynj.com) and features a modern, responsive design with age verification and comprehensive compliance features.

## Key Features

- **Age Verification Gateway**: Mandatory 21+ age verification that appears on every page load
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **WCAG 2.1 AA Compliant**: Accessible to all users with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Complete meta tags, sitemap, robots.txt, and structured data
- **Smooth Animations**: Built with Framer Motion for professional interactions
- **Legal Compliance**: All required New Jersey cannabis dispensary disclaimers and warnings
- **Static Export**: Optimized for GitHub Pages deployment with custom domain support
- **Performance Optimized**: Fast loading with optimized images and minimal JavaScript

## Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript 5.x with strict mode
- **Styling**: Tailwind CSS 3.4.0 with custom color palette
- **Animations**: Framer Motion 12.x for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Inter & Playfair Display (Google Fonts)
- **Build Tool**: Turbopack for fast development builds
- **Deployment**: GitHub Pages with GitHub Actions CI/CD

## Color Palette

- Brown: `#473729`
- Gold: `#967126`
- Black: `#000000`
- White: `#FFFFFF`
- Burgundy: `#5B3043`
- Teal: `#3E5D58`

## Getting Started

### Prerequisites

- Node.js 20.x or higher (LTS recommended)
- npm 10.x or higher
- Git for version control

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/the-library-dispensary.git
cd the-library-dispensary/the-library-dispensary
```

**Note**: The project has a nested structure with the app in `the-library-dispensary/the-library-dispensary/`

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

For detailed setup instructions, see [SETUP.md](./SETUP.md)

## Available Scripts

- `npm run dev` - Start development server with Turbopack for fast refresh
- `npm run build` - Create optimized production build for static export
- `npm run start` - Start production server (for testing production build locally)
- `npm run lint` - Run ESLint to check code quality
- `npm run export` - Build and prepare for GitHub Pages deployment (includes CNAME copy)

## Deployment

### GitHub Pages (Current Production)

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

**Deployment URL**: https://thelibrarynj.com

**Process**:
1. Push changes to the `main` branch
2. GitHub Actions workflow automatically builds and deploys
3. Site is available at custom domain within minutes

For detailed deployment instructions, see [GITHUB_PAGES_DEPLOYMENT.md](../GITHUB_PAGES_DEPLOYMENT.md)

### Manual Build for Testing

```bash
# Build static export
npm run build

# Test production build locally
npm run start
```

### Important Notes
- The site uses static export (`output: 'export'` in next.config.ts)
- Images are unoptimized for static deployment compatibility
- CNAME file is automatically copied during build for custom domain

## Configuration

### Environment Variables

No environment variables are required for basic operation. The application uses hardcoded values appropriate for a static site.

### Production Configuration

To customize for production:

1. **Metadata**: Update `metadataBase` in `app/layout.tsx` (currently set to https://thelibrarynj.com)
2. **Google Maps**: Replace the embed URL in `components/Location.tsx` with your API key
3. **Analytics**: Add Google Analytics or other tracking scripts to `app/layout.tsx`
4. **Domain**: Update CNAME file in `public/` directory for custom domain

## Legal Compliance

This website includes all required legal disclaimers for cannabis dispensaries in New Jersey:

- Age verification (21+)
- Health warnings
- License display
- FDA disclaimers
- Consumption warnings

## Project Structure

```
the-library-dispensary/                 # Root repository directory
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Actions deployment workflow
├── the-library-dispensary/             # Next.js application directory
│   ├── app/                           # Next.js App Router
│   │   ├── layout.tsx                 # Root layout with metadata
│   │   ├── page.tsx                   # Main landing page
│   │   ├── globals.css                # Global styles and Tailwind imports
│   │   └── favicon.ico                # Site favicon
│   ├── components/                    # React components
│   │   ├── AgeVerification.tsx        # Age gate modal component
│   │   ├── AgeVerificationProvider.tsx # Context provider for age verification
│   │   ├── Header.tsx                 # Navigation header
│   │   ├── Hero.tsx                   # Hero section
│   │   ├── About.tsx                  # About section
│   │   ├── Services.tsx               # Services offerings
│   │   ├── FirstVisit.tsx             # First visit information
│   │   ├── Location.tsx               # Location and map
│   │   ├── Education.tsx              # Educational resources
│   │   └── Footer.tsx                 # Footer with legal info
│   ├── lib/
│   │   └── utils.ts                   # Utility functions (cn, getAssetPath)
│   ├── public/                        # Static assets
│   │   ├── CNAME                      # Custom domain configuration
│   │   ├── manifest.json              # PWA manifest
│   │   ├── robots.txt                 # SEO robots file
│   │   ├── sitemap.xml                # XML sitemap
│   │   └── the-library-logo.png       # Logo image
│   ├── next.config.ts                 # Next.js configuration
│   ├── tailwind.config.ts             # Tailwind CSS configuration
│   ├── tsconfig.json                  # TypeScript configuration
│   └── package.json                   # Dependencies and scripts
└── GITHUB_PAGES_DEPLOYMENT.md         # Deployment documentation
```

## Contact Information

- **Address**: 1-3 Washington St, West Orange, NJ 07052
- **Phone**: (973) 731-1199
- **Instagram**: @thelibrarynj
- **Order Online**: [Leafly](https://www.leafly.com/dispensary-info/the-library-nj)

## Recent Updates

### GitHub Actions Workflow Fix (2025-08-15)
- Fixed subdirectory structure issue in deployment workflow
- Updated working directory configuration for nested project structure
- Resolved asset path issues for custom domain deployment

### Custom Domain Configuration
- Removed basePath and assetPrefix from Next.js config
- Updated getAssetPath utility to work with custom domain
- Configured CNAME file for thelibrarynj.com

## Troubleshooting

For common issues and solutions, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

### Quick Fixes

- **Build fails locally**: Ensure Node.js 20.x and all dependencies are installed
- **Images not showing**: Check that paths use the getAssetPath utility
- **GitHub Actions fails**: Verify the nested directory structure is correct
- **404 on deployment**: Ensure .nojekyll file is created and trailing slashes are enabled

## License

This project is proprietary and confidential. All rights reserved by The Library Cannabis Dispensary.

## Support

For technical support or questions about this website, please contact the development team.

## Documentation

- [SETUP.md](./SETUP.md) - Detailed local development setup
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture and design decisions
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Deployment instructions
- [GITHUB_PAGES_DEPLOYMENT.md](../GITHUB_PAGES_DEPLOYMENT.md) - GitHub Pages specific deployment
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Common issues and solutions
- [CLIENT_PREVIEW.md](./CLIENT_PREVIEW.md) - Client review instructions
- [CLIENT_INFORMATION_REQUEST.md](./CLIENT_INFORMATION_REQUEST.md) - Information gathering template