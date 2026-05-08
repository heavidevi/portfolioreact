"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;

    async function initLenis() {
      try {
        const LenisModule = await import("@studio-freight/lenis");
        const Lenis = LenisModule.default;

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        lenisRef.current = lenis;

        let rafId: number;
        function raf(time: number) {
          lenis!.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(rafId);
          lenis?.destroy();
        };
      } catch {
        // Lenis not available, fall back to native scroll
        return () => {};
      }
    }

    const cleanup = initLenis();
    return () => {
      cleanup.then((fn) => fn?.());
    };
  }, []);

  return <>{children}</>;
}
