# Jovia Foundation Website

A modern, accessible, and responsive website for the Jovia Foundation, built with Next.js 16, TypeScript, and Tailwind CSS 4.

## 🎨 Design System

The website features a **centralized design system** with:

- **Brand Colors**: Warm, approachable foundation colors inspired by humanitarian work
  - Primary: Warm red-orange (#d94430)
  - Secondary: Trust blue (#2c5282)
  - Accent: Hope amber (#f59e0b)
  - Success: Growth green (#10b981)

- **Typography**: Inter font family for optimal readability and accessibility
  - Professional, clean, and WCAG 2.1 compliant
  - Responsive type scale that adapts to all screen sizes

- **Components**: Reusable, accessible components with smooth animations
  - Header with transparent-to-solid scroll effect
  - Footer with comprehensive sitemap
  - Cards, buttons, and form elements with consistent styling

## 📄 Pages

The website includes **4 core pages**:

1. **Home** (`/`)
   - Hero section with compelling call-to-action
   - Impact statistics showcase
   - Three core pillars: Education, Healthcare, Community Development
   - CTA banner for engagement

2. **About** (`/about`)
   - Foundation story and history
   - Mission & Vision statements
   - Core values
   - Leadership team section

3. **Resources** (`/resources`)
   - Annual reports download section
   - Research publications
   - Media resources and brand assets

4. **Contact** (`/contact`)
   - Contact information (email, phone, address)
   - Interactive contact form
   - Social media links
   - Ways to get involved

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎯 Features

- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **Accessibility**: WCAG 2.1 compliant with semantic HTML and ARIA labels
- ✅ **Performance**: Optimized with Next.js 16 and lazy loading
- ✅ **SEO Ready**: Proper meta tags, semantic structure, and sitemap
- ✅ **Animations**: Smooth, respectful animations with reduced motion support
- ✅ **Type Safe**: Built with TypeScript for reliability
- ✅ **Modern Stack**: Next.js 16, React 19, Tailwind CSS 4

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)

## 📁 Project Structure

```
jovia-foundation/
├── app/
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page with form
│   ├── resources/page.tsx      # Resources & downloads
│   ├── globals.css             # Centralized design system
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   └── layout/
│       ├── Header.tsx          # Site header & navigation
│       └── Footer.tsx          # Site footer
├── public/                     # Static assets
└── README.md
```

## 🎨 Design Inspiration

Inspired by leading humanitarian websites like:
- Liliane Fonds (lilianefonds.org) - Accessibility-first design
- Asset Manager project - Centralized color system approach
- Modern foundation websites - Clean, professional aesthetics

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

All rights reserved © 2026 Jovia Foundation

## 🤝 Contributing

This is a private foundation website. For inquiries, please contact the development team.

---

Built with ❤️ for creating positive change in communities worldwide.
