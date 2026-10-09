"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Search,
  PenTool,
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Layers,
  Layout,
  Zap,
} from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { gsap } from "@/lib/animations/gsapSetup";

// =========================================================================
// 5 EVOLVING CENTRAL DESIGN-TO-CODE CANVAS SCENES
// =========================================================================

// 01 — IDEA: Problem Framing & Conceptual Architecture
function CanvasIdea() {
  return (
    <div className="relative w-full h-[300px] sm:h-[340px] flex items-center justify-center select-none">
      {/* Floating Blueprint Coordinate Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#EADDE3_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      {/* Origin & Specs Micro Labels */}
      <span className="absolute top-2 left-2 font-mono text-[9px] text-[#A396A3]">
        STAGE_01 // CONCEPT_INIT
      </span>
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-[#A396A3]">
        CONSTRAINT // 375px &bull; 1440px
      </span>

      {/* Floating Spark Idea Node */}
      <motion.div
        initial={{ scale: 0.9, y: 10, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex flex-col items-center gap-4"
      >
        {/* Central Glowing Spark Core */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-28 h-28 rounded-full bg-[#FAD074]/30 blur-xl animate-pulse" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 border-[#FAD074] shadow-[0_8px_20px_rgba(250,208,116,0.25)] text-[#F59E0B]">
            <Lightbulb size={30} />
            <motion.span
              animate={{ scale: [1, 1.4, 1], rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              className="absolute -top-2 -right-2 text-xs"
            >
              ✦
            </motion.span>
          </div>
        </motion.div>

        {/* Problem → Solution Connection Nodes */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <motion.div
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="px-3 py-1.5 rounded-xl bg-white border border-[#F8D2D9] shadow-2xs text-[11px] font-mono text-[#E85D8B] flex items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B]" />
            <span>Problem Formulation</span>
          </motion.div>

          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="text-[#A396A3] text-xs font-mono"
          >
            &rarr;
          </motion.span>

          <motion.div
            initial={{ x: 15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="px-3 py-1.5 rounded-xl bg-white border border-[#B9A1E8] shadow-2xs text-[11px] font-mono text-[#8B5CF6] flex items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
            <span>Architecture Plan</span>
          </motion.div>
        </div>

        {/* Structural Spec Tag */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="px-3 py-1 rounded-full bg-[#FAF7FE] border border-[#E5DBF8] text-[10px] font-mono text-[#756875]"
        >
          ✦ Hierarchy Definition &bull; Scope &bull; UX Objectives
        </motion.div>
      </motion.div>
    </div>
  );
}

// 02 — RESEARCH: Wireframe Layouts, Spacing Grid & UX Flow
function CanvasResearch() {
  return (
    <div className="relative w-full h-[300px] sm:h-[340px] flex items-center justify-center select-none">
      {/* 8pt Spatial Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8DDDE5_1px,transparent_1px),linear-gradient(to_bottom,#8DDDE5_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <span className="absolute top-2 left-2 font-mono text-[9px] text-[#A396A3]">
        STAGE_02 // UX_RESEARCH
      </span>
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-[#0284C7]">
        GRID // 8PT_SPATIAL_SYSTEM
      </span>

      {/* Floating Wireframe Scaffold */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[290px] sm:max-w-[320px] p-4 rounded-2xl bg-white border-2 border-dashed border-[#8DDDE5] shadow-xs space-y-3 relative z-10"
      >
        {/* Wireframe Header Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-[#E0F7FA]">
          <div className="flex items-center gap-2 text-[#0284C7]">
            <Search size={14} />
            <span className="text-xs font-mono font-bold">Layout Scaffold</span>
          </div>
          <span className="text-[9px] font-mono bg-[#E0F7FA] text-[#0284C7] px-2 py-0.5 rounded-md font-bold">
            Low-Fi
          </span>
        </div>

        {/* Staggered Wireframe Content Blocks */}
        <div className="space-y-2">
          <div className="p-2.5 rounded-xl border border-dashed border-[#8DDDE5]/80 bg-[#F0F9FF] flex items-center justify-between text-[10px] font-mono text-[#0284C7]">
            <span>❖ Navigation Flow</span>
            <span>h: 48px</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-xl border border-dashed border-[#F8D2D9] bg-[#FFF5F7] text-[10px] font-mono text-[#E85D8B] flex flex-col justify-between h-14">
              <span className="font-bold">Hero Area</span>
              <span className="text-[9px] text-[#756875]">w: 100%</span>
            </div>
            <div className="p-2.5 rounded-xl border border-dashed border-[#E5DBF8] bg-[#FAF7FE] text-[10px] font-mono text-[#8B5CF6] flex flex-col justify-between h-14">
              <span className="font-bold">Actions</span>
              <span className="text-[9px] text-[#756875]">gap: 12px</span>
            </div>
          </div>
        </div>

        {/* Spatial Measurement Guide */}
        <div className="flex items-center justify-between pt-1 text-[9px] font-mono text-[#756875]">
          <span className="text-[#0284C7] font-bold">Padding: 16px</span>
          <span>Constraints: Auto</span>
        </div>
      </motion.div>
    </div>
  );
}

// 03 — FIGMA: Dev Mode Component Frame, Tokens & Cursor
function CanvasFigma() {
  return (
    <div className="relative w-full h-[300px] sm:h-[340px] flex items-center justify-center select-none">
      {/* Figma Canvas Coordinates Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#B9A1E8_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

      <span className="absolute top-2 left-2 font-mono text-[9px] text-[#8B5CF6]">
        STAGE_03 // FIGMA_DEV_MODE
      </span>
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-[#756875]">
        FRAME // AutoLayout [Vertical]
      </span>

      {/* Floating Figma Frame Component */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[290px] sm:max-w-[320px] p-4 rounded-2xl bg-white border-2 border-[#0D99FF]/40 shadow-[0_8px_24px_rgba(13,153,255,0.12)] space-y-3 relative z-10"
      >
        {/* Frame Dev Mode Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#E5E5EA]">
          <div className="flex items-center gap-1.5 text-[#0D99FF]">
            <FaFigma size={13} />
            <span className="text-xs font-mono font-bold">UI Atelier Card</span>
          </div>
          <span className="text-[9px] font-mono font-bold text-[#0D99FF] bg-[#0D99FF]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-[#0D99FF] animate-pulse" />
            <span>Dev Mode</span>
          </span>
        </div>

        {/* Auto Layout Preview */}
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded-xl border border-dashed border-[#0D99FF]/40 bg-[#FFF9FA] flex items-center justify-between">
            <span className="text-[#302535] text-[11px] font-bold">Primary Button</span>
            <span className="text-[10px] text-[#E85D8B] bg-[#FCE8E8] px-2 py-0.5 rounded-md">
              radius: full
            </span>
          </div>

          <div className="p-2.5 rounded-xl border border-dashed border-[#0D99FF]/40 bg-white shadow-2xs flex items-center justify-between text-[10px]">
            <div>
              <span className="font-bold text-[#302535]">Token System</span>
              <p className="text-[9px] text-[#756875]">--color-pink, --font-kalam</p>
            </div>
            <span className="text-[#2FB86A] font-bold">Matched ✓</span>
          </div>
        </div>

        {/* Interactive Moving Cursor */}
        <motion.div
          animate={{ x: [0, 8, -4, 0], y: [0, -6, 4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -bottom-3 -right-2 flex items-center gap-1"
        >
          <div className="h-4 w-4 text-[#0D99FF]">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 2L20 18L13 19L9 23L4 2Z" />
            </svg>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-[#0D99FF] text-white text-[9px] font-mono font-bold shadow-2xs">
            Pooja ✦
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

// 04 — CODE: React Component Morph with Live Typed TypeScript Code
function CanvasCode() {
  return (
    <div className="relative w-full h-[300px] sm:h-[340px] flex items-center justify-center select-none">
      <span className="absolute top-2 left-2 font-mono text-[9px] text-[#E85D8B]">
        STAGE_04 // REACT_TYPESCRIPT
      </span>
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-slate-400">
        STRICT // TypeScript 5.0
      </span>

      {/* Code Editor Window */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[300px] sm:max-w-[340px] p-4 rounded-2xl bg-[#221927] border-2 border-[#3E3247] shadow-xl text-slate-300 font-mono text-[10.5px] leading-relaxed space-y-2 z-10"
      >
        {/* Editor Window Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#E85D8B]" />
            <span className="h-2 w-2 rounded-full bg-[#FAD074]" />
            <span className="h-2 w-2 rounded-full bg-[#82D9A7]" />
            <span className="text-[10px] text-white font-bold ml-1">Card.tsx</span>
          </div>
          <span className="text-[9px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full">
            TypeScript
          </span>
        </div>

        {/* Code Lines */}
        <div className="space-y-0.5 py-1">
          <div>
            <span className="text-[#B9A1E8]">import</span> {"{ motion }"} <span className="text-[#B9A1E8]">from</span> <span className="text-[#8DDDE5]">&quot;framer-motion&quot;</span>;
          </div>
          <div>
            <span className="text-[#B9A1E8]">export function</span> <span className="text-[#E85D8B] font-bold">Card</span>({"{ title }"}: Props) {"{"}
          </div>
          <div className="pl-3">
            <span className="text-[#B9A1E8]">return</span> (
          </div>
          <div className="pl-6 text-[#8DDDE5]">
            &lt;<span className="text-[#E85D8B]">motion.div</span> <span className="text-[#FAD074]">whileHover</span>=<span className="text-slate-300">{"{{ y: -4 }}"}</span>&gt;
          </div>
          <div className="pl-9 text-slate-300">
            &lt;<span className="text-[#E85D8B]">Button</span> <span className="text-[#FAD074]">variant</span>=<span className="text-[#8DDDE5]">&quot;primary&quot;</span> /&gt;
          </div>
          <div className="pl-6 text-[#8DDDE5]">
            &lt;/<span className="text-[#E85D8B]">motion.div</span>&gt;
          </div>
          <div className="pl-3">);</div>
          <div>{"}"}</div>
        </div>

        {/* Terminal Status */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 text-[9px]">
          <span className="text-emerald-400 flex items-center gap-1 font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Type Safe</span>
          </span>
          <span className="text-slate-400">Zero CLS &bull; Semantic HTML</span>
        </div>
      </motion.div>
    </div>
  );
}

// 05 — FINAL: Production Ready Interactive Component
function CanvasFinal() {
  return (
    <div className="relative w-full h-[300px] sm:h-[340px] flex items-center justify-center select-none">
      <span className="absolute top-2 left-2 font-mono text-[9px] text-[#2FB86A]">
        STAGE_05 // PRODUCTION_SHIP
      </span>
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-[#E85D8B]">
        PERFORMANCE // 60_FPS
      </span>

      {/* Production Live Interface Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="w-full max-w-[290px] sm:max-w-[320px] p-5 rounded-[24px] bg-gradient-to-br from-white via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] shadow-[0_12px_32px_rgba(232,93,139,0.14)] space-y-3.5 z-10 cursor-pointer"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#F0DCE3]">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#E85D8B] text-white font-bold text-xs shadow-2xs">
              PD
            </div>
            <div>
              <h4 className="text-xs font-bold font-mono text-[#302535]">Atelier Component</h4>
              <p className="text-[9px] font-mono text-[#756875]">Production Ready</p>
            </div>
          </div>
          <span className="text-[9px] font-mono font-bold text-[#2FB86A] bg-[#EDFBF3] px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2FB86A] animate-ping" />
            <span>Ready to Ship ✓</span>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
          <div className="p-2 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
            <span className="text-[#E85D8B] font-bold block">100%</span>
            <span className="text-[8px] text-[#756875]">Responsive</span>
          </div>
          <div className="p-2 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
            <span className="text-[#8B72D8] font-bold block">Strict</span>
            <span className="text-[8px] text-[#756875]">TS Props</span>
          </div>
          <div className="p-2 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
            <span className="text-[#2FB86A] font-bold block">WCAG</span>
            <span className="text-[8px] text-[#756875]">AA Compliant</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-2.5 rounded-full bg-[#E85D8B] text-white text-xs font-mono font-bold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5"
        >
          <span>Explore Interaction</span>
          <span>&rarr;</span>
        </motion.button>
      </motion.div>
    </div>
  );
}

// =========================================================================
// 5 STORY STAGES CONFIGURATION
// =========================================================================

interface StageData {
  id: string;
  num: string;
  shortName: string;
  title: string;
  description: string;
  points: string[];
  canvas: React.ComponentType;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
}

const STAGES: StageData[] = [
  {
    id: "idea",
    num: "01",
    shortName: "Idea",
    title: "Every interface starts with a thought.",
    description:
      "Clarifying the core user problem, mapping out information architecture, and establishing constraints before touching visual tools or writing code.",
    points: [
      "Mapping the core user problem",
      "Structuring requirements & architecture",
      "Forming the creative vision",
    ],
    canvas: CanvasIdea,
    accentColor: "#F59E0B",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-300",
  },
  {
    id: "research",
    num: "02",
    shortName: "Research",
    title: "Before pixels, I understand the problem.",
    description:
      "Studying UX patterns, analyzing real user workflows, and sketching low-fidelity layout scaffolds to validate spatial hierarchy and usability.",
    points: [
      "Studying real user behaviors & UX patterns",
      "Low-fidelity wireframe flows & constraints",
      "Validating hierarchy before styling",
    ],
    canvas: CanvasResearch,
    accentColor: "#0284C7",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-300",
  },
  {
    id: "figma",
    num: "03",
    shortName: "Figma",
    title: "Ideas become systems.",
    description:
      "Transforming wireframes into comprehensive Figma design systems with strict Auto-Layout, 8pt spacing tokens, color variables, and accessible typography in Dev Mode.",
    points: [
      "Strict Auto Layout & 8pt spatial grid",
      "Design token variables for color & type",
      "Production-ready Dev Mode specs",
    ],
    canvas: CanvasFigma,
    accentColor: "#8B5CF6",
    accentBg: "bg-purple-500/10",
    accentBorder: "border-purple-300",
  },
  {
    id: "code",
    num: "04",
    shortName: "Code",
    title: "Design becomes a real interface.",
    description:
      "Translating design tokens into modular, type-safe Next.js and TypeScript components with clean semantic HTML, strict props, and zero layout shift.",
    points: [
      "Translating tokens into typed React & Next.js",
      "Semantic HTML & strict TypeScript props",
      "Zero layout shift & clean Tailwind styling",
    ],
    canvas: CanvasCode,
    accentColor: "#E85D8B",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-300",
  },
  {
    id: "final",
    num: "05",
    shortName: "Final",
    title: "Designed. Built. Ready to ship.",
    description:
      "Polishing micro-interactions, verifying responsive stability across viewports, tuning Framer Motion spring physics, and ensuring 60fps performance with WCAG accessibility.",
    points: [
      "Spring physics & micro-interactions",
      "100% responsive across every device",
      "WCAG AA compliant & 60fps smooth",
    ],
    canvas: CanvasFinal,
    accentColor: "#10B981",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-300",
  },
];

const AUTOPLAY_INTERVAL = 5200; // 5.2 seconds per stage

export default function DesignToCode() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const journeyAreaRef = useRef<HTMLDivElement>(null);

  const currentStage = STAGES[activeStageIndex] || STAGES[0];
  const ActiveCanvas = currentStage.canvas;

  const nextStage = useCallback(() => {
    setActiveStageIndex((prev) => (prev < STAGES.length - 1 ? prev + 1 : 0));
  }, []);

  const prevStage = useCallback(() => {
    setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1));
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextStage();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isAutoPlaying, nextStage, activeStageIndex]);

  // Section GSAP ScrollTrigger entrance
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
          journeyAreaRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24 scroll-mt-28 bg-[#FFF8F5]"
    >
      {/* Subtle Ambient Background Gradient Glows */}
      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#E85D8B]/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-[#B9A1E8]/6 blur-3xl" />
      </div>

      {/* Floating Whimsical Stars */}
      <div className="pointer-events-none absolute top-16 left-12 text-[#E85D8B] text-xl animate-float-slow select-none opacity-45">
        ✦
      </div>
      <div className="pointer-events-none absolute top-1/2 right-12 text-[#FAD074] text-lg animate-float-slow select-none opacity-50">
        ★
      </div>
      <div className="pointer-events-none absolute bottom-20 left-16 text-[#B9A1E8] text-base select-none opacity-40">
        ✦
      </div>

      <div className="mx-auto w-[90%] max-w-[1600px] px-1 sm:px-4 relative z-10">
        {/* =========================================================================
            SECTION HEADER (Exact wording preserved)
            ========================================================================= */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
          <div
            ref={tagRef}
            className="inline-flex items-center gap-2 mb-4 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
            <span>FIGMA TO CODE JOURNEY</span>
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
            A continuous journey of how I think, research, design, and code production-ready experiences.
          </p>
        </div>

        {/* =========================================================================
            OPEN CONNECTED 5-STAGE TIMELINE TRACKER
            ========================================================================= */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12 pb-2">
          {/* Animated Connecting Stage Path */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 overflow-x-auto no-scrollbar py-1">
            {STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;

              return (
                <React.Fragment key={stage.id}>
                  {/* Step Button */}
                  <button
                    type="button"
                    onClick={() => setActiveStageIndex(idx)}
                    className={`
                      group flex items-center gap-2 transition-all duration-300 cursor-pointer select-none shrink-0
                      ${isActive ? "scale-105" : "opacity-60 hover:opacity-100"}
                    `}
                  >
                    <span
                      className={`
                        flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-extrabold transition-all
                        ${isActive
                          ? "bg-[#E85D8B] text-white shadow-xs ring-4 ring-[#E85D8B]/15"
                          : isPast
                            ? "bg-[#FCE8E8] text-[#E85D8B]"
                            : "bg-white border border-[#EADDE3] text-[#756875]"
                        }
                      `}
                    >
                      {stage.num}
                    </span>
                    <span
                      className={`hidden xs:inline font-mono text-xs font-bold transition-colors ${isActive ? "text-[#302535]" : "text-[#756875]"
                        }`}
                    >
                      {stage.shortName}
                    </span>
                  </button>

                  {/* Animated Connecting Line */}
                  {idx < STAGES.length - 1 && (
                    <div className="flex-1 min-w-[20px] max-w-[60px] h-0.5 bg-[#F0DCE3] relative overflow-hidden shrink-0">
                      <motion.div
                        className="absolute inset-0 bg-[#E85D8B]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: idx < activeStageIndex ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Minimal Play / Pause & Prev / Next Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause journey" : "Play journey"}
              title={isAutoPlaying ? "Pause journey" : "Play journey"}
              className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-white border border-[#EADDE3] text-[#756875] hover:text-[#E85D8B] hover:border-[#F8D2D9] transition-all cursor-pointer shadow-2xs active:scale-95"
            >
              {isAutoPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={prevStage}
              aria-label="Previous stage"
              className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-white border border-[#EADDE3] text-[#756875] hover:text-[#E85D8B] hover:border-[#F8D2D9] transition-all cursor-pointer shadow-2xs active:scale-95"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              onClick={nextStage}
              aria-label="Next stage"
              className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-white border border-[#EADDE3] text-[#756875] hover:text-[#E85D8B] hover:border-[#F8D2D9] transition-all cursor-pointer shadow-2xs active:scale-95"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Subtle Auto-Progress Line */}
        <div className="relative w-full h-1 bg-[#F0DCE3]/50 rounded-full mb-8 sm:mb-12 overflow-hidden">
          <motion.div
            key={activeStageIndex}
            initial={{ width: "0%" }}
            animate={{ width: isAutoPlaying ? "100%" : "0%" }}
            transition={{
              duration: isAutoPlaying ? AUTOPLAY_INTERVAL / 1000 : 0,
              ease: "linear",
            }}
            className="h-full bg-gradient-to-r from-[#E85D8B] via-[#B9A1E8] to-[#82D9A7] rounded-full"
          />
        </div>

        {/* =========================================================================
            OPEN CANVAS COMPOSITION (No large rounded card container)
            ========================================================================= */}
        <div
          ref={journeyAreaRef}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="relative w-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Left Column: Evolving Central Design-to-Code Visual Canvas */}
              <div className="lg:col-span-6 flex items-center justify-center w-full">
                <ActiveCanvas />
              </div>

              {/* Right Column: Editorial Narrative & Real Deliverable Points */}
              <div className="lg:col-span-6 space-y-4 text-left">
                {/* Stage Tag */}
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#E85D8B]">
                  <span>0{activeStageIndex + 1} // {currentStage.shortName.toUpperCase()}</span>
                </div>

                {/* Main Headline */}
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#302535] font-kalam leading-tight"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  {currentStage.title}
                </h3>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-[#5A4D5C] leading-relaxed">
                  {currentStage.description}
                </p>

                {/* 3 Real Technical & Design Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  {currentStage.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A4D5C]">
                      <CheckCircle2
                        size={16}
                        className="text-[#2FB86A] shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Contextual Action Link */}
                {currentStage.id === "figma" && (
                  <div className="pt-2">
                    <a
                      href="https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#8B5CF6] hover:underline"
                    >
                      <span>Explore Figma System</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}