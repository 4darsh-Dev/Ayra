# AYRA Frontend Technical Documentation

> **Project:** AYRA Marketing Website  
> **Framework:** Next.js 14+ (App Router)  
> **Target:** Static landing page showcasing AYRA AI companion

---

## 1. Project Overview

### 1.1 Objective
Build a visually stunning, static marketing website that introduces AYRA - a private, agentic AI companion. The site must convey intelligence, privacy, and emotional awareness through design.

### 1.2 Tech Stack
```json
{
  "framework": "Next.js 14+ (App Router)",
  "styling": "Tailwind CSS 3.4+",
  "components": "shadcn/ui + Radix UI",
  "animations": "Framer Motion",
  "icons": "Lucide React",
  "fonts": "Inter, Sora (via next/font)",
  "deployment": "Vercel",
  "language": "TypeScript"
}
```

### 1.3 Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile: iOS Safari 14+, Chrome Android

---

## 2. Design System

### 2.1 Color Palette

```typescript
// tailwind.config.ts
export const colors = {
  // Primary
  neural: '#0A84FF',      // Primary brand, CTAs
  space: '#0D0D0F',       // Main background
  slate: '#1A1B23',       // Cards, surfaces
  
  // Accents
  violet: '#8B5CF6',      // Agent features
  teal: '#14B8A6',        // Memory/data
  amber: '#F59E0B',       // Emotional/energy
  
  // Semantic
  success: '#10B981',
  warning: '#F97316',
  error: '#EF4444',
  
  // Text
  'text-primary': '#F8FAFC',
  'text-secondary': '#94A3B8',
  'text-tertiary': '#64748B'
}
```

### 2.2 Typography

```typescript
// Font configuration
import { Inter, Sora } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

// Typography scale
export const typography = {
  'display-xl': 'text-6xl font-bold leading-tight tracking-tight',  // Hero
  'display-lg': 'text-5xl font-bold leading-tight tracking-tight',
  'h1': 'text-4xl font-semibold leading-tight',
  'h2': 'text-3xl font-semibold leading-snug',
  'h3': 'text-2xl font-semibold leading-snug',
  'body-lg': 'text-lg leading-relaxed',
  'body-md': 'text-base leading-relaxed',
  'label': 'text-xs font-medium uppercase tracking-wider'
}
```

### 2.3 Spacing & Layout

```typescript
// Container widths
export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

// Spacing scale (use Tailwind defaults)
// p-4 (16px), p-6 (24px), p-8 (32px), p-12 (48px), p-16 (64px), p-24 (96px)

// Border radius
export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px'
}
```

### 2.4 Shadows & Effects

```css
/* globals.css */
:root {
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6);
  
  --glow-primary: 0 0 20px rgba(10, 132, 255, 0.4);
  --glow-accent: 0 0 20px rgba(139, 92, 246, 0.4);
}

/* Glass morphism utility */
.glass {
  background: rgba(26, 27, 35, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

---

## 3. Project Structure

```
ayra-website/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   └── fonts.ts                # Font configuration
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Overview.tsx
│   │   ├── Features.tsx
│   │   ├── Architecture.tsx
│   │   ├── Agents.tsx
│   │   ├── Memory.tsx
│   │   ├── Privacy.tsx
│   │   ├── Roadmap.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   ├── button.tsx          # shadcn/ui components
│   │   ├── card.tsx
│   │   └── ...
│   └── animations/
│       ├── FadeIn.tsx
│       └── ParticleBackground.tsx
├── lib/
│   └── utils.ts                # Helper functions
├── public/
│   ├── images/
│   └── icons/
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. Page Sections Implementation

### 4.1 Hero Section

**Requirements:**
- Full viewport height (min-h-screen)
- Animated gradient background
- Glass morphism card with main content
- Particle/neural network animation background
- Two CTA buttons (primary + secondary)

**Component Structure:**
```tsx
<section className="relative min-h-screen flex items-center justify-center">
  <ParticleBackground />
  <div className="container mx-auto px-6 text-center z-10">
    <h1 className="display-xl gradient-text">AYRA</h1>
    <p className="body-lg mt-6">Your Private AI Companion</p>
    <div className="flex gap-4 justify-center mt-8">
      <Button variant="primary">Get Started</Button>
      <Button variant="outline">Learn More</Button>
    </div>
  </div>
</section>
```

**Animations:**
- Fade in from bottom (stagger: title → subtitle → buttons)
- Gradient text animation (background-clip: text)
- Particle movement (use canvas or three.js)

---

### 4.2 Overview Section

**Layout:** Two-column (60/40 split, stack on mobile)

```tsx
<section className="py-24 bg-space">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
      <div className="lg:col-span-3">
        <span className="label text-neural">Vision</span>
        <h2 className="h1 mt-4">Not a chatbot. A companion.</h2>
        <p className="body-lg mt-6 text-text-secondary">
          AYRA is a private, emotionally-aware AI system...
        </p>
      </div>
      <div className="lg:col-span-2">
        {/* Architecture diagram or illustration */}
      </div>
    </div>
  </div>
</section>
```

