"use client";

import { motion } from "framer-motion";

export interface Project {
  tag: string;
  title: string;
  url: string;
  shortDesc: string;
  overlayDesc: string;
  tech: string[];
  color: string;
  rotation: number;
}

interface StickyNoteProps {
  project: Project;
}

export default function StickyNote({ project }: StickyNoteProps) {
  return (
    <motion.div
      className="sticky-note relative"
      style={{ background: project.color, rotate: project.rotation }}
      whileHover={{
        rotate: 0,
        scale: 1.08,
        zIndex: 10,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Push pin */}
      <div className="sticky-pin" />

      {/* Note content */}
      <span
        className="inline-block mb-2 text-[9px] font-bold tracking-[2px] uppercase px-2 py-1"
        style={{
          background: "rgba(0,0,0,0.12)",
          borderRadius: "2px",
          fontFamily: "JetBrains Mono, monospace",
          color: "#1a1a0a",
        }}
      >
        {project.tag}
      </span>

      <div
        className="text-[17px] font-bold mb-1 leading-tight text-[#1a1a0a]"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        {project.title}
      </div>

      <div
        className="text-[9px] mb-2 opacity-60 break-all text-[#1a1a0a]"
        style={{ fontFamily: "JetBrains Mono, monospace" }}
      >
        {project.url}
      </div>

      <div className="text-[12px] leading-relaxed opacity-80 text-[#1a1a0a]">
        {project.shortDesc}
      </div>

      {/* Glassmorphic overlay on hover */}
      <div className="sticky-overlay">
        <div
          className="text-[15px] font-bold mb-2"
          style={{ color: "#D2FF00" }}
        >
          {project.title}
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>

        <p
          className="text-[12px] leading-relaxed mb-3"
          style={{ color: "#ccc" }}
        >
          {project.overlayDesc}
        </p>

        <a
          href={`https://${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-wider pb-0.5 self-start"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: "#D2FF00",
            borderBottom: "1px solid #D2FF00",
            textDecoration: "none",
          }}
        >
          ↗ View Project
        </a>
      </div>
    </motion.div>
  );
}
