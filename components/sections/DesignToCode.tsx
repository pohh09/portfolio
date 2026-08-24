"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Code2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  Eye,
  ShieldCheck,
  Zap,
  Layout,
  ChevronLeft,
  ChevronRight,
  MousePointer,
  PenTool,
  CheckCircle
} from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { gsap } from "@/lib/animations/gsapSetup";

const superpowers = [
  {
    icon: Zap,
    title: "Design Token Translation",
    desc: "I follow Figma auto-layout and spacing tokens closely when translating designs to components.",
    color: "bg-[#FFF5F7] text-[#E85D8B] border-[#F8D2D9]",
  },
  {
    icon: Layout,
    title: "Responsive & Stable Layouts",
    desc: "Structure components with container constraints, aspect ratios, and skeleton states to minimize layout shifts.",
    color: "bg-[#FAF7FE] text-[#B9A1E8] border-[#E5DBF8]",
  },
  {
    icon: ShieldCheck,
    title: "Accessible Markup",
    desc: "I aim for accessible markup — semantic HTML, keyboard-navigable interactive elements, and clear focus states.",
    color: "bg-[#F4FCF7] text-[#2FB86A] border-[#CEF4DE]",
  },
];

export default function DesignToCode() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [cardInteracted, setCardInteracted] = useState(false);
  const [activeColorVariant, setActiveColorVariant] = useState<"pink" | "purple" | "cyan">("pink");

  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const previewAreaRef = useRef<HTMLDivElement>(null);

  const sampleCode = `import { motion } from "framer-motion";

export default function AtelierCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="p-6 rounded-[24px] bg-white border-2 border-[#F0DCE3] shadow-md"
    >
      <Badge variant="pastel">Auto Layout Spec</Badge>
      <h3 className="font-kalam font-bold text-[#302535]">Design Tokens</h3>
      <ActionButton variant="primary">Primary Action &rarr;</ActionButton>
    </motion.div>
  );
}`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(sampleCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {

    }
  };

  const stages = [
    {
      id: "idea",
      num: "01",
      title: "IDEA",
      tag: "Structure & Spec",
      desc: "Deconstructing visual hierarchy, grid constraints, and component interfaces before writing code.",
    },
    {
      id: "figma",
      num: "02",
      title: "FIGMA",
      tag: "Design Spec",
      desc: "Inspecting auto-layout rules, token variables, border radii, and padding measurements directly in Dev Mode.",
    },
    {
      id: "code",
      num: "03",
      title: "CODE",
      tag: "Implementation",
      desc: "Crafting clean, type-safe React + Tailwind CSS component code with strict TypeScript interfaces.",
    },
    {
      id: "interaction",
      num: "04",
      title: "INTERACTION",
      tag: "Micro-Motion",
      desc: "Adding spring physics, gesture feedback, and smooth hover micro-animations with Framer Motion.",
    },
    {
      id: "final",
      num: "05",
      title: "FINAL",
      tag: "Interface",
      desc: "The finished, production-ready component — responsive, accessible, tested, and ready to ship.",
    },
  ];

  const currentStage = stages[activeStage] || stages[0];

  const handlePrev = () => {
    setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1));
  };

  const handleNext = () => {
    setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45 }
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.2"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          previewAreaRef.current,
          { opacity: 0, y: 24, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="workflow" ref={sectionRef} className="relative overflow-hidden py-16 sm:py-24 scroll-mt-28 bg-[#FFF8F5]">

      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#E85D8B]/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-[#B9A1E8]/6 blur-3xl" />
      </div>

      {/* Floating star doodles */}
      <div className="pointer-events-none absolute top-16 left-16 text-[#E85D8B] text-xl animate-float-slow select-none opacity-45">✦</div>
      <div className="pointer-events-none absolute top-1/2 right-12 text-[#FAD074] text-lg animate-float-slow select-none opacity-50">★</div>
      <div className="pointer-events-none absolute bottom-20 left-12 text-[#B9A1E8] text-base select-none opacity-40">✦</div>

      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div
            ref={tagRef}
            className="inline-flex items-center gap-2 mb-4 sm:mb-5 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
            <span>BUILD PROCESS</span>
          </div>

          <h2
            ref={headingRef}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#302535] font-kalam leading-[1.15]"
            style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
          >
            From idea to{" "}
            <span className="text-[#E85D8B] relative inline-block">
              interface.
              <motion.svg
                className="absolute -bottom-1.5 left-0 w-full h-3.5 overflow-visible pointer-events-none text-[#E85D8B]"
                viewBox="0 0 200 12"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
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

          <p
            ref={subtitleRef}
            className="mt-3 text-xs sm:text-sm lg:text-base text-[#756875] font-normal leading-relaxed"
          >
            How a design becomes something you can actually use.
          </p>
        </div>

        {/* Superpowers Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8 sm:mb-12">
          {superpowers.map((power, idx) => {
            const Icon = power.icon;
            return (
              <motion.div
                key={power.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-[22px] bg-white border-2 border-[#F0DCE3] p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-all flex items-start gap-3.5"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${power.color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#302535] font-mono leading-snug">
                    {power.title}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-[#756875] leading-relaxed">
                    {power.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            MAIN INTERACTIVE BUILD PROCESS PREVIEW AREA
            ========================================================================= */}
        <div
          ref={previewAreaRef}
          className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] p-4 sm:p-7 shadow-[0_16px_45px_-15px_rgba(232,93,139,0.12)] mb-12 sm:mb-16"
        >

          {/* Stage Selector Bar (Desktop & Mobile) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-6 border-b border-[#F0DCE3]">

            {/* Stage Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1.5 pr-2 hidden sm:flex">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E85D8B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FAD074]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#82D9A7]" />
              </div>

              {stages.map((stage, idx) => {
                const isActive = idx === activeStage;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`
                      relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5 min-h-[38px] active:scale-95
                      ${isActive
                        ? "text-[#E85D8B] bg-[#FFF5F7] border border-[#F8D2D9] shadow-2xs ring-1 ring-[#E85D8B]/20"
                        : "text-[#756875] bg-white border border-[#EADDE3] hover:text-[#302535] hover:border-[#F29AB2]"
                      }
                    `}
                  >
                    <span className="text-[10px] text-[#E85D8B] opacity-75">{stage.num}</span>
                    <span>{stage.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Progress Indicator & Nav Arrows */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#F0DCE3] shadow-2xs min-h-[38px]">
                <span className="font-mono text-xs font-extrabold text-[#E85D8B]">{currentStage.num}</span>
                <span className="font-mono text-xs text-[#A396A3]">/</span>
                <span className="font-mono text-xs font-bold text-[#756875]">05</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous build stage"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#EADDE3] text-[#756875] hover:text-[#E85D8B] hover:border-[#F8D2D9] hover:bg-[#FFF5F7] transition-colors cursor-pointer active:scale-90 shadow-2xs"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next build stage"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#EADDE3] text-[#756875] hover:text-[#E85D8B] hover:border-[#F8D2D9] hover:bg-[#FFF5F7] transition-colors cursor-pointer active:scale-90 shadow-2xs"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>

          </div>

          {/* Current Stage Overview */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 px-1">
            <div>
              <div className="flex items-center gap-2">
                <h3
                  className="text-lg sm:text-xl font-bold font-kalam text-[#302535] leading-tight"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  Phase {currentStage.num} &bull; {currentStage.title}
                </h3>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E85D8B] bg-[#FCE8E8] border border-[#F8D2D9] px-2.5 py-0.5 rounded-full">
                  {currentStage.tag}
                </span>
              </div>
              <p className="text-xs text-[#756875] font-sans mt-0.5">
                {currentStage.desc}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems?t=3eeIRiZMSmXrxYRf-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5F7] border border-[#F8D2D9] px-3 py-1 text-xs font-mono font-bold text-[#E85D8B] hover:bg-[#FFE8EE] transition-all shadow-2xs min-h-[32px]"
              >
                <FaFigma size={12} />
                <span>Figma</span>
                <ExternalLink size={10} />
              </a>

              <a
                href="https://reactdesignsystem.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#302535] text-white px-3.5 py-1 text-xs font-mono font-bold hover:bg-[#E85D8B] transition-all shadow-2xs min-h-[32px]"
              >
                <Eye size={12} />
                <span>Storybook</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* =========================================================================
              DYNAMIC STAGE TRANSFORMATION PREVIEW
              ========================================================================= */}
          <div className="relative w-full rounded-2xl bg-white border-2 border-[#F0DCE3] p-4 sm:p-6 shadow-inner overflow-hidden min-h-[360px] flex items-center justify-center">
            <AnimatePresence mode="wait">

              {/* -------------------------------------------------------------
                  STAGE 01: IDEA (Concept Blueprint & Structural Wireframe)
                  ------------------------------------------------------------- */}
              {currentStage.id === "idea" && (
                <motion.div
                  key="stage-idea"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-xl p-5 sm:p-6 rounded-2xl border-2 border-dashed border-[#B9A1E8]/60 bg-[#FAF7FE]/50 space-y-4"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#E8DDF7]">
                    <div className="flex items-center gap-2 text-[#8B72D8]">
                      <PenTool size={15} />
                      <span className="text-xs font-mono font-bold">Concept Blueprint &bull; Architecture Plan</span>
                    </div>
                    <span className="text-[10px] font-mono bg-[#E8DDF7] text-[#8B72D8] px-2 py-0.5 rounded-full font-bold">
                      Layout Schema
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl border border-dashed border-[#B9A1E8] bg-white text-xs font-mono text-[#756875] flex items-center justify-between">
                      <span>❖ Container: 16px padding &bull; 24px radius</span>
                      <span className="text-[#8B72D8] font-bold">Auto-Layout Vertical</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl border border-dashed border-[#F8D2D9] bg-[#FFF5F7] text-xs font-mono text-[#E85D8B]">
                        <span className="block font-bold">Color Tokens</span>
                        <span className="text-[10px] text-[#756875]">--bg-page, --accent-pink</span>
                      </div>
                      <div className="p-3 rounded-xl border border-dashed border-[#CEF1F5] bg-[#EBF8FA] text-xs font-mono text-[#2BAAB8]">
                        <span className="block font-bold">Typography Hierarchy</span>
                        <span className="text-[10px] text-[#756875]">Kalam Heading + Nunito Body</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl border border-dashed border-[#CEF4DE] bg-[#EDFBF3] text-xs font-mono text-[#2FB86A] flex items-center justify-between">
                      <span>❖ Interactive Button Group</span>
                      <span className="font-bold">Hover State Physics</span>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] font-mono text-[#8B72D8]">
                      Stage 1 complete &rarr; Proceeding to Figma design system spec
                    </span>
                  </div>
                </motion.div>
              )}

              {/* -------------------------------------------------------------
                  STAGE 02: FIGMA (Real Figma Frame Spec with Dev Mode)
                  ------------------------------------------------------------- */}
              {currentStage.id === "figma" && (
                <motion.div
                  key="stage-figma"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-xl rounded-[22px] bg-white border-2 border-[#0D99FF]/30 p-5 shadow-2xs space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0D99FF]/10 text-[#0D99FF]">
                        <FaFigma size={14} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#302535] font-mono leading-tight">
                          Figma Frame: UI Atelier Card
                        </h4>
                        <p className="text-[10px] font-mono text-[#756875]">Auto Layout &bull; 16px padding &bull; 24px radius</p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-[#0D99FF] bg-[#0D99FF]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0D99FF] animate-pulse" />
                      <span>Dev Mode</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="relative rounded-2xl border border-dashed border-[#0D99FF]/40 p-3.5 bg-[#FFF9F6]">
                      <span className="absolute -top-2 left-3 px-1.5 text-[9px] font-mono text-[#0D99FF] bg-white font-bold rounded shadow-2xs">
                        ❖ Button Group &bull; gap: 8px &bull; radius: full
                      </span>
                      <div className="flex items-center gap-2.5 pt-1">
                        <button type="button" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E85D8B] text-white text-xs font-bold shadow-xs">
                          <span>Primary Action</span>
                          <ArrowRight size={12} />
                        </button>
                        <button type="button" className="px-3.5 py-2 rounded-full bg-white border border-[#EADDE3] text-[#302535] text-xs font-bold shadow-2xs">
                          <span>Secondary</span>
                        </button>
                      </div>
                    </div>

                    <div className="relative rounded-2xl border border-dashed border-[#0D99FF]/40 p-3.5 bg-white shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="absolute -top-2 left-3 px-1.5 text-[9px] font-mono text-[#0D99FF] bg-white font-bold rounded shadow-2xs">
                        ❖ Token System Match
                      </span>
                      <div>
                        <span className="text-xs font-bold text-[#302535]">Color &amp; Typography Tokens</span>
                        <p className="text-[10px] text-[#756875]">Var: --font-kalam, --color-pink-500 (#E85D8B)</p>
                      </div>
                      <span className="text-[10px] font-mono bg-[#EDFBF3] text-[#2FB86A] border border-[#CEF4DE] px-2.5 py-0.5 rounded-full font-bold self-start sm:self-auto">
                        Design Token Match ✓
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#E5E5EA] text-[10px] font-mono text-[#756875]">
                    <span className="text-[#0D99FF] font-bold">Auto Layout: Vertical &bull; Spacing: 16px</span>
                    <span className="text-[#8E8E93]">Figma Component</span>
                  </div>
                </motion.div>
              )}

              {/* -------------------------------------------------------------
                  STAGE 03: CODE (React + TSX Implementation View)
                  ------------------------------------------------------------- */}
              {currentStage.id === "code" && (
                <motion.div
                  key="stage-code"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-xl rounded-[22px] bg-[#221927] border-2 border-[#3E3247] p-5 text-slate-300 shadow-inner space-y-3"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8DDF7] text-[#8B72D8]">
                        <Code2 size={14} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white font-mono leading-tight">
                          AtelierCard.tsx
                        </h4>
                        <p className="text-[10px] font-mono text-slate-400">TypeScript &bull; Framer Motion &bull; Tailwind</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className={`
                        px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95
                        ${copiedCode
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                          : "bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700"
                        }
                      `}
                    >
                      {copiedCode ? (
                        <>
                          <Check size={11} className="text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={11} />
                          <span>Copy TSX</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="py-2 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 space-y-1">
                    <div><span className="text-[#B9A1E8]">import</span> {"{ motion }"} <span className="text-[#B9A1E8]">from</span> <span className="text-[#8DDDE5]">&quot;framer-motion&quot;</span>;</div>
                    <div><span className="text-[#B9A1E8]">export default function</span> <span className="text-[#E85D8B] font-bold">AtelierCard</span>() {"{"}</div>
                    <div className="pl-4"><span className="text-[#B9A1E8]">return</span> (</div>
                    <div className="pl-8 text-[#8DDDE5]">&lt;<span className="text-[#E85D8B]">motion.div</span> <span className="text-[#FAD074]">whileHover</span>=<span className="text-slate-300">{"{{ y: -6 }}"}</span></div>
                    <div className="pl-12 text-[#FAD074]">className=<span className="text-[#8DDDE5]">&quot;p-6 rounded-[24px] bg-white border-2 border-[#F0DCE3]&quot;</span>&gt;</div>
                    <div className="pl-12 text-slate-300">&lt;<span className="text-[#E85D8B]">ActionButton</span> <span className="text-[#FAD074]">variant</span>=<span className="text-[#8DDDE5]">&quot;primary&quot;</span> /&gt;</div>
                    <div className="pl-8 text-[#8DDDE5]">&lt;/<span className="text-[#E85D8B]">motion.div</span>&gt;</div>
                    <div className="pl-4">);</div>
                    <div>{"}"}</div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-700/60 text-[10px] font-mono">
                    <span className="text-emerald-400 flex items-center gap-1 font-bold">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span>Stable Layout Structure</span>
                    </span>
                    <span className="text-slate-400">Strict Type-Checking ✓</span>
                  </div>
                </motion.div>
              )}

              {/* -------------------------------------------------------------
                  STAGE 04: INTERACTION (Live Micro-Animation Sandbox)
                  ------------------------------------------------------------- */}
              {currentStage.id === "interaction" && (
                <motion.div
                  key="stage-interaction"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-xl space-y-4"
                >
                  <div className="text-center">
                    <span className="text-xs font-mono text-[#E85D8B] font-bold flex items-center justify-center gap-1.5">
                      <MousePointer size={13} className="animate-bounce" />
                      <span>Interact with the live card below &bull; hover, click, or tap buttons!</span>
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-6 rounded-[24px] bg-white border-2 border-[#F0DCE3] shadow-[0_12px_32px_rgba(232,93,139,0.12)] space-y-4 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] text-[#E85D8B] text-xs font-mono font-bold">
                        ✦ Live Micro-Animation
                      </span>
                      <span className="text-xs font-mono text-[#82D9A7] font-bold flex items-center gap-1">
                        <CheckCircle size={12} />
                        <span>Framer Motion Active</span>
                      </span>
                    </div>

                    <div>
                      <h4
                        className="text-xl font-bold font-kalam text-[#302535]"
                        style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                      >
                        UI Atelier Card &bull; Spring Physics
                      </h4>
                      <p className="text-xs text-[#756875] font-sans mt-0.5">
                        Interactive component with spring dampening and micro-interactions.
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 pt-2">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCardInteracted(true)}
                        className="px-5 py-2.5 rounded-full bg-[#E85D8B] text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>{cardInteracted ? "Triggered! ✨" : "Primary Action"}</span>
                        <ArrowRight size={13} />
                      </motion.button>

                      <div className="flex items-center gap-1.5 ml-auto">
                        <span className="text-[10px] font-mono text-[#A396A3]">Variant:</span>
                        {(["pink", "purple", "cyan"] as const).map((variant) => (
                          <button
                            key={variant}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveColorVariant(variant);
                            }}
                            className={`h-5 w-5 rounded-full border-2 transition-transform cursor-pointer ${
                              variant === "pink" ? "bg-[#E85D8B]" : variant === "purple" ? "bg-[#B9A1E8]" : "bg-[#8DDDE5]"
                            } ${activeColorVariant === variant ? "scale-110 border-[#302535]" : "border-white"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* -------------------------------------------------------------
                  STAGE 05: FINAL (Built & Animated Interface)
                  ------------------------------------------------------------- */}
              {currentStage.id === "final" && (
                <motion.div
                  key="stage-final"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-xl space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#EDFBF3] border border-[#CEF4DE] text-[#2FB86A] text-xs font-mono font-bold flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#2FB86A]" />
                      <span>Built &amp; animated.</span>
                    </span>

                    <span className="text-xs font-mono text-[#E85D8B] font-bold">
                      Production Ready &bull; 60 FPS
                    </span>
                  </div>

                  <div className="p-6 rounded-[26px] bg-gradient-to-br from-white via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] shadow-[0_16px_40px_rgba(232,93,139,0.14)] space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0DCE3]">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E85D8B] text-white shadow-2xs font-bold text-xs">
                          PD
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#302535] font-mono leading-tight">
                            Atelier Component Module
                          </h4>
                          <p className="text-[10px] font-mono text-[#756875]">Zero layout shift &bull; Accessible markup</p>
                        </div>
                      </div>

                      <span className="text-xs font-kalam font-bold text-[#E85D8B]">
                        Ready to Ship ✨
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                        <span className="text-[#E85D8B] font-bold block">100%</span>
                        <span className="text-[10px] text-[#756875]">Responsive</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                        <span className="text-[#8B72D8] font-bold block">Strict</span>
                        <span className="text-[10px] text-[#756875]">TypeScript</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                        <span className="text-[#2FB86A] font-bold block">A11y</span>
                        <span className="text-[10px] text-[#756875]">Compliant</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#756875]">
                      <span>From blueprint to production interface</span>
                      <span className="text-[#E85D8B] font-bold font-kalam">Pooja Daki ✦</span>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Console Bottom Bar */}
          <div className="mt-4 pt-3 border-t border-[#F0DCE3] flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-[11px] font-mono">
            <div className="flex items-center gap-2 text-[#756875]">
              <span className="flex h-2 w-2 rounded-full bg-[#2FB86A] animate-pulse shrink-0" />
              <span className="font-bold text-[#302535]">Phase {currentStage.num}:</span>
              <span className="text-[#756875]">{currentStage.desc}</span>
            </div>

            <div className="flex items-center gap-2 text-[#A396A3]">
              <span>Stage {currentStage.num} of 05</span>
              <span className="text-[#E85D8B] font-bold">&bull; Click tabs or arrows</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}