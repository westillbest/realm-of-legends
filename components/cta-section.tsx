"use client";

import { useReducedMotion } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";
import { OrnamentalDivider } from "./ornamental-divider";
import { cn } from "@/lib/utils";

interface ExpandingRingProps {
  delay: string;
  size: string;
}

function ExpandingRing({ delay, size }: ExpandingRingProps) {
  return (
    <span
      className={cn(
        "absolute rounded-full border border-gold/10",
        "animate-[expand-ring_3s_ease-out_infinite]",
        size
      )}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    />
  );
}

export function CtaSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="cta"
      className="relative min-h-[70vh] overflow-hidden bg-gradient-to-b from-stone-dark to-stone py-32"
      aria-label="Call to Adventure"
    >
      {/* Multi-layer radial gradient backgrounds */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Center gold bloom */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,168,67,0.12)_0%,_transparent_50%)]" />
        {/* Bottom-left arcane glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,_rgba(107,63,160,0.10)_0%,_transparent_45%)]" />
        {/* Top-right crimson hint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,_rgba(139,26,26,0.08)_0%,_transparent_40%)]" />
      </div>

      {/* Expanding rings — suppressed when reduced motion is preferred */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <ExpandingRing size="h-48 w-48 md:h-64 md:w-64" delay="0s" />
          <ExpandingRing size="h-72 w-72 md:h-96 md:w-96" delay="1s" />
          <ExpandingRing size="h-96 w-96 md:h-[32rem] md:w-[32rem]" delay="2s" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Eyebrow + divider */}
        <ScrollReveal>
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="font-[family-name:var(--font-ui)] text-xs tracking-[0.3em] text-gold uppercase">
              Your Destiny Awaits
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
          <OrnamentalDivider variant="crown" className="mb-8" />
        </ScrollReveal>

        {/* Main heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl font-bold text-parchment text-shadow-glow md:text-6xl">
            Answer the Call
          </h2>
        </ScrollReveal>

        {/* Body copy */}
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-12 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-parchment-dark">
            The realm stands at the edge of darkness. Heroes are needed — brave
            souls willing to face the unknown and forge a new legend. Will you
            answer the call?
          </p>
        </ScrollReveal>

        {/* CTA button */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col items-center gap-6">
            <button
              type="button"
              className={cn(
                // Layout & shape
                "group relative overflow-hidden rounded-sm",
                "px-12 py-5",
                // Gold gradient fill
                "bg-gradient-to-r from-gold-dark via-gold to-gold-dark",
                // Typography
                "font-[family-name:var(--font-ui)] text-sm font-bold tracking-[0.2em] text-stone-dark uppercase",
                // Outer glow
                "shadow-[0_0_30px_rgba(212,168,67,0.4),_0_0_60px_rgba(212,168,67,0.15)]",
                // Transitions
                "transition-all duration-300",
                // Hover state
                "hover:scale-105 hover:shadow-[0_0_50px_rgba(212,168,67,0.6),_0_0_90px_rgba(212,168,67,0.2)]",
                // Focus ring
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-stone"
              )}
            >
              {/* Shimmer pseudo-overlay rendered as a child span (Tailwind before: not usable for keyframe ref) */}
              <span
                className={cn(
                  "pointer-events-none absolute inset-0",
                  "bg-gradient-to-r from-transparent via-white/20 to-transparent",
                  "-translate-x-full",
                  "group-hover:animate-[shimmer_0.7s_ease-in-out]"
                )}
                aria-hidden="true"
              />
              <span className="relative z-10">Start Your Adventure</span>
            </button>

            <p className="font-[family-name:var(--font-ui)] text-xs text-silver">
              Free to play &middot; No credit card required
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
