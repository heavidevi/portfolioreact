"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const trailPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateTrail = () => {
      trailPos.current.x +=
        (mousePos.current.x - trailPos.current.x) * 0.12;
      trailPos.current.y +=
        (mousePos.current.y - trailPos.current.y) * 0.12;

      if (trailRef.current) {
        trailRef.current.style.left = `${trailPos.current.x}px`;
        trailRef.current.style.top = `${trailPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animateTrail);
    };

    rafRef.current = requestAnimationFrame(animateTrail);

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        "a, button, .sticky-note, .contact-item, .skill-pill, [data-hoverable]"
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    // Run after DOM is ready
    const timeout = setTimeout(addHoverListeners, 500);

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor ${isHovering ? "hovering" : ""}`}
      />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}