---

### 4.3 Features Grid

**Layout:** 3-column grid (responsive: 1 → 2 → 3 columns)

```tsx
const features = [
  { icon: Brain, title: 'Private Intelligence', color: 'neural' },
  { icon: Cpu, title: 'Agentic Control', color: 'violet' },
  { icon: Database, title: 'Memory Architecture', color: 'teal' },
  { icon: Mic, title: 'Voice Interface', color: 'amber' },
  { icon: Lock, title: 'Privacy First', color: 'success' },
  { icon: Heart, title: 'Emotional Aware', color: 'error' }
]

<section className="py-24 bg-slate">
  <div className="container mx-auto px-6">
    <h2 className="h1 text-center">Core Capabilities</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  </div>
</section>
```

**FeatureCard Component:**
```tsx
<div className="glass rounded-xl p-8 hover:shadow-lg transition group">
  <Icon className="w-12 h-12 text-{color}" />
  <h3 className="h3 mt-6">{title}</h3>
  <p className="body-md text-text-secondary mt-4">{description}</p>
</div>
```

**Hover Effects:**
- Lift (translateY: -4px)
- Border glow (box-shadow with feature color)
- Icon scale (scale: 1.1)

---

### 4.4 Architecture Visualization

**Requirements:**
- Full-width section
- Layered visualization showing: Frontend → Backend → Agents → Memory
- Color-coded layers
- Interactive hover states

**Implementation:**
```tsx
<section className="py-24 bg-space relative overflow-hidden">
  <div className="container mx-auto px-6">
    <h2 className="h1 text-center">System Architecture</h2>
    <div className="mt-16 relative">
      <ArchitectureDiagram />
    </div>
  </div>
</section>
```

**Diagram Notes:**
- Use CSS grid or absolute positioning for layers
- Animated connecting lines (SVG)
- Hover: Highlight layer + connections
- Mobile: Stack vertically with scroll

---

### 4.5 Agent Ecosystem

**Layout:** Horizontal scrollable cards or carousel

```tsx
const agents = [
  { name: 'Planner', icon: Target, color: 'neural' },
  { name: 'Emotional', icon: Heart, color: 'amber' },
  { name: 'Research', icon: Search, color: 'teal' },
  { name: 'Execution', icon: Zap, color: 'violet' },
  { name: 'Reflection', icon: Eye, color: 'neural' },
  { name: 'Guardian', icon: Shield, color: 'success' }
]

<section className="py-24 bg-slate">
  <div className="container mx-auto px-6">
    <h2 className="h1 text-center">Multi-Agent Intelligence</h2>
    <div className="flex gap-6 mt-12 overflow-x-auto pb-6">
      {agents.map((agent) => (
        <AgentCard key={agent.name} {...agent} />
      ))}
    </div>
  </div>
</section>
```

**AgentCard:**
- Min-width: 300px
- Glass morphism background
- Glow effect in agent color
- Icon animation on hover

---

### 4.6 Memory Tiers

**Layout:** Vertical layers or pyramid visualization

```tsx
const memoryTiers = [
  { name: 'Hot Memory', icon: Flame, color: 'error', speed: 'ms' },
  { name: 'Warm Memory', icon: Cloud, color: 'amber', speed: 'seconds' },
  { name: 'Cold Memory', icon: Snowflake, color: 'teal', speed: 'minutes' },
  { name: 'Long-term Memory', icon: Brain, color: 'violet', speed: 'semantic' }
]

<section className="py-24 bg-space">
  <div className="container max-w-4xl mx-auto px-6">
    <h2 className="h1 text-center">Tiered Memory Architecture</h2>
    <div className="mt-16 space-y-6">
      {memoryTiers.map((tier, i) => (
        <MemoryTier key={tier.name} {...tier} delay={i * 100} />
      ))}
    </div>
  </div>
</section>
```

**Visual Style:**
- Increasing width from top to bottom
- Gradient opacity showing depth
- Animated data flow particles

---

### 4.7 Privacy & Trust

**Layout:** Split content with icon grid

```tsx
<section className="py-24 bg-slate">
  <div className="container mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="h1">Built on Trust</h2>
      <p className="body-lg mt-6 text-text-secondary">
        Your data never leaves your control...
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      <PrivacyFeature icon={Lock} title="Private" />
      <PrivacyFeature icon={Shield} title="Secure" />
      <PrivacyFeature icon={Eye} title="Transparent" />
      <PrivacyFeature icon={UserCheck} title="User-Owned" />
    </div>
  </div>
</section>
```

---

### 4.8 Roadmap

**Layout:** Horizontal timeline

