# Realm of Legends — D&D Medieval FRP Game Landing Page

## Project Overview

An immersive, single-scroll landing page for a Dungeons & Dragons-style medieval fantasy RPG game. The page delivers an epic, cinematic experience through parallax scrolling, scroll-triggered animations, and rich fantasy visuals. The goal is to captivate visitors and drive them to join/play.

### Section Flow

1. **Hero** — Full-screen cinematic intro with game title, tagline, and animated background
2. **Lore / World** — The realm's story and mythology, revealed as the user scrolls
3. **Character Classes** — Showcase of playable classes (Warrior, Mage, Rogue, Cleric, etc.)
4. **World Map / Regions** — Interactive or illustrated map of the game world
5. **Call to Adventure (CTA)** — Final call-to-action to join the quest

---

## Tech Stack

| Layer          | Technology              |
| -------------- | ----------------------- |
| Framework      | Next.js 15 (App Router) |
| Language       | TypeScript              |
| Styling        | Tailwind CSS v4         |
| UI Components  | shadcn/ui               |
| Animations     | Framer Motion           |
| Package Mgr    | pnpm                    |
| Fonts          | Google Fonts            |

### Key Dependencies

- `next` — framework
- `tailwindcss` — utility-first CSS
- `framer-motion` — scroll animations, parallax, transitions
- `@radix-ui/*` — accessible primitives (via shadcn/ui)
- `clsx` + `tailwind-merge` — className utilities (`cn()` helper)

---

## UI / UX Preferences

### Visual Style: Epic & Vibrant

This is **high fantasy** — think sweeping landscapes, glowing magic, heroic silhouettes, and golden light breaking through storm clouds.

### Color Palette

| Role        | Color                          | Hex       |
| ----------- | ------------------------------ | --------- |
| Primary     | Burnished Gold                 | `#D4A843` |
| Secondary   | Royal Crimson                  | `#8B1A1A` |
| Accent      | Arcane Purple                  | `#6B3FA0` |
| Highlight   | Emerald Green                  | `#2E8B57` |
| Background  | Dark Stone                     | `#1A1A2E` |
| Surface     | Deep Charcoal                  | `#16213E` |
| Text        | Parchment White                | `#F0E6D3` |
| Text Muted  | Weathered Silver               | `#9CA3AF` |

### Typography

- **Display / Headings:** `MedievalSharp` or `Cinzel Decorative` — ornate, fantasy-appropriate
- **Body:** `Cinzel` or `EB Garamond` — elegant, readable serif
- **UI Elements:** `Inter` — clean sans-serif for buttons, labels, nav

### Visual Effects

- Parallax scrolling between sections
- Scroll-triggered fade-in, slide-up, and scale animations
- Subtle ambient particles (embers, dust motes, magical sparks)
- Glowing borders and rune-like decorative elements
- Section transitions using opacity and transform on scroll

### Component Theming

shadcn/ui components should be restyled to match the medieval aesthetic:

- Buttons: stone/metal texture feel, golden borders, hover glow effects
- Cards: parchment-like backgrounds with ornate corner decorations
- Borders: use `border-[#D4A843]/30` golden subtle borders
- Shadows: warm-toned (`shadow-[#D4A843]/10`) instead of neutral gray

---

## Project Structure

```
/app
  layout.tsx          # Root layout with fonts, metadata
  page.tsx            # Main landing page (composes all sections)
  globals.css         # Tailwind base, custom medieval theme tokens

/components
  hero-section.tsx
  lore-section.tsx
  classes-section.tsx
  world-map-section.tsx
  cta-section.tsx
  scroll-reveal.tsx        # Reusable scroll-triggered animation wrapper
  particle-background.tsx  # Ambient particle effects
  navbar.tsx
  footer.tsx

/components/ui            # shadcn/ui components (themed)

/lib
  utils.ts            # cn() helper and shared utilities

/public/assets
  /images             # Hero backgrounds, class illustrations, map art
  /textures           # Parchment, stone, leather textures
  /icons              # Custom medieval-themed icons
```

---

## Common Rules

### Architecture

- Use **App Router** (`/app` directory) — no Pages Router
- **Server Components by default** — only add `"use client"` when the component needs interactivity, hooks, or browser APIs
- One component per file

### Naming & Organization

- Component files: **kebab-case** (`hero-section.tsx`, `scroll-reveal.tsx`)
- Components: **PascalCase** exports (`HeroSection`, `ScrollReveal`)
- All images and static assets in `/public/assets/` organized by type

### Styling

- **Tailwind CSS only** — no inline styles, no CSS modules, no styled-components
- Use the `cn()` utility from `/lib/utils.ts` for conditional/merged classnames
- **Mobile-first** responsive design (`sm:`, `md:`, `lg:` breakpoints)
- Define custom theme colors in `globals.css` using CSS variables

### Accessibility

- Semantic HTML elements (`<section>`, `<nav>`, `<main>`, `<header>`, `<footer>`)
- All animations must respect `prefers-reduced-motion`
- Images require meaningful `alt` text
- Maintain color contrast ratios (WCAG AA minimum)
- Interactive elements must be keyboard accessible

### Performance

- Lazy load below-the-fold sections with `next/dynamic`
- Optimize all images with `next/image`
- Keep the JS bundle lean — avoid unnecessary client-side code
- Use `loading="lazy"` for non-critical images
- Fonts: use `next/font/google` with `display: 'swap'`

### Code Quality

- No `any` types — use proper TypeScript types and interfaces
- No unused imports or variables
- Extract repeated values into constants or theme tokens
- Keep components under 150 lines — split if larger


### Agent Workflow 

- For UI / UX design and implementation use ui-ux-pro-max-skill, for tasks that can be done parallelly by different agents use sub-agent functionality. 

## Project Team

See [TEAM.md](TEAM.md) for the list of agents configured for this project.

Always try to distribute tasks between team-agents.