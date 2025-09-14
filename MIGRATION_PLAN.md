# Next.js App Router to Pages Router Migration Plan
## For GitHub Pages Deployment

### Project: The Library Dispensary Website
### Date: 2025-01-13
### Objective: Convert Next.js 15 App Router to Pages Router for GitHub Pages compatibility

---

## 📋 Executive Summary

The current Next.js application uses App Router which is incompatible with GitHub Pages static hosting. This document outlines a comprehensive migration plan to convert the application to Pages Router architecture, ensuring full functionality on GitHub Pages.

**Current State:** Next.js 15 with App Router (not working on GitHub Pages)
**Target State:** Next.js with Pages Router (fully static, GitHub Pages compatible)
**Estimated Timeline:** 16-22 hours
**Risk Level:** Medium (with mitigation strategies in place)

---

## 🎯 Success Criteria

- [ ] All pages load without "Loading..." state
- [ ] Full functionality preserved from original site
- [ ] Performance score >90 on Lighthouse
- [ ] Zero console errors in production
- [ ] All interactive components working
- [ ] Proper SEO metadata on all pages
- [ ] Works perfectly on GitHub Pages subdomain

---

## 📊 Phase Breakdown

### Phase 1: Setup & Configuration (2-3 hours)

#### Tasks:
1. **Create Pages Directory Structure**
   ```
   /pages
     ├── index.tsx (home)
     ├── about.tsx
     ├── services.tsx
     ├── location.tsx
     ├── first-visit.tsx
     ├── art-collection.tsx
     ├── education.tsx
     ├── education-pdf.tsx
     ├── _app.tsx
     └── _document.tsx
   ```

2. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     },
     trailingSlash: true,
     // Remove app directory config
   }
   ```

3. **Install Required Dependencies**
   - Verify all packages are Pages Router compatible
   - Remove App Router specific packages

#### Validation:
- [ ] Pages directory created
- [ ] Configuration updated
- [ ] Build runs without errors

---

### Phase 2: Layout Migration (2-3 hours)

#### Tasks:

1. **Convert app/layout.tsx to pages/_app.tsx**
   ```typescript
   // pages/_app.tsx
   import type { AppProps } from 'next/app'
   import { Inter } from 'next/font/google'
   import '../app/globals.css'

   const inter = Inter({ subsets: ['latin'] })

   export default function App({ Component, pageProps }: AppProps) {
     return (
       <main className={inter.className}>
         <Component {...pageProps} />
       </main>
     )
   }
   ```

2. **Create pages/_document.tsx**
   ```typescript
   import { Html, Head, Main, NextScript } from 'next/document'

   export default function Document() {
     return (
       <Html lang="en" className="scroll-smooth">
         <Head />
         <body className="antialiased">
           <Main />
           <NextScript />
         </body>
       </Html>
     )
   }
   ```

3. **Migrate Metadata System**
   - Replace metadata API with next/head
   - Create reusable SEO component
   - Set up default meta tags

#### Validation:
- [ ] Layout renders correctly
- [ ] Styles applied globally
- [ ] Fonts loading properly
- [ ] Background components working

---

### Phase 3: Page Conversion (4-6 hours)

#### Pages to Convert:

1. **Home Page (app/page.tsx → pages/index.tsx)**
   ```typescript
   import Head from 'next/head'
   import Hero from '../components/Hero'
   import Services from '../components/Services'
   // ... other imports

   export default function Home() {
     return (
       <>
         <Head>
           <title>The Library | Premier Cannabis Dispensary</title>
           <meta name="description" content="..." />
         </Head>
         <Header />
         <Hero />
         <Services />
         {/* ... other components */}
       </>
     )
   }
   ```

2. **About Page**
   - Convert metadata
   - Update imports
   - Ensure static export

3. **Services Page**
   - Convert metadata
   - Update component imports

4. **Location Page**
   - Convert metadata
   - Static map implementation

5. **First Visit Page**
   - Convert metadata
   - Update form handling

6. **Art Collection Page**
   - Convert metadata
   - Update gallery components

7. **Education Page**
   - Convert metadata
   - Fix flipbook component

8. **Education PDF Page**
   - Convert metadata
   - Update PDF viewer

#### Validation for Each Page:
- [ ] Page renders correctly
- [ ] Metadata appears in head
- [ ] All components load
- [ ] No console errors

---

### Phase 4: Component Updates (3-4 hours)

#### Components Requiring Updates:

**Remove "use client" directive from:**
1. Header.tsx
2. Hero.tsx
3. Services.tsx
4. About.tsx
5. Education.tsx
6. FirstVisit.tsx
7. AgeVerification.tsx
8. FloatingParticles.tsx
9. PremiumBackground.tsx
10. PageTransition.tsx
11. FloatingIntakeButton.tsx
12. BookSpineNav.tsx
13. LibraryCard.tsx
14. ArtCollection.tsx
15. EducationFlipBook.tsx
16. EducationFlipbookHTML.tsx
17. PDFFlipbook.tsx
18. All animation components
19. All UI components

#### Component Migration Strategy:
```typescript
// Before (App Router)
'use client'
import { usePathname } from 'next/navigation'

