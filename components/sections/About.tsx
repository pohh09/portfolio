"use client";

import { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Palette,
  Code2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  Terminal,
  Compass,
  Box
} from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { gsap } from "@/lib/animations/gsapSetup";

type StageKey = "idea" | "design" | "build";

export default function About() {
  const [activeStage, setActiveStage] = useState<StageKey>("idea");

  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const statementLine1Ref = useRef<HTMLHeadingElement>(null);
  const statementLine2Ref = useRef<HTMLSpanElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const eduCardRef = useRef<HTMLDivElement>(null);
  const connectorLineRef = useRef<HTMLDivElement>(null);
  const canvasCardRef = useRef<HTMLDivElement>(null);
  const stageNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // 1. Tag reveal through masking
      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 16, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { opacity: 1, y: 0, clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5 }
      )
        // 2. Main statement line 1 (Kalam)
        .fromTo(
          statementLine1Ref.current,
          { y: "100%", opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
          { y: "0%", opacity: 1, clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.65 },
          "-=0.2"
        )
        // 3. Main statement line 2 (Pink Kalam)
        .fromTo(
          statementLine2Ref.current,
          { y: "100%", opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
          { y: "0%", opacity: 1, clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.7 },
          "-=0.4"
        )
        // 4. Personal narrative intro
        .fromTo(
          introTextRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.4"
        )
        // 5. Thin animated connector line
        .fromTo(
          connectorLineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        // 6. Education detail along the line
        .fromTo(
          eduCardRef.current,
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.4"
        )
        // 7. Stage selector bar
        .fromTo(
          stageNavRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        // 8. Transforming central visual canvas
        .fromTo(
          canvasCardRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden bg-[#FFF8F5]"
    >
      {/* ── Large Organic Wave Background (Upper-Right flowing to Lower-Left) ── */}
      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none -z-10">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1440,0 C1100,80 800,10 600,220 C400,430 850,650 400,820 C200,900 80,880 0,980 L0,1000 L1440,1000 Z"
            fill="#FCE8E8"
            opacity="0.65"
          />
          <path
            d="M1440,150 C1200,240 950,180 750,380 C550,580 900,750 350,920 L1440,1000 Z"
            fill="#FFF1EC"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Decorative Doodles */}
      <div className="pointer-events-none absolute top-16 right-16 text-[#E85D8B] text-xl animate-float-slow select-none opacity-50">✦</div>
      <div className="pointer-events-none absolute bottom-20 left-12 text-[#FAD074] text-lg animate-float-slow select-none opacity-60">★</div>

      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">

        {/* ════════════════════════════════════════════════════════════════════
            1. EDITORIAL HEADER & NARRATIVE (WHO I AM → WHAT I STUDIED)
        ════════════════════════════════════════════════════════════════════ */}
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-12 lg:items-start mb-12 sm:mb-20">

          {/* Left Column (7 cols): Tag, Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Tag Badge */}
            <div
              ref={tagRef}
              className="inline-flex items-center gap-2 mb-4 rounded-full bg-[#FFE8EE] border border-[#FFD0DC] px-3.5 sm:px-4 py-1 text-xs font-kalam font-bold text-[#FF5E86] shadow-xs"
            >
              <span className="h-2 w-2 rounded-full bg-[#FF5E86] animate-pulse" />
              <span>ABOUT / 01 &bull; WHO I AM</span>
            </div>

            {/* Main Statement with Masked Line Reveal & Kalam Typography */}
            <div className="space-y-1 my-1 overflow-hidden">
              <div className="overflow-hidden">
                <h2
                  ref={statementLine1Ref}
                  className="font-kalam font-bold leading-[1.08] tracking-tight text-[#2E2234] will-change-transform text-[clamp(2.2rem,5vw,4.4rem)]"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  I turn ideas into
                </h2>
              </div>

              <div className="overflow-hidden">
                <span
                  ref={statementLine2Ref}
                  className="font-kalam font-bold leading-[1.08] tracking-tight text-[#FF5E86] block will-change-transform text-[clamp(2.2rem,5vw,4.4rem)]"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  interactive digital experiences. ✨
                </span>
              </div>
            </div>

            {/* Personal Narrative */}
            <p
              ref={introTextRef}
              className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#6D5D70] font-normal"
            >
              I&apos;m <strong className="text-[#2E2234] font-bold">Pooja Daki</strong>, a Full-Stack &amp; Frontend Developer driven by engineering craft, visual precision, and responsive performance. I specialize in building reactive React/Next.js interfaces connected to scalable Node.js/Express APIs and MongoDB services — turning complex workflows into elegant, intuitive digital products.
            </p>

            {/* Thin Animated Connector Line */}
            <div
              ref={connectorLineRef}
              className="w-full max-w-md h-0.5 bg-gradient-to-r from-[#FF5E86] via-[#9D80E4] to-transparent mt-7 hidden sm:block will-change-transform"
            />
          </div>

          {/* Right Column (5 cols): Academic Background Card */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <div
              ref={eduCardRef}
              className="pastel-card relative w-full rounded-[24px] sm:rounded-[30px] p-5 sm:p-7 border-2 border-[#F0DCE3] bg-white shadow-[0_12px_36px_-10px_rgba(255,94,134,0.12)] overflow-hidden"
            >
              {/* Top cute highlight */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF5E86] via-[#9D80E4] to-[#52D1DC]" />

              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-[#F0DCE3]">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FFE8EE] text-[#FF5E86] shadow-xs">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2E2234] font-kalam">
                      Academic Background
                    </h3>
                    <p className="text-xs font-bold text-[#9D80E4]">Engineering Degree</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFE8EE] border border-[#FFD0DC] px-2.5 sm:px-3 py-0.5 text-xs font-kalam font-bold text-[#FF5E86]">
                  <CheckCircle2 size={12} className="text-[#FF5E86]" />
                  Class of 2023
                </span>
              </div>

              <div className="space-y-1.5">
                <p className="text-lg sm:text-xl font-bold text-[#2E2234] font-kalam">
                  B.Tech in Information Technology
                </p>
                <p className="text-xs sm:text-sm text-[#6D5D70] leading-relaxed">
                  Rigorous academic foundation in data structures, algorithms, relational &amp; NoSQL database architecture, object-oriented software engineering, and modern web systems development.
                </p>
              </div>

              <div className="mt-4 sm:mt-5 pt-3.5 border-t border-[#F0DCE3] flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
                <span className="rounded-xl bg-[#FFF8F6] border border-[#F0DCE3] px-2.5 sm:px-3 py-1 font-bold text-[#2E2234] text-[11px] sm:text-xs">
                  Data Structures
                </span>
                <span className="rounded-xl bg-[#FFF8F6] border border-[#F0DCE3] px-2.5 sm:px-3 py-1 font-bold text-[#2E2234] text-[11px] sm:text-xs">
                  Web Systems
                </span>
                <span className="rounded-xl bg-[#FFF8F6] border border-[#F0DCE3] px-2.5 sm:px-3 py-1 font-bold text-[#2E2234] text-[11px] sm:text-xs">
                  Database Architecture
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════════
            2. SIGNATURE CENTRAL VISUAL JOURNEY: IDEA → DESIGN → BUILD
        ════════════════════════════════════════════════════════════════════ */}
        <div
          ref={canvasCardRef}
          className="pastel-card relative rounded-[24px] sm:rounded-[32px] p-4 sm:p-7 lg:p-9 border-2 border-[#F0DCE3] bg-white shadow-[0_16px_45px_-15px_rgba(255,94,134,0.12)] overflow-hidden"
        >
          {/* Header & Interactive Stage Controller */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-5 pb-5 sm:pb-6 mb-5 sm:mb-7 border-b border-[#F0DCE3]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={15} className="text-[#FF5E86]" />
                <span className="text-xs font-kalam font-bold tracking-wider text-[#9D80E4]">
                  Engineering Journey &amp; Process
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-kalam text-[#2E2234] tracking-tight">
                Idea &rarr; Design &rarr; Build <span className="text-[#FF5E86] text-xl sm:text-2xl">♡</span>
              </h3>
            </div>

            {/* Stage Selector Pills */}
            <div
              ref={stageNavRef}
              className="flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 rounded-2xl sm:rounded-full bg-[#FFF5F7] border border-[#F0DCE3] self-start md:self-auto shadow-xs max-w-full"
            >
              {[
                { key: "idea", label: "01 • IDEA", icon: Lightbulb },
                { key: "design", label: "02 • DESIGN", icon: Palette },
                { key: "build", label: "03 • BUILD", icon: Code2 },
              ].map((stage) => {
                const Icon = stage.icon;
                const isActive = activeStage === stage.key;
                return (
                  <button
                    key={stage.key}
                    onClick={() => setActiveStage(stage.key as StageKey)}
                    className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${isActive
                        ? "bg-[#FF5E86] text-white shadow-xs scale-102"
                        : "text-[#6D5D70] hover:text-[#2E2234] hover:bg-white"
                      }`}
                  >
                    <Icon size={12} />
                    <span>{stage.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Transforming Visual Canvas ── */}
          <div className="relative min-h-[260px] transition-all duration-500">

            {/* STAGE 1: IDEA */}
            {activeStage === "idea" && (
              <div className="grid gap-7 lg:grid-cols-12 items-center animate-fadeIn">
                <div className="lg:col-span-5 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-kalam font-bold text-[#FF5E86] bg-[#FFE8EE] px-3.5 py-0.5 rounded-full border border-[#FFD0DC]">
                    <Compass size={13} />
                    <span>STAGE 01 &bull; PROBLEM DISCOVERY &amp; ARCHITECTURE</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#2E2234] font-kalam">
                    System Architecture &amp; Data Scoping
                  </h4>
                  <p className="text-sm sm:text-base text-[#6D5D70] leading-relaxed">
                    Before writing UI or API code, I analyze user journey bottlenecks, structure normalized MongoDB document schemas, plan RESTful endpoint contracts, and establish modular state boundaries.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-[#2E2234]">
                    <span className="bg-[#FFF8F6] border border-[#F0DCE3] px-3 py-1 rounded-xl">Schema Modeling</span>
                    <span className="bg-[#FFF8F6] border border-[#F0DCE3] px-3 py-1 rounded-xl">REST Contracts</span>
                    <span className="bg-[#FFF8F6] border border-[#F0DCE3] px-3 py-1 rounded-xl">State Boundaries</span>
                  </div>
                </div>

                <div className="lg:col-span-7 rounded-3xl border-2 border-[#F0DCE3] bg-[#FFF8F6] p-5 sm:p-6 shadow-inner">
                  <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#F0DCE3] text-xs font-mono text-[#6D5D70]">
                    <span className="flex items-center gap-1.5">
                      <Workflow size={13} className="text-[#9D80E4]" />
                      concept-architecture.node
                    </span>
                    <span className="text-[#FF5E86] font-bold">Planned &bull; Validated</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-white border border-[#F0DCE3] shadow-xs">
                      <p className="text-[10px] font-mono uppercase text-[#FF5E86] font-bold">01 &bull; Requirements</p>
                      <p className="text-xs font-bold text-[#2E2234] mt-1">User Workflows</p>
                      <p className="text-[11px] text-[#6D5D70] mt-1">Zero latency &amp; frictionless user path scoping.</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white border border-[#F0DCE3] shadow-xs">
                      <p className="text-[10px] font-mono uppercase text-[#9D80E4] font-bold">02 &bull; Model</p>
                      <p className="text-xs font-bold text-[#2E2234] mt-1">Data Schemas</p>
                      <p className="text-[11px] text-[#6D5D70] mt-1">Normalized MongoDB collections &amp; indexing.</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white border border-[#F0DCE3] shadow-xs">
                      <p className="text-[10px] font-mono uppercase text-[#1FB5C4] font-bold">03 &bull; Service</p>
                      <p className="text-xs font-bold text-[#2E2234] mt-1">REST Endpoints</p>
                      <p className="text-[11px] text-[#6D5D70] mt-1">Authenticated JWT controllers &amp; validation.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 2: DESIGN */}
            {activeStage === "design" && (
              <div className="grid gap-7 lg:grid-cols-12 items-center animate-fadeIn">
                <div className="lg:col-span-5 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-kalam font-bold text-[#9D80E4] bg-[#FFE8EE] px-3.5 py-0.5 rounded-full border border-[#FFD0DC]">
                    <Layers size={13} />
                    <span>STAGE 02 &bull; INTERFACE SYSTEM &amp; TOKENS</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#2E2234] font-kalam">
                    Design Tokens &amp; Kinetic Motion
                  </h4>
                  <p className="text-sm sm:text-base text-[#6D5D70] leading-relaxed">
                    Translating design intuition into cohesive tokens: fluid typography scales, unified spacing units, accessible color palettes, and hardware-accelerated GSAP motion choreography.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-[#2E2234]">
                    <span className="bg-[#FFF8F6] border border-[#F0DCE3] px-3 py-1 rounded-xl">Kalam + Nunito</span>
                    <span className="bg-[#FFF8F6] border border-[#F0DCE3] px-3 py-1 rounded-xl">GSAP ScrollTrigger</span>
                    <span className="bg-[#FFF8F6] border border-[#F0DCE3] px-3 py-1 rounded-xl">Figma to TSX</span>
                  </div>
                </div>

                <div className="lg:col-span-7 rounded-3xl border-2 border-[#F0DCE3] bg-[#FFF8F6] p-5 sm:p-6 shadow-inner">
                  <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#F0DCE3] text-xs font-mono text-[#6D5D70]">
                    <span className="flex items-center gap-1.5">
                      <Box size={13} className="text-[#9D80E4]" />
                      ui-design-system.tokens
                    </span>
                    <span className="text-[#FF5E86] font-bold">60 FPS Hardware Accelerated</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-2xl bg-white border border-[#F0DCE3] shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-xl bg-[#FFE8EE] text-[#FF5E86] flex items-center justify-center text-xs font-bold">
                          Aa
                        </div>
                        <span className="text-xs font-bold text-[#2E2234]">Handwritten &amp; Modern Typography</span>
                      </div>
                      <span className="text-[11px] font-kalam text-[#FF5E86] font-bold bg-[#FFE8EE] px-2.5 py-0.5 rounded-full">Kalam + Nunito</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-[#F0DCE3] shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-xl bg-[#FFE8EE] text-[#9D80E4] flex items-center justify-center text-xs font-bold">
                          ⚡
                        </div>
                        <span className="text-xs font-bold text-[#2E2234]">GPU Hardware Acceleration</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#9D80E4] font-semibold bg-[#FFF8F6] border border-[#F0DCE3] px-2.5 py-0.5 rounded-full">will-change: transform</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 3: BUILD */}
            {activeStage === "build" && (
              <div className="grid gap-7 lg:grid-cols-12 items-center animate-fadeIn">
                <div className="lg:col-span-5 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-kalam font-bold text-[#FF5E86] bg-[#FFE8EE] px-3.5 py-0.5 rounded-full border border-[#FFD0DC]">
                    <Cpu size={13} />
                    <span>STAGE 03 &bull; FULL-STACK PRODUCTION PRODUCT</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#2E2234] font-kalam">
                    TypeScript, Node.js &amp; MongoDB
                  </h4>
                  <p className="text-sm sm:text-base text-[#6D5D70] leading-relaxed">
                    Executing clean full-stack code: React 19 client presentation, Next.js server components, Express REST controllers, and MongoDB document persistence — rigorously tested for zero runtime errors.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-[#2E2234]">
                    <span className="bg-[#FFF8F6] border border-[#F0DCE3] px-3 py-1 rounded-xl">React 19 &bull; Next.js 15</span>
                    <span className="bg-[#FFF8F6] border border-[#F0DCE3] px-3 py-1 rounded-xl">Node &bull; Express REST</span>
                    <span className="bg-[#FFF8F6] border border-[#F0DCE3] px-3 py-1 rounded-xl">MongoDB Atlas</span>
                  </div>
                </div>

                <div className="lg:col-span-7 rounded-3xl border-2 border-[#F0DCE3] bg-[#FFF8F6] p-5 sm:p-6 shadow-inner">
                  <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#F0DCE3] text-xs font-mono text-[#6D5D70]">
                    <span className="flex items-center gap-1.5">
                      <Terminal size={13} className="text-[#9D80E4]" />
                      production-ready.tsx
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Deployed Live
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-2xl bg-white border border-[#F0DCE3] shadow-xs">
                      <div className="flex items-center gap-1.5 text-[#1FB5C4] mb-1">
                        <FaReact size={14} />
                        <span className="text-[10px] font-mono font-bold uppercase">Frontend</span>
                      </div>
                      <p className="text-xs font-bold text-[#2E2234]">Next.js 15 SSR</p>
                      <p className="text-[10px] text-[#6D5D70] mt-0.5">Strict TypeScript</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-[#F0DCE3] shadow-xs">
                      <div className="flex items-center gap-1.5 text-[#9D80E4] mb-1">
                        <FaNodeJs size={14} />
                        <span className="text-[10px] font-mono font-bold uppercase">Backend</span>
                      </div>
                      <p className="text-xs font-bold text-[#2E2234]">Express + JWT</p>
                      <p className="text-[10px] text-[#6D5D70] mt-0.5">RESTful Services</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-[#F0DCE3] shadow-xs">
                      <div className="flex items-center gap-1.5 text-emerald-600 mb-1">
                        <SiMongodb size={14} />
                        <span className="text-[10px] font-mono font-bold uppercase">Database</span>
                      </div>
                      <p className="text-xs font-bold text-[#2E2234]">MongoDB Atlas</p>
                      <p className="text-[10px] text-[#6D5D70] mt-0.5">Mongoose Schemas</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Transition */}
          <div className="mt-7 pt-5 border-t border-[#F0DCE3] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="font-bold text-[#6D5D70]">
              Transforming concepts into verified, high-performance web products.
            </span>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 font-bold text-[#FF5E86] hover:text-[#9D80E4] transition-colors group self-start sm:self-auto font-kalam text-sm"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}