"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
  children: string;
  className?: string;
  tag?: "p" | "h2" | "h3" | "blockquote";
}

export default function ScrollRevealText({
  children,
  className = "",
  tag: Tag = "p",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const wordArray = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll<HTMLSpanElement>(".char");
    if (chars.length === 0) return;

    gsap.set(chars, { opacity: 0.15 });

    const tween = gsap.to(chars, {
      opacity: 1,
      stagger: 0.03,
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "bottom 40%",
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [children]);

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        {wordArray.map((word, wi) => (
          <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {word.split("").map((char, ci) => (
              <span
                key={ci}
                className="char"
                style={{ display: "inline-block" }}
              >
                {char}
              </span>
            ))}
            {wi < wordArray.length - 1 && (
              <span
                className="char"
                style={{ display: "inline-block", width: "0.3em" }}
              >
                {" "}
              </span>
            )}
          </span>
        ))}
      </Tag>
    </div>
  );
}
