# Jovia Foundation - Design System Documentation

## 🎨 Color System

### Primary Colors
Our color palette is inspired by humanitarian and foundation work - warm, accessible, and trustworthy.

```css
/* Primary - Warm Red-Orange (Compassion & Action) */
--foundation-primary: #d94430;
--foundation-primary-hover: #c23920;
--foundation-primary-light: #fff5f3;
--foundation-primary-glow: rgba(217, 68, 48, 0.15);

/* Secondary - Trust Blue (Reliability & Professionalism) */
--foundation-secondary: #2c5282;
--foundation-secondary-hover: #1e3a5f;
--foundation-secondary-light: #eef4fb;

/* Accent - Hope Amber (Optimism & Growth) */
--foundation-accent: #f59e0b;
--foundation-accent-light: #fffbf0;

/* Success - Growth Green (Impact & Achievement) */
--foundation-green: #10b981;
--foundation-green-light: #f0fdf9;
```

### Neutral Colors
```css
/* Backgrounds & Surfaces */
--background: #ffffff;
--surface: #fafafa;
--surface-raised: #f5f5f5;
--surface-muted: #e5e7eb;

/* Text Colors */
--foreground: #111827;              /* Headings & primary text */
--foreground-muted: #4b5563;        /* Body text */
--foreground-subtle: #9ca3af;       /* Secondary information */
--foreground-inverted: #ffffff;     /* Text on dark backgrounds */
```

### Borders
```css
--border-custom: #e5e7eb;          /* Default borders */
--border-subtle: #f3f4f6;          /* Subtle dividers */
--border-hover: #d1d5db;           /* Hover states */
--border-focus: #d94430;           /* Focus/active states */
```

## 🔤 Typography

### Font Family
**Manrope-Variable** - A modern, high-clarity variable geometric sans-serif font tailored for humanitarian and community impact.

```typescript
font-family: 'Manrope-Variable', 'Manrope', -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

### Type Scale
```css
/* Headings */
h1: clamp(2rem, 5vw, 3.5rem);      /* 32px - 56px */
h2: clamp(1.75rem, 4vw, 2.75rem);  /* 28px - 44px */
h3: clamp(1.5rem, 3vw, 2rem);      /* 24px - 32px */
h4: clamp(1.25rem, 2.5vw, 1.5rem); /* 20px - 24px */

/* Body */
p: 1rem (16px);                     /* Base font size */
line-height: 1.7;                   /* Comfortable reading */
```

### Font Weights
```css
300 - Light (rarely used)
400 - Regular (body text)
500 - Medium (emphasis)
600 - Semi-bold (sub-headings)
700 - Bold (headings)
800 - Extra-bold (hero titles)
```

## 🎭 Shadows

```css
/* Soft shadow for cards */
--shadow-soft: 0 2px 12px -2px rgba(0, 0, 0, 0.06);

/* Card elevation */
--shadow-card: 0 4px 20px -4px rgba(0, 0, 0, 0.08);

/* Large modals/overlays */
--shadow-large: 0 10px 40px -8px rgba(0, 0, 0, 0.12);

/* Primary color glow */
--shadow-primary-glow: 0 8px 24px -4px rgba(217, 68, 48, 0.2);
```

## 🎬 Animations

### Standard Transitions
```css
.transition-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Keyframe Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Slide In Left */
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Gentle Float */
@keyframes floatGentle {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

## 🧩 Component Patterns

### Button Styles

#### Primary Button
```tsx
<button className="px-8 py-4 bg-[var(--foundation-primary)] text-white 
                   font-semibold rounded-full hover:bg-[var(--foundation-primary-hover)] 
                   shadow-lg hover:shadow-primary-glow transition-all duration-300">
  Get Involved
</button>
```

#### Secondary Button
```tsx
<button className="px-8 py-4 border-2 border-[var(--border-custom)] 
                   text-[var(--foreground)] font-semibold rounded-full 
                   hover:border-[var(--foundation-primary)] 
                   hover:text-[var(--foundation-primary)] transition-all duration-300">
  Learn More
</button>
```

### Card Component
```tsx
<div className="p-8 bg-white border border-[var(--border-custom)] 
                rounded-2xl hover:border-[var(--foundation-primary)] 
                hover:shadow-lg transition-all duration-300">
  {/* Card content */}
</div>
```

### Input Fields
```tsx
<input className="w-full px-4 py-3 bg-white border border-[var(--border-custom)] 
                  rounded-lg focus:outline-none focus:ring-2 
                  focus:ring-[var(--foundation-primary)] 
                  focus:border-transparent transition-all" />
```

## 📐 Spacing System

### Layout Spacing
```css
/* Section padding */
py-16 lg:py-24      /* Vertical: 4rem/6rem mobile, 6rem/9.6rem desktop */

/* Container */
max-w-7xl mx-auto   /* Max-width with auto horizontal margins */
px-4 sm:px-6 lg:px-8 /* Responsive horizontal padding */

/* Component gaps */
gap-8               /* Medium spacing */
gap-12 lg:gap-16    /* Large spacing */
space-y-6           /* Vertical stack spacing */
```

## ♿ Accessibility

### Focus States
All interactive elements have visible focus indicators:
```css
:focus-visible {
  outline: 2px solid var(--foundation-primary);
  outline-offset: 2px;
}
```

### Reduced Motion
Respects user motion preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Include ARIA labels for icon buttons
- Ensure sufficient color contrast (WCAG 2.1 AA)

## 📱 Responsive Breakpoints

```css
/* Tailwind default breakpoints */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
```

## 🎯 Usage Examples

### Hero Section Pattern
```tsx
<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 
                    overflow-hidden hero-gradient-canvas">
  <div className="hero-mesh-glow" />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Hero content */}
  </div>
</section>
```

### Icon with Background
```tsx
<div className="w-16 h-16 bg-[var(--foundation-primary-light)] 
                text-[var(--foundation-primary)] rounded-xl 
                flex items-center justify-center">
  <svg className="w-8 h-8">...</svg>
</div>
```

### Text Gradient
```tsx
<span className="text-gradient-primary">
  Compassion & Action
</span>
```

## 🔧 Customization

To customize colors, edit `app/globals.css`:

```css
:root {
  --foundation-primary: #your-color;
  /* Update other variables as needed */
}
```

All colors use CSS custom properties for easy theming and maintenance.

## 📚 Design Inspiration

- **Liliane Fonds** - Accessibility-first humanitarian design
- **Asset Manager Project** - Centralized CSS variable system
- **Modern Foundations** - Clean, professional aesthetics

## 🎨 Brand Voice

- **Warm & Compassionate**: Use friendly, approachable language
- **Professional**: Maintain credibility with clear, concise copy
- **Action-Oriented**: Encourage engagement with strong CTAs
- **Inclusive**: Ensure all content is accessible and welcoming

---

*This design system ensures consistency, accessibility, and maintainability across the entire Jovia Foundation website.*
