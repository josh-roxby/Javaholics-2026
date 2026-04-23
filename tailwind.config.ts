import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-mute": "var(--ink-mute)",
        "ink-dim": "var(--ink-dim)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        roast: "var(--roast)",
        crema: "var(--crema)",
        ember: "var(--ember)",
        navy: "var(--navy)",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter Tight", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        caps: "0.16em",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pin-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 8px rgba(216,120,80,0.18), 0 0 0 18px rgba(216,120,80,0.08), 0 0 0 32px rgba(216,120,80,0.04)",
          },
          "50%": {
            boxShadow:
              "0 0 0 10px rgba(216,120,80,0.25), 0 0 0 24px rgba(216,120,80,0.12), 0 0 0 40px rgba(216,120,80,0.06)",
          },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pin-pulse": "pin-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
