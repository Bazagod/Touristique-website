"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const elements = content.querySelectorAll("[data-animate]");

    gsap.fromTo(
      elements,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551357275-bbcd128e1515?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/60 to-black/75" />

      <div
        ref={contentRef}
        className="relative z-[2] mx-auto w-full max-w-5xl px-6 py-32 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] md:px-16"
      >
        <p
          data-animate
          className="text-xs font-medium uppercase tracking-[0.4em] text-white/70"
        >
          Planifiez votre voyage
        </p>

        <h2
          data-animate
          className="mt-6 font-serif text-[clamp(2.5rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.03em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
        >
          Partez au
          <br />
          <span className="italic">C&oelig;ur de l&apos;Afrique</span>
        </h2>

        <div data-animate className="mt-16 flex flex-col gap-8 md:flex-row md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
              Office du tourisme
            </p>
            <p className="mt-3 text-lg font-normal leading-relaxed">
              Boulevard de l&apos;Uprona
              <br />
              Bujumbura, Burundi
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
              Réservations
            </p>
            <p className="mt-3 text-lg font-normal leading-relaxed">
              info@ikaze-burundi.bi
              <br />
              +257 00 00 00 00
            </p>
          </div>
        </div>

        <div data-animate className="mt-16">
          <a
            href="mailto:info@ikaze-burundi.bi"
            className="group inline-flex items-center gap-4 border border-white/30 px-10 py-5 text-sm font-medium uppercase tracking-[0.25em] transition-all duration-500 hover:border-white/70 hover:bg-white/10"
          >
            <span>Réserver un voyage</span>
            <span className="inline-block h-px w-6 bg-white transition-all duration-500 group-hover:w-12" />
          </a>
        </div>
      </div>
    </section>
  );
}
