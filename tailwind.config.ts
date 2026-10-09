import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-page)",
        foreground: "var(--text-primary)",
        poke: {
          red: "#EE1515",
          darkred: "#C00D0D",
          lightred: "#FF4D4D",
          blue: "#2273D1",
          darkblue: "#104E9E",
          yellow: "#FFDE00",
          gold: "#F5B700",
          green: "#4DAD5B",
          darkgreen: "#267332",
          purple: "#945BB5",
          darkpurple: "#632785",
          cyan: "#3DC7D9",
          slate: "#212B36",
          darkslate: "#161C24",
          lightslate: "#334155",
          screen: "#9BBC0F",
          screenDark: "#0F380F",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "'Press Start 2P'", "'Silkscreen'", "monospace"],
        silkscreen: ["var(--font-silkscreen)", "'Silkscreen'", "monospace"],
        sans: ["var(--font-nunito)", "'Plus Jakarta Sans'", "'Nunito'", "sans-serif"],
        display: ["var(--font-outfit)", "'Outfit'", "'Plus Jakarta Sans'", "sans-serif"],
        outfit: ["var(--font-outfit)", "'Outfit'", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "'Plus Jakarta Sans'", "sans-serif"],
        syne: ["var(--font-syne)", "'Syne'", "sans-serif"],
        kalam: ["var(--font-kalam)", "'Kalam'", "cursive", "sans-serif"],
        caveat: ["var(--font-caveat)", "'Caveat'", "cursive", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px rgba(0,0,0,0.85)",
        pixelSm: "2px 2px 0px 0px rgba(0,0,0,0.85)",
        pixelRed: "4px 4px 0px 0px #C00D0D",
        pixelYellow: "4px 4px 0px 0px #B8860B",
        pixelBlue: "4px 4px 0px 0px #104E9E",
        pokedex: "0 14px 36px -8px rgba(238, 21, 21, 0.28), 0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
