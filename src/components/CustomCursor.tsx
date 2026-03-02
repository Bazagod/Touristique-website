"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      gsap.to(cursor, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const updateFollower = () => {
      pos.x += (mouse.x - pos.x) * 0.08;
      pos.y += (mouse.y - pos.y) * 0.08;

      gsap.set(follower, {
        x: pos.x,
        y: pos.y,
      });

      requestAnimationFrame(updateFollower);
    };

    const handleMouseEnterLink = () => {
      gsap.to(follower, {
        scale: 2.5,
        opacity: 0.15,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(cursor, {
        scale: 0,
        duration: 0.3,
      });
    };

    const handleMouseLeaveLink = () => {
      gsap.to(follower, {
        scale: 1,
        opacity: 0.3,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateFollower();

    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnterLink);
      link.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnterLink);
        link.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-2 w-2 rounded-full bg-foreground" />
      </div>
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-10 w-10 rounded-full border border-foreground opacity-30" />
      </div>
    </>
  );
}
