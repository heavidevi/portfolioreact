"use client";

import React, { useEffect, useState } from "react";

export default function SplineScene({
  scene,
  className,
  width,
  height,
  style,
}: {
  scene: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}) {
  const [SplineComp, setSplineComp] = useState<any | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setStatus("loading");
    const timeoutMs = 10000;
    const timer = setTimeout(() => {
      if (mounted && status !== "loaded") {
        setStatus("error");
        setErrorMsg(`Spline import timed out after ${timeoutMs}ms`);
      }
    }, timeoutMs);

    import("@splinetool/react-spline/next")
      .then((mod) => {
        if (!mounted) return;
        const Comp = (mod && (mod as any).default) || mod;
        if (!Comp) throw new Error("Spline module did not export a component");
        setSplineComp(() => Comp);
        setStatus("loaded");
      })
      .catch((err) => {
        console.error("Spline import error:", err);
        if (!mounted) return;
        setErrorMsg(String(err?.message || err));
        setStatus("error");
      })
      .finally(() => clearTimeout(timer));

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
    // intentionally no deps other than scene would re-run import if scene changes
  }, [scene]);

  const areaStyle: React.CSSProperties = {
    width: width ? width : "100%",
    height: height ? height : "100%",
    position: "relative",
    ...style,
  };

  if (status === "loading") {
    return (
      <div className={className} style={areaStyle}>
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          Loading Spline…
        </div>
      </div>
    );
  }

  if (status === "error" || !SplineComp) {
    return (
      <div className={className} style={areaStyle}>
        <div style={{ padding: 12, fontSize: 13, color: "#fff" }}>
          <strong>Spline failed to load</strong>
          <div style={{ marginTop: 8, color: "#ccc", fontSize: 12 }}>{errorMsg || "Check console/network for details."}</div>
          <div style={{ marginTop: 10, color: "#999", fontSize: 12 }}>Fallback: you can use &lt;spline-viewer&gt; or verify the .splinecode URL.</div>
        </div>
      </div>
    );
  }

  const SplineAny = SplineComp as any;
  return (
    <div className={className} style={areaStyle}>
      <SplineAny
        scene={scene}
        width={width}
        height={height}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      />
    </div>
  );
}
