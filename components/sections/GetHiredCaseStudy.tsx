"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  FileText,
  MessageSquare,
  Network,
  Database,
  Bot,
  Kanban,
  CheckCircle,
  Eye
} from "lucide-react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiGoogle } from "react-icons/si";
import { gsap } from "@/lib/animations/gsapSetup";

interface CaseStudyProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    github: string;
    live: string;
    caseStudy: {
      problem: string;
      decisions: { title: string; detail: string }[];
      challenges: { title: string; detail: string }[];
      nextSteps: string[];
    };
  };
}

/* Feature data with interactive previews */
const interactiveFeatures = [
  {
    id: "ats",
    title: "AI Resume & ATS Scoring",
    tag: "Analysis Pipeline",
    desc: "Extracts multi-column PDFs, parses structured text, and evaluates keywords against target job descriptions with heuristic fallbacks.",
    icon: FileText,
    color: "#E85D8B",
    bg: "bg-[#FFF5F7]",
    border: "border-[#F8D2D9]",
    badge: "92% ATS Match Score",
    previewText: "Keyword alignment &bull; Section weighting &bull; Actionable feedback",
  },
  {
    id: "interview",
    title: "AI Mock Interview Room",
    tag: "Multi-Round Agent",
    desc: "Carries conversation context across multiple technical questions, evaluating response clarity, accuracy, and depth.",
    icon: Bot,
    color: "#8B72D8",
    bg: "bg-[#FAF7FE]",
    border: "border-[#E8DDF7]",
    badge: "Rubric Scoring Active",
    previewText: "Real-time AI evaluation &bull; Context retention &bull; Strengths breakdown",
  },
  {
    id: "tracker",
    title: "Kanban Application Tracker",
    tag: "Drag & Drop Board",
    desc: "Optimistic UI state with drag-and-drop status stages (Applied, Interviewing, Offered) synchronized with database records.",
    icon: Kanban,
    color: "#2BAAB8",
    bg: "bg-[#EBF8FA]",
    border: "border-[#CEF1F5]",
    badge: "Optimistic Updates",
    previewText: "Instant drag feedback &bull; Multi-view table &bull; TanStack Cache",
  },
  {
    id: "aggregator",
    title: "Job Aggregator Service",
    tag: "Multi-API Gateway",
    desc: "Concurrent query execution via Promise.allSettled across 9 remote job providers with unified schema normalizer.",
    icon: Network,
    color: "#FAD074",
    bg: "bg-[#FFF9EB]",
    border: "border-[#FCE8B8]",
    badge: "Concurrent Queries",
    previewText: "Zero blocking failures &bull; Duplicate detection &bull; Memory caching",
  },
];

/* Tech decisions with short rationales */
const techDecisions = [
  {
    tech: "React 19 & TypeScript",
    category: "Frontend Core",
    icon: FaReact,
    color: "#00D8FF",
    reason: "Component-based UI architecture with strict type safety across complex resume & job application schemas.",
  },
  {
    tech: "Zustand & TanStack Query",
    category: "State Management",
    icon: Layers,
    color: "#E85D8B",
    reason: "Separates client session state (Zustand) from server data caching and optimistic updates (TanStack Query).",
  },
  {
    tech: "Node.js & Express.js",
    category: "Backend API",
    icon: FaNodeJs,
    color: "#68A063",
    reason: "Asynchronous REST runtime with modular route controllers and lightweight middleware pipelines.",
  },
  {
    tech: "MongoDB & Mongoose",
    category: "Database",
    icon: SiMongodb,
    color: "#13AA52",
    reason: "Flexible document model accommodating dynamic resume layouts, application notes, and interview logs.",
  },
  {
    tech: "Google Gemini AI",
    category: "AI Service Layer",
    icon: SiGoogle,
    color: "#4285F4",
    reason: "Dedicated prompt service layer for ATS keyword scoring, rubric evaluation, and contextual interview turn scoring.",
  },
  {
    tech: "Tailwind CSS & Motion",
    category: "Styling & Motion",
    icon: SiTailwindcss,
    color: "#38B2AC",
    reason: "Design tokens, utility-first consistency, and fluid spring micro-interactions without heavy CSS bloat.",
  },
];

