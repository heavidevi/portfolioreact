"use client";

import { motion } from "framer-motion";

interface ExpertiseCard {
  num: string;
  tag: string;
  title: string;
  body: string;
  skills: string[];
  topOffset: string;
  zIndex: number;
  bg: string;
}

const CARDS: ExpertiseCard[] = [
  {
    num: "01",
    tag: "Core Engineering",
    title: "Full-Stack Architecture",
    body: "Building scalable, performant applications from database schema to pixel-perfect interfaces. Systems that handle real traffic, real edge cases, real users.",
    skills: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis"],
    topOffset: "88px",
    zIndex: 1,
    bg: "rgba(255,255,255,0.04)",
  },
  {
    num: "02",
    tag: "Creative Frontend",
    title: "Motion & Interaction Design",
    body: "Interfaces that breathe. Physics-based animations, scroll-driven narratives, and micro-interactions that make users pause and smile.",
    skills: ["Framer Motion", "GSAP", "Three.js", "Lenis", "Canvas API"],
    topOffset: "94px",
    zIndex: 2,
    bg: "rgba(255,255,255,0.05)",
  },
  {
    num: "03",
    tag: "Emerging Tech",
    title: "AI/ML Integration & Web3",
    body: "Wiring intelligence into products. LLM orchestration, RAG pipelines, smart contracts, and the architectural decisions that make AI reliable in production.",
    skills: ["OpenAI API", "LangChain", "Solidity", "Ethers.js", "Vector DBs"],
    topOffset: "100px",
    zIndex: 3,
    bg: "rgba(255,255,255,0.07)",
  },
  {
    num: "04",
    tag: "Product & Strategy",
    title: "Technical Leadership",
    body: "Translating vision into architecture. Sprint planning, code reviews, hiring decisions, and the soft skills that turn a group of engineers into a product team.",
    skills: ["System Design", "Team Lead", "Agile", "CI/CD", "AWS"],
    topOffset: "106px",
    zIndex: 4,
    bg: "rgba(255,255,255,0.09)",
  },
];

export default function ExpertiseStack() {
  return (
    <section className="pb-20">
      {/* Header */}
      <div className="flex items-baseline gap-4 mb-12 pt-20">
        <span
          className="text-xs opacity-60"
          style={{ fontFamily: "JetBrains Mono, monospace", color: "#D2FF00" }}
        >
          03 /
        </span>
        <h2
          className="text-5xl tracking-wider"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          EXPERTISE
        </h2>
      </div>

      {/* Stacking cards */}
      <div className="flex flex-col gap-0.5">
        {CARDS.map((card, index) => (
          <motion.div
            key={card.num}
            className="stack-card border-2 border-[#333] p-8"
            style={{
              position: "sticky",
              top: card.topOffset,
              zIndex: card.zIndex,
              background: card.bg,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Big number */}
            <div
              className="float-right text-6xl leading-none"
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                color: "rgba(255,255,255,0.06)",
              }}
            >
              {card.num}
            </div>

            {/* Tag */}
            <div
              className="text-[10px] tracking-[3px] uppercase mb-2"
              style={{ fontFamily: "JetBrains Mono, monospace", color: "#D2FF00" }}
            >
              {card.tag}
            </div>

            {/* Title */}
            <div className="text-2xl font-bold mb-3">{card.title}</div>

            {/* Body */}
            <p className="text-sm leading-relaxed text-[#888] max-w-[600px] mb-4">
              {card.body}
            </p>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {card.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
