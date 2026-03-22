# Realm of Legends

A cinematic, single-scroll landing page for a Dungeons & Dragons-style medieval fantasy RPG. Built with Next.js 15, Tailwind CSS v4, and Framer Motion.

**[Live Demo](https://westillbest.github.io/realm-of-legends)**

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen cinematic intro with layered radial gradients, vignette, SVG ornamental dividers, and animated scroll indicator |
| **Lore** | Three-chapter world history with parchment-styled cards, gold accents, and decorative Roman numeral overlays |
| **Classes** | Four playable classes (Warrior, Mage, Rogue, Cleric) with custom SVG icons, per-class color theming, and stat bars |
| **World Map** | Interactive SVG fantasy map with landmass, mountains, forests, rivers, compass rose, and clickable region info panels |
| **CTA** | Epic call-to-action with expanding ring animations, crown ornament, and gold gradient button with shimmer effect |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Package Manager | pnpm |
| Fonts | Cinzel Decorative, MedievalSharp, Cinzel, Inter |
| Deployment | GitHub Pages (static export) |

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run start
```

---

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts and SEO metadata
  page.tsx            # Main page with lazy-loaded sections
  globals.css         # Tailwind theme, color palette, animations
  icon.svg            # Shield favicon

components/
  hero-section.tsx        # Cinematic hero with atmospheric layers
  lore-section.tsx        # World lore chapters
  classes-section.tsx     # Character class cards with SVG icons
  world-map-section.tsx   # Interactive SVG fantasy map
  cta-section.tsx         # Call-to-action with animated effects
  navbar.tsx              # Fixed navigation with mobile menu
  footer.tsx              # Footer with accessible links
  scroll-reveal.tsx       # Scroll-triggered animation wrapper
  particle-background.tsx # Canvas particle system (embers/sparks)
  ornamental-divider.tsx  # Reusable SVG dividers (4 variants)
  section-placeholder.tsx # Lazy loading placeholder
  structured-data.tsx     # VideoGame JSON-LD schema

lib/
  utils.ts            # cn() classname utility
```

---

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | Burnished Gold | `#D4A843` |
| Secondary | Royal Crimson | `#8B1A1A` |
| Accent | Arcane Purple | `#6B3FA0` |
| Highlight | Emerald Green | `#2E8B57` |
| Background | Dark Stone | `#1A1A2E` |
| Surface | Deep Charcoal | `#16213E` |
| Text | Parchment White | `#F0E6D3` |

---

## Performance

- Lazy-loaded below-fold sections via `next/dynamic`
- Canvas particle system pauses when tab is hidden
- Mobile-optimized particle count (30 vs 80 on desktop)
- Static export for instant page loads
- All animations respect `prefers-reduced-motion`

---

## License

MIT
