"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStack } from "@/data/tech-stack";
import { Sparkles, ArrowUpRight, Layers, Terminal, Cloud, Compass, Server } from "lucide-react";

const pastelIconColors: Record<string, { bg: string; border: string }> = {
  "React.js": { bg: "bg-[#FFF5F7]", border: "border-[#FCE8E8]" },
  "Next.js": { bg: "bg-[#FFFDFC]", border: "border-[#EADDE3]" },
  "TypeScript": { bg: "bg-[#FAF7FE]", border: "border-[#E8DDF7]" },
  "JavaScript": { bg: "bg-[#FFFDF4]", border: "border-[#FDEEB8]" },
  "Tailwind CSS": { bg: "bg-[#F4FCFD]", border: "border-[#DDF5F8]" },
  "Redux Toolkit": { bg: "bg-[#FAF7FE]", border: "border-[#E8DDF7]" },
  "Zustand": { bg: "bg-[#FFF5F7]", border: "border-[#F8D2D9]" },
  "TanStack Query": { bg: "bg-[#FFF5F7]", border: "border-[#FCE8E8]" },
  "Framer Motion": { bg: "bg-[#FAF7FE]", border: "border-[#E8DDF7]" },
  "GSAP": { bg: "bg-[#F4FDF8]", border: "border-[#D4F7E4]" },
  "Node.js": { bg: "bg-[#F4FDF8]", border: "border-[#D4F7E4]" },
  "Express.js": { bg: "bg-[#FFFDFC]", border: "border-[#EADDE3]" },
  "MongoDB": { bg: "bg-[#F4FDF8]", border: "border-[#D4F7E4]" },
  "VS Code": { bg: "bg-[#F4FCFD]", border: "border-[#DDF5F8]" },
  "Git": { bg: "bg-[#FFF5F7]", border: "border-[#FCE8E8]" },
  "GitHub": { bg: "bg-[#FFFDFC]", border: "border-[#EADDE3]" },
  "Postman": { bg: "bg-[#FFF8F6]", border: "border-[#FCE8E8]" },
  "Figma": { bg: "bg-[#FAF7FE]", border: "border-[#E8DDF7]" },
  "Vercel": { bg: "bg-[#FFFDFC]", border: "border-[#EADDE3]" },
  "Render": { bg: "bg-[#F4FDF8]", border: "border-[#D4F7E4]" },
  "Gemini AI": { bg: "bg-[#F4FCFD]", border: "border-[#DDF5F8]" },
  "Docker": { bg: "bg-[#F4FCFD]", border: "border-[#DDF5F8]" },
  "AWS": { bg: "bg-[#FFFDF4]", border: "border-[#FDEEB8]" },
  "PostgreSQL": { bg: "bg-[#F4FCFD]", border: "border-[#DDF5F8]" },
  "Jest Testing": { bg: "bg-[#FFF5F7]", border: "border-[#FCE8E8]" },
};

const categoryFolioMeta = [
  {
    subtitle: "Modern UI, State & Motion",
    icon: Layers,
    heroTech: "React.js",
    heroRole: "Frontend Core",
    heroNote: "daily driver ↗",
  },
  {
    subtitle: "APIs, Servers & Data Stores",
    icon: Server,
    heroTech: "Node.js",
    heroRole: "Backend Runtime",
    heroNote: "REST & async ↗",
  },
  {
    subtitle: "Workflow, Versioning & Design",
    icon: Terminal,
    heroTech: "VS Code",
    heroRole: "Primary IDE",
    heroNote: "coding habitat ↗",
  },
  {
    subtitle: "Cloud Hosting & AI Integrations",
    icon: Cloud,
    heroTech: "Vercel",
    heroRole: "Deployment",
    heroNote: "fast deployment ↗",
  },
  {
    subtitle: "Technologies I'm Actively Learning",
    icon: Compass,
    heroTech: "Docker",
    heroRole: "Exploring",
    heroNote: "active exploration ↗",
  },
];

const AUTO_CYCLE_MS = 4800;

