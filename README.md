# Aiman Moulimai - Developer Portfolio

A modern, dynamic portfolio website showcasing my applications and projects. Built with Next.js and deployed on GitHub Pages.

## Features

✨ **Modern Design**
- Vibrant color scheme (Blue, Green, Red - inspired by Google Play)
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)
- Dark mode support ready

🎨 **Interactive Components**
- Animated hero section with gradient background
- Smooth scroll navigation
- Hover effects on app cards
- Interactive contact section

📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly navigation

🚀 **Performance**
- Fast page load times
- Optimized animations
- Static site generation for GitHub Pages

## Project Structure

```
├── app/
│   ├── layout.tsx          # Main layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with intro
│   ├── Apps.tsx            # Applications showcase
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets
├── GITHUB_PAGES_SETUP.md   # Deployment guide
└── README.md               # This file
```

## Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions

## My Applications

### 🕌 Qawwam
An Islamic app that helps friends connect and build community around shared faith and values.
- **Status**: In Development
- **Features**: Community connection, Faith-based platform

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/<your-username>/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To create a static export for GitHub Pages:

```bash
pnpm build
# or
npm run build
```

The `out` folder contains the static files ready for deployment.

## Deployment

### Deploy to GitHub Pages

Follow the detailed instructions in [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

Quick summary:
1. Create a GitHub repository named `<your-username>.github.io`
2. Update `next.config.mjs` to include `output: 'export'`
3. Build the project: `pnpm build`
4. Push the `out` folder contents to the repository
5. Your portfolio is now live at `https://<your-username>.github.io`

### Deploy to Vercel (Alternative)

```bash
vercel
```

## Customization

### Update Your Information
Edit `components/Header.tsx`, `components/Hero.tsx`, and other components to add your personal information.

### Add Your Applications
Edit `components/Apps.tsx` and add your projects to the `apps` array:

```typescript
const apps: App[] = [
  {
    id: '1',
    name: 'Your App Name',
    description: 'Description of your app',
    icon: '🎨', // Emoji or component
    color: 'from-blue-500 to-blue-600', // Tailwind gradient
    status: 'In Development'
  },
  // Add more apps here
]
```

### Customize Colors
Edit `app/globals.css` to change the primary colors:

```css
:root {
  --color-primary-blue: #1f76d2;
  --color-success-green: #34a853;
  --color-danger-red: #ea4335;
  /* ... more colors */
}
```

### Update Contact Information
Edit `components/Contact.tsx` and `components/Footer.tsx` to add your email and social links.

## Email Contact

For inquiries, reach out to: **aiman.moulimai@gmail.com**

## License

This project is open source and available under the MIT License.

## Author

**Aiman Moulimai** - Developer & Creator

- Portfolio: [https://<your-username>.github.io](https://<your-username>.github.io)
- Email: aiman.moulimai@gmail.com
- GitHub: [@yourusername](https://github.com/yourusername)

## Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

**Built with ❤️ using Next.js and Tailwind CSS**

Last Updated: 2026
