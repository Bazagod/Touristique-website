"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    if (!section || !image || !title || !subtitle) return;

    gsap.set(title, { y: 60, opacity: 0 });
    gsap.set(subtitle, { y: 30, opacity: 0 });

    gsap.to(title, {
      y: 0,
      opacity: 1,
      duration: 1.4,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.to(subtitle, {
      y: 0,
      opacity: 1,
      duration: 1.4,
      delay: 0.6,
      ease: "power3.out",
    });

    gsap.to(image, {
      scale: 1.15,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "80% top",
        scrub: 1,
      },
    });

    tl.to(title, { y: -100, opacity: 0 }, 0);
    tl.to(subtitle, { y: -60, opacity: 0 }, 0.1);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1672575659188-e7dd57652db3?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/50 to-black/70" />

      <div className="relative z-[2] flex flex-col items-center px-6 text-center text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
        <p
          ref={subtitleRef}
          className="mb-6 text-sm font-medium uppercase tracking-[0.4em]"
        >
          Ikaze &mdash; Bienvenue
        </p>
        <h1
          ref={titleRef}
          className="font-serif text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.04em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          Découvrez le
          <br />
          <span className="italic">Burundi</span>
        </h1>
        <p className="mt-8 max-w-lg text-lg font-normal leading-relaxed">
          Le C&oelig;ur de l&apos;Afrique vous attend. Lac Tanganyika, Source du Nil, Tambourinaires et mille collines.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 z-[2] -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          <span className="text-xs font-medium uppercase tracking-[0.25em]">Explorer</span>
          <div className="h-12 w-px bg-white/60" />
        </div>
      </div>
    </section>
  );
}