export default function TechStack() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [cycleKey, setCycleKey] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalCategories = techStack.length;
  const currentCategory = techStack[activeCategoryIndex] || techStack[0];
  const folioMeta = categoryFolioMeta[activeCategoryIndex] || categoryFolioMeta[0];

  const heroItem = currentCategory.items.find((item) => item.name === folioMeta.heroTech) || currentCategory.items[0];
  const mosaicItems = currentCategory.items.filter((item) => item.name !== heroItem.name);

  const allTechnologies = techStack.flatMap((cat) => cat.items);
  const secondaryUniverseLoop = [
    ...allTechnologies,
    ...allTechnologies,
    ...allTechnologies,
  ];

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveCategoryIndex((prev) => (prev + 1) % totalCategories);
      setCycleKey((prev) => prev + 1);
    }, AUTO_CYCLE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalCategories, cycleKey]);

  const handleSelectCategory = (index: number) => {
    if (index === activeCategoryIndex) return;
    setActiveCategoryIndex(index);
    setCycleKey((prev) => prev + 1);
  };

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-transparent scroll-mt-20 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C320,95 640,10 960,60 C1200,100 1360,25 1440,45 L1440,100 L0,100 Z"
            fill="#FFE8EE"
          />
        </svg>
      </div>

      <div className="w-full bg-[#FFE8EE] py-14 sm:py-18 relative">

        <div className="pointer-events-none absolute -top-10 left-1/4 w-[600px] h-[550px] rounded-full bg-gradient-to-tr from-[#FFF0F4]/80 via-white/30 to-transparent blur-3xl opacity-70 select-none -z-10" />
        <div className="pointer-events-none absolute -bottom-10 right-1/4 w-[600px] h-[550px] rounded-full bg-gradient-to-bl from-[#E8DDF7]/40 via-[#FFF0F4]/50 to-transparent blur-3xl opacity-65 select-none -z-10" />

        <div className="pointer-events-none absolute top-10 right-14 text-[#E85D8B] text-xl animate-float-slow select-none opacity-45">✦</div>
        <div className="pointer-events-none absolute top-1/2 left-8 text-[#FAD074] text-lg animate-float-slow select-none opacity-50">★</div>
        <div className="pointer-events-none absolute bottom-1/4 right-10 text-[#E85D8B] text-xl animate-float-slow select-none opacity-45">✦</div>
        <div className="pointer-events-none absolute bottom-8 left-12 text-[#B9A1E8] text-base select-none opacity-40">✦</div>

        <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">

        <div className="max-w-3xl mb-8 sm:mb-12 text-left">

          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
            <span>TECHSTACK</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#302535] font-kalam leading-[1.15]">
            Technical Stack &amp;{" "}
            <span className="text-[#E85D8B] relative inline-block">
              Ecosystem.
              <motion.svg
                className="absolute -bottom-1.5 left-0 w-full h-3.5 overflow-visible pointer-events-none text-[#E85D8B]"
                viewBox="0 0 200 12"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              >
                <motion.path
                  d="M2,7 C50,2 150,11 198,5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[#756875] font-normal leading-relaxed">
            Technologies and tools I work with to build responsive, full-stack web applications.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-12 lg:gap-8 items-start"
        >

          <div className="lg:col-span-5 flex flex-col space-y-2.5 sm:space-y-3.5">
            <div className="text-[11px] font-mono font-bold text-[#A396A3] uppercase tracking-wider px-1 flex items-center justify-between">
              <span>EXPLORE DOMAINS</span>
              <span className="text-[10px] text-[#E85D8B] font-normal lowercase">{isPaused ? "paused" : "auto-cycle"}</span>
            </div>

            {techStack.map((cat, idx) => {
              const isActive = idx === activeCategoryIndex;
              const meta = categoryFolioMeta[idx] || categoryFolioMeta[0];
              const IconComponent = meta.icon;

              return (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => handleSelectCategory(idx)}
                  className={`
                    group relative w-full text-left p-3.5 sm:p-5 rounded-[20px] sm:rounded-[24px] border transition-all duration-300 cursor-pointer select-none overflow-hidden
                    ${isActive
                      ? "bg-[#FFF5F7] border-[#F8D2D9] shadow-[0_8px_24px_-6px_rgba(232,93,139,0.18)] -translate-y-0.5"
                      : "bg-[#FFFFFF] border-[#EADDE3] hover:border-[#F29AB2] hover:bg-[#FFF8F6] shadow-2xs"
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300
                          ${isActive
                            ? "bg-[#E85D8B] text-white border-[#E85D8B] shadow-xs scale-105"
                            : "bg-[#FFF8F5] text-[#756875] border-[#EADDE3] group-hover:text-[#E85D8B] group-hover:border-[#F29AB2]"
                          }
                        `}
                      >
                        <IconComponent size={17} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-[#E85D8B]">0{idx + 1}</span>
                          <h3 className="text-sm sm:text-base font-bold font-kalam text-[#302535]">
                            {cat.title}
                          </h3>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#756875] font-sans mt-0.5">
                          {meta.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-mono text-[#A396A3] shrink-0 pt-0.5">
                      {cat.items.length} tools
                    </span>
                  </div>

                  {isActive && !isPaused && (
                    <div className="w-full h-0.5 bg-[#FCE8E8] rounded-full overflow-hidden mt-3">
                      <motion.div
                        key={`progress-${cycleKey}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: AUTO_CYCLE_MS / 1000, ease: "linear" }}
                        className="h-full bg-[#E85D8B]"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 w-full">
            <div className="relative rounded-[24px] sm:rounded-[32px] bg-[#FFFDFC] border border-[#F0DCE3] p-4 sm:p-7 lg:p-9 shadow-[0_12px_45px_-12px_rgba(232,93,139,0.1)] min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">

              <div>

                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#F5E6EB]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#E85D8B] uppercase tracking-wider">
                      ✦ 0{activeCategoryIndex + 1} &bull; {currentCategory.title.toUpperCase()}
                    </span>
                  </div>

                  <span className="text-xs font-kalam text-[#756875] select-none">
                    tooling overview <span className="text-[#E85D8B]">↗</span>
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategory.title}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >

                    {heroItem && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFF5F7] via-[#FFFDFC] to-[#FAF7FE] border border-[#F9DDE4] shadow-xs flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#F0DCE3] shadow-xs animate-float-slow"
                            style={{ color: heroItem.color }}
                          >
                            <heroItem.icon size={24} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-base sm:text-lg font-bold text-[#302535]">
                                {heroItem.name}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-full bg-[#FCE8E8] text-[#E85D8B] text-[10px] font-mono font-bold uppercase tracking-wider">
                                {folioMeta.heroRole}
                              </span>
                            </div>
                            <p className="text-xs text-[#756875] font-sans mt-0.5">
                              Primary cornerstone of this domain.
                            </p>
                          </div>
                        </div>

                        <span className="text-xs font-kalam font-bold text-[#E85D8B] select-none hidden sm:inline">
                          {folioMeta.heroNote}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                      {mosaicItems.map((tech, idx) => {
                        const Icon = tech.icon;
                        const pastel = pastelIconColors[tech.name] || { bg: "bg-[#FFFDFC]", border: "border-[#EADDE3]" };

                        return (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.03, duration: 0.25 }}
                            whileHover={{ y: -2.5, scale: 1.03 }}
                            className="
                              group flex items-center gap-2.5 px-4 py-2.5 rounded-full
                              bg-[#FFFFFF] border border-[#F0DCE3] shadow-2xs
                              hover:border-[#F29AB2] hover:shadow-[0_6px_18px_rgba(232,93,139,0.12)]
                              transition-all duration-200 ease-out
                              cursor-default select-none
                            "
                          >

                            <div
                              className={`
                                flex h-7 w-7 shrink-0 items-center justify-center rounded-full
                                ${pastel.bg} ${pastel.border} border shadow-2xs
                                transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110
                              `}
                              style={{ color: tech.color }}
                            >
                              <Icon size={14} />
                            </div>

                            <span className="text-xs sm:text-sm font-bold text-[#302535] group-hover:text-[#E85D8B] transition-colors whitespace-nowrap">
                              {tech.name}
                            </span>

                            <ArrowUpRight
                              size={12}
                              className="text-[#A396A3] opacity-0 group-hover:opacity-100 group-hover:text-[#E85D8B] transition-all -ml-1"
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-3.5 border-t border-[#F5E6EB] flex items-center justify-between text-xs font-mono text-[#A396A3]">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={11} className="text-[#E85D8B]" />
                  <span>modern &amp; reliable tools</span>
                </div>
                <span className="font-kalam text-xs text-[#E85D8B]">technologies I build with</span>
              </div>

            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 sm:mt-14 pt-3"
        >

          <div className="flex items-center justify-between gap-4 mb-3.5">
            <span className="text-xs font-mono font-bold text-[#756875] uppercase tracking-wider">
              ✦ COMPLETE TOOLKIT &bull; CONTINUOUS DISCOVERY STREAM
            </span>
            <span className="text-xs font-mono text-[#A396A3] hidden sm:inline">
              all technologies &larr;
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2 group/marquee">

            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 sm:w-28 bg-gradient-to-r from-[#FFE8EE] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 sm:w-28 bg-gradient-to-l from-[#FFE8EE] to-transparent" />

            <div
              className="flex w-max gap-3 sm:gap-4 py-1.5 animate-marquee-left group-hover/marquee:[animation-play-state:paused]"
              style={{
                ["--marquee-duration" as string]: "40s",
              }}
            >
              {secondaryUniverseLoop.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={`stream-${tech.name}-${index}`}
                    className="
                      flex items-center gap-2.5 shrink-0
                      px-4 sm:px-5 py-2 sm:py-2.5 rounded-full
                      bg-[#FFFFFF] border-2 border-[#EADDE3]
                      hover:border-[#F29AB2] hover:bg-[#FFF8F6] hover:-translate-y-0.5
                      transition-all duration-200
                      cursor-default select-none shadow-xs
                    "
                  >
                    <div className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF8F5] border border-[#FCE8E8]">
                      <Icon size={16} style={{ color: tech.color }} />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#302535] whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </motion.div>

      </div>
    </div>

    <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mt-[1px]">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L1440,0 L1440,45 C1240,95 960,15 720,60 C480,100 240,10 0,55 Z"
          fill="#FFE8EE"
        />
      </svg>
    </div>

  </section>
  );
}