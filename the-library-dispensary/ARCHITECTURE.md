# Architecture Documentation

## Overview

The Library Dispensary website is built as a modern, static Next.js application optimized for performance, accessibility, and compliance with cannabis dispensary regulations. The architecture emphasizes simplicity, maintainability, and fast deployment through GitHub Pages.

## Technology Decisions

### Core Framework: Next.js 15.4.6

**Why Next.js?**
- **App Router**: Modern routing system with improved performance
- **Static Export**: Perfect for GitHub Pages deployment
- **TypeScript Support**: Built-in TypeScript integration
- **SEO Optimization**: Excellent meta tag and sitemap support
- **React 19**: Latest React features and optimizations

### Styling: Tailwind CSS

**Why Tailwind?**
- **Utility-First**: Rapid development with inline styles
- **Consistent Design**: Enforces design system through configuration
- **Small Bundle**: Only includes used styles
- **Responsive**: Mobile-first responsive design utilities
- **Custom Theme**: Easy brand color integration

### Animation: Framer Motion

**Why Framer Motion?**
- **Declarative**: Simple, readable animation code
- **Performance**: Hardware-accelerated animations
- **Gesture Support**: Touch and scroll interactions
- **Spring Physics**: Natural-feeling animations

### Deployment: GitHub Pages

**Why GitHub Pages?**
- **Free Hosting**: No hosting costs for static sites
- **Custom Domain**: Full support for custom domains
- **CI/CD**: GitHub Actions integration
- **Version Control**: Automatic versioning with Git
- **SSL**: Free HTTPS certificates

## Application Architecture

### Directory Structure

```
the-library-dispensary/
├── Root Repository Files
│   ├── .github/workflows/deploy.yml  # CI/CD pipeline
│   ├── GITHUB_PAGES_DEPLOYMENT.md   # Deployment docs
│   └── CNAME                         # Root domain config
│
└── the-library-dispensary/           # Application root
    ├── app/                          # Next.js App Router
    ├── components/                   # React components
    ├── lib/                          # Utilities
    ├── public/                       # Static assets
    └── Configuration Files           # Config files
```

### Component Architecture

#### Component Hierarchy

```
app/layout.tsx (Root Layout)
└── app/page.tsx (Homepage)
    ├── AgeVerificationProvider
    │   └── AgeVerification (Modal)
    ├── Header (Navigation)
    ├── Hero (Landing Section)
    ├── About (Mission/Values)
    ├── Services (Offerings)
    ├── FirstVisit (New Customer Info)
    ├── Location (Map/Hours)
    ├── Education (Resources)
    └── Footer (Legal/Contact)
```

#### Component Design Principles

1. **Single Responsibility**: Each component has one clear purpose
2. **Composition**: Complex UI built from simple components
3. **Props Interface**: Clear TypeScript interfaces for all props
4. **Accessibility**: ARIA labels and semantic HTML
5. **Responsive**: Mobile-first responsive design

### State Management

#### Age Verification Context

```typescript
AgeVerificationProvider
├── State: isVerified (boolean)
├── Storage: sessionStorage
└── Distribution: React Context API
```

**Design Decision**: Session storage ensures age verification persists during session but requires re-verification on new sessions for compliance.

#### Component State

- **Local State**: useState for component-specific state
- **No Global Store**: Application simple enough to avoid Redux/Zustand
- **Effect Management**: useEffect for side effects and lifecycle

### Data Flow

```
User Visit → Age Verification Check
    ↓
Session Storage Check
    ↓
Show Modal (if not verified) → Store Verification
    ↓
Display Main Content → Navigation/Scrolling
    ↓
Section Components Render
```

## Key Design Patterns

### 1. Utility Functions (`lib/utils.ts`)

