"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollRevealText from "./ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      id="culture"
      className="flex min-h-screen items-center px-6 py-40 md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex items-center gap-6">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">
            Culture & Patrimoine
          </span>
          <div
            ref={lineRef}
            className="h-px flex-1 origin-left bg-accent/30"
          />
        </div>

        <ScrollRevealText
          tag="blockquote"
          className="font-serif text-[clamp(1.8rem,4vw,4rem)] font-light italic leading-[1.3] tracking-[-0.01em]"
        >
          Le Burundi vibre au rythme des Tambourinaires royaux, patrimoine vivant classé par l'UNESCO. Ici, chaque colline raconte une légende, chaque danse porte l'âme d'un peuple fier et accueillant.
        </ScrollRevealText>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Tambourinaires",
              text: "Les Tambourinaires royaux du Burundi sont inscrits au patrimoine immatériel de l'UNESCO. Leur danse rituelle autour des tambours Ingoma est un spectacle sacré transmis depuis des siècles.",
            },
            {
              number: "02",
              title: "Intore",
              text: "La danse guerrière Intore est un ballet de force et de grâce. Les danseurs portent des coiffes ornées et racontent par leurs mouvements l'histoire héroïque du Burundi.",
            },
            {
              number: "03",
              title: "Artisanat",
              text: "Paniers tressés d'Ibitoke, poteries de Giheta, sculptures en bois de Gitega — l'artisanat burundais est un art vivant qui se transmet de génération en génération.",
            },
          ].map((item) => (
            <div key={item.number} className="group">
              <span className="text-5xl font-extralight text-accent/30">
                {item.number}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-light italic">
                {item.title}
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-foreground/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
