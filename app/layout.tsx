import type { Metadata } from "next";
import {
  Cinzel_Decorative,
  MedievalSharp,
  Cinzel,
  Inter,
} from "next/font/google";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const medievalSharp = MedievalSharp({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Realm of Legends — Enter the Medieval Fantasy",
  description:
    "Embark on an epic quest through a Dungeons & Dragons-inspired medieval fantasy world. Choose your class, explore vast kingdoms, and forge your legend.",
  keywords: [
    "RPG",
    "medieval",
    "fantasy",
    "D&D",
    "dungeons and dragons",
    "game",
    "adventure",
  ],
  openGraph: {
    title: "Realm of Legends — Enter the Medieval Fantasy",
    description:
      "Forge your destiny in a world of ancient magic, fearsome creatures, and legendary quests.",
    type: "website",
    siteName: "Realm of Legends",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realm of Legends — Enter the Medieval Fantasy",
    description:
      "Forge your destiny in a world of ancient magic, fearsome creatures, and legendary quests.",
  },
  other: {
    "theme-color": "#1A1A2E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzelDecorative.variable} ${medievalSharp.variable} ${cinzel.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
