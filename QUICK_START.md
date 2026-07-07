# Quick Start Guide - Deploy Your Portfolio to GitHub Pages

## 5-Minute Setup

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `<your-username>.github.io`
   - Example: `aiman-moulimai.github.io`
3. Make it **Public**
4. Click "Create repository"

### Step 2: Download Your Portfolio

1. In v0, click the three dots (⋯) in the top right
2. Select "Download ZIP"
3. Extract the ZIP file

### Step 3: Initialize Git (First Time Only)

```bash
# Navigate to your project folder
cd your-portfolio-folder

# Initialize git
git init
git add .
git commit -m "Initial portfolio commit"

# Add your GitHub repository
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository: `https://github.com/<your-username>/<your-username>.github.io`
2. Click **Settings**
3. Scroll to **Pages**
4. Under "Source", select "GitHub Actions"
5. GitHub Actions will automatically build and deploy!

### Step 5: Wait for Deployment

1. Click the **Actions** tab in your repository
2. Wait for the workflow to complete (green checkmark)
3. Your portfolio is now live at `https://<your-username>.github.io` 🎉

---

## Update Your Portfolio

### Edit Your Information

1. Edit `components/Header.tsx` - Change name and links
2. Edit `components/Hero.tsx` - Update your title and description
3. Edit `components/Apps.tsx` - Add or modify your applications
4. Edit `components/Contact.tsx` - Update contact methods
5. Edit `app/globals.css` - Customize colors

### Commit and Push Changes

```bash
git add .
git commit -m "Update portfolio information"
git push origin main
```

Your site will automatically rebuild and deploy within minutes!

---

## Customize Your Apps

Edit `components/Apps.tsx`:

```typescript
const apps: App[] = [
  {
    id: '1',
    name: 'Qawwam',
    description: 'Islamic app that helps friends connect...',
    icon: '🕌',
    color: 'from-blue-500 to-blue-600',
    status: 'In Development'
  },
  // Add your apps here
]
```

---

## Troubleshooting

### Site not showing?
- Wait 5-10 minutes for the first deployment
- Check the Actions tab for build errors
- Ensure GitHub Pages is set to "GitHub Actions"

### Old content still showing?
- Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear your browser cache

### Build errors?
- Check GitHub Actions workflow output
- Ensure all components are correctly imported

---

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions (automatic)

---

## Next Steps

1. ✅ Deploy your portfolio
2. 📝 Customize your information
3. 🎨 Adjust colors to match your brand
4. 📱 Test on mobile devices
5. 🔗 Share your portfolio!

---

Need help? Check the full documentation:
- [README.md](./README.md)
- [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

Happy building! 🚀
