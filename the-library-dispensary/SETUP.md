# Local Development Setup Guide

This guide provides comprehensive instructions for setting up The Library Dispensary website for local development.

## Prerequisites

### Required Software

1. **Node.js** (v20.x or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`
   - Should output: v20.x.x or higher

2. **npm** (v10.x or higher)
   - Comes with Node.js
   - Verify installation: `npm --version`
   - Should output: 10.x.x or higher

3. **Git**
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: `git --version`

4. **Code Editor** (Recommended)
   - [Visual Studio Code](https://code.visualstudio.com/)
   - Install recommended extensions:
     - ESLint
     - Prettier
     - Tailwind CSS IntelliSense
     - TypeScript and JavaScript Language Features

## Step-by-Step Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/[your-username]/the-library-dispensary.git

# Navigate to the project directory
cd the-library-dispensary

# IMPORTANT: The app is in a subdirectory
cd the-library-dispensary
```

**Note**: The project has a nested structure:
- Repository root: `the-library-dispensary/`
- Application root: `the-library-dispensary/the-library-dispensary/`

### 2. Install Dependencies

```bash
# Ensure you're in the application directory
pwd
# Should show: .../the-library-dispensary/the-library-dispensary

# Install all dependencies
npm install

# If you encounter issues, try:
npm install --legacy-peer-deps
```

### 3. Verify Installation

```bash
# Check that all key dependencies are installed
npm list next react react-dom

# Run a quick lint check
npm run lint
```

### 4. Start Development Server

```bash
# Start the development server with Turbopack
npm run dev

# The server will start on http://localhost:3000
```

### 5. Open in Browser

- Navigate to [http://localhost:3000](http://localhost:3000)
- You should see the age verification modal
- After accepting, you'll see the main landing page

## Development Workflow

### File Structure Overview

```
the-library-dispensary/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout and metadata
│   ├── page.tsx          # Homepage component
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── AgeVerification.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── ...
├── lib/                  # Utility functions
│   └── utils.ts
├── public/              # Static assets
│   ├── CNAME           # Custom domain config
│   └── the-library-logo.png
└── next.config.ts      # Next.js configuration
```

### Making Changes

1. **Components**: Edit files in `components/` directory
2. **Styles**: Modify Tailwind classes inline or update `globals.css`
3. **Content**: Update text directly in component files
4. **Images**: Add to `public/` directory and reference with getAssetPath utility

### Hot Reload

The development server supports hot module replacement:
- Changes to components update instantly
- Style changes reflect immediately
- No need to restart the server for most changes

## Available Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Building
npm run build        # Create production build
npm run export       # Build and prepare for GitHub Pages

# Quality Checks
npm run lint         # Run ESLint

# Production Testing
npm run start        # Start production server locally
```

## Configuration Files

### TypeScript Configuration (`tsconfig.json`)

- Strict mode enabled for type safety
- Path alias `@/*` configured for clean imports
- Target ES2017 for broad compatibility

### Tailwind Configuration (`tailwind.config.ts`)

Custom colors defined:
```typescript
colors: {
  brown: '#473729',
  gold: '#967126',
  burgundy: '#5B3043',
  teal: '#3E5D58'
}
```

### Next.js Configuration (`next.config.ts`)

- Static export enabled for GitHub Pages
- Images unoptimized for static deployment
- Trailing slashes enabled for better routing

## Environment Setup

### VS Code Settings

Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### Browser Tools

Recommended browser extensions for development:
- React Developer Tools
- Redux DevTools (if using state management)
- Lighthouse (for performance testing)

## Common Development Tasks

### Adding a New Component

1. Create file in `components/` directory:
```tsx
// components/NewComponent.tsx
export default function NewComponent() {
  return (
    <div className="p-4">
      <h2>New Component</h2>
    </div>
  )
}
```

2. Import and use in `app/page.tsx`:
```tsx
import NewComponent from '@/components/NewComponent'

// Add to the page
<NewComponent />
```

### Updating Colors

Edit `tailwind.config.ts` to modify the color palette:
```typescript
theme: {
  extend: {
    colors: {
      'custom-color': '#hexcode'
    }
  }
}
```

### Adding Images

1. Place image in `public/` directory
2. Use in component:
```tsx
import { getAssetPath } from '@/lib/utils'

<img 
  src={getAssetPath('/image-name.png')} 
  alt="Description"
/>
```

## Testing

### Local Production Build

Test the production build before deployment:

```bash
# Build the application
npm run build

# Start production server
npm run start

# Visit http://localhost:3000
```

### Checking Build Output

After building, check the `out/` directory:
```bash
# List build output
ls -la out/

# Verify CNAME file was copied
cat out/CNAME
```

## Troubleshooting Development Issues

### Port Already in Use

If port 3000 is already in use:
```bash
# Run on a different port
PORT=3001 npm run dev
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Failures

```bash
# Clear Next.js cache
rm -rf .next out
npm run build
```

### TypeScript Errors

```bash
# Check for TypeScript errors
npx tsc --noEmit
```

## Performance Optimization Tips

1. **Use Turbopack**: Already configured with `npm run dev`
2. **Component Optimization**: Use React.memo for expensive components
3. **Image Optimization**: Keep images under 200KB when possible
4. **Code Splitting**: Next.js handles this automatically

## Security Considerations

1. **Dependencies**: Regularly update dependencies
   ```bash
   npm audit
   npm audit fix
   ```

2. **Environment Variables**: Never commit sensitive data
3. **API Keys**: Use environment variables for any API keys

## Getting Help

1. Check the [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) guide
2. Review the [Next.js Documentation](https://nextjs.org/docs)
3. Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
4. Contact the development team for project-specific questions

## Next Steps

After setting up your development environment:

1. Review [ARCHITECTURE.md](./ARCHITECTURE.md) to understand the codebase
2. Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for deployment process
3. Read component documentation in the code comments
4. Start making changes and testing locally

---

Last Updated: 2025-08-15