```tsx
const milestones = [
  { phase: 'Foundation', status: 'complete', features: ['...'] },
  { phase: 'Core Platform', status: 'in-progress', features: ['...'] },
  { phase: 'Proactive AI', status: 'planned', features: ['...'] }
]

<section className="py-24 bg-space">
  <div className="container mx-auto px-6">
    <h2 className="h1 text-center">Development Roadmap</h2>
    <div className="mt-16 relative">
      <Timeline milestones={milestones} />
    </div>
  </div>
</section>
```

**Status Colors:**
- Complete: success
- In Progress: amber
- Planned: neural

---

### 4.9 CTA Section

**Layout:** Centered glass card

```tsx
<section className="py-24 bg-gradient-to-b from-slate to-space">
  <div className="container max-w-3xl mx-auto px-6">
    <div className="glass rounded-2xl p-12 text-center">
      <h2 className="h1">Ready to meet AYRA?</h2>
      <p className="body-lg mt-6 text-text-secondary">
        Join the waitlist for early access
      </p>
      <div className="flex gap-4 justify-center mt-8">
        <Button variant="primary" size="lg">
          Request Access
        </Button>
        <Button variant="outline" size="lg">
          View on GitHub
        </Button>
      </div>
    </div>
  </div>
</section>
```

---

### 4.10 Footer

```tsx
<footer className="bg-space py-16 border-t border-white/5">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-semibold mb-4">About</h4>
        <ul className="space-y-2 text-text-secondary">
          <li><Link href="/vision">Vision</Link></li>
          <li><Link href="/team">Team</Link></li>
        </ul>
      </div>
      {/* Repeat for other columns */}
    </div>
    <div className="mt-12 pt-8 border-t border-white/5 text-center text-text-tertiary">
      <p>&copy; 2025 AYRA. Private AI Companion.</p>
    </div>
  </div>
</footer>
```

---

## 5. Animation Guidelines

### 5.1 Scroll Animations

Use Framer Motion's `useInView` hook:

```tsx
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export function FadeIn({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
```

### 5.2 Hover Effects

```tsx
// Button hover
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
>

// Card hover
<motion.div
  whileHover={{ y: -4, boxShadow: 'var(--glow-primary)' }}
>
```

### 5.3 Background Particles

**Option 1:** Use `react-tsparticles`
**Option 2:** Custom canvas animation
**Option 3:** CSS-only with pseudo-elements

```tsx
// Minimal particle background
export function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {/* Particle elements or canvas */}
    </div>
  )
}
```

---

## 6. Responsive Breakpoints

```tsx
// Tailwind breakpoints
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Wide desktop
2xl: '1536px' // Ultra-wide
```

**Mobile Adjustments:**
- Typography: Scale down 15-20%
- Spacing: Reduce padding by 30-50%
- Grid: 1 column
- Hide complex animations
- Stack hero content vertically

---

## 7. Performance Optimization

### 7.1 Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/hero-bg.jpg"
  alt="AYRA"
  fill
  priority
  quality={90}
/>
```

### 7.2 Code Splitting
- Use dynamic imports for heavy components
- Lazy load animations below fold

```tsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />
})
```

### 7.3 Font Loading
```tsx
// app/layout.tsx
<html className={`${inter.variable} ${sora.variable}`}>
```

---

## 8. Accessibility

**Requirements:**
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratio ≥ 4.5:1
- Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Deployment

### 9.1 Build Command
```bash
npm run build
```

### 9.2 Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://ayra.ai
```

### 9.3 Vercel Configuration
- Framework: Next.js
- Build command: `next build`
- Output directory: `.next`
- Install command: `npm install`

---

## 10. Development Workflow

### 10.1 Setup
```bash
npx create-next-app@latest ayra-website --typescript --tailwind --app
cd ayra-website
npx shadcn-ui@latest init
npm install framer-motion lucide-react
```

### 10.2 Component Development Order
1. Setup design system (colors, typography)
2. Build UI components (Button, Card, etc.)
3. Implement sections (Hero → Footer)
4. Add animations
5. Responsive testing
6. Performance optimization
7. Accessibility audit

### 10.3 Git Workflow
- `main` - production
- `develop` - active development
- Feature branches: `feature/hero-section`

---

## 11. Testing Checklist

- [ ] All sections render correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] Animations work smoothly (60fps)
- [ ] Links functional
- [ ] Images optimized
- [ ] Lighthouse score > 90
- [ ] Accessibility: No critical issues
- [ ] Browser compatibility verified
- [ ] Loading time < 3s

---

## 12. Resources

**Design Tools:**
- Figma: [Link to design file]
- Color palette: See section 2.1

**Dependencies:**
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- shadcn/ui: https://ui.shadcn.com

**References:**
- Brand guidelines: [Link]
- Copy/content: [Link]

---

## Questions or Issues?

Contact: [Your Email]
Project Repository: [GitHub Link]

---

**Document Version:** 1.0  
**Last Updated:** December 2025  
**Next Review:** Implementation kickoff