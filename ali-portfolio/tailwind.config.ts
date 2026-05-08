import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#111112",
        accent: "#D2FF00",
        glass: "rgba(255,255,255,0.04)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px #000",
        "brutal-lg": "6px 6px 0px #000",
        "brutal-sm": "2px 2px 0px #000",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        drift1: "drift1 18s ease-in-out infinite alternate",
        drift2: "drift2 24s ease-in-out infinite alternate",
        drift3: "drift3 30s ease-in-out infinite alternate",
        flare: "flare 12s linear infinite",
        marquee: "marquee 20s linear infinite",
        pulse_dot: "pulse_dot 2s ease-in-out infinite",
        warp_in: "warp_in 0.4s ease forwards",
      },
      keyframes: {
        drift1: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px,-30px) scale(1.1)" },
          "100%": { transform: "translate(-20px,50px) scale(0.9)" },
        },
        drift2: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-50px,30px) scale(1.05)" },
          "100%": { transform: "translate(30px,-40px) scale(0.95)" },
        },
        drift3: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(60px,20px) scale(1.08)" },
          "100%": { transform: "translate(-30px,-60px) scale(0.92)" },
        },
        flare: {
          "0%": { top: "-300px", left: "-5%", transform: "rotate(25deg)" },
          "100%": { top: "120%", left: "110%", transform: "rotate(25deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulse_dot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        warp_in: {
          from: {
            opacity: "0",
            transform: "perspective(800px) rotateX(10deg) translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "perspective(800px) rotateX(0deg) translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
