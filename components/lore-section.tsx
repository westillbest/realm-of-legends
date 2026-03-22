import { ScrollReveal } from "./scroll-reveal";
import { OrnamentalDivider } from "./ornamental-divider";
import { cn } from "@/lib/utils";

const LORE_CHAPTERS = [
  {
    numeral: "I",
    chapter: "Chapter One",
    title: "The Age of Awakening",
    text: "In the dawn of time, when the world was young and the stars still sang, five Primordial Dragons breathed life into the realm. Their power shaped mountains, carved rivers, and ignited the first flames of civilization.",
  },
  {
    numeral: "II",
    chapter: "Chapter Two",
    title: "The Shattered Crown",
    text: "A thousand years of peace ended when the Obsidian King shattered the Crown of Unity, plunging the realm into an age of darkness. Kingdoms fell, alliances crumbled, and the ancient magic began to fade from the land.",
  },
  {
    numeral: "III",
    chapter: "Chapter Three",
    title: "The Prophecy",
    text: "Now, the seers speak of a new hero — one who will unite the fractured kingdoms, reforge the Crown, and restore the balance between light and shadow. The realm calls to those brave enough to answer.",
  },
] as const;

const DIRECTION_MAP = ["left", "right", "left"] as const;

export function LoreSection() {
  return (
    <section
      id="lore"
      className="relative min-h-screen bg-gradient-to-b from-stone via-stone-light/30 to-stone py-32"
      aria-label="World Lore"
    >
      {/* Subtle parchment texture overlay */}
      <div className="bg-parchment-texture pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Section header */}
        <ScrollReveal>
          <p className="mb-3 text-center font-[family-name:var(--font-ui)] text-sm tracking-[0.3em] text-gold uppercase">
            The Story
          </p>
          <h2 className="mb-6 text-center font-[family-name:var(--font-display)] text-4xl font-bold text-parchment text-shadow-glow-sm md:text-5xl">
            A World Forged in Legend
          </h2>
          <OrnamentalDivider variant="diamond" className="mb-20" />
        </ScrollReveal>

        {/* Lore cards */}
        <div className="space-y-24">
          {LORE_CHAPTERS.map((lore, i) => (
            <ScrollReveal
              key={lore.title}
              direction={DIRECTION_MAP[i]}
              delay={0.1}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-sm",
                  "border border-gold/15 border-l-4 border-l-gold/40",
                  "bg-stone-light",
                  "p-8 md:p-12",
                  // Top inner highlight
                  "shadow-[inset_0_1px_0_rgba(212,168,67,0.12),0_4px_32px_rgba(0,0,0,0.4)]"
                )}
              >
                {/* Large decorative chapter numeral behind content */}
                <span
                  className="pointer-events-none absolute -top-6 -left-2 select-none font-[family-name:var(--font-display)] text-[80px] leading-none text-gold/[0.03]"
                  aria-hidden="true"
                >
                  {lore.numeral}
                </span>

                {/* Chapter label */}
                <div className="relative mb-2 font-[family-name:var(--font-ui)] text-xs tracking-[0.2em] text-gold/60 uppercase">
                  {lore.chapter}
                </div>

                {/* Card title */}
                <h3 className="relative mb-4 font-[family-name:var(--font-heading)] text-2xl text-gold md:text-3xl">
                  {lore.title}
                </h3>

                {/* Body copy */}
                <p className="relative font-[family-name:var(--font-body)] text-lg leading-relaxed text-parchment-dark">
                  {lore.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom ornamental divider */}
      <div className="relative z-10 mt-32">
        <OrnamentalDivider variant="diamond" className="opacity-60" />
      </div>
    </section>
  );
}