// After (Pages Router)
// Remove 'use client'
import { useRouter } from 'next/router'
```

#### Validation:
- [ ] All components render server-side
- [ ] Interactive features still work
- [ ] No hydration errors

---

### Phase 5: Navigation & Routing (2-3 hours)

#### Tasks:

1. **Update Link Components**
   ```typescript
   // Update all instances
   import Link from 'next/link'
   <Link href="/about">About</Link>
   ```

2. **Replace Navigation Hooks**
   ```typescript
   // Before
   import { usePathname } from 'next/navigation'
   const pathname = usePathname()

   // After
   import { useRouter } from 'next/router'
   const router = useRouter()
   const pathname = router.pathname
   ```

3. **Update Header Component**
   - Fix navigation highlighting
   - Update mobile menu
   - Ensure proper routing

4. **Update BookSpineNav**
   - Fix route detection
   - Update animations

#### Validation:
- [ ] All links work correctly
- [ ] Active states display properly
- [ ] Mobile navigation functions
- [ ] No 404 errors

---

### Phase 6: Testing & Validation (2-3 hours)

#### Local Testing Protocol:

1. **Build Static Export**
   ```bash
   npm run build
   ```

2. **Test Locally**
   ```bash
   npx serve out -p 3000
   ```

3. **Testing Checklist:**
   - [ ] All pages load
   - [ ] Navigation works
   - [ ] Forms submit correctly
   - [ ] Animations play
   - [ ] Images load
   - [ ] Responsive design works
   - [ ] SEO metadata present
   - [ ] No console errors

4. **Performance Testing**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Verify load times

5. **Cross-browser Testing**
   - Chrome
   - Firefox
   - Safari
   - Edge

---

### Phase 7: Deployment (1-2 hours)

#### Deployment Steps:

1. **Final Build**
   ```bash
   npm run build
   ```

2. **Path Fixes for GitHub Pages**
   ```bash
   # Fix absolute paths to relative
   # Update asset paths
   # Add .nojekyll file
   ```

3. **Push to GitHub**
   ```bash
   git add -A
   git commit -m "Complete Pages Router migration"
   git push
   ```

4. **Verify Deployment**
   - Check all pages load
   - Test all functionality
   - Verify no console errors
   - Check performance

#### Post-Deployment Checklist:
- [ ] Site loads without "Loading..." state
- [ ] All pages accessible
- [ ] Forms work
- [ ] Images display
- [ ] SEO working
- [ ] Performance acceptable

---

## 🚨 Risk Mitigation

### Identified Risks & Mitigation:

1. **Risk:** Complex components may not work without client-side features
   - **Mitigation:** Implement progressive enhancement
   - **Fallback:** Create static alternatives

2. **Risk:** Dynamic routes might break
   - **Mitigation:** Use getStaticPaths for all dynamic routes
   - **Fallback:** Convert to static pages

3. **Risk:** Third-party libraries incompatible
   - **Mitigation:** Find Pages Router compatible alternatives
   - **Fallback:** Remove non-essential features

4. **Risk:** SEO degradation
   - **Mitigation:** Implement comprehensive meta tags
   - **Fallback:** Use static sitemap

5. **Risk:** Performance issues
   - **Mitigation:** Optimize bundle size and lazy load
   - **Fallback:** Remove heavy components

---

## 📝 Technical Notes

### Key Differences to Remember:

| App Router | Pages Router |
|------------|--------------|
| app/layout.tsx | pages/_app.tsx |
| app/page.tsx | pages/index.tsx |
| Metadata API | next/head |
| "use client" | Not needed |
| usePathname | useRouter |
| Dynamic by default | Static by default |

### Static Export Requirements:
- No getServerSideProps
- No API routes (or move to external service)
- No dynamic routes without getStaticPaths
- No image optimization (use unoptimized)
- No middleware
- No ISR (Incremental Static Regeneration)

---

## 📚 Resources

- [Next.js Pages Router Documentation](https://nextjs.org/docs/pages)
- [Static Export Guide](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)

---

## ✅ Final Checklist

Before considering migration complete:

- [ ] All pages converted to Pages Router
- [ ] All components updated
- [ ] Navigation working
- [ ] Static export successful
- [ ] Local testing passed
- [ ] Deployed to GitHub Pages
- [ ] Live site working perfectly
- [ ] Performance acceptable
- [ ] Client approved

---

## 📅 Timeline

| Phase | Estimated Time | Dependencies |
|-------|---------------|--------------|
| Phase 1 | 2-3 hours | None |
| Phase 2 | 2-3 hours | Phase 1 |
| Phase 3 | 4-6 hours | Phase 2 |
| Phase 4 | 3-4 hours | Phase 3 |
| Phase 5 | 2-3 hours | Phase 4 |
| Phase 6 | 2-3 hours | Phase 5 |
| Phase 7 | 1-2 hours | Phase 6 |
| **Total** | **16-22 hours** | |

---

## 🚀 Getting Started

1. Review this document thoroughly
2. Set up a new branch: `feature/pages-router-migration`
3. Start with Phase 1
4. Test after each phase
5. Document any issues or deviations
6. Get approval before Phase 7 deployment

---

**Document Version:** 1.0
**Created:** 2025-01-13
**Status:** Ready for Implementation