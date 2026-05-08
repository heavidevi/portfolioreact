"use client";

import { motion } from "framer-motion";

interface ComingSoonProps {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function ComingSoon({
  emoji,
  title,
  subtitle,
  description,
}: ComingSoonProps) {
  return (
    <motion.div
      className="coming-soon-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ fontSize: "64px", filter: "grayscale(1)", opacity: 0.3 }}>
        {emoji}
      </div>
      <div
        style={{
          fontFamily: "Bebas Neue, sans-serif",
          fontSize: "48px",
          color: "#444",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          color: "#555",
          letterSpacing: "3px",
        }}
      >
        {subtitle}
      </div>
      <p
        className="max-w-md text-center leading-relaxed"
        style={{ fontSize: "13px", color: "#555", marginTop: "8px" }}
      >
        {description}
      </p>
    </motion.div>
  );
}
