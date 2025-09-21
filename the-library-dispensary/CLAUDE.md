# CLAUDE.md - The Library Dispensary Project Guide

## 🚨 CRITICAL CONTEXT FOR CLAUDE INSTANCES

This is a **production cannabis dispensary website** deployed at **thelibrarynj.com**. Any changes you make will affect a real business serving customers. Exercise extreme caution with deployments.

---

## 🏗️ PROJECT ARCHITECTURE OVERVIEW

### Tech Stack
- **Framework**: Next.js 15.4.6 using **Pages Router** (NOT App Router)
- **Language**: TypeScript with strict mode disabled for build
- **Styling**: Tailwind CSS with custom cannabis-themed color palette
- **Animations**: Framer Motion for smooth transitions
- **Deployment**: GitHub Pages with custom domain (static export)
- **Integrations**: Dutchie (cannabis e-commerce platform)

### Directory Structure
```
the-library-dispensary/ (repo root)
├── .github/workflows/deploy.yml   # GitHub Actions CI/CD
├── the-library-dispensary/        # ⚠️ ACTUAL APP DIRECTORY (nested!)
│   ├── pages/                     # Pages Router (active)
│   ├── app_old/                   # Old App Router (archived)
│   ├── components/                # React components
│   ├── styles/                    # Global CSS + Dutchie fixes
│   ├── public/                    # Static assets
│   └── [config files]
```

**⚠️ IMPORTANT**: The actual Next.js app is in a **nested subdirectory**. Always work in `/the-library-dispensary/the-library-dispensary/`

---

## 🚫 NON-OBVIOUS ARCHITECTURE DECISIONS

### 1. Pages Router, NOT App Router
- **Migration completed**: Sept 13, 2025 (Phase 2)
- **Old App Router preserved** in `app_old/` for reference
- **All new pages** must use Pages Router pattern in `pages/`
- **Use `_app.tsx`** for global providers and layout
- **SEO component** replaces App Router metadata exports

### 2. Static Export for GitHub Pages
```javascript
// next.config.js
{
  output: 'export',           // REQUIRED for GitHub Pages
  images: { unoptimized: true }, // REQUIRED - no Next.js Image optimization
  trailingSlash: true,         // Better URL handling for static sites
}
```
- **NO dynamic routes** - everything must be statically generatable
- **NO server-side features** - no API routes, no SSR, no ISR
- **Use standard `<img>` tags**, NOT `next/image`

### 3. Age Verification Compliance
- **MANDATORY**: 21+ age gate on EVERY page load
- **Session-based**: Uses `sessionStorage` (NOT cookies)
- **Provider wraps entire app** in `_app.tsx`
- **Grand Opening popup** shows after age verification (until Feb 1, 2025)
- **Legal requirement** for NJ cannabis dispensaries

### 4. Dutchie Integration (Cannabis E-commerce)
- **Embedded iframe** for product menu and ordering
- **Custom CSS fixes** in `styles/dutchie-fix.css` for modal visibility
- **Products page** at `/products` with full embed
- **Carousel component** for homepage product showcase
- **Retailer ID**: Required for Dutchie API calls
- **Height adjustments**: Desktop needs extra height for modals

### 5. Build & Deployment Quirks
```javascript
// ESLint and TypeScript errors are IGNORED in production
{
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
}
```
- **Why?**: Legacy code with type issues that work fine in production
- **Don't fix** unless specifically requested - it's intentional

### 6. Custom Color Palette
```css
/* Cannabis-themed brand colors */
--library-brown: #473729;
--library-gold: #967126;
--library-burgundy: #5B3043;
--library-teal: #3E5D58;
```

---

## 🔥 CRITICAL BUSINESS CONTEXT

### Legal Compliance Requirements
1. **Age Verification**: Must appear on EVERY visit (session-based)
2. **License Display**: NJ cannabis license must be visible
3. **FDA Disclaimers**: Required health warnings in footer
4. **Consumption Warnings**: No on-site consumption notices

### Business Information
- **Location**: 1-3 Washington St, West Orange, NJ 07052
- **Phone**: (973) 731-1199
- **Hours**: Check `Location.tsx` component for current hours
- **Instagram**: @thelibrarynj
- **Ordering**: Through Dutchie platform

### Grand Opening Campaign
- **Active until**: February 1, 2025
- **Popup shows** after age verification
- **One-time per session** using sessionStorage
- **Auto-disable** after Feb 1 (check date logic)

---

## ⚡ COMMON TASKS & GOTCHAS

### Adding a New Page
```typescript
// pages/new-page.tsx (NOT in app/ directory!)
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import FloatingParticles from '../components/FloatingParticles';
import FloatingIntakeButton from '../components/FloatingIntakeButton';

export default function NewPage() {
  return (
    <>
      <SEO
        title="New Page | The Library"
        description="Page description"
      />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        {/* Your content here */}
      </PageTransition>
      <Footer />
    </>
  );
}
```

### Updating Dutchie Integration
- **Retailer ID** is in `DutchieEmbed.tsx` and `DutchieCarousel.tsx`
- **Modal cutoff issues**: Adjust `paddingTop` and container height
- **Custom styles**: Add to `styles/dutchie-fix.css`
- **Testing**: Use `/products` page to test full embed

