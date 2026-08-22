"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Zap,
  Sparkles,
  MousePointerClick,
  Layout,
  Database,
  Server,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  Activity,
  Play,
  RotateCcw
} from "lucide-react";
import { FaReact, FaGithub, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import { gsap } from "@/lib/animations/gsapSetup";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"ui" | "fullstack" | "motion">("ui");
  const [fluidityPercent, setFluidityPercent] = useState<number>(96);
  const [apiPing, setApiPing] = useState<number>(24);
  const [motionTrigger, setMotionTrigger] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const floatingLabelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45 }
      )
      .fromTo(
        titleLine1Ref.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55 },
        "-=0.15"
      )
      .fromTo(
        titleLine2Ref.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55 },
        "-=0.35"
      )
      .fromTo(
        bioRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.25"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.25"
      )
      .fromTo(
        metricsRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.2"
      )
      .fromTo(
        workspaceRef.current,
        { opacity: 0, x: 25, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.75, ease: "power2.out" },
        "-=0.45"
      )
      .fromTo(
        floatingLabelsRef.current?.querySelectorAll(".floating-chip") || [],
        { opacity: 0, scale: 0.8, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.08 },
        "-=0.35"
      );

      // Scroll-driven parallax for hero background elements and decorative sparkles
      const decorItems = containerRef.current?.querySelectorAll(".hero-parallax-item");
      if (decorItems && decorItems.length > 0) {
        gsap.to(decorItems, {
          y: (i) => -30 * (i + 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (prefersReducedMotion || isTouch || !workspaceRef.current) return;

    const xTo = gsap.quickTo(workspaceRef.current, "x", { duration: 0.6, ease: "power2.out" });
    const yTo = gsap.quickTo(workspaceRef.current, "y", { duration: 0.6, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!workspaceRef.current) return;
      const rect = workspaceRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = ((e.clientX - centerX) / (window.innerWidth / 2)) * 6;
      const moveY = ((e.clientY - centerY) / (window.innerHeight / 2)) * 6;
      xTo(moveX);
      yTo(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full overflow-hidden select-none"
    >

      <div className="w-full bg-[#FFE8EE] pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-20 relative">

        <div className="pointer-events-none absolute -top-20 right-10 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#FFF0F4]/90 via-white/40 to-transparent blur-3xl opacity-80 select-none -z-10" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#E8DDF7]/45 via-[#FFF0F4]/60 to-transparent blur-3xl opacity-75 select-none -z-10" />
        <div className="pointer-events-none absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-[#DDF5F8]/40 blur-3xl opacity-50 select-none -z-10" />

        <div className="hero-parallax-item pointer-events-none absolute top-28 right-1/4 text-[#E85D8B] text-xl animate-float-slow select-none opacity-45">✦</div>
        <div className="hero-parallax-item pointer-events-none absolute top-44 left-14 text-[#FAD074] text-lg animate-float-slow select-none opacity-50">★</div>
        <div className="hero-parallax-item pointer-events-none absolute bottom-24 right-12 text-[#E85D8B] text-xl animate-float-slow select-none opacity-45">✦</div>
        <div className="hero-parallax-item pointer-events-none absolute top-36 right-12 text-[#B9A1E8] text-base select-none opacity-45">✿</div>

        <div className="relative mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center justify-between">

            <div className="lg:col-span-6 flex flex-col items-start text-left w-full">

              <div
                ref={badgeRef}
                className="inline-flex items-center gap-2 mb-5 sm:mb-6 rounded-full bg-white/95 border border-[#F8D2D9] px-3 sm:px-4 py-1 text-xs font-bold text-[#E85D8B] shadow-2xs transition-all hover:scale-102 max-w-full"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#E85D8B] animate-ping" />
                <span className="font-mono text-[10px] sm:text-[11px] tracking-wide font-extrabold uppercase truncate">
                  ✦ Available for Full-Stack &amp; Frontend Roles
                </span>
              </div>

              <h1
                className="font-kalam font-bold tracking-tight leading-[1.06] mb-4 sm:mb-5 select-none w-full"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                <span
                  ref={titleLine1Ref}
                  className="text-[#2E2234] block will-change-transform font-kalam font-bold text-[clamp(2.5rem,6.2vw,5.4rem)]"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  Full Stack
                </span>
                <span
                  ref={titleLine2Ref}
                  className="text-[#FF5E86] inline-flex items-center gap-2 sm:gap-3 relative pb-1 will-change-transform font-kalam font-bold text-[clamp(2.5rem,6.2vw,5.4rem)]"
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
                </span>
              </h1>

              <p
                ref={bioRef}
                className="text-sm sm:text-base lg:text-[1.05rem] leading-relaxed text-[#6D5D70] font-normal mb-5 w-full"
              >
                Hi, I&apos;m <strong className="text-[#302535] font-bold">Pooja Daki</strong> — a Full Stack Developer building modern, responsive, and user-friendly web applications with <strong className="text-[#302535] font-bold">React</strong>, <strong className="text-[#302535] font-bold">Next.js</strong>, <strong className="text-[#302535] font-bold">TypeScript</strong>, <strong className="text-[#302535] font-bold">Node.js</strong>, and <strong className="text-[#302535] font-bold">MongoDB</strong>.
              </p>

              <div
                ref={ctaRef}
                className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-5 w-full"
              >

                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E85D8B] to-[#F29AB2] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold shadow-[0_8px_20px_-4px_rgba(232,93,139,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-4px_rgba(232,93,139,0.48)] active:translate-y-0"
                >
                  <span>View My Work</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-[#EADDE3] bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold text-[#302535] shadow-2xs transition-all duration-200 hover:border-[#F29AB2] hover:bg-[#FFF5F7] hover:text-[#E85D8B] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight size={15} className="text-[#E85D8B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="flex items-center gap-2 pl-0 sm:pl-1">
                  <a
                    href="https://github.com/pohh09"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#EADDE3] bg-white text-[#756875] hover:bg-[#FCE8E8] hover:border-[#F8D2D9] hover:text-[#E85D8B] hover:-translate-y-0.5 hover:scale-105 transition-all shadow-2xs"
                  >
                    <FaGithub size={15} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pooja-daki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#EADDE3] bg-white text-[#756875] hover:bg-[#FCE8E8] hover:border-[#F8D2D9] hover:text-[#E85D8B] hover:-translate-y-0.5 hover:scale-105 transition-all shadow-2xs"
                  >
                    <FaLinkedin size={15} />
                  </a>
                </div>
              </div>

              <div
                ref={metricsRef}
                className="w-full pt-4 sm:pt-5 border-t border-[#F5D8E2]/90 flex flex-wrap items-center gap-2 sm:gap-2.5"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#F0DCE3] shadow-2xs text-[11px] font-bold text-[#302535] hover:border-[#E85D8B] transition-colors">
                  <Layers size={13} className="text-[#E85D8B]" />
                  <span>Component-driven UI</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#F0DCE3] shadow-2xs text-[11px] font-bold text-[#302535] hover:border-[#8B72D8] transition-colors">
                  <ShieldCheck size={13} className="text-[#8B72D8]" />
                  <span>Type-safe with TypeScript</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#F0DCE3] shadow-2xs text-[11px] font-bold text-[#302535] hover:border-[#27AE60] transition-colors">
                  <CheckCircle2 size={13} className="text-[#27AE60]" />
                  <span>Built with modern React tooling</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 relative flex items-center justify-center w-full">

              <div
                ref={workspaceRef}
                className="relative w-full rounded-[24px] sm:rounded-[30px] p-4 sm:p-6 lg:p-7 bg-[#FFFDFC] border-2 border-[#F0DCE3] shadow-[0_20px_55px_-12px_rgba(232,93,139,0.16)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-10px_rgba(232,93,139,0.22)] min-h-[420px] sm:min-h-[490px] flex flex-col justify-between"
              >

                <div className="absolute -top-3.5 -right-2 bg-[#FDEEB8] text-[#302535] font-kalam font-bold text-xs px-3 py-0.5 rounded-md shadow-xs rotate-6 border border-[#F8DC82] select-none z-20">
                  Keep Growing 🌱
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-3.5 mb-3 sm:mb-4 border-b border-[#F5E6EB]">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#E85D8B]" />
                        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#FAD074]" />
                        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#82D9A7]" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-[#756875] truncate">
                        poojadaki.dev/studio
                      </span>
                    </div>

                    <div className="flex items-center gap-0.5 sm:gap-1 p-0.5 rounded-full bg-[#FFF5F7] border border-[#F0DCE3] shrink-0">
                      <button
                        onClick={() => setActiveTab("ui")}
                        className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                          activeTab === "ui"
                            ? "bg-[#E85D8B] text-white shadow-2xs"
                            : "text-[#756875] hover:text-[#302535]"
                        }`}
                      >
                        Frontend
                      </button>
                      <button
                        onClick={() => setActiveTab("fullstack")}
                        className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                          activeTab === "fullstack"
                            ? "bg-[#8B72D8] text-white shadow-2xs"
                            : "text-[#756875] hover:text-[#302535]"
                        }`}
                      >
                        Backend
                      </button>
                      <button
                        onClick={() => setActiveTab("motion")}
                        className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                          activeTab === "motion"
                            ? "bg-[#F29AB2] text-white shadow-2xs"
                            : "text-[#756875] hover:text-[#302535]"
                        }`}
                      >
                        Motion
                      </button>
                    </div>
                  </div>

                  {activeTab === "ui" && (
                    <div className="space-y-3">

                      <div className="rounded-2xl border border-[#F0DCE3] bg-gradient-to-r from-[#FFF8F5] via-[#FFF5F7] to-[#FFF8F5] p-3.5 shadow-2xs flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FCE8E8] text-[#E85D8B] font-bold text-xs shadow-2xs">
                            <Layout size={18} />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-xs sm:text-sm font-bold text-[#302535]">Interactive UI Engine</h4>
                              <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-pulse" />
                            </div>
                            <p className="text-[11px] font-mono text-[#8B72D8]">React 19 &bull; Next.js 15 &bull; TS</p>
                          </div>
                        </div>

                        <button
                          onClick={() => setFluidityPercent((l) => (l >= 98 ? 88 : l + 2))}
                          className="px-3 py-1.5 rounded-full bg-white border border-[#EADDE3] text-[11px] font-bold text-[#302535] hover:bg-[#FFF5F7] transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <MousePointerClick size={12} className="text-[#E85D8B]" />
                          <span>Interactive Preview</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-2xl border border-[#F0DCE3] bg-white shadow-2xs">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-mono text-[#756875] font-bold uppercase">Architecture</span>
                            <Zap size={14} className="text-[#FAD074]" />
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-[#302535]">Full-Stack App</p>
                          <span className="text-[11px] text-[#27AE60] font-bold mt-1 inline-block">✓ Node + Express</span>
                        </div>

                        <div className="p-3.5 rounded-2xl border border-[#F0DCE3] bg-white shadow-2xs">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-mono text-[#756875] font-bold uppercase">Kinetic UI</span>
                            <Sparkles size={14} className="text-[#E85D8B]" />
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-[#302535]">Motion &amp; Transitions</p>
                          <span className="text-[11px] text-[#8B72D8] font-bold mt-1 inline-block">GSAP &amp; Framer</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl border border-[#F0DCE3] bg-[#FFF5F7] shadow-2xs flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FCE8E8] text-[#E85D8B]">
                            <Code2 size={16} />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-[#302535]">Clean Component Architecture</p>
                            <p className="text-[10px] font-mono text-[#756875]">TypeScript &bull; Tailwind CSS</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#E85D8B] px-2.5 py-1 rounded-full bg-white border border-[#F0DCE3]">
                          Modular &amp; Clean
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === "fullstack" && (
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-2xl border border-[#F0DCE3] bg-[#FFF5F7] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8DDF7] text-[#8B72D8]">
                            <Server size={16} />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-[#302535]">Node.js &amp; Express REST API</p>
                            <p className="text-[10px] font-mono text-[#8B72D8]">JWT Auth &bull; Structured Controllers</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setApiPing((p) => (p === 24 ? 18 : 24))}
                          className="text-[10px] font-mono font-bold text-[#27AE60] px-2.5 py-1 rounded-md bg-white border border-[#F0DCE3] flex items-center gap-1 cursor-pointer"
                        >
                          <span>200 OK</span>
                          <span className="text-[9px] text-[#756875]">({apiPing}ms)</span>
                        </button>
                      </div>

                      <div className="p-3.5 rounded-2xl border border-[#F0DCE3] bg-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#DDF5F8] text-[#2EA043]">
                            <Database size={16} />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-[#302535]">MongoDB &amp; Mongoose</p>
                            <p className="text-[10px] font-mono text-[#756875]">Indexed Collections &bull; Schemas</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#8B72D8] px-2.5 py-1 rounded-md bg-[#FFF5F7] border border-[#F0DCE3]">
                          Database Connected
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl border border-[#F0DCE3] bg-[#FFF5F7] flex items-center justify-between text-xs">
                        <span className="font-mono text-[10px] text-[#302535] font-bold">
                          GET /api/v1/projects → 200 Success
                        </span>
                        <span className="text-[10px] font-mono text-[#E85D8B] font-bold">
                          REST Endpoint
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === "motion" && (
                    <div className="space-y-3">
                      {[
                        { label: "Hardware Easing", value: "power3.out / cubic-bezier", tech: "GPU Layer" },
                        { label: "Mask Clip-Path", value: "polygon(0 0, 100% 0...)", tech: "CSS Mask" },
                        { label: "ScrollTrigger", value: "Timeline choreography", tech: "GSAP Engine" },
                      ].map((item) => (
                        <div key={item.label} className="p-3 rounded-2xl border border-[#F0DCE3] bg-[#FFF5F7] flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-[#302535]">{item.label}</p>
                            <p className="text-[10px] font-mono text-[#8B72D8]">{item.value}</p>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-[#E85D8B] px-2.5 py-1 rounded-md bg-white border border-[#F0DCE3]">
                            {item.tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#F5E6EB] flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-2 text-[#756875] text-[11px] sm:text-xs">
                    <span className="h-2 w-2 rounded-full bg-[#27AE60] animate-pulse" />
                    <span>Full-Stack Architecture</span>
                  </span>
                  <span className="font-mono text-[11px] text-[#8B72D8]">Responsive Design</span>
                </div>
              </div>

              <div ref={floatingLabelsRef} className="pointer-events-none">
                <div className="floating-chip absolute -bottom-3 -left-3 hidden sm:flex items-center gap-1.5 rounded-full border border-[#F0DCE3] bg-white px-3.5 py-1 text-xs font-bold text-[#302535] shadow-xs animate-float-slow">
                  <FaReact size={14} className="text-[#38BDF8]" />
                  <span>React 19</span>
                </div>

                <div className="floating-chip absolute -top-3 left-4 hidden sm:flex items-center gap-1.5 rounded-full border border-[#F0DCE3] bg-white px-3.5 py-1 text-xs font-bold text-[#302535] shadow-xs animate-float-slow">
                  <SiTypescript size={13} className="text-[#3178C6]" />
                  <span>TypeScript</span>
                </div>

                <div className="floating-chip absolute -bottom-3 right-4 hidden sm:flex items-center gap-1.5 rounded-full border border-[#F0DCE3] bg-white px-3.5 py-1 text-xs font-bold text-[#302535] shadow-xs animate-float-slow">
                  <SiNextdotjs size={13} className="text-[#302535]" />
                  <span>Next.js 15</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mt-[1px] relative z-20">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,35 C1180,95 900,10 650,60 C420,100 200,20 0,55 Z"
            fill="#FFE8EE"
          />
        </svg>
      </div>

    </section>
  );
}