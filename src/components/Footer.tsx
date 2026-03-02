export default function Footer() {
  return (
    <footer className="border-t border-foreground/20 bg-background px-6 pt-12 pb-6 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <span className="font-serif text-sm font-light tracking-[0.15em] uppercase text-foreground">
          Ikaze Burundi &middot; Le C&oelig;ur de l&apos;Afrique
        </span>

        <div className="flex gap-8">
          {["Instagram", "Facebook", "LinkedIn"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors duration-300 hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>

        <span className="text-xs text-foreground/60">
          &copy; {new Date().getFullYear()} Tous droits réservés
        </span>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center gap-1 border-t border-foreground/10 pt-6">
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">
          Conçu &amp; Développé par
        </span>
        <a
          href="https://github.com/bazagod"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-xs font-medium tracking-[0.25em] uppercase text-foreground/60 transition-colors duration-300 hover:text-foreground"
        >
          Bazagod
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground/60 transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
    </footer>
  );
}
