# GitHub Pages Deployment Guide

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it: `<your-username>.github.io` (for personal portfolio)
   - Or any name like `portfolio` if you want it at `<your-username>.github.io/portfolio`

### 2. Build for Static Export

For GitHub Pages, we need to export as static HTML. Update your `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

### 3. Build the Project

```bash
npm run build
# or
pnpm build
# or
yarn build
```

This creates an `out` folder with static files.

### 4. Deploy to GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

Then push to GitHub and GitHub Actions will automatically deploy!

#### Option B: Manual Deployment

1. Commit your changes:
```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

2. Build the project:
```bash
pnpm build
```

3. Deploy the `out` folder to GitHub Pages using:
   - GitHub CLI: `gh repo deploy --branch gh-pages --dir out`
   - Or manually upload the `out` folder contents

### 5. Configure GitHub Pages Settings

1. Go to your repository settings
2. Navigate to "Pages"
3. Select "Deploy from a branch"
4. Choose the `gh-pages` branch
5. Save

### 6. Access Your Portfolio

Your portfolio will be available at:
- `https://<your-username>.github.io` (if repo is named `<your-username>.github.io`)
- `https://<your-username>.github.io/<repo-name>` (if repo has a different name)

## Troubleshooting

- **Page not showing**: Ensure the `out` folder is deployed, not the entire project
- **Styling issues**: GitHub Pages requires proper base URL configuration
- **Images not loading**: Check that image paths are relative and images use standard formats

## Updating Your Portfolio

1. Make changes to your components
2. Push to GitHub
3. GitHub Actions automatically builds and deploys (if using workflow)
4. Your site updates within minutes

Enjoy your new portfolio! 🚀
