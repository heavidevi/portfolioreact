"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import HeroCharacter from "./HeroCharacter";
import Starfield from "./Starfield";

export default function HeroSection() {
  const contactBtnRef = useRef<HTMLAnchorElement>(null);

  return (
    <section className="min-h-[90vh] flex items-center py-16 gap-12 relative flex-wrap lg:flex-nowrap">
      {/* background starfield with Three.js */}
      <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full">
        <Starfield starCount={5000} maxScroll={100} />
      </div>

      {/* Text side */}
      <motion.div
        className="flex-1 relative z-10 min-w-[300px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center gap-2 mb-4 text-xs tracking-[4px] uppercase"
          style={{ fontFamily: "JetBrains Mono, monospace", color: "#D2FF00" }}
        >
          <span className="w-6 h-px bg-[#D2FF00]" />
          Available for work
        </div>

        {/* Name */}
        <h1
          className="leading-[0.9] tracking-wide mb-2"
          style={{
            display: "inline-block", // shrink to the width of "MUHAMMAD"
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(60px, 9vw, 110px)",
            color: "#F5F5F0",
          }}
        >
          <span style={{ display: "block", whiteSpace: "nowrap" }}>MUHAMMAD</span>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%", // will match the inline-block h1 width
            }}
          >
            <span style={{ color: "#D2FF00" }}>ALI</span>
            <span>ADEEL</span>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-8 leading-relaxed max-w-[500px]"
          style={{ fontSize: "clamp(14px, 2vw, 18px)", color: "#888" }}
        >
          <strong style={{ color: "#F5F5F0" }}>A Creative Developer</strong>{" "}
          crafting immersive digital experiences. Full-stack engineer who thinks in
          systems, designs in extremes.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap items-center">
          <motion.a
            ref={contactBtnRef}
            href="mailto:aliadeel2k19@gmail.com"
            className="btn-brutal"
            id="contact-btn"
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ x: 2, y: 2 }}
            style={{ boxShadow: "4px 4px 0 #000" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 3l6 4 6-4M1 3v8h12V3H1z" stroke="#000" strokeWidth="1.5" />
            </svg>
            Contact Me
          </motion.a>

          <motion.a
            href="/cv-muhammad-ali-adeel.pdf"
            download
            className="btn-outline"
            whileHover={{ borderColor: "#D2FF00", color: "#D2FF00" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Download CV
          </motion.a>
        </div>
      </motion.div>

      {/* Character side */}
      <motion.div
        className="flex-shrink-0 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroCharacter contactBtnRef={contactBtnRef} />
      </motion.div>
    </section>
  );
}
