# Portfolio Website Deployment Guide

This guide covers how to deploy your portfolio website for free and set up a custom domain.

## Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest option for React/Vite apps with automatic deployments and free custom domains.

### Steps:

1. **Build your project locally first** (to test):
   ```bash
   cd portfolio-website
   pnpm install
   pnpm build
   ```

2. **Push your code to GitHub** (if not already):
   - Create a repository on GitHub
   - Push your code

3. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Vite
     - **Root Directory**: `portfolio-website` (or leave blank if repo root)
     - **Build Command**: `pnpm build` (or `cd portfolio-website && pnpm build` if repo root)
     - **Output Directory**: `dist/public`
     - **Install Command**: `pnpm install`
   - Click "Deploy"

4. **Custom Domain Setup**:
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Click "Add Domain"
   - Enter your domain (e.g., `chelseaportfolio.com`)
   - Follow Vercel's DNS instructions:
     - Add a CNAME record pointing to `cname.vercel-dns.com`
     - Or add an A record (Vercel will provide the IP)
   - SSL certificate is automatically provisioned (free)

### Free Domain Options:
- **Freenom** (.tk, .ml, .ga, .cf domains - free but less reliable)
- **Namecheap** (often has $0.99 first-year deals)
- **Google Domains/Cloud Identity** (now Squarespace Domains)
- **Name.com** (check for promotions)

## Option 2: Netlify

Similar to Vercel, great for static sites.

### Steps:

1. **Build your project**:
   ```bash
   cd portfolio-website
   pnpm install
   pnpm build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure:
     - **Base directory**: `portfolio-website`
     - **Build command**: `pnpm build`
     - **Publish directory**: `dist/public`
   - Click "Deploy site"

3. **Custom Domain**:
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Follow DNS setup instructions
   - Free SSL automatically enabled

## Option 3: GitHub Pages

Free hosting directly from GitHub, but requires a bit more setup.

### Steps:

1. **Install gh-pages package**:
   ```bash
   cd portfolio-website
   pnpm add -D gh-pages
   ```

2. **Update package.json**:
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "pnpm build",
     "deploy": "gh-pages -d dist/public"
   }
   ```

3. **Deploy**:
   ```bash
   pnpm deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Custom domain: Add your domain in repo settings

## Option 4: Cloudflare Pages

Free, fast, and great performance.

### Steps:

1. **Push to GitHub** (if not already)

2. **Deploy to Cloudflare Pages**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Workers & Pages → Create application → Pages
   - Connect to Git → Select your repository
   - Configure:
     - **Framework preset**: Vite
     - **Build command**: `pnpm build`
     - **Build output directory**: `dist/public`
   - Click "Save and Deploy"

3. **Custom Domain**:
   - Go to your Pages project → Custom domains
   - Add your domain
   - Update DNS records as instructed

## Recommended: Vercel Setup

Since you're using Vite + React, **Vercel is the easiest option**. Here's a quick setup:

### Quick Vercel Deploy:

1. **Create `vercel.json`** (optional, for better configuration):
   ```json
   {
     "buildCommand": "pnpm build",
     "outputDirectory": "dist/public",
     "installCommand": "pnpm install",
     "framework": "vite"
   }
   ```

2. **Deploy**:
   - Push code to GitHub
   - Import to Vercel
   - Deploy!

### Custom Domain Tips:

1. **Buy a domain** from:
   - Namecheap (~$10-15/year)
   - Google Domains/Squarespace (~$12/year)
   - Cloudflare Registrar (at-cost pricing, ~$8-10/year)

2. **Free subdomain options**:
   - Vercel provides: `yourproject.vercel.app` (free)
   - Netlify provides: `yourproject.netlify.app` (free)
   - These work great for testing before buying a custom domain

3. **DNS Configuration**:
   - For Vercel: Add CNAME record → `cname.vercel-dns.com`
   - SSL is automatic and free on all platforms

## Notes:

- Your Express server (`server/index.ts`) is only needed for local development. For production, Vercel/Netlify handle static file serving automatically.
- All platforms provide free SSL certificates
- All platforms support automatic deployments on git push
- Free tiers are generous for portfolio sites (usually 100GB bandwidth/month)

## Troubleshooting:

- **Build fails**: Make sure `pnpm install` runs successfully locally first
- **404 errors**: Ensure `dist/public` is set as output directory
- **Routing issues**: Vercel/Netlify handle client-side routing automatically with their config

