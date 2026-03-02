"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.from(nav, {
      y: -30,
      opacity: 0,
      duration: 1.2,
      delay: 1,
      ease: "power3.out",
    });

    ScrollTrigger.create({
      start: "100 top",
      onUpdate: (self) => {
        setScrolled(self.progress > 0);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6 transition-all duration-700 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <span className="font-serif text-xl font-medium tracking-[0.15em] uppercase">
        <span
          className={
            scrolled
              ? "text-foreground"
              : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          }
        >
          Ikaze Burundi
        </span>
      </span>

      <div className="flex gap-8">
        {[
          { label: "Destinations", href: "#destinations" },
          { label: "Culture", href: "#culture" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-500 hover:opacity-60 ${
              scrolled
                ? "text-foreground"
                : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
