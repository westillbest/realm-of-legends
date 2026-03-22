import { cn } from "@/lib/utils";

interface OrnamentalDividerProps {
  variant?: "simple" | "diamond" | "sword" | "crown";
  className?: string;
}

function SimpleDivider() {
  return (
    <svg
      width="240"
      height="20"
      viewBox="0 0 240 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="0" y1="10" x2="108" y2="10" stroke="currentColor" strokeWidth="1" />
      <line x1="132" y1="10" x2="240" y2="10" stroke="currentColor" strokeWidth="1" />
      <circle cx="120" cy="10" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="120" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
}

function DiamondDivider() {
  return (
    <svg
      width="280"
      height="24"
      viewBox="0 0 280 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left arm */}
      <line x1="0" y1="12" x2="118" y2="12" stroke="currentColor" strokeWidth="1" />
      {/* Right arm */}
      <line x1="162" y1="12" x2="280" y2="12" stroke="currentColor" strokeWidth="1" />
      {/* Small left dot */}
      <circle cx="108" cy="12" r="2" fill="currentColor" />
      {/* Small right dot */}
      <circle cx="172" cy="12" r="2" fill="currentColor" />
      {/* Center diamond */}
      <rect
        x="131"
        y="5"
        width="14"
        height="14"
        rx="0"
        transform="rotate(45 138 12)"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Inner diamond accent */}
      <rect
        x="134.5"
        y="8.5"
        width="7"
        height="7"
        transform="rotate(45 138 12)"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

function SwordDivider() {
  return (
    <svg
      width="300"
      height="24"
      viewBox="0 0 300 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Blade — tapers from left toward center */}
      <path
        d="M0 12 L132 10 L136 8 L140 12 L136 16 L132 14 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        opacity="0.4"
      />
      {/* Right side blade mirrored */}
      <path
        d="M300 12 L168 10 L164 8 L160 12 L164 16 L168 14 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        opacity="0.4"
      />
      {/* Cross-guard horizontal bar */}
      <rect x="144" y="5" width="12" height="3" rx="0.5" fill="currentColor" opacity="0.8" />
      <rect x="144" y="16" width="12" height="3" rx="0.5" fill="currentColor" opacity="0.8" />
      {/* Grip */}
      <rect x="147" y="8" width="6" height="8" rx="1" fill="currentColor" opacity="0.6" />
      {/* Pommel */}
      <circle cx="150" cy="12" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

function CrownDivider() {
  return (
    <svg
      width="260"
      height="36"
      viewBox="0 0 260 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left line */}
      <line x1="0" y1="28" x2="90" y2="28" stroke="currentColor" strokeWidth="1" />
      {/* Right line */}
      <line x1="170" y1="28" x2="260" y2="28" stroke="currentColor" strokeWidth="1" />
      {/* Crown base */}
      <rect x="90" y="25" width="80" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Left prong */}
      <path
        d="M100 25 L100 14 L107 20 L114 10 L114 25"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Center prong — tallest */}
      <path
        d="M114 25 L114 14 L122 20 L130 4 L138 20 L146 14 L146 25"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Right prong */}
      <path
        d="M146 25 L146 14 L153 20 L160 10 L160 25"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Crown jewel dots */}
      <circle cx="114" cy="10" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="130" cy="4" r="2.5" fill="currentColor" />
      <circle cx="146" cy="10" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

const VARIANT_MAP = {
  simple: SimpleDivider,
  diamond: DiamondDivider,
  sword: SwordDivider,
  crown: CrownDivider,
} as const;

export function OrnamentalDivider({
  variant = "diamond",
  className,
}: OrnamentalDividerProps) {
  const DividerComponent = VARIANT_MAP[variant];

  return (
    <div
      className={cn("flex items-center justify-center text-gold/30", className)}
    >
      <DividerComponent />
    </div>
  );
}