**cn() - Class Name Merger**
```typescript
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
- Merges Tailwind classes intelligently
- Handles conditional classes
- Prevents style conflicts

**getAssetPath() - Asset Path Helper**
```typescript
export function getAssetPath(path: string): string {
  return path; // No transformation needed for custom domain
}
```
- Centralizes asset path logic
- Easy to modify for different deployment scenarios
- Handles both development and production

### 2. Responsive Design Strategy

```css
/* Mobile First Approach */
base styles (mobile)
sm: 640px+  (landscape phones)
md: 768px+  (tablets)
lg: 1024px+ (desktops)
xl: 1280px+ (large screens)
```

### 3. Color System

```typescript
colors: {
  brown: '#473729',    // Primary brand color
  gold: '#967126',     // Accent color
  burgundy: '#5B3043', // Secondary color
  teal: '#3E5D58',     // Tertiary color
  black: '#000000',    // Text
  white: '#FFFFFF'     // Background
}
```

## Performance Optimizations

### Build-Time Optimizations

1. **Static Generation**: All pages pre-rendered at build time
2. **Image Optimization**: Disabled for GitHub Pages compatibility
3. **Code Splitting**: Automatic with Next.js
4. **Tree Shaking**: Removes unused code
5. **CSS Purging**: Tailwind removes unused styles

### Runtime Optimizations

1. **Lazy Loading**: Components loaded as needed
2. **Memoization**: Strategic use of React.memo
3. **Debouncing**: Scroll events debounced
4. **Animations**: Hardware-accelerated with Framer Motion

## Security Considerations

### Client-Side Security

1. **No Sensitive Data**: All data is public information
2. **Input Validation**: Age verification input validated
3. **XSS Protection**: React's built-in XSS protection
4. **HTTPS Only**: Enforced by GitHub Pages

### Compliance Features

1. **Age Verification**: Mandatory 21+ check
2. **Legal Disclaimers**: FDA and state requirements
3. **License Display**: Cannabis license number visible
4. **Warning Messages**: Health and consumption warnings

## Deployment Architecture

### GitHub Actions Workflow

```yaml
Build Process:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Build static export
5. Add .nojekyll file
6. Copy CNAME file
7. Upload artifacts
8. Deploy to GitHub Pages
```

### Static Export Configuration

```typescript
// next.config.ts
{
  output: 'export',        // Static HTML export
  images: {
    unoptimized: true      // Required for static export
  },
  trailingSlash: true      // Better URL handling
}
```

## Accessibility Architecture

### WCAG 2.1 AA Compliance

1. **Semantic HTML**: Proper heading hierarchy
2. **ARIA Labels**: Screen reader support
3. **Keyboard Navigation**: Full keyboard accessibility
4. **Focus Management**: Visible focus indicators
5. **Color Contrast**: AA compliant contrast ratios

### Responsive Features

1. **Touch Targets**: Minimum 44x44px
2. **Readable Fonts**: Minimum 16px base
3. **Scalable Layout**: Works 320px to 4K
4. **Orientation**: Supports portrait/landscape

## SEO Architecture

### Meta Tags Strategy

```typescript
metadata: {
  title: 'The Library | Premium Cannabis Dispensary',
  description: '...',
  keywords: [...],
  openGraph: {...},
  twitter: {...}
}
```

### Technical SEO

1. **Sitemap**: XML sitemap in public/
2. **Robots.txt**: Search engine directives
3. **Canonical URLs**: Proper URL structure
4. **Schema Markup**: Structured data for dispensary
5. **Performance**: Fast load times improve SEO

## Testing Strategy

### Current Testing

- **Build Testing**: Ensures successful builds
- **Visual Testing**: Manual cross-browser testing
- **Accessibility**: Lighthouse audits
- **Performance**: Core Web Vitals monitoring

### Recommended Testing Additions

1. **Unit Tests**: Jest + React Testing Library
2. **E2E Tests**: Playwright or Cypress
3. **Visual Regression**: Percy or Chromatic
4. **Accessibility**: axe-core automated testing

## Monitoring and Analytics

### Current Implementation

- **Error Tracking**: Console errors only
- **Performance**: Browser DevTools
- **Analytics**: None currently implemented

### Recommended Additions

1. **Google Analytics 4**: User behavior tracking
2. **Sentry**: Error tracking and monitoring
3. **Web Vitals**: Performance monitoring
4. **Hotjar**: User session recording

## Scalability Considerations

### Current Limitations

1. **Static Site**: No dynamic content
2. **No Backend**: All content hardcoded
3. **Manual Updates**: Requires code changes

### Future Enhancements

1. **CMS Integration**: Contentful or Strapi
2. **API Integration**: Dynamic inventory
3. **E-commerce**: Online ordering system
4. **User Accounts**: Customer profiles
5. **Newsletter**: Email subscription system

## Development Workflow

### Local Development

```
Developer → Local Changes → Hot Reload → Test
    ↓
Git Commit → Push to Branch
    ↓
Pull Request → Code Review → Merge to Main
    ↓
GitHub Actions → Build → Deploy → Production
```

### Code Quality

1. **TypeScript**: Strict mode enforced
2. **ESLint**: Code quality rules
3. **Prettier**: Code formatting
4. **Husky**: Pre-commit hooks (recommended)

## Maintenance Considerations

### Regular Updates

1. **Dependencies**: Monthly security updates
2. **Content**: As business information changes
3. **Legal**: Compliance requirement updates
4. **Performance**: Quarterly audits

### Documentation

1. **Code Comments**: Inline documentation
2. **README**: Project overview
3. **Component Docs**: Props and usage
4. **Architecture**: This document

## Decision Log

### Key Architectural Decisions

1. **Static Export over SSR**: Simpler deployment, no server costs
2. **Tailwind over CSS Modules**: Faster development, consistent styles
3. **Context over Redux**: Simpler for current needs
4. **GitHub Pages over Vercel**: Free hosting with custom domain
5. **Session Storage over Cookies**: Simpler compliance implementation

## Conclusion

The architecture prioritizes simplicity, performance, and compliance while maintaining flexibility for future enhancements. The static nature keeps costs low while providing excellent performance and reliability through GitHub's infrastructure.

---

Last Updated: 2025-08-15
Version: 1.0.0