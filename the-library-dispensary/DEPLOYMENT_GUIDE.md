# 🚀 Deployment Guide for The Library Landing Page

This guide will walk you through deploying The Library cannabis dispensary landing page to Vercel for client preview.

## ✅ Prerequisites Completed

- ✅ Next.js app builds successfully
- ✅ Git repository initialized
- ✅ All files committed to Git
- ✅ Production build tested locally

## 📋 Next Steps to Deploy

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `the-library-landing`
   - **Description**: "Pre-launch landing page for The Library cannabis dispensary"
   - **Visibility**: Select **Public** (required for Vercel free tier)
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

### Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git -C "/Users/charwinvanryckdegroot/Documents/GithubRepos/The Library Landing Page /the-library-dispensary" remote add origin https://github.com/YOUR_USERNAME/the-library-landing.git

# Push to GitHub
git -C "/Users/charwinvanryckdegroot/Documents/GithubRepos/The Library Landing Page /the-library-dispensary" branch -M main
git -C "/Users/charwinvanryckdegroot/Documents/GithubRepos/The Library Landing Page /the-library-dispensary" push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/sign in with GitHub
2. Click **"New Project"**
3. Import your `the-library-landing` repository
4. Vercel will auto-detect Next.js settings - just click **"Deploy"**
5. Wait 2-3 minutes for deployment

### Step 4: Get Your Live URL

Once deployed, Vercel will provide you with:
- Production URL: `https://the-library-landing.vercel.app`
- You can also set a custom domain later if needed

## 🔧 Troubleshooting

### If the build fails on Vercel:
1. Check the build logs for specific errors
2. Most common issues:
   - Missing dependencies → Check package.json
   - Build memory issues → Already configured in package.json
   - ESLint errors → Already fixed locally

### If you can't see your repository in Vercel:
1. Make sure you authorized Vercel to access your GitHub
2. Repository must be pushed to GitHub first
3. Try refreshing the Vercel import page

## 🔄 Future Updates

To update the site after making changes:

```bash
# Make your changes, then:
git add .
git commit -m "Update: description of changes"
git push

# Vercel will automatically deploy within 2-3 minutes
```

## 📱 What to Test After Deployment

1. Visit the production URL
2. Check on different devices (mobile, tablet, desktop)
3. Verify all pages load correctly
4. Test the age verification popup
5. Ensure logo and images display properly
6. Check that all "Coming Soon" messaging is correct

## 🎯 Ready to Deploy!

Follow the steps above to get your site live. The entire process should take about 10-15 minutes.

---

*Need help? The most common issue is forgetting to make the GitHub repository public. Vercel's free tier requires public repositories.*