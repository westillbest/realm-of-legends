import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import { SectionPlaceholder } from "@/components/section-placeholder";

const LoreSection = dynamic(
  () => import("@/components/lore-section").then((m) => ({ default: m.LoreSection })),
  { loading: () => <SectionPlaceholder /> }
);

const ClassesSection = dynamic(
  () =>
    import("@/components/classes-section").then((m) => ({ default: m.ClassesSection })),
  { loading: () => <SectionPlaceholder /> }
);

const WorldMapSection = dynamic(
  () =>
    import("@/components/world-map-section").then((m) => ({
      default: m.WorldMapSection,
    })),
  { loading: () => <SectionPlaceholder /> }
);

const CtaSection = dynamic(
  () => import("@/components/cta-section").then((m) => ({ default: m.CtaSection })),
  { loading: () => <SectionPlaceholder /> }
);

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <LoreSection />
        <ClassesSection />
        <WorldMapSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
