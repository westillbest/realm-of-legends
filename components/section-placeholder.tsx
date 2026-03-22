import { cn } from "@/lib/utils";

interface SectionPlaceholderProps {
  className?: string;
}

export function SectionPlaceholder({ className }: SectionPlaceholderProps) {
  return (
    <div
      className={cn(
        "min-h-screen w-full bg-[#1A1A2E] flex items-center justify-center",
        className
      )}
    >
      <span
        className={cn(
          "block h-4 w-4 rounded-full bg-[#D4A843]",
          "animate-pulse shadow-[0_0_12px_4px_rgba(212,168,67,0.5)]"
        )}
        aria-label="Loading section"
        role="status"
      />
    </div>
  );
}
