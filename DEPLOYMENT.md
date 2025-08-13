# GitHub Pages Deployment Guide

This guide explains how to automatically deploy your React app to GitHub Pages using GitHub Actions.

## Prerequisites

1. Your React app is hosted on GitHub
2. You have a custom domain configured
3. Cloudflare is set up for your domain

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. This will allow the workflow to deploy to GitHub Pages

### 2. Configure Repository Permissions

The workflow requires specific permissions to deploy to GitHub Pages. These are automatically configured in the workflow file:

- `contents: read` - Read repository contents
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - Use OIDC for secure authentication

### 3. Custom Domain Configuration

If you're using a custom domain:

1. In **Settings** → **Pages**, add your custom domain
2. Ensure your DNS is properly configured with Cloudflare
3. The workflow will automatically handle HTTPS configuration

### 4. Workflow Features

The GitHub Actions workflow (`/.github/workflows/deploy.yml`) automatically:

- ✅ Triggers on every push to the `main` branch
- ✅ Sets up Node.js 18 with npm caching
- ✅ Installs dependencies using `npm ci`
- ✅ Builds the React app using `npm run build`
- ✅ Deploys the `dist` folder to GitHub Pages
- ✅ Handles HTTPS and custom domain configuration
- ✅ Includes concurrency control to prevent deployment conflicts

### 5. Manual Deployment

You can also trigger deployments manually:

1. Go to **Actions** tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click **Run workflow** → **Run workflow**

## How It Works

1. **Build Job**: Runs on Ubuntu, builds your React app
2. **Deploy Job**: Deploys the built files to GitHub Pages
3. **Artifacts**: The built `dist` folder is uploaded and deployed
4. **Environment**: Uses the `github-pages` environment for proper configuration

## Troubleshooting

### Build Failures
- Check that all dependencies are properly listed in `package.json`
- Ensure the build script (`npm run build`) works locally
- Verify Node.js version compatibility

### Deployment Issues
- Ensure GitHub Pages is enabled in repository settings
- Check that the workflow has proper permissions
- Verify custom domain configuration if applicable

### HTTPS Issues
- GitHub Pages automatically provides SSL certificates
- Cloudflare should be configured to use "Full" or "Full (strict)" SSL mode
- The `.nojekyll` file ensures proper static file serving

## File Structure

```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow
public/
  .nojekyll            # Prevents Jekyll processing
```

## Security Notes

- The workflow uses OIDC (OpenID Connect) for secure authentication
- No secrets or tokens are stored in the workflow
- Permissions are scoped to only what's necessary for deployment

## Performance Optimizations

- Uses `npm ci` for faster, reliable dependency installation
- Implements concurrency control to prevent deployment conflicts
- Caches npm dependencies between workflow runs
- Sets `CI: false` to prevent build optimizations that might cause issues

## Support

If you encounter issues:

1. Check the **Actions** tab for workflow logs
2. Verify repository settings and permissions
3. Ensure your build process works locally
4. Check GitHub Pages status in repository settings
