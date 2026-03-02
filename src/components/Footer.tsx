export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-6 py-12 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <span className="font-serif text-sm font-light tracking-[0.15em] uppercase">
          Ikaze Burundi &middot; Le C&oelig;ur de l&apos;Afrique
        </span>

        <div className="flex gap-8">
          {["Instagram", "Facebook", "LinkedIn"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs uppercase tracking-[0.2em] text-foreground/40 transition-colors duration-300 hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>

        <span className="text-xs text-foreground/30">
          &copy; {new Date().getFullYear()} Tous droits réservés
        </span>
      </div>
    </footer>
  );
}
