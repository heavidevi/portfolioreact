"use client";

import { motion } from "framer-motion";
import StickyNote, { type Project } from "./StickyNote";

const PROJECTS: Project[] = [
  {
    tag: "AI · SaaS",
    title: "Vetto",
    url: "ai-interview-bwai.vercel.app",
    shortDesc: "AI-powered hiring revolution. Automated interviews, candidate scoring, and bias-free screening.",
    overlayDesc: "End-to-end AI interview platform. Real-time voice analysis, behavioral scoring, and automated candidate ranking.",
    tech: ["Next.js", "GPT-4", "Whisper AI", "Supabase"],
    color: "#fef08a",
    rotation: -1.5,
  },
  {
    tag: "Web3 · Metaverse",
    title: "PSL Nexus",
    url: "psl-nexus-jet.vercel.app",
    shortDesc: "Blockchain-powered metaverse stadium ownership for Pakistan Super League.",
    overlayDesc: "Own virtual stadium seats as NFTs, earn from revenue sharing, and experience matches in immersive 3D.",
    tech: ["Solidity", "Three.js", "NFT", "MetaMask"],
    color: "#bbf7d0",
    rotation: 1,
  },
  {
    tag: "AI · Collaboration",
    title: "Ligma-DD",
    url: "ligma-dd.vercel.app",
    shortDesc: "Collaborative AI canvas with real-time sticky notes, whiteboards and shared intelligence.",
    overlayDesc: "Multi-user infinite canvas with AI-powered ideation. Create, link, and cluster ideas with real-time collaboration.",
    tech: ["React Flow", "WebSockets", "Claude API", "Liveblocks"],
    color: "#bfdbfe",
    rotation: -0.8,
  },
  {
    tag: "Agency · Branding",
    title: "NexGen Design",
    url: "nexgendesignllc.com",
    shortDesc: "Full-service creative agency. Branding, development, and digital strategy under one roof.",
    overlayDesc: "A boutique agency delivering end-to-end digital solutions—from logo to launch, brand voice to technical architecture.",
    tech: ["Next.js", "GSAP", "Figma", "Webflow"],
    color: "#fecaca",
    rotation: 1.8,
  },
  {
    tag: "AI · Media",
    title: "Rehnuma Times",
    url: "rehnumatimes.com",
    shortDesc: "AI-generated news bulletin platform. Automated journalism with human editorial oversight.",
    overlayDesc: "Automated news aggregation and AI-written summaries covering Pakistan's tech and business landscape in real-time.",
    tech: ["GPT-4", "RSS Feeds", "CMS", "NLP"],
    color: "#e9d5ff",
    rotation: -1.2,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const noteVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsWall() {
  return (
    <section id="projects" className="pb-10">
      {/* Section header */}
      <div className="flex items-baseline gap-4 mb-12 pt-20">
        <span
          className="text-xs opacity-60"
          style={{ fontFamily: "JetBrains Mono, monospace", color: "#D2FF00" }}
        >
          02 /
        </span>
        <h2
          className="text-5xl tracking-wider"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          WALL OF PROJECTS
        </h2>
      </div>

      {/* The Wall */}
      <div
        className="wall-grid border border-[#222] p-8 md:p-12 relative"
      >
        <span
          className="absolute -top-3 left-6 bg-[#111112] px-3 text-[10px] tracking-[3px] uppercase text-[#555]"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          STUDIO WALL — PINNED WORKS
        </span>

        <motion.div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={noteVariants}>
              <StickyNote project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
