# Signalith Tech Website

A modern, professional website for Signalith Tech – managed IT, cybersecurity, and AI automation services for small and mid-sized businesses.

## Site Structure

- **Home** (`/`) – Hero section, services overview, engagement models
- **Services** (`/services/`) – Detailed descriptions of all five services
- **Pricing** (`/pricing/`) – Transparent pricing for different engagement models
- **Team** (`/team/`) – Meet the specialists behind the service
- **Resources** (`/blog/`) – Guides, checklists, and best practices
- **Contact** (`/contact/`) – Assessment request form and contact information
- **Privacy Policy** (`/privacy/`) – Data handling and privacy practices
- **Terms of Service** (`/terms/`) – Legal terms and conditions

## Features

- Fully responsive design (mobile, tablet, desktop)
- Accessible color scheme with high contrast
- Smooth animations and interactions
- Clean, professional typography
- Fast-loading static HTML/CSS/JS

## Deployment

### GitHub Pages (Recommended)

1. Push this repository to GitHub
2. Go to **Settings > Pages**
3. Set **Source** to "Deploy from a branch"
4. Select **Branch: main** and **Folder: / (root)**
5. Click **Save**

Your site will be live at `https://johnsonbiz254.github.io/SignalithTech/`

### Custom Domain

If you own a custom domain:

1. Add a `CNAME` file to the repository root with your domain (e.g., `signalithtech.com`)
2. Update your domain's DNS settings to point to GitHub Pages
3. Enable HTTPS in Settings > Pages

### Alternative Hosting

- **Vercel**: Connect your GitHub repo, zero configuration needed
- **Netlify**: Same as Vercel, drag-and-drop deployment
- **AWS S3 + CloudFront**: For more control and custom setup

## Development

All pages are static HTML with shared CSS (`assets/css/style.css`) and JavaScript (`assets/js/main.js`).

### Adding New Content

1. Create a new folder (e.g., `/about/`)
2. Add an `index.html` file inside
3. Include the header, footer, and link to the shared stylesheet

### Styling

All styles are in `assets/css/style.css`. Customize colors in the `:root` section:

```css
:root {
  --navy: #152743;
  --gold: #B8863A;
  --slate: #4A5568;
  /* ... other colors */
}
```

## Contact & Support

- Email: hello@signalithtech.com
- Phone: (610) 555-1234
- Location: Philadelphia Metro, Pennsylvania

---

© 2026 Signalith Tech. All rights reserved.
