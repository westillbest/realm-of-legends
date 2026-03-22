"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

function OrnamentalDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("w-full max-w-sm text-gold/30", className)}
    >
      {/* Left arm converging to center */}
      <line x1="0" y1="10" x2="185" y2="10" stroke="currentColor" strokeWidth="1" />
      {/* Right arm converging from center */}
      <line x1="215" y1="10" x2="400" y2="10" stroke="currentColor" strokeWidth="1" />
      {/* Center diamond */}
      <polygon
        points="200,3 208,10 200,17 192,10"
        fill="currentColor"
        opacity="0.6"
      />
      {/* Inner diamond highlight */}
      <polygon
        points="200,6 205,10 200,14 195,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      {/* Small accent ticks near diamond */}
      <line x1="175" y1="7" x2="175" y2="13" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="225" y1="7" x2="225" y2="13" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

function ScrollIndicator({ reduced }: { reduced: boolean | null }) {
  return (
    <div
      className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2"
      aria-label="Scroll down"
    >
      <span className="font-[family-name:var(--font-ui)] text-xs tracking-[0.25em] text-gold/50 uppercase">
        Scroll
      </span>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={cn(
          "h-6 w-6 text-gold/60",
          !reduced && "animate-[scroll-hint_2s_ease-in-out_infinite]"
        )}
      >
        <path
          d="M12 5L12 19M12 19L6 13M12 19L18 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {/* Expand ring beneath arrow */}
      <span
        className={cn(
          "absolute bottom-0 h-6 w-6 rounded-full border border-gold/20",
          !reduced && "animate-[expand-ring_2s_ease-out_infinite]"
        )}
        aria-hidden="true"
      />
    </div>
  );
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Base background ─────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-dark via-stone to-charcoal" />

      {/* ── Layer 1: Gold glow from top ──────────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(212,168,67,0.18)_0%,transparent_70%)]" />

      {/* ── Layer 2: Arcane purple atmospheric glow, left ────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_10%_50%,rgba(107,63,160,0.22)_0%,transparent_65%)]" />

      {/* ── Layer 3: Warm gold radial at center for depth ─────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_55%,rgba(212,168,67,0.08)_0%,transparent_60%)]" />

      {/* ── Supplemental: crimson low-horizon ember warmth ────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_80%_80%,rgba(139,26,26,0.15)_0%,transparent_60%)]" />

      {/* ── Vignette overlay ─────────────────────────────────────── */}
      <div className="vignette pointer-events-none absolute inset-0 z-10" aria-hidden="true" />

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-20 px-6 text-center">

        {/* Eyebrow label */}
        <motion.p
          className="mb-6 font-[family-name:var(--font-ui)] text-sm tracking-[0.35em] text-gold uppercase"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          A Medieval Fantasy RPG
        </motion.p>

        {/* Top ornamental divider */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          aria-hidden="true"
        >
          <OrnamentalDivider />
        </motion.div>

        {/* Title block */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
        >
          <h1 className="mb-6 font-[family-name:var(--font-display)] text-5xl font-bold leading-tight text-parchment md:text-7xl lg:text-8xl">
            Realm of
            <br />
            <span className="text-gold text-shadow-glow">Legends</span>
          </h1>
        </motion.div>

        {/* Bottom ornamental divider */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          aria-hidden="true"
        >
          <OrnamentalDivider />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mx-auto mb-12 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-parchment-dark md:text-xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
        >
          Forge your destiny in a world of ancient magic, fearsome creatures,
          and legendary quests. Your adventure awaits.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
        >
          {/* Primary CTA */}
          <a
            href="#cta"
            className={cn(
              "rounded-sm border-2 border-gold bg-gold/10 px-10 py-3.5",
              "font-[family-name:var(--font-ui)] text-sm font-semibold tracking-wider text-gold uppercase",
              "shadow-[0_0_20px_rgba(212,168,67,0.3)]",
              "transition-all duration-300",
              "hover:bg-gold/20 hover:shadow-[0_0_40px_rgba(212,168,67,0.5)] hover:border-gold-light",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-stone"
            )}
          >
            Begin Your Quest
          </a>

          {/* Secondary CTA */}
          <a
            href="#lore"
            className={cn(
              "rounded-sm border border-parchment/20 px-10 py-3.5",
              "font-[family-name:var(--font-ui)] text-sm tracking-wider text-parchment/70 uppercase",
              "transition-all duration-300",
              "hover:border-parchment/40 hover:text-parchment hover:bg-parchment/5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-stone"
            )}
          >
            Explore the Realm
          </a>
        </motion.div>
      </div>

      {/* ── Animated scroll indicator ─────────────────────────────── */}
      <ScrollIndicator reduced={prefersReducedMotion} />

      {/* ── Bottom fade to next section ───────────────────────────── */}
      <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-gradient-to-t from-stone to-transparent" />
    </section>
  );
}
