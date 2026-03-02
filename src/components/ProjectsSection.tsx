"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxImage from "./ParallaxImage";
import ScrollRevealText from "./ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    title: "Lac Tanganyika & Plage de Saga",
    description:
      "Plongez dans les eaux cristallines du lac Tanganyika, le deuxième lac le plus profond au monde. La plage de Saga offre des couchers de soleil inoubliables, tandis que le parc national de la Rusizi vous fait découvrir hippopotames, crocodiles et palmeraies sauvages.",
    image:
      "https://images.unsplash.com/photo-1680200023508-5289ae3de157?w=1200&q=80",
    tag: "Nature & Détente",
    location: "Bujumbura",
  },
  {
    title: "Route du Thé & Mont Heha",
    description:
      "Parcourez les plantations de thé de Teza à travers les collines verdoyantes de Muramvya. Grimpez jusqu'au Mont Heha, point culminant du Burundi à 2 670 m, pour une vue panoramique sur le pays des mille collines.",
    image:
      "https://images.unsplash.com/photo-1672575659699-33e02d8a51a5?w=1200&q=80",
    tag: "Randonnée & Éco-tourisme",
    location: "Muramvya",
  },
  {
    title: "Chutes de Karera & Source du Nil",
    description:
      "Contemplez les chutes de Karera, cascades majestueuses nichées dans la forêt tropicale de Rutana. À Rutovu, découvrez la source la plus méridionale du Nil — le berceau sacré du plus long fleuve d'Afrique.",
    image:
      "https://images.unsplash.com/photo-1675975680141-154c90876e8e?w=1200&q=80",
    tag: "Aventure & Découverte",
    location: "Rutana & Bururi",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    gsap.fromTo(
      title,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="px-6 py-32 md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          ref={titleRef}
          className="font-serif text-[clamp(2rem,5vw,5rem)] font-light leading-tight tracking-[-0.02em]"
        >
          Destinations <span className="italic">incontournables</span>
        </h2>

        <div className="mt-24 space-y-40">
          {destinations.map((dest, index) => (
            <article
              key={dest.title}
              className={`flex flex-col gap-12 ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } lg:items-center lg:gap-20`}
            >
              <div className="lg:w-3/5">
                <ParallaxImage
                  src={dest.image}
                  alt={dest.title}
                  className="aspect-[4/3] w-full"
                />
              </div>

              <div className="flex flex-col gap-6 lg:w-2/5">
                <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-accent">
                  <span>{dest.tag}</span>
                  <span className="h-px w-8 bg-accent" />
                  <span>{dest.location}</span>
                </div>

                <h3 className="font-serif text-[clamp(1.5rem,3vw,3rem)] font-light leading-tight">
                  {dest.title}
                </h3>

                <ScrollRevealText className="text-lg font-light leading-relaxed text-foreground/70">
                  {dest.description}
                </ScrollRevealText>

                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em]"
                >
                  <span>Explorer</span>
                  <span className="inline-block h-px w-8 bg-foreground transition-all duration-500 group-hover:w-14" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
