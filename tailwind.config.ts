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
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "'Nunito'", "sans-serif"],
        display: ["var(--font-outfit)", "'Outfit'", "'Plus Jakarta Sans'", "sans-serif"],
        outfit: ["var(--font-outfit)", "'Outfit'", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "'Plus Jakarta Sans'", "sans-serif"],
        syne: ["var(--font-syne)", "'Syne'", "sans-serif"],
        kalam: ["var(--font-kalam)", "'Kalam'", "cursive", "sans-serif"],
        caveat: ["var(--font-caveat)", "'Caveat'", "cursive", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
