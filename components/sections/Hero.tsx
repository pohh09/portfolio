"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Lightbulb,
  Code2,
  BookOpen,
} from "lucide-react";
import HeroDeskScene from "@/components/sections/HeroDeskScene";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLampOn, setIsLampOn] = useState<boolean>(true);
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
      badgeColor: "bg-[#F3E8FA]",
      borderColor: "border-[#E8D6F2] hover:border-[#D1B8E2]",
      arrowColor: "text-[#985BB5]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(152,91,181,0.22)]",
      customIcon: (
        <svg viewBox="0 0 36 36" className="w-9 h-9 rounded-full overflow-hidden" fill="none">
          <circle cx="18" cy="18" r="18" fill="#F3E8FA" />
          {/* Hair Bun */}
          <circle cx="18" cy="7" r="5.5" fill="#3D231E" />
          <ellipse cx="18" cy="11" rx="4.5" ry="1.5" fill="#FF8DA8" />
          {/* Head */}
          <circle cx="18" cy="18" r="8.5" fill="#FFEAE0" />
          {/* Bangs */}
          <path d="M10 16 C12 11 16 10 18 13 C20 10 24 11 26 16 C23 18 21 15 18 15 C15 15 13 18 10 16 Z" fill="#3D231E" />
          {/* Eyes */}
          <ellipse cx="15.5" cy="18" rx="1.3" ry="1.7" fill="#1E293B" />
          <circle cx="15.1" cy="17.4" r="0.5" fill="#FFFFFF" />
          <ellipse cx="20.5" cy="18" rx="1.3" ry="1.7" fill="#1E293B" />
          <circle cx="20.1" cy="17.4" r="0.5" fill="#FFFFFF" />
          {/* Cheeks */}
          <circle cx="13.5" cy="20.5" r="1.4" fill="#FDA4AF" />
          <circle cx="22.5" cy="20.5" r="1.4" fill="#FDA4AF" />
          {/* Smile */}
          <path d="M16.8 21.5 Q18 23 19.2 21.5" stroke="#D65D7A" strokeWidth="1.2" strokeLinecap="round" />
          {/* Sweater Collar */}
          <path d="M11 29 C13 25 16 24 18 25 C20 24 23 25 25 29 Z" fill="#FF8DA8" />
        </svg>
      ),
    },
    {
      title: "Skills",
      description: "Technologies and tools I work with.",
      href: "#skills",
      badgeColor: "bg-[#E8F8ED]",
      borderColor: "border-[#D6EFE0] hover:border-[#B7E2C6]",
      arrowColor: "text-[#2EA043]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(46,160,67,0.22)]",
      icon: Code2,
    },
    {
      title: "Projects",
      description: "Explore my latest work and case studies.",
      href: "#projects",
      badgeColor: "bg-[#FFF4E0]",
      borderColor: "border-[#FBE8C4] hover:border-[#F6D394]",
      arrowColor: "text-[#E69138]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(230,145,56,0.22)]",
      icon: Lightbulb,
    },
    {
      title: "Blog",
      description: "Thoughts, tutorials and things I learn.",
      href: "#featured-projects",
      badgeColor: "bg-[#EDF2FE]",
      borderColor: "border-[#DCE6FC] hover:border-[#B5CCFA]",
      arrowColor: "text-[#3D7BD9]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(61,123,217,0.22)]",
      icon: BookOpen,
    },
    {
      title: "Contact",
      description: "Let's connect and build something amazing.",
      href: "#contact",
      badgeColor: "bg-[#FFE8EE]",
      borderColor: "border-[#FCD3DE] hover:border-[#F7AEC3]",
      arrowColor: "text-[#FF527B]",
      glowColor: "group-hover:shadow-[0_12px_28px_-6px_rgba(255,82,123,0.22)]",
      icon: Mail,
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

      {/* Floating Whimsical Doodle Stars & Sparkles (matching portfolio style) */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-28 left-[15%] text-[#E85D8B] text-xl font-bold opacity-45 select-none z-10"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute top-40 right-[42%] text-[#FF527B] text-lg font-bold opacity-45 select-none z-10"
      >
        ♡
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute top-24 right-[28%] text-[#FAD074] text-xl font-bold opacity-50 select-none z-10"
      >
        ★
      </motion.div>

      {/* Main Hero Container */}
      <div className="relative mx-auto w-[94%] sm:w-[90%] lg:w-[86%] max-w-[1550px] px-2 sm:px-4 z-20">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-8">

          {/* Center-Left Content Column */}
          <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col items-start text-left z-20">

            {/* Availability Badge (matches portfolio-wide badge style) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-5 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs"
              style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
              <span className="tracking-wide">✦ AVAILABLE FOR FULL-STACK &amp; FRONTEND ROLES</span>
            </motion.div>

            {/* Signature Kalam Heading: "Hello, I'm Full Stack Developer." */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="w-full mb-3 sm:mb-4 select-none"
            >
              <h1
                className="font-kalam font-bold tracking-tight leading-[1.08] flex flex-col items-start text-left"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                {/* Line 1: "Hello, I'm" in pink Kalam cursive */}
                <span
                  className="text-[#E85D8B] block font-kalam font-bold text-[clamp(2.2rem,5.2vw,3.8rem)] leading-[1.12]"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  Hello, I&apos;m
                </span>

                {/* Line 2: "Full Stack" in dark espresso Kalam */}
                <span
                  className="text-[#302535] block font-kalam font-bold text-[clamp(2.7rem,6.4vw,5.2rem)] leading-[1.04]"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  Full Stack
                </span>

                {/* Line 3: "Developer." in warm coral pink with hand-drawn underline and heart */}
                <span
                  className="text-[#FF5E86] inline-flex items-center gap-2 sm:gap-3 relative pb-1 font-kalam font-bold text-[clamp(2.7rem,6.4vw,5.2rem)] leading-[1.04]"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  <span style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}>Developer.</span>

                  <motion.svg
                    className="absolute -bottom-2 left-0 w-[95%] h-4 overflow-visible pointer-events-none text-[#FF5E86]"
                    viewBox="0 0 240 14"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <motion.path
                      d="M3,8 C70,2 170,12 236,6"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </motion.svg>

                  <span className="text-[#FF5E86] text-3xl sm:text-4xl -mt-1 sm:-mt-2 select-none">♡</span>
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Pill: Developer • Creator • Problem Solver */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#FCE8ED] border border-[#F8D2DC] px-4 py-1 text-xs sm:text-sm font-kalam font-bold text-[#473444] mb-3.5 shadow-2xs"
              style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
            >
              <span className="tracking-wide">Developer</span>
              <span className="text-[#E85D8B] text-xs">&bull;</span>
              <span className="tracking-wide">Creator</span>
              <span className="text-[#E85D8B] text-xs">&bull;</span>
              <span className="tracking-wide">Problem Solver</span>
            </motion.div>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[#5A4D5D] text-sm sm:text-base lg:text-[17px] leading-relaxed mb-6 max-w-lg font-normal"
            >
              Hi, I&apos;m <strong className="text-[#302535] font-bold">Pooja Daki</strong> — a Full Stack Developer building modern, responsive, and user-friendly web applications that help brands grow and make an impact.
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
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E85D8B] to-[#F29AB2] hover:from-[#D44775] hover:to-[#E85D8B] text-white px-6 sm:px-7 py-3 text-xs sm:text-sm font-extrabold shadow-[0_8px_20px_-4px_rgba(232,93,139,0.38)] hover:shadow-[0_12px_26px_-4px_rgba(232,93,139,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#FFF5F8] text-[#302535] hover:text-[#E85D8B] border border-[#EADDE3] hover:border-[#F29AB2] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-extrabold shadow-2xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <Download size={14} className="transition-transform group-hover:translate-y-0.5 text-[#E85D8B]" />
              </a>
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
                  className="font-kalam text-xs sm:text-sm font-bold text-[#E85D8B] tracking-wide"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  Scroll Down
                </span>
                {/* Hand-drawn dotted curved arrow */}
                <svg width="42" height="34" viewBox="0 0 42 34" fill="none" className="text-[#E85D8B]">
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
              <div className="flex h-8 w-5 sm:h-9 sm:w-5.5 items-start justify-center rounded-full border-2 border-[#302535] p-1 bg-white/80 shadow-2xs">
                <motion.span
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1 rounded-full bg-[#E85D8B]"
                />
              </div>
            </motion.div>

          </div>

          {/* Right Column: Real Coded Vector Anime Desk Scene */}
          <div className="w-full lg:w-[52%] xl:w-[54%] relative flex items-center justify-center">
            <motion.div
              style={{
                transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
                transition: "transform 0.25s ease-out",
              }}
              className="relative w-full flex items-center justify-center"
            >
              <HeroDeskScene
                isLampOn={isLampOn}
                onToggleLamp={() => setIsLampOn((prev) => !prev)}
              />
            </motion.div>
          </div>

        </div>

        {/* Bottom Bento Deck: 5 Quick-Navigation Cards with unified Kalam typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 sm:mt-16 w-full relative z-20"
        >
          {/* Subtle cloud backdrop for the cards */}
          <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-6 bg-gradient-to-b from-white/70 via-white/90 to-white/95 rounded-[36px] blur-xl -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5 w-full">
            {navCards.map((card) => {
              const Icon = card.icon;
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
                    {/* Card Icon or Vector Avatar */}
                    <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${card.badgeColor} p-1 shadow-2xs group-hover:scale-108 transition-transform duration-300`}>
                      {card.customIcon ? (
                        card.customIcon
                      ) : Icon ? (
                        <Icon size={20} className={card.arrowColor} />
                      ) : null}
                    </div>

                    {/* Card Title & Description */}
                    <div className="flex flex-col min-w-0">
                      <h3
                        className="text-sm sm:text-[15px] font-bold text-[#302535] group-hover:text-[#E85D8B] font-kalam transition-colors leading-tight truncate"
                        style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                      >
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
