"use client";

import { type ReactNode } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { cn } from "@/lib/utils";

// ── SVG Icons ──────────────────────────────────────────────────────────────

function WarriorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-12 w-12", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sword 1: top-left to bottom-right */}
      <line x1="8" y1="8" x2="40" y2="40" strokeWidth="2.5" />
      {/* Sword 1 crossguard */}
      <line x1="4" y1="16" x2="16" y2="4" strokeWidth="1.5" opacity="0.7" />
      {/* Sword 1 pommel */}
      <circle cx="6" cy="6" r="2" fill="currentColor" strokeWidth="0" opacity="0.8" />
      {/* Sword 2: top-right to bottom-left */}
      <line x1="40" y1="8" x2="8" y2="40" strokeWidth="2.5" />
      {/* Sword 2 crossguard */}
      <line x1="44" y1="16" x2="32" y2="4" strokeWidth="1.5" opacity="0.7" />
      {/* Sword 2 pommel */}
      <circle cx="42" cy="6" r="2" fill="currentColor" strokeWidth="0" opacity="0.8" />
      {/* Center intersection accent */}
      <circle cx="24" cy="24" r="2.5" fill="currentColor" strokeWidth="0" opacity="0.5" />
    </svg>
  );
}

function MageIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-12 w-12", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer gem shape */}
      <polygon
        points="24,4 40,18 24,44 8,18"
        strokeWidth="2"
        opacity="0.9"
      />
      {/* Upper facet line */}
      <line x1="8" y1="18" x2="40" y2="18" strokeWidth="1.2" opacity="0.5" />
      {/* Left upper facet */}
      <line x1="24" y1="4" x2="8" y2="18" strokeWidth="1.2" opacity="0.5" />
      {/* Right upper facet */}
      <line x1="24" y1="4" x2="40" y2="18" strokeWidth="1.2" opacity="0.5" />
      {/* Center inner gem */}
      <polygon
        points="24,12 33,19 24,36 15,19"
        strokeWidth="1"
        opacity="0.35"
        fill="currentColor"
      />
      {/* Inner highlight sparkle */}
      <line x1="24" y1="10" x2="24" y2="14" strokeWidth="1" opacity="0.6" />
      <line x1="21" y1="13" x2="25" y2="11" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function RogueIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-12 w-12", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Dagger 1: angled left */}
      {/* Blade */}
      <line x1="12" y1="6" x2="28" y2="38" strokeWidth="2.2" />
      {/* Guard */}
      <line x1="7" y1="14" x2="18" y2="10" strokeWidth="1.5" opacity="0.7" />
      {/* Pommel */}
      <circle cx="10" cy="4" r="2" fill="currentColor" strokeWidth="0" opacity="0.8" />
      {/* Blade tip accent */}
      <line x1="26" y1="33" x2="30" y2="42" strokeWidth="1.2" opacity="0.5" />

      {/* Dagger 2: angled right */}
      {/* Blade */}
      <line x1="36" y1="6" x2="20" y2="38" strokeWidth="2.2" />
      {/* Guard */}
      <line x1="41" y1="14" x2="30" y2="10" strokeWidth="1.5" opacity="0.7" />
      {/* Pommel */}
      <circle cx="38" cy="4" r="2" fill="currentColor" strokeWidth="0" opacity="0.8" />
      {/* Blade tip accent */}
      <line x1="22" y1="33" x2="18" y2="42" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

function ClericIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-12 w-12", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Central sun circle */}
      <circle cx="24" cy="24" r="8" strokeWidth="2" />
      {/* Inner filled core */}
      <circle cx="24" cy="24" r="4" fill="currentColor" strokeWidth="0" opacity="0.4" />
      {/* Cardinal rays — N, E, S, W */}
      <line x1="24" y1="5" x2="24" y2="13" strokeWidth="2" />
      <line x1="43" y1="24" x2="35" y2="24" strokeWidth="2" />
      <line x1="24" y1="43" x2="24" y2="35" strokeWidth="2" />
      <line x1="5" y1="24" x2="13" y2="24" strokeWidth="2" />
      {/* Diagonal rays — NE, SE, SW, NW */}
      <line x1="37" y1="11" x2="31" y2="17" strokeWidth="1.5" opacity="0.65" />
      <line x1="37" y1="37" x2="31" y2="31" strokeWidth="1.5" opacity="0.65" />
      <line x1="11" y1="37" x2="17" y2="31" strokeWidth="1.5" opacity="0.65" />
      <line x1="11" y1="11" x2="17" y2="17" strokeWidth="1.5" opacity="0.65" />
      {/* Outer ring accent */}
      <circle cx="24" cy="24" r="14" strokeWidth="0.8" opacity="0.2" />
    </svg>
  );
}

// ── Corner bracket ornament ────────────────────────────────────────────────

function CornerBracket({
  position,
}: {
  position: "top-left" | "bottom-right";
}) {
  const isTopLeft = position === "top-left";
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        "absolute h-5 w-5 text-gold/25",
        isTopLeft ? "top-3 left-3" : "bottom-3 right-3",
        !isTopLeft && "rotate-180"
      )}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <polyline points="4,16 4,4 16,4" strokeWidth="1.5" />
    </svg>
  );
}

// ── Stat bar component ─────────────────────────────────────────────────────

interface StatBarProps {
  label: string;
  value: number;
  colorClass: string;
}

function StatBar({ label, value, colorClass }: StatBarProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-7 shrink-0 font-[family-name:var(--font-ui)] text-[9px] font-medium tracking-widest text-silver/70 uppercase">
        {label}
      </span>
      <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-stone-dark/60">
        <div
          className={cn("h-full rounded-full transition-all duration-700", colorClass)}
          style={{ width: `${value}%` }}
          role="meter"
          aria-label={`${label}: ${value} out of 100`}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <span className="w-6 shrink-0 text-right font-[family-name:var(--font-ui)] text-[9px] text-silver/50">
        {value}
      </span>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────

interface Stat {
  label: string;
  value: number;
}

interface CharacterClass {
  name: string;
  title: string;
  description: string;
  colorText: string;
  colorBorderTop: string;
  colorGradientFrom: string;
  colorBarFill: string;
  hoverShadow: string;
  icon: ReactNode;
  stats: Stat[];
}

const CHARACTER_CLASSES: CharacterClass[] = [
  {
    name: "Warrior",
    title: "The Unbreakable Shield",
    description:
      "Masters of martial combat who stand between their allies and the forces of darkness. Their steel is matched only by their resolve.",
    colorText: "text-crimson-light",
    colorBorderTop: "border-t-crimson",
    colorGradientFrom: "from-crimson/5",
    colorBarFill: "bg-crimson-light",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(139,26,26,0.20)]",
    icon: <WarriorIcon className="text-crimson-light" />,
    stats: [
      { label: "STR", value: 90 },
      { label: "INT", value: 30 },
      { label: "DEX", value: 50 },
      { label: "WIS", value: 40 },
    ],
  },
  {
    name: "Mage",
    title: "Weaver of the Arcane",
    description:
      "Scholars of the ancient arts who bend reality to their will. They channel the raw power of the Primordial Dragons themselves.",
    colorText: "text-arcane-light",
    colorBorderTop: "border-t-arcane-light",
    colorGradientFrom: "from-arcane/5",
    colorBarFill: "bg-arcane-light",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(107,63,160,0.20)]",
    icon: <MageIcon className="text-arcane-light" />,
    stats: [
      { label: "STR", value: 20 },
      { label: "INT", value: 95 },
      { label: "DEX", value: 40 },
      { label: "WIS", value: 70 },
    ],
  },
  {
    name: "Rogue",
    title: "Shadow Walker",
    description:
      "Silent and deadly, rogues move unseen through the world. Where others use brute force, they rely on cunning and precision.",
    colorText: "text-emerald-light",
    colorBorderTop: "border-t-emerald",
    colorGradientFrom: "from-emerald/5",
    colorBarFill: "bg-emerald",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(46,139,87,0.20)]",
    icon: <RogueIcon className="text-emerald-light" />,
    stats: [
      { label: "STR", value: 40 },
      { label: "INT", value: 50 },
      { label: "DEX", value: 95 },
      { label: "WIS", value: 30 },
    ],
  },
  {
    name: "Cleric",
    title: "Voice of the Divine",
    description:
      "Blessed by the ancient gods, clerics heal the wounded and smite the unholy. Their faith is an unshakeable beacon in the darkness.",
    colorText: "text-gold",
    colorBorderTop: "border-t-gold",
    colorGradientFrom: "from-gold/5",
    colorBarFill: "bg-gold",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(212,168,67,0.20)]",
    icon: <ClericIcon className="text-gold" />,
    stats: [
      { label: "STR", value: 50 },
      { label: "INT", value: 60 },
      { label: "DEX", value: 30 },
      { label: "WIS", value: 95 },
    ],
  },
];

