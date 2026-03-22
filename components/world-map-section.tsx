"use client";

import { useState, type ReactElement } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Region {
  name: string;
  description: string;
  /** Tailwind arbitrary-value classes for absolute positioning — no inline styles */
  positionClasses: string;
  /** Tailwind text-color class for the icon and accent */
  colorClass: string;
  /** Tailwind border-color class for the info panel top border */
  borderClass: string;
  icon: RegionIconName;
}

type RegionIconName =
  | "castle"
  | "tree"
  | "arcane-star"
  | "skull-flame";

// ---------------------------------------------------------------------------
// Region data
// ---------------------------------------------------------------------------

const REGIONS: Region[] = [
  {
    name: "Ironhold Citadel",
    description:
      "The last bastion of the old kingdom. Its walls have never been breached, and its forges burn with dragonfire.",
    positionClasses: "top-[25%] left-[30%]",
    colorClass: "text-crimson",
    borderClass: "border-crimson",
    icon: "castle",
  },
  {
    name: "Whisperwood",
    description:
      "An ancient forest where the trees speak in riddles and the fey guard secrets older than time itself.",
    positionClasses: "top-[45%] left-[60%]",
    colorClass: "text-emerald",
    borderClass: "border-emerald",
    icon: "tree",
  },
  {
    name: "The Arcane Spire",
    description:
      "A tower that pierces the clouds, home to the last order of archmages who guard the ley lines of power.",
    positionClasses: "top-[20%] left-[70%]",
    colorClass: "text-arcane-light",
    borderClass: "border-arcane-light",
    icon: "arcane-star",
  },
  {
    name: "Ashen Wastes",
    description:
      "The scorched remnants of the Obsidian King's domain. Dark creatures still stir beneath the blackened earth.",
    positionClasses: "top-[65%] left-[40%]",
    colorClass: "text-gold-dark",
    borderClass: "border-gold-dark",
    icon: "skull-flame",
  },
];

// ---------------------------------------------------------------------------
// SVG Icon components — purely decorative, sized at 24 × 24 px viewport
// ---------------------------------------------------------------------------

function CastleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      {/* Battlements */}
      <rect x="2" y="4" width="3" height="4" rx="0.5" />
      <rect x="7" y="4" width="3" height="4" rx="0.5" />
      <rect x="14" y="4" width="3" height="4" rx="0.5" />
      <rect x="19" y="4" width="3" height="4" rx="0.5" />
      {/* Main wall */}
      <rect x="2" y="8" width="20" height="12" rx="0.5" />
      {/* Gate arch */}
      <path d="M9 20 V14 Q12 10 15 14 V20 Z" fill="rgba(0,0,0,0.4)" />
    </svg>
  );
}

function TreeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      {/* Top crown */}
      <polygon points="12,2 19,11 5,11" />
      {/* Middle crown */}
      <polygon points="12,7 20,17 4,17" />
      {/* Trunk */}
      <rect x="10" y="17" width="4" height="5" rx="0.5" />
    </svg>
  );
}

function ArcaneStarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      {/* 8-pointed star via two overlapping squares */}
      <polygon points="12,2 14,9 22,12 14,15 12,22 10,15 2,12 10,9" />
      {/* Inner circle accent */}
      <circle cx="12" cy="12" r="3" fill="rgba(0,0,0,0.35)" />
    </svg>
  );
}

function SkullFlameIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      {/* Flame base */}
      <path d="M12 2 C10 5 7 6 8 10 C6 8 6 6 7 4 C4 7 4 12 8 14 C8 16 10 17 12 17 C14 17 16 16 16 14 C20 12 20 7 17 4 C18 6 18 8 16 10 C17 6 14 5 12 2 Z" />
      {/* Skull outline */}
      <ellipse cx="12" cy="15" rx="4" ry="3.5" />
      {/* Eye sockets */}
      <circle cx="10.5" cy="14.5" r="1" fill="rgba(0,0,0,0.5)" />
      <circle cx="13.5" cy="14.5" r="1" fill="rgba(0,0,0,0.5)" />
      {/* Jaw */}
      <rect x="10" y="17.5" width="1.2" height="1.5" rx="0.3" fill="rgba(0,0,0,0.4)" />
      <rect x="12.8" y="17.5" width="1.2" height="1.5" rx="0.3" fill="rgba(0,0,0,0.4)" />
    </svg>
  );
}

const ICON_MAP: Record<RegionIconName, (props: { className?: string }) => ReactElement> = {
  castle: CastleIcon,
  tree: TreeIcon,
  "arcane-star": ArcaneStarIcon,
  "skull-flame": SkullFlameIcon,
};

