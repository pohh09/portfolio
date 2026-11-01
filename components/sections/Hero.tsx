"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Lightbulb,
  Code2,
  BookOpen,
  RotateCcw,
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLampOn, setIsLampOn] = useState<boolean>(true);
  const [nameMode, setNameMode] = useState<"pooja" | "manisha">("pooja");
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Subtle interactive parallax for illustration
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setMousePos({ x, y });
  };

  const navCards = [
    {
      title: "About Me",
      description: "Get to know me better and my journey.",
      href: "#about",
      avatarImg: "/avatar-chibi.png",
      badgeColor: "bg-[#F3E8FA]",
      borderColor: "border-[#E8D6F2] hover:border-[#D1B8E2]",
      arrowColor: "text-[#985BB5]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(152,91,181,0.22)]",
    },
    {
      title: "Skills",
      description: "Technologies and tools I work with.",
      href: "#skills",
      iconImg: "/icon-skills.png",
      fallbackIcon: Code2,
      badgeColor: "bg-[#E8F8ED]",
      borderColor: "border-[#D6EFE0] hover:border-[#B7E2C6]",
      arrowColor: "text-[#2EA043]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(46,160,67,0.22)]",
    },
    {
      title: "Projects",
      description: "Explore my latest work and case studies.",
      href: "#projects",
      iconImg: "/icon-projects.png",
      fallbackIcon: Lightbulb,
      badgeColor: "bg-[#FFF4E0]",
      borderColor: "border-[#FBE8C4] hover:border-[#F6D394]",
      arrowColor: "text-[#E69138]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(230,145,56,0.22)]",
    },
    {
      title: "Blog",
      description: "Thoughts, tutorials and things I learn.",
      href: "#featured-projects",
      iconImg: "/icon-blog.png",
      fallbackIcon: BookOpen,
      badgeColor: "bg-[#EDF2FE]",
      borderColor: "border-[#DCE6FC] hover:border-[#B5CCFA]",
      arrowColor: "text-[#3D7BD9]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(61,123,217,0.22)]",
    },
    {
      title: "Contact",
      description: "Let's connect and build something amazing.",
      href: "#contact",
      iconImg: "/icon-contact.png",
      fallbackIcon: Mail,
      badgeColor: "bg-[#FFE8EE]",
      borderColor: "border-[#FCD3DE] hover:border-[#F7AEC3]",
      arrowColor: "text-[#FF527B]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(255,82,123,0.22)]",
    },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#FEF3EF] text-[#2D1E2F] pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-12 overflow-hidden select-none transition-colors duration-500"
    >
      {/* Soft Ambient Background Highlights */}
      <div className="pointer-events-none absolute -top-24 right-0 w-[620px] h-[620px] rounded-full bg-gradient-to-bl from-[#FFE6EE]/80 via-[#FFF0F4]/40 to-transparent blur-3xl opacity-80 -z-10" />
      <div className="pointer-events-none absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#F8E7EE]/60 via-[#FFF5F2]/40 to-transparent blur-3xl opacity-70 -z-10" />
      <div className="pointer-events-none absolute -bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FFE8EE]/50 blur-3xl opacity-60 -z-10" />

      {/* Floating Cute Doodle Stars & Hearts */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-28 left-[15%] text-[#FBBF24] text-xl font-bold opacity-60 select-none z-10"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute top-40 right-[42%] text-[#FF527B] text-lg font-bold opacity-50 select-none z-10"
      >
        ♡
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute top-24 right-[28%] text-[#F59E0B] text-2xl font-bold opacity-55 select-none z-10"
      >
        ★
      </motion.div>

      {/* Main Hero Container */}
      <div className="relative mx-auto w-[94%] sm:w-[90%] lg:w-[86%] max-w-[1550px] px-2 sm:px-4 z-20">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-8">

          {/* Center-Left Content Column */}
          <div className="w-full lg:w-[48%] xl:w-[48%] flex flex-col items-start text-left z-20">

            {/* "Hello, I'm ♡" Handwritten Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-flex items-center gap-1.5 mb-1.5 text-sm sm:text-base font-bold text-[#2D1E2F]"
            >
              {/* Pink doodle rays above */}
              <div className="absolute -top-3.5 left-5 text-[#FF527B] select-none pointer-events-none">
                <svg width="22" height="13" viewBox="0 0 22 13" fill="none">
                  <path d="M4 11 C5 6 6 2 7 1" stroke="#FF527B" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M11 11 C11 5 11.5 2 12 1" stroke="#FF527B" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M18 11 C17 6 16.5 2 16 1" stroke="#FF527B" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>

              <span
                className="font-kalam text-lg sm:text-xl font-bold tracking-tight text-[#2D1E2F]"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                Hello, I&apos;m
              </span>
              <span className="text-[#FF527B] font-kalam text-lg font-bold">♡</span>
            </motion.div>

            {/* Massive Bold Playful Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="w-full mb-3 sm:mb-4 select-none"
            >
              <h1 className="font-extrabold tracking-tight leading-[0.98] flex flex-col items-start font-outfit">
                {/* Line 1: First Name in Hot Pink */}
                <span className="text-[#FF527B] text-[clamp(3.1rem,7.2vw,5.6rem)] font-extrabold font-outfit tracking-tight drop-shadow-xs">
                  {nameMode === "pooja" ? "Pooja" : "Manisha"}
                </span>

                {/* Line 2: Last Name in Dark Espresso + Cute Heart */}
                <span className="text-[#2D1E2F] text-[clamp(3.1rem,7.2vw,5.6rem)] font-extrabold font-outfit tracking-tight inline-flex items-center gap-2">
                  <span>{nameMode === "pooja" ? "Daki" : "Roy"}</span>
                  <motion.span
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block text-[#FF527B]"
                  >
                    <svg
                      className="w-8 h-8 sm:w-11 sm:h-11 overflow-visible -mt-1 sm:-mt-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Pill: Developer • Creator • Problem Solver */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#FCE8ED] border border-[#F8D2DC] px-4 py-1.5 text-xs sm:text-sm font-extrabold text-[#473444] mb-3.5 shadow-2xs"
            >
              <span className="tracking-wide">Developer</span>
              <span className="text-[#FF527B] text-xs">&bull;</span>
              <span className="tracking-wide">Creator</span>
              <span className="text-[#FF527B] text-xs">&bull;</span>
              <span className="tracking-wide">Problem Solver</span>
            </motion.div>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[#6D5D70] text-sm sm:text-base leading-relaxed mb-6 max-w-lg font-medium"
            >
              I build modern, responsive and user-friendly websites that help brands grow and make an impact.
            </motion.p>

            {/* Action Buttons: View My Work & Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FF527B] hover:bg-[#E84069] text-white px-6 sm:px-7 py-3 text-xs sm:text-sm font-extrabold shadow-[0_8px_20px_-4px_rgba(255,82,123,0.45)] hover:shadow-[0_12px_26px_-4px_rgba(255,82,123,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/pohh09"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#FFF5F8] text-[#2D1E2F] hover:text-[#FF527B] border-2 border-[#2D1E2F] hover:border-[#FF527B] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-extrabold shadow-2xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Download CV</span>
                <Download size={14} className="transition-transform group-hover:translate-y-0.5" />
              </a>

              {/* Name Variant Switcher (Pooja / Manisha) */}
              <button
                type="button"
                onClick={() => setNameMode((prev) => (prev === "pooja" ? "manisha" : "pooja"))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white border border-[#F4DEE4] text-[10px] font-mono font-bold text-[#756875] hover:text-[#FF527B] transition-all shadow-2xs cursor-pointer ml-auto sm:ml-0"
                title="Toggle between user name and original mockup name"
              >
                <RotateCcw size={10} className="text-[#FF527B]" />
                <span>Name: {nameMode === "pooja" ? "Pooja Daki" : "Manisha Roy"}</span>
              </button>
            </motion.div>

            {/* Cute "Scroll Down" Indicator with Hand-Drawn Arrow & Mouse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-1 select-none"
            >
              <div className="flex flex-col items-center">
                <span
                  className="font-kalam text-xs sm:text-sm font-bold text-[#FF527B] tracking-wide"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  Scroll Down
                </span>
                {/* Hand-drawn dotted curved arrow */}
                <svg width="42" height="34" viewBox="0 0 42 34" fill="none" className="text-[#FF527B]">
                  <path
                    d="M6 4 C14 18 24 24 32 26"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M26 21 L33 26 L29 32"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Animated Cute Mouse */}
              <div className="flex h-8 w-5 sm:h-9 sm:w-5.5 items-start justify-center rounded-full border-2 border-[#2D1E2F] p-1 bg-white/80 shadow-2xs">
                <motion.span
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1 rounded-full bg-[#FF527B]"
                />
              </div>
            </motion.div>

          </div>

          {/* Right Column: Cozy Anime Desk Illustration Scene */}
          <div className="w-full lg:w-[52%] xl:w-[54%] relative flex items-center justify-center">

            {/* Soft Pink Fluid Circle Backdrop Behind Character */}
            <div className="pointer-events-none absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[540px] lg:h-[540px] rounded-full bg-gradient-to-tr from-[#FFE2EC]/90 via-[#FFF0F4]/80 to-[#FFE8EE]/40 blur-2xl opacity-90 -z-10" />

            {/* Illustration Frame with Interactive Parallax */}
            <motion.div
              style={{
                transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
                transition: "transform 0.25s ease-out",
              }}
              className="relative w-full max-w-[620px] rounded-[32px] overflow-hidden group"
            >

              {/* Desk Lamp Ambient Glow (Clickable to Toggle!) */}
              <AnimatePresence>
                {isLampOn && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="pointer-events-none absolute top-[28%] right-[8%] w-[260px] h-[260px] rounded-full bg-gradient-to-br from-[#FEF08A]/45 via-[#FDE047]/20 to-transparent blur-2xl z-20 mix-blend-screen"
                  />
                )}
              </AnimatePresence>

              {/* Lamp Switch Floating Interactive Pill */}
              <button
                type="button"
                onClick={() => setIsLampOn((prev) => !prev)}
                className="absolute top-4 right-4 z-30 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 hover:bg-white text-[10px] font-mono font-bold text-[#473444] border border-[#F4DEE4] shadow-sm hover:scale-105 transition-all cursor-pointer backdrop-blur-md"
                title="Click to toggle desk lamp"
              >
                <span className={`h-2 w-2 rounded-full ${isLampOn ? "bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" : "bg-neutral-300"}`} />
                <span>Lamp: {isLampOn ? "On" : "Off"}</span>
              </button>

              {/* Interactive Sticky Note Tooltip Badges */}
              <div className="absolute top-[42%] left-[45%] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="inline-block bg-[#FEF08A] text-[#422006] text-[10px] font-bold font-kalam px-2 py-0.5 rounded shadow-sm rotate-[-4deg]">
                  Keep Growing 🌱
                </span>
              </div>

              <div className="absolute bottom-[24%] right-[28%] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="inline-block bg-[#1F2937] text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded shadow-sm">
                  Code &amp; Coffee ☕
                </span>
              </div>

              {/* The Hero Desk Illustration */}
              <div className="relative w-full aspect-[475/352] rounded-[28px] overflow-hidden">
                <Image
                  src="/hero-desk@2x.png"
                  alt="Developer working at desk with laptop, books, succulent plant, and coffee mug"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                  priority
                  className="object-contain object-right drop-shadow-[0_16px_36px_rgba(232,93,139,0.14)]"
                />
              </div>

            </motion.div>

          </div>

        </div>

        {/* Bottom Bento Deck: 5 Quick-Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 sm:mt-16 w-full relative z-20"
        >
          {/* Subtle cloud backdrop for the cards */}
          <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-6 bg-gradient-to-b from-white/70 via-white/90 to-white/95 rounded-[36px] blur-xl -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5 w-full">
            {navCards.map((card, idx) => {
              const FallbackIcon = card.fallbackIcon;
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-[22px] bg-white/90 hover:bg-white border ${card.borderColor} shadow-[0_4px_16px_rgba(0,0,0,0.03)] ${card.glowColor} transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Card Icon or Avatar */}
                    <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${card.badgeColor} p-1 shadow-2xs group-hover:scale-108 transition-transform duration-300`}>
                      {card.avatarImg ? (
                        <div className="relative h-9 w-9 rounded-full overflow-hidden border border-[#D8C4E8]">
                          <Image
                            src={card.avatarImg}
                            alt="About Me Chibi Avatar"
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        </div>
                      ) : card.iconImg ? (
                        <div className="relative h-7 w-7">
                          <Image
                            src={card.iconImg}
                            alt={card.title}
                            fill
                            sizes="28px"
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <FallbackIcon size={18} className={card.arrowColor} />
                      )}
                    </div>

                    {/* Card Title & Description */}
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#2D1E2F] group-hover:text-[#FF527B] transition-colors leading-tight truncate">
                        {card.title}
                      </h3>
                      <p className="text-[11px] text-[#7A6B7D] leading-tight mt-0.5 line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="shrink-0 pl-1.5">
                    <ArrowRight
                      size={15}
                      className={`${card.arrowColor} transition-transform duration-200 group-hover:translate-x-1`}
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* Gentle Scalloped Cloud Curve Transition to Next Section */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none mt-8 -mb-[1px] relative z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 block text-[#FFF8F6]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C320,80 540,10 720,45 C900,80 1120,15 1440,50 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
}
