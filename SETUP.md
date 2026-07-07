# Portfolio Setup Instructions

Welcome! This guide will help you get your modern portfolio up and running.

## Project Structure Overview

```
📦 Your Portfolio
├── 📂 app/
│   ├── layout.tsx          ← Main layout (edit metadata here)
│   ├── page.tsx            ← Home page (combines all components)
│   └── globals.css         ← Global styles & animations
├── 📂 components/
│   ├── Header.tsx          ← Navigation bar (edit name here)
│   ├── Hero.tsx            ← Main intro section (edit title/bio here)
│   ├── Apps.tsx            ← Your projects showcase (add apps here)
│   ├── Contact.tsx         ← Contact section (edit contact methods)
│   └── Footer.tsx          ← Footer with links
├── 📂 .github/workflows/
│   └── deploy.yml          ← Automatic deployment configuration
├── 📂 public/              ← Static files (images, icons)
├── README.md               ← Full documentation
├── QUICK_START.md          ← 5-minute setup guide
└── GITHUB_PAGES_SETUP.md   ← Deployment guide
```

## Customization Guide

### 1. Update Your Name and Title

**File**: `components/Header.tsx` (line 9)
```tsx
<span className="font-bold text-gray-900 hidden sm:inline">Your Name</span>
```

**File**: `components/Hero.tsx` (line 17)
```tsx
<h1 className="text-5xl sm:text-7xl font-bold mb-6...">
  Your Name Here
</h1>
```

### 2. Update Your Email

**File**: `components/Header.tsx` (line 17)
```tsx
<a href="mailto:your-email@gmail.com" className="...">
```

**File**: `components/Hero.tsx` (line 26)
```tsx
<a href="mailto:your-email@gmail.com" className="...">
```

**File**: `components/Contact.tsx` (line 15)
```tsx
<a href="mailto:your-email@gmail.com" className="...">
```

Replace all occurrences of `aiman.moulimai@gmail.com` with your email.

### 3. Add Your Applications

**File**: `components/Apps.tsx` (lines 7-16)

Edit the `apps` array:

```typescript
const apps: App[] = [
  {
    id: '1',
    name: 'Your App Name',
    description: 'Brief description of what your app does',
    icon: '🎨', // Use any emoji
    color: 'from-blue-500 to-blue-600', // Tailwind gradient
    status: 'In Development' // or 'Launched', 'Beta', etc.
  },
  {
    id: '2',
    name: 'Another App',
    description: 'Another awesome project',
    icon: '🚀',
    color: 'from-green-500 to-green-600',
    status: 'Launched'
  },
  // Add more apps as needed
]
```

#### Available Emoji Icons
- 🎨 Design
- 🚀 Launch/Rocket
- 💻 Computer/Code
- 📱 Mobile
- 🌟 Star/Special
- 🎮 Gaming
- 🎵 Music
- 📊 Analytics
- 🔐 Security
- 🤖 AI/Automation
- 💬 Chat/Social
- 🌍 Web/Global

### 4. Customize Colors

**File**: `app/globals.css` (lines 2-9)

```css
:root {
  --color-primary-blue: #1f76d2;      /* Primary blue */
  --color-success-green: #34a853;     /* Success green */
  --color-danger-red: #ea4335;        /* Danger red */
  --color-accent-yellow: #fbbc04;     /* Accent yellow */
}
```

Change these hex colors to your preferred palette. Google Play colors are already set by default!

### 5. Update Contact Methods

**File**: `components/Contact.tsx` (lines 37-43)

Add/remove contact methods like GitHub, LinkedIn, Twitter, etc.:

```tsx
<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="...">
  {/* GitHub icon */}
</a>
```

### 6. Update Metadata (SEO)

**File**: `app/layout.tsx` (lines 6-14)

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your portfolio description for search engines',
  keywords: ['developer', 'portfolio', 'your-app-name'],
}
```

## Development

### Run Locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see your portfolio.

### Make Changes

1. Edit any file in `components/` or `app/`
2. Save the file
3. Changes appear instantly (hot reload)
4. Visit `http://localhost:3000` to see updates

## Build & Deploy

### Build for Production

```bash
pnpm build
```

Creates an optimized `out/` folder ready for GitHub Pages.

### Deploy to GitHub Pages

Follow [QUICK_START.md](./QUICK_START.md) for the fastest setup.

Or see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed instructions.

## Common Customizations

### Change the Logo Letter
**File**: `components/Header.tsx` (line 8)
```tsx
<span className="text-white font-bold text-lg">A</span>
```

**File**: `components/Footer.tsx` (line 13)
```tsx
<span className="text-white font-bold text-lg">A</span>
```

### Change Font Family
**File**: `app/layout.tsx` (top of file)
```tsx
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

Then use `className="font-sans"` to apply it.

### Add Social Links
**File**: `components/Footer.tsx` (lines 24-33)

Add new link with same pattern:
```tsx
<a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="...">
  {/* Twitter icon SVG */}
</a>
```

## Animations

The portfolio includes several smooth animations:

- **Fade In Up**: Elements fade and slide up on page load
- **Hover Effects**: Cards and buttons scale on hover
- **Gradient Text**: Name has animated gradient color
- **Float Animation**: Background elements gently float

To disable animations, remove animation classes from components.

## Performance Tips

1. ✅ Already optimized for GitHub Pages
2. ✅ Static site - very fast
3. ✅ Minimal dependencies
4. ✅ Mobile responsive

## Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
pnpm dev -- -p 3001
```

### Changes not showing
- Hard refresh browser: `Ctrl+Shift+R`
- Check terminal for errors
- Restart dev server: `Ctrl+C` then `pnpm dev`

### Build errors
```bash
# Clean and rebuild
rm -rf .next out
pnpm build
```

## Next Steps

1. ✅ Customize your information
2. ✅ Test locally with `pnpm dev`
3. ✅ Deploy using QUICK_START.md
4. ✅ Share your portfolio!

---

**Need more help?**
- Full guide: [README.md](./README.md)
- Quick deploy: [QUICK_START.md](./QUICK_START.md)
- GitHub Pages setup: [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

Good luck! 🚀
