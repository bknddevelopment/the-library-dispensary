# Troubleshooting Guide

This guide provides solutions to common issues encountered during development, deployment, and maintenance of The Library Dispensary website.

## Table of Contents

1. [Development Issues](#development-issues)
2. [Build Issues](#build-issues)
3. [Deployment Issues](#deployment-issues)
4. [GitHub Pages Issues](#github-pages-issues)
5. [Component Issues](#component-issues)
6. [Styling Issues](#styling-issues)
7. [Performance Issues](#performance-issues)
8. [Browser Compatibility](#browser-compatibility)

## Development Issues

### Port 3000 Already in Use

**Error**: `Error: listen EADDRINUSE: address already in use :::3000`

**Solutions**:

1. Kill the process using port 3000:
```bash
# Find process
lsof -i :3000
# Kill process
kill -9 <PID>
```

2. Use a different port:
```bash
PORT=3001 npm run dev
```

### Module Not Found Errors

**Error**: `Module not found: Can't resolve '@/components/...'`

**Solutions**:

1. Check the import path:
```typescript
// Correct
import Header from '@/components/Header'
// Incorrect
import Header from '../components/Header'
```

2. Restart the dev server:
```bash
# Stop server (Ctrl+C)
npm run dev
```

3. Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

### TypeScript Errors

**Error**: `Type 'X' is not assignable to type 'Y'`

**Solutions**:

1. Check TypeScript version:
```bash
npx tsc --version
# Should be 5.x
```

2. Validate TypeScript configuration:
```bash
npx tsc --noEmit
```

3. Update TypeScript definitions:
```bash
npm install --save-dev @types/react@latest @types/react-dom@latest @types/node@latest
```

### Hot Reload Not Working

**Issue**: Changes not reflecting in browser

**Solutions**:

1. Check that Turbopack is running:
```bash
# Should show "started server on http://localhost:3000 (turbopack)"
npm run dev
```

2. Clear browser cache:
- Chrome: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
- Open DevTools → Network → Disable cache

3. Check file saving:
- Ensure your editor is saving files
- Check for .swp or backup files

## Build Issues

### Build Fails with Out of Memory Error

**Error**: `JavaScript heap out of memory`

**Solutions**:

1. Increase Node memory limit:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

2. Add to package.json:
```json
"scripts": {
  "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
}
```

### ESLint Errors During Build

**Error**: `ESLint: X problems (Y errors, Z warnings)`

**Solutions**:

1. Fix lint errors:
```bash
npm run lint
# Auto-fix some issues
npx eslint . --fix
```

2. Temporarily disable ESLint (not recommended):
```javascript
// next.config.ts
{
  eslint: {
    ignoreDuringBuilds: true
  }
}
```

### Static Export Errors

**Error**: `Error: Image Optimization using Next.js' default loader is not compatible with export`

**Solution**:

Ensure images are unoptimized in next.config.ts:
```typescript
{
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

### Missing Dependencies

**Error**: `Cannot find module 'package-name'`

**Solutions**:

1. Install missing package:
```bash
npm install package-name
```

2. Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Deployment Issues

### GitHub Actions Workflow Fails

**Error**: `Error: Cannot find module '/github/workspace/package.json'`

**Cause**: Incorrect working directory due to nested structure

**Solution**:

Ensure workflow has correct working directory:
```yaml
defaults:
  run:
    working-directory: ./the-library-dispensary
```

### Build Artifacts Not Found

**Error**: `Error: No artifacts were found`

**Solution**:

Check the upload path in workflow:
```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./the-library-dispensary/out
```

### Deployment Succeeds but Site Shows 404

**Causes and Solutions**:

1. **Missing .nojekyll file**:
```bash
# Add to build script
touch out/.nojekyll
```

2. **Incorrect output directory**:
```bash
# Verify out directory exists after build
ls -la out/
```

3. **GitHub Pages not enabled**:
- Go to Settings → Pages
- Source: GitHub Actions

## GitHub Pages Issues

### Custom Domain Not Working

**Issue**: Site not accessible at custom domain

**Solutions**:

1. **Verify DNS records**:
```bash
# Check A records
dig thelibrarynj.com
# Should show GitHub's IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

2. **Check CNAME file**:
```bash
# Verify CNAME in public directory
cat public/CNAME
# Should contain: thelibrarynj.com
```

3. **Wait for propagation**:
- DNS changes can take 24-48 hours
- Check status: https://www.whatsmydns.net/

### HTTPS Certificate Issues

**Issue**: SSL certificate warnings

**Solutions**:

1. Wait for automatic provisioning (up to 24 hours)
2. Force HTTPS in GitHub Pages settings
3. Clear browser cache and cookies

### Assets Not Loading (Images, Fonts)

**Issue**: 404 errors for static assets

**Solutions**:

1. **Use getAssetPath utility**:
```typescript
import { getAssetPath } from '@/lib/utils'

<img src={getAssetPath('/image.png')} alt="..." />
```

2. **Check file exists in public**:
```bash
ls -la public/
```

3. **Verify case sensitivity**:
- GitHub Pages is case-sensitive
- Ensure filename matches exactly

## Component Issues

### Age Verification Not Showing

**Issue**: Age verification modal not appearing

**Solutions**:

1. **Check session storage**:
```javascript
// Clear in browser console
sessionStorage.removeItem('ageVerified')
```

2. **Verify provider wrapping**:
```typescript
// In layout.tsx
<AgeVerificationProvider>
  {children}
</AgeVerificationProvider>
```

### Navigation Not Working

**Issue**: Smooth scroll not functioning

**Solutions**:

1. **Check section IDs**:
```typescript
// Each section needs an id
<section id="about">...</section>
```

2. **Verify scroll behavior**:
```css
/* In globals.css */
html {
  scroll-behavior: smooth;
}
```

### Mobile Menu Not Opening

**Issue**: Hamburger menu not responsive

**Solutions**:

1. **Check state management**:
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false)
```

2. **Verify click handler**:
```typescript
onClick={() => setIsMenuOpen(!isMenuOpen)}
```

## Styling Issues

### Tailwind Classes Not Applied

**Issue**: Styles not showing despite correct classes

**Solutions**:

1. **Check Tailwind config**:
```typescript
// tailwind.config.ts
content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}'
]
```

2. **Restart dev server** after config changes

3. **Check for typos** in class names

### Custom Colors Not Working

**Issue**: Brand colors not applying

**Solutions**:

1. **Verify color definition**:
```typescript
// tailwind.config.ts
colors: {
  brown: '#473729',
  gold: '#967126',
  // etc.
}
```

2. **Use correct syntax**:
```jsx
// Correct
className="bg-brown text-gold"
// Incorrect
className="bg-#473729"
```

### Responsive Design Issues

**Issue**: Layout broken on mobile

**Solutions**:

1. **Use responsive utilities**:
```jsx
className="px-4 md:px-8 lg:px-16"
```

2. **Test with device emulation**:
- Chrome DevTools → Toggle device toolbar
- Test at 320px, 768px, 1024px minimum

## Performance Issues

### Slow Initial Load

**Solutions**:

1. **Check bundle size**:
```bash
# Analyze bundle
npx @next/bundle-analyzer
```

2. **Optimize images**:
- Use WebP format
- Compress images under 200KB
- Lazy load below-fold images

3. **Remove unused dependencies**:
```bash
npx depcheck
```

### Animation Jank

**Issue**: Choppy animations

**Solutions**:

1. **Use transform instead of position**:
```typescript
// Good
animate={{ x: 100 }}
// Avoid
animate={{ left: '100px' }}
```

2. **Enable hardware acceleration**:
```css
.animated-element {
  will-change: transform;
}
```

## Browser Compatibility

### IE11 Support

**Note**: Next.js 13+ doesn't support IE11

**Solution**: Display upgrade message:
```javascript
if (window.navigator.userAgent.includes('MSIE')) {
  alert('Please upgrade to a modern browser')
}
```

### Safari Issues

**Common issues and fixes**:

1. **Flexbox gaps**:
```css
/* Fallback for older Safari */
.flex-container > * + * {
  margin-left: 1rem;
}
```

2. **Date inputs**:
```jsx
// Use text input with pattern
<input type="text" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
```

### Mobile Browser Issues

**Viewport issues**:
```html
<!-- In layout.tsx metadata -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
```

## Quick Debug Checklist

When encountering issues, check:

- [ ] Node version: `node --version` (should be 20.x)
- [ ] Dependencies installed: `npm install`
- [ ] Dev server running: `npm run dev`
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] No lint errors: `npm run lint`
- [ ] Browser console for errors
- [ ] Network tab for 404s
- [ ] GitHub Actions tab for deployment status

## Getting Additional Help

If issues persist:

1. **Check documentation**:
   - [README.md](./README.md)
   - [SETUP.md](./SETUP.md)
   - [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

2. **Review recent commits**:
```bash
git log --oneline -10
```

3. **Check GitHub Issues**:
   - Search existing issues
   - Create new issue with:
     - Error message
     - Steps to reproduce
     - Environment details

4. **Debug systematically**:
   - Isolate the problem
   - Test in different environments
   - Check recent changes
   - Revert if necessary

---

Last Updated: 2025-08-15  
Version: 1.0.0