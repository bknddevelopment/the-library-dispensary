# GitHub Pages Deployment Guide for thelibrarynj.com

This guide covers deploying The Library website to GitHub Pages with the custom domain thelibrarynj.com.

## Configuration Completed ✅

### 1. Next.js Configuration
- **Output**: Configured for static export (`output: 'export'`)
- **Base Path**: Removed (not needed for custom domain)
- **Asset Prefix**: Removed (not needed for custom domain)
- **Trailing Slash**: Enabled for better compatibility
- **Images**: Unoptimized for static export

### 2. CNAME File
- Created in `/public/CNAME` with content: `thelibrarynj.com`
- Will be copied to output directory during build

### 3. GitHub Actions Workflow
- Located at `.github/workflows/deploy.yml`
- Automatically builds and deploys on push to main branch
- Includes CNAME file in deployment

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment with custom domain"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow will run automatically on push

### 3. Configure Custom Domain
1. In **Settings** → **Pages**
2. Under "Custom domain", enter: `thelibrarynj.com`
3. Click "Save"
4. GitHub will perform a DNS check

### 4. DNS Configuration (Domain Provider Side)
Configure your domain's DNS with ONE of these options:

**Option A - Using CNAME (Recommended for www subdomain):**
- Type: CNAME
- Name: www
- Value: `[your-github-username].github.io`

**Option B - Using A Records (For apex domain):**
- Type: A
- Name: @ (or blank)
- Values:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

**For both www and apex domain:**
- Add both CNAME and A records
- In GitHub Pages settings, set primary domain preference

### 5. Wait for Deployment
- GitHub Actions will build and deploy automatically
- Check Actions tab for build status
- DNS propagation may take up to 24 hours
- GitHub will show a green checkmark when domain is verified

## Build Commands

### Local Build Test
```bash
cd the-library-dispensary
npm install
npm run build
```

### Manual Export
```bash
npm run export
```

## Troubleshooting

### Build Failures
- Check GitHub Actions logs
- Ensure all dependencies are in package.json
- Verify no absolute paths in code

### Domain Not Working
- Verify DNS records are correct
- Check GitHub Pages settings for DNS verification status
- Clear browser cache
- Try accessing with https:// prefix

### 404 Errors
- Ensure `.nojekyll` file is created (handled by workflow)
- Check that all routes have trailing slashes
- Verify CNAME file is in the output

## File Structure
```
the-library-dispensary/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── CNAME                   # Custom domain file
├── next.config.ts              # Next.js configuration
└── out/                        # Build output (after npm run build)
    └── CNAME                   # Copied during build
```

## Important Notes

1. **HTTPS**: GitHub Pages provides free SSL certificates. Your site will be available at `https://thelibrarynj.com`

2. **WWW Redirect**: If you want www.thelibrarynj.com to redirect to thelibrarynj.com (or vice versa), configure this in GitHub Pages settings after domain verification

3. **Build Cache**: The GitHub Actions workflow includes caching for faster builds

4. **Automatic Deployment**: Every push to the main branch triggers a new deployment

## Next Steps

1. Commit and push all changes
2. Monitor the GitHub Actions workflow
3. Configure DNS records with your domain provider
4. Wait for DNS propagation and GitHub verification
5. Test the live site at https://thelibrarynj.com

---

Last Updated: 2025-08-15