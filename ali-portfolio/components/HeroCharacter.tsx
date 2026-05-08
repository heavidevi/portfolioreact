"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// load the Spline React component only on the client to avoid async Client Component errors
const Spline = dynamic(
  () => import("@splinetool/react-spline").then((m) => (m && (m as any).default) || m),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

interface HeroCharacterProps {
  contactBtnRef: React.RefObject<HTMLAnchorElement>;
  // This should be the path to your character image (PNG with transparent background recommended)
  characterImg?: string;
}

export default function HeroCharacter({ contactBtnRef, characterImg = "/HeroCharacter.png" }: HeroCharacterProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  // reference to any mounted <spline-viewer> web-component
  const webViewerRef = useRef<HTMLElement | null>(null);
  const [showFallback, setShowFallback] = useState(false);
  // whether the Spline canvas successfully initialized and should be shown as the main visual
  const [splineReady, setSplineReady] = useState(false);
  const sceneUrl = "https://prod.spline.design/mPTjk8dzhj8oeLFN/scene.splinecode";

  // notify other code that Spline is ready and provide a visible badge
  useEffect(() => {
    if (splineReady) {
      try { window.dispatchEvent(new CustomEvent('spline-ready')); } catch (e) { /* ignore */ }
      // helpful console hint for debugging
      // eslint-disable-next-line no-console
      console.log('[HeroCharacter] spline-ready');
    }
  }, [splineReady]);

  useEffect(() => {
    let mounted = true;
    const pollInterval = 250;
    const timeoutMs = 8000;
    let pollId: number | null = null;
    let timeoutId: number | null = null;

    const checkCanvas = () => {
      const parent = wrapperRef.current;
      if (!parent) return false;
      // look for any canvas inside the wrapper (Spline will use a canvas)
      const canvas = parent.querySelector("canvas");
      if (canvas && (canvas as HTMLCanvasElement).clientWidth > 0 && (canvas as HTMLCanvasElement).clientHeight > 0) {
        return true;
      }
      return false;
    };

    // start polling
    pollId = window.setInterval(() => {
      if (!mounted) return;
      if (checkCanvas()) {
        // mark Spline as ready and hide the placeholder image
        setSplineReady(true);
        setShowFallback(false);
        if (pollId) { clearInterval(pollId); pollId = null; }
        if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
      }
    }, pollInterval) as unknown as number;

    // fallback timeout
    timeoutId = window.setTimeout(() => {
      if (!mounted) return;
      // if still no canvas, show fallback
      if (!checkCanvas()) {
        // try the web-component runtime before giving up
        tryMountWebViewer().then((mountedViewer) => {
          if (mounted && mountedViewer) {
            setSplineReady(true);
            setShowFallback(false);
          } else {
            setShowFallback(true);
            setSplineReady(false);
          }
        });
      }
      if (pollId) { clearInterval(pollId); pollId = null; }
    }, timeoutMs) as unknown as number;

    // also react to explicit error events (from SplineWeb or other loaders)
    const onError = () => {
      if (!mounted) return;
      setShowFallback(true);
      setSplineReady(false);
      if (pollId) { clearInterval(pollId); pollId = null; }
      if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
    };
    window.addEventListener("spline-error", onError as EventListener);

    return () => {
      mounted = false;
      // cleanup web viewer if we created one
      try {
        if (webViewerRef.current && webViewerRef.current.parentElement) {
          webViewerRef.current.parentElement.removeChild(webViewerRef.current);
          webViewerRef.current = null;
        }
      } catch (e) { /* ignore cleanup errors */ }
      if (pollId) { clearInterval(pollId); pollId = null; }
      if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
      window.removeEventListener("spline-error", onError as EventListener);
    };
  }, []);

  // dynamic component may lack accurate TS types, cast to any for props
  const SplineAny: any = Spline as any;

  return (
    <div
      className="flex-shrink-0 relative flex items-center justify-center p-6 group"
      aria-hidden={false}
      style={{ ["--accent" as any]: "#d2ff00" }}
    >
      <div ref={wrapperRef} className="relative z-10 w-[512px] max-w-full h-[500px] max-h-full overflow-visible">

         {/* show the static placeholder only while Spline is not yet ready (and not when fallback is active) */}
         {!splineReady && !showFallback && (
           <img src={characterImg} alt="Base character" className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none" />
         )}

         {/* Spline canvas sits above the static image */}
         <div className="absolute inset-0 w-full h-full z-10">
          <SplineAny scene="https://prod.spline.design/mPTjk8dzhj8oeLFN/scene.splinecode" className="w-full h-full" />
         </div>

        {/* if Spline fails, show fallback above everything */}
        {showFallback && (
          <img
            src={characterImg}
            alt="Fallback character"
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
            style={{ display: "block" }}
          />
        )}
      </div>

      {/* Status Badge */}
      <div className="status-badge absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-[#111112]/80 backdrop-blur-md text-[12px] text-white/70 z-40 group-hover:z-0 transition-all">
        <span className="w-2 h-2 rounded-full bg-[#d2ff00] animate-pulse" />
        open to opportunities
      </div>
    </div>
  );
}