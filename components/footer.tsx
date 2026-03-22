export function Footer() {
  return (
    <footer className="border-t border-t-gold/20 bg-stone-dark py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg text-gold">
              Realm of Legends
            </p>
            <p className="mt-1 font-[family-name:var(--font-ui)] text-xs text-silver">
              A Medieval Fantasy RPG Experience
            </p>
          </div>

          <div className="flex gap-8">
            <a
              href="#"
              className="rounded px-2 py-1 font-[family-name:var(--font-ui)] text-xs text-silver transition-colors hover:text-parchment focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              Privacy
            </a>
            <a
              href="#"
              className="rounded px-2 py-1 font-[family-name:var(--font-ui)] text-xs text-silver transition-colors hover:text-parchment focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              Terms
            </a>
            <a
              href="#"
              className="rounded px-2 py-1 font-[family-name:var(--font-ui)] text-xs text-silver transition-colors hover:text-parchment focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gold/5 pt-6 text-center">
          <p className="font-[family-name:var(--font-ui)] text-xs text-silver">
            &copy; {new Date().getFullYear()} Realm of Legends. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
