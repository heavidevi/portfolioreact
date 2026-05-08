"use client";

import { useState } from "react";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import TabSwitcher from "@/components/TabSwitcher";
import HeroSection from "@/components/HeroSection";
import ProjectsWall from "@/components/ProjectsWall";
import ExpertiseStack from "@/components/ExpertiseStack";
import ContactSection from "@/components/ContactSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ComingSoon from "@/components/ComingSoon";
import SmoothScroll from "@/components/SmoothScroll";

export type Tab = "developer" | "teacher" | "writer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("developer");

  return (
    <SmoothScroll>
      <CustomCursor />
      <BackgroundEffects />

      <div
        className="relative z-10 max-w-[1200px] mx-auto px-6"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        {/* Sticky Nav */}
        <nav
          className="flex items-center justify-between py-5 sticky top-0 z-50 border-b border-white/10"
          style={{
            background: "rgba(17,17,18,0.8)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            className="text-accent text-3xl tracking-widest"
            style={{ fontFamily: "Bebas Neue, sans-serif", color: "#D2FF00" }}
          >
            MAA
          </span>
          <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
        </nav>

        {/* Tab: Developer */}
        {activeTab === "developer" && (
          <div className="tab-warp">
            <HeroSection />
            <MarqueeBanner />
            <ProjectsWall />
            <ExpertiseStack />
            <ContactSection />
          </div>
        )}

        {/* Tab: Teacher */}
        {activeTab === "teacher" && (
          <div className="tab-warp">
            <ComingSoon
              emoji="📚"
              title="TEACHER MODE"
              subtitle="// curriculum loading... soon"
              description="This space will feature courses, workshops, and teaching materials. Ali has mentored 100+ developers across Karachi's tech scene."
            />
          </div>
        )}

        {/* Tab: Writer */}
        {activeTab === "writer" && (
          <div className="tab-warp">
            <ComingSoon
              emoji="✍️"
              title="WRITER MODE"
              subtitle="// articles drafting... soon"
              description="Technical essays, product teardowns, and opinions on the future of software. Writing that punches like the code behind it."
            />
          </div>
        )}

        {/* Footer */}
        <footer className="border-t border-white/10 py-6 flex justify-between items-center">
          <span
            className="text-xs text-neutral-600"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            © 2025 Muhammad Ali Adeel
          </span>
          <span
            className="text-xs text-neutral-600"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Designed with{" "}
            <span style={{ color: "#D2FF00" }}>■</span> and excessive caffeine
          </span>
        </footer>
      </div>
    </SmoothScroll>
  );
}