### Deploying Changes
1. **Push to main branch** → GitHub Actions auto-deploys
2. **Build locally first**: `npm run build` to catch errors
3. **Check artifact size**: GitHub Pages has limits
4. **CNAME file**: Must be in `public/` for custom domain
5. **Wait ~5 minutes** for GitHub Pages to update

### Development Workflow
```bash
cd the-library-dispensary/the-library-dispensary  # NESTED!
npm install
npm run dev  # Uses Turbopack for fast refresh
# Open http://localhost:3000
```

### Common Build Errors & Solutions

**"Module not found"**
- Check you're in the nested directory
- Use relative imports `../components`, not `@/components`

**"Image optimization error"**
- Use `<img>` tags, not `<Image>` from next/image
- Images must be unoptimized for static export

**"Dynamic route error"**
- No dynamic routes allowed with static export
- All routes must be known at build time

**"Hydration mismatch"**
- Usually from date/time rendering
- Use `useEffect` for client-only content

---

## 🛠️ TESTING APPROACH

### Current Testing
- **Manual testing** only - no automated tests yet
- **Test files** exist for documentation:
  - `test-age-verification.js` - Age gate flow
  - `test-grand-opening.html` - Popup testing
- **Browser testing** recommended on:
  - Chrome, Safari, Firefox
  - iPhone Safari, Android Chrome

### Key User Flows to Test
1. **Age Verification** → Must block access until verified
2. **Grand Opening Popup** → Shows once per session
3. **Dutchie Products** → Menu loads and scrolls properly
4. **Mobile Navigation** → Hamburger menu works
5. **Form Submissions** → Intake form and contacts

---

## 📝 DOCUMENTATION FILES

### Must-Read Documentation
- `README.md` - Project overview and setup
- `ARCHITECTURE.md` - Technical decisions explained
- `TROUBLESHOOTING.md` - Common issues and fixes
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `PAGES_ROUTER_PHASE2_COMPLETE.md` - Migration details

### Client-Facing Docs
- `CLIENT_PREVIEW.md` - For client reviews
- `CLIENT_INFORMATION_REQUEST.md` - Info gathering

---

## ⚠️ DANGER ZONES - DO NOT MODIFY

1. **Age verification logic** - Legal requirement, don't disable
2. **License numbers** - Must match official records
3. **FDA disclaimers** - Required by law
4. **Build configuration** - Carefully tested for GitHub Pages
5. **CNAME file** - Breaking this breaks the domain

---

## 🚀 QUICK COMMAND REFERENCE

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Building
npm run build        # Build for production
npm run export       # Build + prepare for GitHub Pages

# Testing
npm run lint         # Check code quality (often ignored)
npm run start        # Test production build locally

# Deployment (automatic via GitHub Actions)
git push origin main # Triggers auto-deployment
```

---

## 🔗 KEY INTEGRATIONS

### Dutchie (Cannabis E-commerce)
- **Purpose**: Product menu, online ordering, pickup scheduling
- **Documentation**: Internal to cannabis industry
- **Test environment**: Not available publicly
- **Support**: Through Dutchie partner portal

### Google Maps
- **Location**: `components/Location.tsx`
- **API Key**: Embedded in iframe URL (replace if needed)
- **Fallback**: Static map image if iframe fails

### Future Integrations (Planned)
- **Leafly**: Alternative ordering platform
- **Google Analytics**: User tracking
- **Sentry**: Error monitoring
- **Mailchimp**: Newsletter signups

---

## 💡 OPTIMIZATION NOTES

### Performance Considerations
- **Static generation** provides excellent performance
- **No server costs** with GitHub Pages hosting
- **CDN automatically** via GitHub's infrastructure
- **Bundle size** monitored but not critical for cannabis industry

### SEO Strategy
- **Local SEO** focus for "dispensary near me" searches
- **Schema markup** for local business
- **Sitemap.xml** in public folder
- **Meta tags** via SEO component on each page

---

## 🆘 WHEN THINGS GO WRONG

### Emergency Contacts
- **Domain issues**: Check GitHub Pages settings
- **Dutchie problems**: Contact Dutchie support
- **Legal/Compliance**: Defer to client's legal team
- **Build failures**: Check GitHub Actions logs

### Quick Rollback
```bash
# Find last working commit
git log --oneline

# Revert to previous version
git revert HEAD
git push origin main
```

### Production Monitoring
- **No automated monitoring** currently
- **Check manually** after deployments
- **Customer reports** are primary feedback

---

## 📅 MAINTENANCE SCHEDULE

### Regular Updates Needed
- **Hours of operation** - Check holidays/special events
- **Product specials** - Update hero/carousel
- **Legal disclaimers** - Annual review recommended
- **Dependencies** - Monthly security updates
- **Grand opening removal** - After Feb 1, 2025

---

## 🎯 PROJECT PHILOSOPHY

This is a **real business website** for a cannabis dispensary. Prioritize:

1. **Legal compliance** above all else
2. **Customer experience** for easy ordering
3. **Mobile-first** design (most users on phones)
4. **Fast loading** for impatient customers
5. **Clear information** about products and location

Remember: You're not just coding, you're helping a small business serve their community with a regulated product. Every decision matters.

---

*Last Updated: September 2025*
*Project Status: Production (Live at thelibrarynj.com)*
*Next Major Update: Remove grand opening popup (Feb 2025)*