// ── Section ────────────────────────────────────────────────────────────────

export function ClassesSection() {
  return (
    <section
      id="classes"
      className="relative min-h-screen bg-gradient-to-b from-stone-dark via-charcoal to-stone-dark py-32"
      aria-label="Character Classes"
    >
      {/* Subtle ambient glows */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(107,63,160,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(212,168,67,0.06)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Section header */}
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-ui)] text-sm tracking-[0.3em] text-gold uppercase">
            Choose Your Path
          </p>
          <h2 className="mb-6 text-center font-[family-name:var(--font-display)] text-4xl font-bold text-parchment md:text-5xl">
            Character Classes
          </h2>
          <p className="mx-auto mb-20 max-w-2xl text-center font-[family-name:var(--font-body)] text-parchment-dark">
            Each class offers a unique path through the realm. Choose wisely —
            your destiny depends on it.
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {CHARACTER_CLASSES.map((cls, i) => (
            <ScrollReveal key={cls.name} delay={i * 0.12}>
              <div
                className={cn(
                  // Layout
                  "group relative overflow-hidden rounded-sm p-8",
                  // Background
                  "bg-stone-light/80",
                  // Border: top accent + outer subtle ring
                  "border-2 border-gold/10 border-t-2",
                  cls.colorBorderTop,
                  // Top-color gradient fill from class color
                  "bg-gradient-to-b",
                  cls.colorGradientFrom,
                  "to-transparent",
                  // Transition
                  "transition-all duration-300",
                  // Hover
                  "hover:border-gold/25",
                  cls.hoverShadow
                )}
              >
                {/* Ornamental corner brackets */}
                <CornerBracket position="top-left" />
                <CornerBracket position="bottom-right" />

                {/* Inner hover gradient overlay */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 transition-all duration-300 group-hover:from-gold/[0.04] group-hover:to-transparent"
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-5" aria-hidden="true">
                    {cls.icon}
                  </div>

                  {/* Class name */}
                  <h3
                    className={cn(
                      "mb-1 font-[family-name:var(--font-heading)] text-2xl",
                      cls.colorText
                    )}
                  >
                    {cls.name}
                  </h3>

                  {/* Sub-title */}
                  <p className="mb-3 font-[family-name:var(--font-ui)] text-xs tracking-[0.2em] text-silver uppercase">
                    {cls.title}
                  </p>

                  {/* Description */}
                  <p className="mb-6 font-[family-name:var(--font-body)] text-sm leading-relaxed text-parchment-dark">
                    {cls.description}
                  </p>

                  {/* Separator */}
                  <div className="mb-4 h-px w-full bg-gold/10" aria-hidden="true" />

                  {/* Stat bars */}
                  <div className="flex flex-col gap-2" aria-label={`${cls.name} stats`}>
                    {cls.stats.map((stat) => (
                      <StatBar
                        key={stat.label}
                        label={stat.label}
                        value={stat.value}
                        colorClass={cls.colorBarFill}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
