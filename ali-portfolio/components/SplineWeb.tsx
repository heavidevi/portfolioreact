"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SplineWeb({ url, className, style, fallbackSrc }: { url: string; className?: string; style?: React.CSSProperties; fallbackSrc?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const parent = ref.current;
    if (!parent) return;

    let viewer: HTMLElement | null = null;
    let mounted = true;
    let pollId: number | null = null;
    let timeoutId: number | null = null;

    const importRuntime = async () => {
      try {
        // import the runtime locally
        await import("@splinetool/runtime");

        if (!mounted || !parent) return;
        viewer = document.createElement("spline-viewer");
        viewer.setAttribute("url", url);
        viewer.setAttribute("events-target", "global");
        viewer.style.width = "100%";
        viewer.style.height = "100%";
        viewer.style.display = "block";
        parent.appendChild(viewer);

        // start polling for a canvas inside the viewer shadow root
        const start = Date.now();
        pollId = window.setInterval(() => {
          try {
            if (!mounted || !viewer) return;
            const sr = (viewer as any).shadowRoot;
            const canvas = sr?.querySelector("canvas");
            const rect = viewer.getBoundingClientRect();
            if (canvas || (rect && rect.width > 0 && rect.height > 0)) {
              // ready - hide fallback and show Spline
              if (mounted) setSplineLoaded(true);
              window.dispatchEvent(new CustomEvent("spline-ready"));
              if (pollId) {
                clearInterval(pollId);
                pollId = null;
              }
              if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
              }
            }
            // safety: stop after 10s
            if (Date.now() - start > 10000) {
              if (pollId) { clearInterval(pollId); pollId = null; }
              if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
              // on timeout, keep fallback visible and don't error
              console.warn("Spline viewer did not initialize in time, keeping fallback image");
              if (viewer && parent && parent.contains(viewer)) {
                try { parent.removeChild(viewer); } catch (e) { /* ignore */ }
              }
              viewer = null;
            }
          } catch (err) {
            console.warn("SplineWeb poll error:", err);
          }
        }, 250);

        // set overall timeout
        timeoutId = window.setTimeout(() => {
          if (pollId) { clearInterval(pollId); pollId = null; }
          console.warn("Spline runtime import timeout, keeping fallback image");
          if (viewer && parent && parent.contains(viewer)) {
            try { parent.removeChild(viewer); } catch (e) { /* ignore */ }
          }
          viewer = null;
        }, 12000);

      } catch (err) {
        console.warn("Spline runtime import failed, keeping fallback image:", err);
        // gracefully fail - keep fallback visible
      }
    };

    importRuntime();

    return () => {
      mounted = false;
      if (pollId) { clearInterval(pollId); pollId = null; }
      if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
      try {
        if (viewer && parent && parent.contains(viewer)) parent.removeChild(viewer);
      } catch (e) {
        /* ignore */
      }
    };
  }, [url]);

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ width: "100%", height: "100%", position: "relative", ...style }}
    >
      {/* Fallback image - visible by default, hidden when Spline loads */}
      {!splineLoaded && fallbackSrc && (
        <img 
          src={fallbackSrc} 
          alt="Hero character fallback" 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "contain",
            display: "block"
          }} 
        />
      )}
    </div>
  );
}