/* Real Engineering Challenges */
const realChallenges = [
  {
    id: "api",
    title: "Aggregating jobs from 9 external APIs",
    icon: Network,
    challenge: "External job providers return inconsistent data shapes, rate-limit unpredictably, and often list duplicate postings. A single slow or down API could block the entire search request.",
    solution: "Built a shared provider abstraction with a query normalizer, ran requests concurrently using Promise.allSettled, and added caching with deduplication algorithms.",
    result: "Fast, resilient search with unified job schemas and zero cascading request failures.",
  },
  {
    id: "ai",
    title: "Making AI features resilient and deterministic",
    icon: Bot,
    challenge: "Gemini responses occasionally returned wrapped in markdown or malformed JSON, and calls could time out under high network latency.",
    solution: "Structured a dedicated prompt service layer with strict JSON validation and an automatic local heuristic scoring fallback mode.",
    result: "Zero silent failures — the application clearly indicates whether results came from AI or fallback scoring with 100% stable UI rendering.",
  },
  {
    id: "resume",
    title: "Parsing real-world multi-format resumes",
    icon: FileText,
    challenge: "Uploaded resumes come in messy formats — multi-column PDFs, Word documents, scanned image-only files, and inconsistent headers/footers.",
    solution: "Built a parsing pipeline (pdf-parse + mammoth) with cleanup logic to strip header artifacts and early detection for scanned PDFs.",
    result: "Clean text extraction with friendly user guidance for unparseable image-only documents instead of crashes.",
  },
];

const storySteps = [
  { id: "problem", num: "01", label: "PROBLEM" },
  { id: "built", num: "02", label: "WHAT I BUILT" },
  { id: "decisions", num: "03", label: "TECHNICAL DECISIONS" },
  { id: "challenges", num: "04", label: "CHALLENGES" },
  { id: "result", num: "05", label: "RESULT" },
  { id: "live", num: "06", label: "LIVE PROJECT" },
];

