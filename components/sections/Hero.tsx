"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "@/lib/animations/gsapSetup";

// ─── Bottom Bento Quick-Nav Cards ───────────────────────────────────────────
const bentoCards = [
  {
    id: "about",
    href: "#about",
    icon: "👩‍💻",
    title: "About Me",
    desc: "Get to know me better and my journey.",
    color: "#FCE8EE",
    accent: "#E94F83",
  },
  {
    id: "skills",
    href: "#skills",
    icon: "⌨️",
    title: "Skills",
    desc: "Technologies and tools I work with.",
    color: "#EDF5FC",
    accent: "#4A90D9",
  },
  {
    id: "projects",
    href: "#projects",
    icon: "💡",
    title: "Projects",
    desc: "Explore my latest work and case studies.",
    color: "#FFFBE8",
    accent: "#E8A800",
  },
  {
    id: "blog",
    href: "#featured-projects",
    icon: "📓",
    title: "Blog",
    desc: "Thoughts, tutorials and things I learn.",
    color: "#EEF8F2",
    accent: "#3AAA70",
  },
  {
    id: "contact",
    href: "#contact",
    icon: "✉️",
    title: "Contact",
    desc: "Let's connect and build something amazing.",
    color: "#F3EDFC",
    accent: "#9A6FD8",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  // GSAP entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(titleLine1Ref.current, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
        .fromTo(titleLine2Ref.current, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(subtitleRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.3")
        .fromTo(bioRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.25")
        .fromTo(ctaRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.25")
        .fromTo(socialRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
        .fromTo(scrollHintRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.1");

      // Sparkle entrance stagger
      const sparkles = containerRef.current?.querySelectorAll(".hero-sparkle");
      if (sparkles && sparkles.length > 0) {
        gsap.fromTo(sparkles,
          { opacity: 0, scale: 0.4 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(2)", delay: 0.6 }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full overflow-hidden select-none"
    >
      {/* ── Main Hero Panel ─────────────────────────────────────────────────── */}
      <div className="relative w-full bg-[#FDF4EF] pt-28 sm:pt-36 lg:pt-28 pb-0 overflow-hidden">

        {/* Ambient blobs */}
        <div className="pointer-events-none absolute -top-32 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#FFD6E5]/50 to-transparent" />
        <div className="pointer-events-none absolute -bottom-16 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#FFE8D0]/40 to-transparent" />
        <div className="pointer-events-none absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#FFF0F4]/30" />

        {/* Floating doodle decorations */}
        <span className="hero-sparkle pointer-events-none absolute top-32 left-[12%] text-2xl opacity-0 text-[#FAD074]">✦</span>
        <span className="hero-sparkle pointer-events-none absolute top-48 left-[8%] text-base text-[#E94F83] opacity-0">♡</span>
        <span className="hero-sparkle pointer-events-none absolute top-28 right-[32%] text-xl text-[#FAD074] opacity-0">★</span>
        <span className="hero-sparkle pointer-events-none absolute bottom-40 right-[38%] text-sm text-[#B9A1E8] opacity-0">✦</span>
        <span className="hero-sparkle pointer-events-none absolute bottom-32 left-[40%] text-base text-[#82D9A7] opacity-0">♡</span>

        {/* ── Content grid ────────────────────────────────────────────────────── */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 xl:px-20 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-end min-h-[480px] lg:min-h-[520px]">

            {/* ──────────── LEFT COLUMN ──────────── */}
            <div className="flex flex-col justify-center lg:justify-end pb-0 lg:pb-12 pt-6 lg:pt-0">

              {/* Greeting badge */}
              <div ref={badgeRef} className="opacity-0 mb-5 flex items-center gap-2">
                <span className="font-kalam text-[15px] italic text-[#542B43] font-bold tracking-wide">
                  Hello, I&apos;m
                </span>
                <span className="text-base text-[#E94F83] animate-doodle">♡</span>
              </div>

              {/* GIANT Name */}
              <div className="mb-4 leading-none">
                <span
                  ref={titleLine1Ref}
                  className="opacity-0 block font-kalam font-bold text-[#E94F83] leading-[1.05]"
                  style={{ fontSize: "clamp(3.2rem, 9vw, 5.8rem)" }}
                >
                  Pooja
                </span>
                <span
                  ref={titleLine2Ref}
                  className="opacity-0 block font-kalam font-bold text-[#542B43] leading-[1.05]"
                  style={{ fontSize: "clamp(3.2rem, 9vw, 5.8rem)" }}
                >
                  Daki
                  <span className="text-[#E94F83] ml-2 text-[0.45em] align-super">♥</span>
                </span>
              </div>

              {/* Subtitle pill */}
              <div ref={subtitleRef} className="opacity-0 mb-5">
                <span className="inline-flex items-center gap-0 rounded-full border border-[#F0DCE3] bg-white px-4 py-1.5 text-sm font-bold text-[#49343A] shadow-sm">
                  <span className="text-[#E94F83]">Developer</span>
                  <span className="mx-2 text-[#D8B4C0]">•</span>
                  <span className="text-[#49343A]">Creator</span>
                  <span className="mx-2 text-[#D8B4C0]">•</span>
                  <span className="text-[#542B43]">Problem Solver</span>
                </span>
              </div>

              {/* Bio */}
              <p
                ref={bioRef}
                className="opacity-0 mb-7 max-w-[380px] text-[15px] leading-relaxed text-[#49343A] font-[600]"
                style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
              >
                I build modern, responsive and user-friendly websites that help brands grow and make an impact.
              </p>

              {/* CTA Buttons */}
              <div ref={ctaRef} className="opacity-0 flex flex-wrap items-center gap-3 mb-7">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#E94F83] hover:bg-[#D43A6E] px-6 py-2.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(233,79,131,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(233,79,131,0.48)] active:translate-y-0"
                >
                  View My Work
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-[#E94F83] bg-white px-6 py-2.5 text-sm font-bold text-[#E94F83] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF0F4] hover:shadow-[0_6px_16px_rgba(233,79,131,0.15)] active:translate-y-0"
                >
                  Download CV
                  <Download size={14} className="transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>

              {/* Social row for mobile */}
              <div ref={socialRef} className="opacity-0 flex items-center gap-3 lg:hidden">
                {[
                  { href: "https://github.com/pohh09", icon: FaGithub, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/pooja-daki/", icon: FaLinkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F0DCE3] bg-white text-[#756875] hover:text-[#E94F83] hover:bg-[#FCE8EE] hover:border-[#F8D2D9] transition-all shadow-sm"
                  >
                    <Icon size={15} />
                  </a>
                ))}
                <span className="text-xs font-kalam font-bold text-[#E94F83] italic ml-1">
                  Available for opportunities ✨
                </span>
              </div>

              {/* Scroll down hint */}
              <div ref={scrollHintRef} className="opacity-0 mt-8 hidden sm:flex items-center gap-2 text-[#A38898]">
                <svg width="30" height="20" viewBox="0 0 30 20" fill="none" className="text-[#E94F83]">
                  <path d="M2 6 C8 4, 14 14, 22 10" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeDasharray="3 2" />
                  <path d="M18 8 L22 10 L20 14" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-kalam text-[13px] font-bold italic text-[#E94F83]">Scroll Down</span>
                <div className="ml-1 flex h-7 w-4 items-center justify-center rounded-full border-2 border-[#D8B4C0]">
                  <div className="h-1.5 w-0.5 rounded-full bg-[#E94F83] animate-bounce" />
                </div>
              </div>
            </div>

            {/* ──────────── RIGHT COLUMN — Exact Anime Illustration ──────────── */}
            <div className="relative flex items-end justify-center lg:justify-end h-[360px] sm:h-[440px] lg:h-[520px] xl:h-[560px]">
              <motion.div
                initial={{ opacity: 0, x: 25, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative z-10 w-full max-w-[560px] flex items-end justify-center lg:justify-end"
              >
                <div className="relative w-full">
                  <Image
                    src="/hero-anime.png"
                    alt="Pooja Daki - Full Stack Developer Workspace Illustration"
                    width={560}
                    height={440}
                    priority
                    className="w-full h-auto object-contain select-none drop-shadow-sm"
                  />
                </div>
              </motion.div>

              {/* Floating sparkle chips around illustration */}
              <motion.div
                className="pointer-events-none absolute top-12 right-6 hidden sm:flex items-center gap-1.5 rounded-full border border-[#F0DCE3] bg-white/95 backdrop-blur-sm px-3.5 py-1 text-[11px] font-bold text-[#302535] shadow-sm z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[#E94F83]">⚡</span>
                <span>Full Stack</span>
              </motion.div>

              <motion.div
                className="pointer-events-none absolute top-28 left-4 sm:left-2 hidden sm:flex items-center gap-1.5 rounded-full border border-[#F0DCE3] bg-white/95 backdrop-blur-sm px-3.5 py-1 text-[11px] font-bold text-[#302535] shadow-sm z-20"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <span className="text-[#82D9A7]">✓</span>
                <span>Open to Work</span>
              </motion.div>

              <motion.div
                className="pointer-events-none absolute bottom-24 right-4 hidden sm:flex items-center gap-1.5 rounded-full border border-[#F0DCE3] bg-white/95 backdrop-blur-sm px-3.5 py-1 text-[11px] font-bold text-[#302535] shadow-sm z-20"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <span>☕</span>
                <span>Code + Coffee</span>
              </motion.div>
            </div>

          </div>
        </div>

        {/* ── Scalloped cloud wave transition ─────────────────────────────────── */}
        <div className="w-full overflow-hidden leading-none pointer-events-none -mt-1 relative z-20">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[55px] sm:h-[70px] md:h-[90px] block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,30
                C1380,75 1300,18 1220,48 C1140,78 1060,15 980,48
                C900,78 820,18 740,48 C660,78 580,15 500,48
                C420,78 340,18 260,48 C180,78 100,20 0,50 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* ── Bottom Bento Quick-Nav Deck ─────────────────────────────────────── */}
      <div className="relative z-10 bg-white w-full pt-2 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {bentoCards.map((card, i) => (
              <motion.a
                key={card.id}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col gap-2 rounded-2xl border border-[#F5E6EB] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(233,79,131,0.12)] hover:border-[#F0C8D4]"
                style={{ backgroundColor: card.color }}
              >
                {/* Icon */}
                <span className="text-2xl sm:text-3xl">{card.icon}</span>

                {/* Title */}
                <p className="font-kalam font-bold text-sm sm:text-base text-[#302535] leading-tight" style={{ color: card.accent }}>
                  {card.title}
                </p>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-[#756875] leading-snug font-[600]" style={{ fontFamily: "var(--font-nunito)" }}>
                  {card.desc}
                </p>

                {/* Arrow */}
                <div className="mt-auto flex items-center">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full transition-all group-hover:translate-x-0.5"
                    style={{ backgroundColor: `${card.accent}20`, color: card.accent }}
                  >
                    <ArrowRight size={12} />
                  </div>
                </div>

                {/* Hover shimmer */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${card.accent}06, transparent)` }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
