"use client";

import { motion } from "framer-motion";
import type { Tab } from "@/app/page";

interface TabSwitcherProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TABS: { id: Tab; label: string }[] = [
  { id: "developer", label: "[ DEVELOPER ]" },
  { id: "teacher", label: "[ TEACHER ]" },
  { id: "writer", label: "[ WRITER ]" },
];

export default function TabSwitcher({ activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div
      className="flex border-2 border-[#333] overflow-hidden"
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      {TABS.map((tab, i) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          whileTap={{ scale: 0.96 }}
          className="relative px-4 py-2 text-[11px] font-bold tracking-[2px] uppercase border-0 outline-none"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            borderRight: i < TABS.length - 1 ? "1px solid #333" : "none",
            background: activeTab === tab.id ? "#D2FF00" : "transparent",
            color: activeTab === tab.id ? "#000" : "#888",
            transition: "all 0.2s",
            cursor: "none",
          }}
          onMouseEnter={(e) => {
            if (activeTab !== tab.id) {
              (e.target as HTMLElement).style.color = "#D2FF00";
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab !== tab.id) {
              (e.target as HTMLElement).style.color = "#888";
            }
          }}
        >
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
}