// Larger version of the same icons rendered inside the info panel (32 × 32)
function RegionPanelIcon({
  icon,
  className,
}: {
  icon: RegionIconName;
  className?: string;
}) {
  const Icon = ICON_MAP[icon];
  return (
    <span className={cn("inline-block h-8 w-8", className)}>
      <Icon className="h-full w-full" />
    </span>
  );
}

// ---------------------------------------------------------------------------
// Compass Rose SVG
// ---------------------------------------------------------------------------

function CompassRose() {
  return (
    <svg
      viewBox="0 0 50 50"
      width="50"
      height="50"
      aria-label="Compass: North is up"
      className="text-gold/40"
    >
      {/* N point */}
      <polygon points="25,2 21,20 25,17 29,20" fill="currentColor" />
      {/* S point */}
      <polygon points="25,48 21,30 25,33 29,30" fill="currentColor" opacity="0.6" />
      {/* W point */}
      <polygon points="2,25 20,21 17,25 20,29" fill="currentColor" opacity="0.6" />
      {/* E point */}
      <polygon points="48,25 30,21 33,25 30,29" fill="currentColor" opacity="0.6" />
      {/* Inner circle */}
      <circle cx="25" cy="25" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="25" cy="25" r="2" fill="currentColor" />
      {/* N label */}
      <text
        x="25"
        y="11"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="7"
        fontWeight="bold"
        fill="currentColor"
        fontFamily="var(--font-ui)"
      >
        N
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Fantasy Map SVG layer
// ---------------------------------------------------------------------------

function FantasyMapSVG() {
  return (
    <svg
      viewBox="0 0 160 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {/* Landmass outline — irregular polygon */}
      <path
        d="M 10,15 L 22,8 L 38,6 L 55,10 L 72,5 L 90,8 L 108,4 L 125,9 L 140,6 L 150,14 L 155,28 L 152,45 L 148,60 L 150,75 L 145,88 L 128,94 L 110,92 L 90,96 L 70,93 L 50,95 L 30,90 L 15,85 L 8,70 L 6,52 L 10,35 Z"
        className="text-gold/[0.05]"
        fill="currentColor"
        stroke="none"
      />

      {/* Landmass border */}
      <path
        d="M 10,15 L 22,8 L 38,6 L 55,10 L 72,5 L 90,8 L 108,4 L 125,9 L 140,6 L 150,14 L 155,28 L 152,45 L 148,60 L 150,75 L 145,88 L 128,94 L 110,92 L 90,96 L 70,93 L 50,95 L 30,90 L 15,85 L 8,70 L 6,52 L 10,35 Z"
        fill="none"
        className="text-gold/20"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 2"
      />

      {/* Mountain range — upper left, 4 triangle peaks */}
      <g className="text-gold/20" stroke="currentColor" strokeWidth="0.7" fill="none">
        <polygon points="20,42 26,28 32,42" />
        <polygon points="28,42 35,24 42,42" />
        <polygon points="36,42 44,22 52,42" />
        <polygon points="44,42 51,27 58,42" />
        {/* Snow caps */}
        <polyline points="23,36 26,28 29,36" className="text-parchment/20" stroke="currentColor" strokeWidth="0.5" />
        <polyline points="32,31 35,24 38,31" className="text-parchment/20" stroke="currentColor" strokeWidth="0.5" />
        <polyline points="41,28 44,22 47,28" className="text-parchment/20" stroke="currentColor" strokeWidth="0.5" />
      </g>

      {/* Forest — right side, 4 tree shapes (triangle crown + stick trunk) */}
      <g className="text-emerald/25" stroke="currentColor" strokeWidth="0.6" fill="currentColor">
        <polygon points="110,62 115,50 120,62" />
        <line x1="115" y1="62" x2="115" y2="67" strokeWidth="1" />
        <polygon points="118,60 123,48 128,60" />
        <line x1="123" y1="60" x2="123" y2="65" strokeWidth="1" />
        <polygon points="126,62 131,52 136,62" />
        <line x1="131" y1="62" x2="131" y2="67" strokeWidth="1" />
        <polygon points="106,65 110,55 114,65" />
        <line x1="110" y1="65" x2="110" y2="70" strokeWidth="1" />
      </g>

      {/* River — curving path through center with flow dash */}
      <path
        d="M 55,15 C 60,25 50,35 58,48 C 66,60 58,72 65,85"
        fill="none"
        className="text-arcane/20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 3"
        strokeLinecap="round"
      />
      {/* River secondary branch */}
      <path
        d="M 58,48 C 70,52 80,48 92,55"
        fill="none"
        className="text-arcane/15"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function WorldMapSection() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const active = REGIONS.find((r) => r.name === activeRegion) ?? null;

  return (
    <section
      id="world"
      className="relative min-h-screen bg-gradient-to-b from-stone-dark via-stone to-stone-dark py-32"
      aria-label="World Map"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-ui)] text-sm tracking-[0.3em] text-gold uppercase">
            Explore
          </p>
          <h2 className="mb-6 text-center font-[family-name:var(--font-display)] text-4xl font-bold text-parchment md:text-5xl">
            The Known Realm
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center font-[family-name:var(--font-body)] text-parchment-dark">
            Click on a region to discover what lies within. Each land holds its
            own dangers, treasures, and stories.
          </p>
        </ScrollReveal>

        {/* Map container */}
        <ScrollReveal>
          <div
            className={cn(
              "relative mx-auto aspect-[16/10] max-w-4xl overflow-hidden rounded",
              // Ornamental double border
              "border-2 border-gold/30",
              "ring-1 ring-inset ring-gold/10",
              // Parchment-style background
              "bg-stone-light",
              "bg-parchment-texture",
              // Edge vignette
              "shadow-[inset_0_0_60px_20px_rgba(0,0,0,0.5)]",
            )}
          >
            {/* Map grid */}
            <div
              className="bg-map-grid absolute inset-0 opacity-100"
              aria-hidden="true"
            />

            {/* Fantasy SVG map elements (landmass, mountains, forest, river) */}
            <FantasyMapSVG />

            {/* Compass rose — top-right */}
            <div className="absolute top-3 right-3 z-10" aria-hidden="false">
              <CompassRose />
            </div>

            {/* Region markers */}
            {REGIONS.map((region) => {
              const Icon = ICON_MAP[region.icon];
              const isActive = activeRegion === region.name;

              return (
                <button
                  key={region.name}
                  className={cn(
                    "group absolute z-10 -translate-x-1/2 -translate-y-1/2",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                    region.positionClasses,
                  )}
                  onClick={() =>
                    setActiveRegion(isActive ? null : region.name)
                  }
                  aria-label={`Explore ${region.name}`}
                  aria-expanded={isActive}
                  aria-pressed={isActive}
                >
                  {/* Pulsing ring */}
                  {!prefersReducedMotion && (
                    <span
                      className={cn(
                        "absolute inset-0 -m-1 animate-ping rounded-full opacity-40",
                        region.colorClass.replace("text-", "bg-"),
                      )}
                      aria-hidden="true"
                    />
                  )}

                  {/* Icon wrapper */}
                  <span
                    className={cn(
                      "relative flex h-6 w-6 items-center justify-center rounded-full",
                      "border-2 border-gold/50 bg-stone/80 backdrop-blur-sm",
                      "transition-all duration-200 group-hover:scale-125 group-hover:border-gold",
                      isActive && "scale-125 border-gold",
                      region.colorClass,
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>

                  {/* Label */}
                  <span
                    className={cn(
                      "mt-1.5 block whitespace-nowrap text-center",
                      "font-[family-name:var(--font-ui)] text-xs tracking-wider text-parchment/80",
                      "drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
                    )}
                  >
                    {region.name}
                  </span>
                </button>
              );
            })}

            {/* Region info panel */}
            <AnimatePresence>
              {active && (
                <motion.div
                  key={active.name}
                  initial={
                    prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
                  }
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  role="region"
                  aria-live="polite"
                  aria-label={`Details for ${active.name}`}
                  className={cn(
                    "absolute right-4 bottom-4 left-4 z-20",
                    "rounded-sm border border-gold/20 bg-stone/90 p-5 backdrop-blur-sm",
                    "md:left-auto md:w-80",
                    // Per-region top accent border
                    "border-t-2",
                    active.borderClass,
                  )}
                >
                  {/* Panel icon + name row */}
                  <div className="mb-3 flex items-center gap-3">
                    <RegionPanelIcon
                      icon={active.icon}
                      className={active.colorClass}
                    />
                    <h3
                      className={cn(
                        "font-[family-name:var(--font-heading)] text-xl leading-tight",
                        active.colorClass,
                      )}
                    >
                      {active.name}
                    </h3>
                  </div>

                  <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-parchment-dark">
                    {active.description}
                  </p>

                  {/* Close affordance */}
                  <button
                    onClick={() => setActiveRegion(null)}
                    aria-label="Close region details"
                    className={cn(
                      "mt-4 text-xs tracking-widest text-silver/60 uppercase transition-colors",
                      "hover:text-parchment",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                    )}
                  >
                    [ dismiss ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
