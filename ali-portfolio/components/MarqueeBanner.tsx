"use client";

const ITEMS = [
  { text: "NEXT.JS", accent: true },
  { text: "·" },
  { text: "REACT", accent: false },
  { text: "·" },
  { text: "FRAMER MOTION", accent: true },
  { text: "·" },
  { text: "TAILWIND", accent: false },
  { text: "·" },
  { text: "TYPESCRIPT", accent: true },
  { text: "·" },
  { text: "NODE.JS", accent: false },
  { text: "·" },
  { text: "AI/ML INTEGRATION", accent: true },
  { text: "·" },
  { text: "WEB3/BLOCKCHAIN", accent: false },
  { text: "·" },
  { text: "UI/UX DESIGN", accent: true },
  { text: "·" },
];

export default function MarqueeBanner() {
  // Duplicate for seamless loop
  const items = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-t border-b border-white/10 py-3 my-10">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              fontSize: "22px",
              letterSpacing: "4px",
              color: item.accent ? "#D2FF00" : "#333",
              flexShrink: 0,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
