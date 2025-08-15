# Deployment Guide for The Library Dispensary Website

This comprehensive guide covers deploying The Library cannabis dispensary website to GitHub Pages with a custom domain (thelibrarynj.com), as well as alternative deployment options.

## Current Production Deployment

**Live Site**: https://thelibrarynj.com  
**Deployment Method**: GitHub Pages with GitHub Actions  
**Custom Domain**: thelibrarynj.com  
**SSL Certificate**: Provided by GitHub Pages (Let's Encrypt)

## Prerequisites

### Required for Deployment

- ✅ Node.js 20.x or higher installed
- ✅ Git repository initialized and connected to GitHub
- ✅ GitHub account with repository access
- ✅ Domain name (for custom domain setup)
- ✅ DNS management access (for custom domain)

## GitHub Pages Deployment (Production)

### How It Works

The site uses GitHub Actions for continuous deployment:

1. **Push to main branch** triggers the workflow
2. **GitHub Actions** builds the static site
3. **Static files** are deployed to GitHub Pages
4. **Custom domain** serves the content via HTTPS

### Deployment Workflow

#### Automatic Deployment (Recommended)

Every push to the `main` branch automatically triggers deployment:

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push origin main

# GitHub Actions will automatically:
# 1. Build the site
# 2. Deploy to GitHub Pages
# 3. Update live site within 2-5 minutes
```

#### Manual Deployment

To manually trigger deployment:

1. Go to GitHub repository
2. Click **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow** → **Run workflow**

### GitHub Pages Configuration

#### 1. Enable GitHub Pages

```
Repository Settings → Pages → Source
└── Select: GitHub Actions
```

#### 2. Custom Domain Setup

```
Repository Settings → Pages → Custom domain
└── Enter: thelibrarynj.com
└── Click: Save
└── Wait for DNS check (green checkmark)
```

#### 3. DNS Configuration

Configure your domain provider's DNS:

**For apex domain (thelibrarynj.com):**
```
Type: A
Name: @ or blank
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain (www.thelibrarynj.com):**
```
Type: CNAME
Name: www
Value: [your-github-username].github.io
```

### Project Structure for Deployment

**Important**: The project has a nested structure that must be maintained:

```
the-library-dispensary/              # Repository root
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions workflow
├── CNAME                           # Root domain file (backup)
├── GITHUB_PAGES_DEPLOYMENT.md      # Deployment documentation
└── the-library-dispensary/         # Application directory
    ├── app/                        # Next.js application
    ├── components/                 # React components
    ├── public/
    │   └── CNAME                   # Primary domain file
    ├── next.config.ts              # Static export config
    └── package.json                # Dependencies

## Alternative Deployment Options

### Vercel Deployment

**Advantages**: Zero-config deployment, preview deployments, analytics

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd the-library-dispensary/the-library-dispensary
vercel

# Follow prompts to deploy
```

### Netlify Deployment

**Advantages**: Form handling, serverless functions, split testing

1. Connect GitHub repository to Netlify
2. Build settings:
   - Base directory: `the-library-dispensary`
   - Build command: `npm run build`
   - Publish directory: `out`

### Self-Hosted Deployment

**For static hosting (Apache/Nginx):**

```bash
# Build the static site
cd the-library-dispensary
npm run build

# Copy the out/ directory to your web server
scp -r out/* user@server:/var/www/html/
```

## Build Configuration

### Next.js Configuration (`next.config.ts`)

```typescript
{
  output: 'export',          // Static HTML export
  images: {
    unoptimized: true        // Required for static hosting
  },
  trailingSlash: true        // Better URL compatibility
}
```

### Package.json Scripts

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "export": "next build && touch out/.nojekyll && cp public/CNAME out/CNAME"
}
```

## Deployment Checklist

### Pre-Deployment

- [ ] Run `npm run lint` - No errors
- [ ] Run `npm run build` - Builds successfully
- [ ] Test locally with `npm run start`
- [ ] Verify all links work
- [ ] Check responsive design
- [ ] Validate age verification works
- [ ] Review legal disclaimers

### Post-Deployment

- [ ] Visit live site
- [ ] Test age verification modal
- [ ] Check all images load
- [ ] Verify HTTPS works
- [ ] Test on mobile devices
- [ ] Check Google PageSpeed Insights
- [ ] Verify meta tags with social media debuggers

## Monitoring Deployment

### GitHub Actions Status

1. Go to repository on GitHub
2. Click **Actions** tab
3. View workflow runs
4. Click on a run for detailed logs

**Workflow States:**
- 🟡 Yellow: In progress
- ✅ Green: Successful deployment
- ❌ Red: Failed (check logs)

### Deployment Logs

```bash
# View recent workflow runs
gh run list --workflow=deploy.yml

# View specific run details
gh run view [run-id]

# Watch live deployment
gh run watch
```

### Verifying Deployment

```bash
# Check if site is accessible
curl -I https://thelibrarynj.com

# Verify HTTPS certificate
openssl s_client -connect thelibrarynj.com:443 -servername thelibrarynj.com

# Check DNS propagation
dig thelibrarynj.com
nslookup thelibrarynj.com
```

## Troubleshooting Deployment Issues

### Build Failures

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Fix: Update package-lock.json"
git push
```

**Error: Build exceeded time limit**
```yaml
# Increase timeout in .github/workflows/deploy.yml
timeout-minutes: 30
```

### GitHub Pages Issues

**404 Error on deployment**
- Verify `.nojekyll` file exists in output
- Check CNAME file is in `public/` directory
- Ensure `trailingSlash: true` in next.config.ts

**Custom domain not working**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check GitHub Pages settings for verification
- Clear browser cache and try again

**HTTPS not working**
- GitHub Pages automatically provisions SSL
- May take up to 24 hours after domain verification
- Force HTTPS in GitHub Pages settings once available

### Subdirectory Structure Issues

**Workflow can't find package.json**
```yaml
# Ensure working-directory is set in workflow
defaults:
  run:
    working-directory: ./the-library-dispensary
```

**Assets not loading**
- Verify getAssetPath utility is used
- Check that images are in `public/` directory
- Ensure no basePath in next.config.ts for custom domain

## Rollback Procedures

### Quick Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard [commit-hash]
git push --force origin main
```

### Manual Rollback via GitHub

1. Go to **Actions** tab
2. Find last successful deployment
3. Click **Re-run all jobs**

## Performance Optimization

### Pre-Deployment Optimization

```bash
# Analyze bundle size
npx next-bundle-analyzer

# Check for unused dependencies
npx depcheck

# Optimize images
npx next-optimized-images
```

### Post-Deployment Testing

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/
4. **Lighthouse**: Chrome DevTools → Lighthouse

## Security Considerations

### GitHub Pages Security

- ✅ HTTPS enforced automatically
- ✅ No server-side code execution
- ✅ DDoS protection via GitHub's infrastructure
- ⚠️ All code is public (don't commit secrets)

### Best Practices

1. **Never commit**:
   - API keys
   - Passwords
   - Private business data
   - Customer information

2. **Use GitHub Secrets** for sensitive data:
   ```yaml
   env:
     API_KEY: ${{ secrets.API_KEY }}
   ```

3. **Regular Updates**:
   ```bash
   # Check for vulnerabilities
   npm audit
   
   # Update dependencies
   npm update
   ```

## Maintenance

### Regular Tasks

**Weekly**:
- Check deployment status
- Monitor site availability
- Review error logs

**Monthly**:
- Update dependencies
- Review and update content
- Check SSL certificate status

**Quarterly**:
- Performance audit
- Security audit
- SEO review

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

Last Updated: 2025-08-15  
Version: 2.0.0