export default function GetHiredCaseStudy({ project }: CaseStudyProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedFeature, setSelectedFeature] = useState<string>("ats");
  const caseStudyRef = useRef<HTMLDivElement>(null);

  // Track active step on scroll using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNum = parseInt(entry.target.getAttribute("data-step") || "1", 10);
            if (!isNaN(stepNum)) {
              setActiveStep(stepNum);
            }
          }
        });
      },
      { threshold: 0.25, rootMargin: "-10% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("[data-step]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (stepId: string) => {
    const el = document.getElementById(stepId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={caseStudyRef} className="min-h-screen bg-[#FFF8F5] text-[#302535] selection:bg-[#FCE8E8] selection:text-[#E85D8B]">

      {/* Sticky Header with Navigation & Live Progress Indicator */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-[#F0DCE3] transition-all">
        <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1500px] py-3 flex items-center justify-between gap-3">
          
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-[#EADDE3] bg-white px-3.5 sm:px-4 py-1.5 text-xs font-bold text-[#302535] shadow-2xs transition-all hover:border-[#F29AB2] hover:bg-[#FFF5F7] hover:text-[#E85D8B] min-h-[36px]"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
            <span className="hidden xs:inline">Back to Projects</span>
            <span className="xs:hidden">Back</span>
          </Link>

          {/* Center Story Step Navigator */}
          <div className="hidden md:flex items-center gap-1">
            {storySteps.map((step, idx) => {
              const isActive = activeStep === idx + 1;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => scrollToStep(step.id)}
                  className={`
                    px-2.5 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer select-none
                    ${isActive
                      ? "bg-[#FFF5F7] text-[#E85D8B] border border-[#F8D2D9] shadow-2xs"
                      : "text-[#756875] hover:text-[#302535]"
                    }
                  `}
                >
                  <span>{step.num}</span>
                  <span className="ml-1 opacity-80">{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Progress Counter & Live Link */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F0DCE3] shadow-2xs">
              <span className="font-mono text-xs font-extrabold text-[#E85D8B]">0{activeStep}</span>
              <span className="font-mono text-xs text-[#A396A3]">/</span>
              <span className="font-mono text-xs font-bold text-[#756875]">06</span>
            </div>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#E85D8B] text-white px-3.5 sm:px-4 py-1.5 text-xs font-bold shadow-xs hover:bg-[#D44776] transition-all hover:-translate-y-0.5 min-h-[36px]"
              >
                <span>Live App</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>

        </div>
      </header>

      {/* Hero Overview */}
      <section className="relative pt-10 sm:pt-14 pb-12 sm:pb-16 overflow-hidden border-b border-[#F0DCE3]/80">
        <div className="pointer-events-none absolute -top-20 right-10 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#FFF0F4]/90 via-white/40 to-transparent blur-3xl opacity-80 select-none -z-10" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E8DDF7]/40 via-[#FFF0F4]/60 to-transparent blur-3xl opacity-75 select-none -z-10" />

        <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1500px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-1 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-[#E85D8B] animate-pulse" />
                <span>INTERACTIVE PRODUCT CASE STUDY</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold tracking-tight text-[#302535] font-kalam leading-[1.14]"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                GetHired &bull;{" "}
                <span className="text-[#E85D8B] relative inline-block">
                  AI Career Platform.
                </span>
              </h1>

              <p className="mt-3.5 text-sm sm:text-base text-[#6D5D70] leading-relaxed max-w-2xl">
                A full-stack AI career platform engineered to streamline resume ATS analysis, multi-round interview prep, and multi-channel job application tracking in one unified workspace.
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white border border-[#EADDE3] px-3 py-1 text-[11px] font-bold text-[#302535] shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E85D8B] to-[#F29AB2] text-white px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-extrabold shadow-[0_8px_20px_-4px_rgba(232,93,139,0.38)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-4px_rgba(232,93,139,0.48)] min-h-[42px]"
                >
                  <span>View Live Platform</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#EADDE3] bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-extrabold text-[#302535] shadow-2xs hover:border-[#F29AB2] hover:bg-[#FFF5F7] hover:text-[#E85D8B] transition-all min-h-[42px]"
                >
                  <FaGithub size={14} />
                  <span>View Source Code</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="group/preview relative w-full max-w-[480px] overflow-hidden rounded-[24px] border-2 border-[#F0DCE3] bg-white shadow-[0_16px_45px_-12px_rgba(232,93,139,0.18)]">
                <div className="flex items-center justify-between px-3.5 py-2 bg-[#FFF8F6] border-b border-[#F0DCE3] text-xs font-mono text-[#756875]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E85D8B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FAD074]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#82D9A7]" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#302535]">gethired-aicareerplatform.vercel.app</span>
                  <span className="text-[10px] font-mono font-bold text-[#E85D8B]">Production</span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="p-3 bg-gradient-to-r from-[#FFF5F7] via-white to-[#FAF7FE] border-t border-[#F5E6EB] flex items-center justify-between text-[11px] font-mono font-bold">
                  <span className="text-[#302535] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#27AE60] animate-pulse" />
                    <span>MERN Stack + Gemini AI</span>
                  </span>
                  <span className="text-[#E85D8B]">Interactive Spec ↗</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main 6-Stage Storytelling Flow */}
      <main className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1500px] py-14 sm:py-20 space-y-16 sm:space-y-24">

        {/* =========================================================================
            STAGE 01: THE PROBLEM
            ========================================================================= */}
        <section id="problem" data-step="1" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FCE8E8] text-[#E85D8B] border border-[#F8D2D9] shadow-2xs">
              <AlertTriangle size={16} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E85D8B]">
                01 &bull; THE PROBLEM
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam leading-tight"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                Fragmented Career Prep Workflow
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-7 rounded-[26px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] p-6 sm:p-8 shadow-[0_12px_36px_-12px_rgba(232,93,139,0.1)] flex flex-col justify-between">
              <p className="text-sm sm:text-base lg:text-[16px] text-[#4A3E52] leading-relaxed font-normal">
                {project.caseStudy.problem}
              </p>

              <div className="mt-6 pt-4 border-t border-[#F0DCE3] grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                  <span className="text-xs font-mono font-bold text-[#E85D8B] block">Disconnected</span>
                  <span className="text-[10px] text-[#756875]">Multiple tab juggling</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                  <span className="text-xs font-mono font-bold text-[#8B72D8] block">Inconsistent</span>
                  <span className="text-[10px] text-[#756875]">Generic interview prep</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                  <span className="text-xs font-mono font-bold text-[#2BAAB8] block">Manual Tracking</span>
                  <span className="text-[10px] text-[#756875]">Lost application status</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-[26px] bg-white border-2 border-[#F0DCE3] p-6 shadow-2xs flex flex-col justify-between space-y-4">
              <span className="text-xs font-mono font-bold text-[#302535] uppercase tracking-wider">
                Target Solution Criteria:
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5A4D5D]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#2FB86A] shrink-0 mt-0.5" />
                  <span>Single unified dashboard for resume, interviews, and tracking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#2FB86A] shrink-0 mt-0.5" />
                  <span>Deterministic ATS scoring with instant fallback reliability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#2FB86A] shrink-0 mt-0.5" />
                  <span>Optimistic drag-and-drop Kanban state sync across views.</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-[#F0DCE3] text-[11px] font-mono text-[#E85D8B] font-bold">
                Goal: Complete career lifecycle in one tool ✦
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            STAGE 02: WHAT I BUILT (Interactive Feature Explorer)
            ========================================================================= */}
        <section id="built" data-step="2" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8DDF7] text-[#8B72D8] border border-[#D6C4F0] shadow-2xs">
              <Sparkles size={16} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8B72D8]">
                02 &bull; WHAT I BUILT
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam leading-tight"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                Core Implemented Modules
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Feature selector list */}
            <div className="lg:col-span-5 space-y-2.5">
              {interactiveFeatures.map((feat) => {
                const Icon = feat.icon;
                const isSelected = selectedFeature === feat.id;

                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => setSelectedFeature(feat.id)}
                    className={`
                      w-full text-left p-4 rounded-[20px] border transition-all duration-200 cursor-pointer select-none flex items-start gap-3.5
                      ${isSelected
                        ? "bg-[#FFF5F7] border-[#F8D2D9] shadow-[0_6px_20px_rgba(232,93,139,0.14)] -translate-y-0.5"
                        : "bg-white border-[#EADDE3] hover:border-[#F29AB2] hover:bg-[#FFF8F6] shadow-2xs"
                      }
                    `}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${feat.bg} ${feat.border}`}
                      style={{ color: feat.color }}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#302535] font-kalam">
                          {feat.title}
                        </h4>
                        <span className="text-[9px] font-mono font-bold text-[#E85D8B] uppercase">
                          {feat.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#756875] font-sans mt-0.5 line-clamp-2">
                        {feat.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feature Live Preview Stage */}
            <div className="lg:col-span-7 rounded-[26px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] p-6 shadow-[0_12px_36px_-12px_rgba(232,93,139,0.12)] flex flex-col justify-between">
              {(() => {
                const active = interactiveFeatures.find((f) => f.id === selectedFeature) || interactiveFeatures[0];
                const ActiveIcon = active.icon;

                return (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-[#F0DCE3]">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-xl border ${active.bg} ${active.border}`} style={{ color: active.color }}>
                            <ActiveIcon size={18} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold font-kalam text-[#302535]">
                              {active.title}
                            </h4>
                            <span className="text-[10px] font-mono text-[#756875]">Implemented Feature Module</span>
                          </div>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-[#EDFBF3] border border-[#CEF4DE] text-[#2FB86A] text-xs font-mono font-bold">
                          {active.badge}
                        </span>
                      </div>

                      <p className="text-sm text-[#5A4D5D] leading-relaxed">
                        {active.desc}
                      </p>

                      <div className="p-4 rounded-2xl bg-white border border-[#F0DCE3] shadow-2xs space-y-2">
                        <span className="text-[10px] font-mono font-bold text-[#A396A3] uppercase tracking-wider block">
                          Technical Capability:
                        </span>
                        <div className="flex items-center gap-2 text-xs font-mono text-[#302535] font-bold">
                          <CheckCircle size={14} className="text-[#2FB86A]" />
                          <span>{active.previewText}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                );
              })()}

              <div className="pt-4 mt-4 border-t border-[#F0DCE3] flex items-center justify-between text-[11px] font-mono text-[#756875]">
                <span>Click any module to inspect capability</span>
                <span className="text-[#E85D8B] font-bold font-kalam">Production Ready ✦</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            STAGE 03: TECHNICAL DECISIONS
            ========================================================================= */}
        <section id="decisions" data-step="3" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FCE8E8] text-[#E85D8B] border border-[#F8D2D9] shadow-2xs">
              <Layers size={16} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E85D8B]">
                03 &bull; TECHNICAL DECISIONS
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam leading-tight"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                Why These Technologies?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {techDecisions.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.tech}
                  className="rounded-[22px] bg-white border-2 border-[#F0DCE3] p-5 shadow-2xs hover:border-[#F29AB2] hover:shadow-xs transition-all flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF8F5] border border-[#F0DCE3] shadow-2xs" style={{ color: item.color }}>
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#A396A3]">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E85D8B] block">
                      {item.category}
                    </span>

                    <h4 className="text-base font-bold font-kalam text-[#302535] leading-snug">
                      {item.tech}
                    </h4>

                    <p className="text-xs text-[#6D5D70] leading-relaxed mt-1">
                      {item.reason}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F5E6EB] flex items-center justify-between text-[10px] font-mono text-[#2FB86A] font-bold">
                    <span>Active in Stack</span>
                    <span>✓</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            STAGE 04: CHALLENGES & SOLUTIONS
            ========================================================================= */}
        <section id="challenges" data-step="4" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFF9EB] text-[#E5A01A] border border-[#FCE8B8] shadow-2xs">
              <Cpu size={16} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E5A01A]">
                04 &bull; CHALLENGES &amp; SOLUTIONS
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam leading-tight"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                Development Hurdles Solved
              </h2>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {realChallenges.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="rounded-[24px] bg-white border-2 border-[#F0DCE3] p-5 sm:p-7 shadow-2xs hover:border-[#F29AB2] hover:shadow-xs transition-all space-y-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FFF5F7] text-[#E85D8B] border border-[#F8D2D9] shadow-2xs">
                      <Icon size={18} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base sm:text-lg font-bold font-kalam text-[#302535]">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FCE8E8] text-[#E85D8B] border border-[#F8D2D9]">
                          Challenge 0{idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#FFF5F7]/70 border border-[#F8D2D9] space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E85D8B] block">
                        The Challenge:
                      </span>
                      <p className="text-xs text-[#6D5D70] leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF7FE] border border-[#E8DDF7] space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8B72D8] block">
                        What I Changed:
                      </span>
                      <p className="text-xs text-[#5A4D5D] leading-relaxed">
                        {item.solution}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#EDFBF3] border border-[#CEF4DE] space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2FB86A] block">
                        Result:
                      </span>
                      <p className="text-xs text-[#2A5C3D] leading-relaxed font-medium">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            STAGE 05: RESULT & REAL PRODUCT
            ========================================================================= */}
        <section id="result" data-step="5" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EDFBF3] text-[#2FB86A] border border-[#CEF4DE] shadow-2xs">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2FB86A]">
                05 &bull; THE RESULT
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#302535] font-kalam leading-tight"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                Built &amp; Shipped
              </h2>
            </div>
          </div>

          <div className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] p-6 sm:p-8 shadow-[0_16px_45px_-12px_rgba(232,93,139,0.14)] space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F0DCE3]">
              <div>
                <span className="text-xs font-mono font-bold text-[#E85D8B] uppercase tracking-wider block">
                  Production Showcase
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-kalam text-[#302535]">
                  GetHired AI Career Platform
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#EDFBF3] border border-[#CEF4DE] text-[#2FB86A] text-xs font-mono font-bold flex items-center gap-1.5">
                  <CheckCircle size={12} />
                  <span>Deployed &amp; Verified</span>
                </span>
              </div>
            </div>

            {/* Real Screenshot Preview */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border-2 border-[#F0DCE3] shadow-md group/shot">
              <Image
                src={project.image}
                alt="GetHired Platform UI Screenshot"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top transition-transform duration-500 group-hover/shot:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/shot:opacity-100 transition-opacity flex items-end p-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#302535] text-xs font-bold shadow-md hover:bg-[#E85D8B] hover:text-white transition-colors"
                >
                  <Eye size={13} />
                  <span>Open Live Interactive Platform</span>
                </a>
              </div>
            </div>

            {/* Highlighted Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
              <div className="p-3 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                <span className="text-base font-bold text-[#E85D8B] block font-kalam">MERN + AI</span>
                <span className="text-[10px] text-[#756875]">Unified Stack</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                <span className="text-base font-bold text-[#8B72D8] block font-kalam">9 APIs</span>
                <span className="text-[10px] text-[#756875]">Concurrent Query</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                <span className="text-base font-bold text-[#2FB86A] block font-kalam">100% Fallback</span>
                <span className="text-[10px] text-[#756875]">Zero Silent Errors</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#F0DCE3] shadow-2xs">
                <span className="text-base font-bold text-[#2BAAB8] block font-kalam">Responsive</span>
                <span className="text-[10px] text-[#756875]">Mobile &amp; Desktop</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            STAGE 06: LIVE PROJECT & CODE LINKS
            ========================================================================= */}
        <section id="live" data-step="6" className="scroll-mt-24">
          <div className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] p-6 sm:p-10 shadow-[0_16px_45px_-15px_rgba(232,93,139,0.15)] text-center space-y-6">
            
            <div className="max-w-xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FCE8E8] text-[#E85D8B] text-xs font-mono font-bold uppercase tracking-wider">
                <span>06 &bull; READY TO EXPLORE</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#302535] font-kalam"
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                Experience GetHired Yourself
              </h3>

              <p className="text-xs sm:text-sm text-[#756875] leading-relaxed">
                Test the live AI ATS analyzer, practice a mock interview session, or inspect the complete GitHub repository.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 min-h-[44px] px-6 text-sm"
              >
                <span>View Live Project</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 min-h-[44px] px-6 text-sm"
              >
                <FaGithub size={15} />
                <span>View Source Code</span>
                <ArrowUpRight size={13} />
              </a>

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-[#EADDE3] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#302535] shadow-2xs hover:border-[#F29AB2] hover:bg-[#FFF5F7] hover:text-[#E85D8B] transition-all min-h-[44px]"
              >
                <ArrowLeft size={14} />
                <span>Back to All Projects</span>
              </Link>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
}
