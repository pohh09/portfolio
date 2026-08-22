"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const fraunces = { className: "font-serif" };

type MockupType = "designSystem" | "jobflow" | "chatbot" | "portfolio" | "gym";

type Tag = {
  label: string;
  className?: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  mockup: MockupType;
  accent: keyof typeof ACCENT_STYLES;
  tags: Tag[];
  rotate: number;
  offsetY: number;
  featured?: boolean;
};

const mockupWrapper = "flex h-full w-full flex-col overflow-hidden p-3 bg-[#0b0c14]";

function ProjectMockup({ type }: { type: MockupType }) {
  switch (type) {
    case "designSystem":
      return (
        <div className={`${mockupWrapper} justify-between border-b border-violet-500/10`}>
          <div className="grid grid-cols-4 gap-1">
            <div className="h-5 rounded bg-violet-600" />
            <div className="h-5 rounded bg-fuchsia-500" />
            <div className="h-5 rounded bg-cyan-400" />
            <div className="h-5 rounded bg-slate-700" />
          </div>
          <div className="rounded-md bg-[#10111e] p-2 border border-violet-500/20">
            <div className="flex items-center gap-1">
              <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[7px] font-semibold text-violet-300">
                Button
              </span>
              <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[7px] font-semibold text-cyan-300">
                Badge
              </span>
              <span className="ml-auto h-2.5 w-6 rounded-full bg-slate-700" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="h-7 rounded bg-[#10111e] border border-violet-500/10" />
            <div className="h-7 rounded bg-[#10111e] border border-violet-500/10" />
            <div className="h-7 rounded bg-[#10111e] border border-violet-500/10" />
          </div>
        </div>
      );

    case "jobflow":
      return (
        <div className={`${mockupWrapper}`}>
          <div className="flex flex-1 gap-2">
            {[
              { label: "Todo", color: "bg-slate-600", count: 2 },
              { label: "Doing", color: "bg-violet-400", count: 1 },
              { label: "Done", color: "bg-cyan-400", count: 2 },
            ].map((col) => (
              <div key={col.label} className="flex flex-1 flex-col rounded-md bg-[#10111e] p-2 border border-violet-500/10">
                <div className="mb-2 flex items-center gap-1">
                  <span className={`h-1.5 w-1.5 rounded-full ${col.color}`} />
                  <span className="text-[7px] font-semibold text-[#8892b0]">{col.label}</span>
                </div>
                <div className="space-y-1">
                  {Array.from({ length: col.count }).map((_, i) => (
                    <div key={i} className="rounded bg-violet-500/5 p-1 border border-violet-500/10">
                      <div className="h-1 w-full rounded bg-violet-500/20" />
                      <div className="mt-1 h-1 w-2/3 rounded bg-violet-500/10" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "chatbot":
      return (
        <div className={`${mockupWrapper} justify-end gap-2`}>
          <div className="w-2/3 rounded-xl rounded-bl-sm bg-[#10111e] border border-violet-500/20 px-2 py-1.5 text-[7px] text-[#f0f2ff]">
            How can I help?
          </div>
          <div className="ml-auto w-2/3 rounded-xl rounded-br-sm bg-gradient-to-r from-violet-600 to-cyan-500 px-2 py-1.5 text-[7px] text-white">
            Summarize this
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#10111e] border border-violet-500/20 px-2 py-2">
            <span className="h-1 flex-1 rounded-full bg-violet-500/20" />
            <span className="h-3 w-3 rounded-full bg-cyan-400" />
          </div>
        </div>
      );

    default:
      return (
        <div className={`${mockupWrapper} justify-between`}>
          <div className="flex items-center justify-between">
            <span className="h-2 w-10 rounded-full bg-violet-500" />
            <div className="flex gap-1">
              <span className="h-1 w-4 rounded-full bg-slate-700" />
              <span className="h-1 w-4 rounded-full bg-slate-700" />
            </div>
          </div>
          <div className="h-12 rounded-lg bg-gradient-to-r from-violet-600/30 to-cyan-500/30 border border-violet-500/20" />
        </div>
      );
  }
}

const ACCENT_STYLES = {
  maroon: {
    ring: "ring-violet-500/40",
    border: "border-violet-500/20",
    text: "text-violet-400",
    pill: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    category: "text-violet-400",
  },
  rose: {
    ring: "ring-fuchsia-500/40",
    border: "border-fuchsia-500/20",
    text: "text-fuchsia-400",
    pill: "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20",
    category: "text-fuchsia-400",
  },
  blush: {
    ring: "ring-cyan-500/40",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    pill: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    category: "text-cyan-400",
  },
  neutral: {
    ring: "ring-violet-500/20",
    border: "border-violet-500/20",
    text: "text-[#8892b0]",
    pill: "bg-slate-800 text-slate-300 border border-slate-700",
    category: "text-[#8892b0]",
  },
} as const;

type CardProps = Project & {
  disableAnimation?: boolean;
  applyOffset?: boolean;
  fixedWidth?: boolean;
};

function ProjectCard({
  title,
  category,
  description,
  mockup,
  tags,
  accent,
  featured = false,
  disableAnimation = false,
  applyOffset = false,
  fixedWidth = false,
  rotate,
  offsetY,
}: CardProps) {
  const styles = ACCENT_STYLES[accent] ?? ACCENT_STYLES.rose;

  const card = (
    <motion.div
      initial={disableAnimation ? false : { opacity: 0, y: 60 }}
      whileInView={disableAnimation ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={disableAnimation ? undefined : { y: -10, scale: 1.02 }}
      className={fixedWidth ? "w-full" : "w-[230px] flex-shrink-0 sm:w-[260px] md:w-[280px]"}
    >
      <div
        className={`glass overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
          featured ? `ring-2 ${styles.ring}` : ""
        }`}
      >
        <div className="flex items-center gap-2 border-b border-violet-500/10 bg-[#070810] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>

        <div className="h-[160px] overflow-hidden sm:h-[180px]">
          <ProjectMockup type={mockup} />
        </div>

        <div className="relative p-5">
          <p className={`text-xs font-semibold ${styles.category}`}>{category}</p>
          <h3 className="mt-2 text-lg font-bold text-[#f0f2ff]">{title}</h3>
          <p className="mt-2 text-[13px] leading-6 text-[#8892b0]">{description}</p>

          <div className="mt-5 flex flex-wrap gap-2 pr-12">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-full px-3 py-1 text-[11px] font-medium ${tag.className ?? styles.pill}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <button
            type="button"
            aria-label={`View ${title} project`}
            className={`absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 transition hover:bg-violet-600 hover:text-white ${styles.border}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.text}>
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );

  if (!applyOffset) return card;

  return (
    <div className="hidden lg:block" style={{ transform: `rotate(${rotate}deg) translateY(${offsetY}px)` }}>
      {card}
    </div>
  );
}

const projects: Project[] = [
  {
    title: "Design System",
    category: "Figma to Code",
    description: "Component-driven documentation site turning design tokens into working UI components.",
    mockup: "designSystem",
    accent: "maroon",
    tags: [{ label: "React" }, { label: "Figma" }, { label: "Storybook" }],
    rotate: -6,
    offsetY: 40,
  },
  {
    title: "JobFlow",
    category: "Full-Stack MERN",
    description: "Job application tracker with boards, stages and status updates.",
    mockup: "jobflow",
    accent: "blush",
    tags: [
      { label: "MongoDB", className: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20" },
      { label: "Express.js", className: "bg-slate-800 text-slate-300 border border-slate-700" },
      { label: "React", className: "bg-violet-500/10 text-violet-300 border border-violet-500/20" },
      { label: "Node.js", className: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20" },
    ],
    rotate: -3,
    offsetY: 15,
  },
  {
    title: "AI Chatbot",
    category: "Full-Stack AI",
    description: "Conversational assistant with streaming responses and chat history.",
    mockup: "chatbot",
    accent: "rose",
    featured: true,
    tags: [{ label: "Next.js" }, { label: "OpenAI API" }, { label: "Node.js" }],
    rotate: 0,
    offsetY: -20,
  },
  {
    title: "Portfolio Website",
    category: "Personal Site",
    description: "Personal portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    mockup: "portfolio",
    accent: "rose",
    tags: [{ label: "Next.js" }, { label: "Tailwind CSS" }, { label: "Framer Motion" }],
    rotate: 3,
    offsetY: 15,
  },
  {
    title: "Gym Website",
    category: "Fitness Platform",
    description: "Workout tracking and progress dashboard for a fitness brand.",
    mockup: "gym",
    accent: "neutral",
    tags: [{ label: "React" }, { label: "Tailwind CSS" }, { label: "Responsive UI" }],
    rotate: 6,
    offsetY: 40,
  },
];

function MobileCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 1;
    const gap = 16;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActive(Math.min(index, projects.length - 1));
  };

  const scrollToIndex = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 0;
    const gap = 16;
    el.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="sm:hidden">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project) => (
          <div key={project.title} className="w-[82vw] flex-shrink-0 snap-center">
            <ProjectCard {...project} fixedWidth disableAnimation />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to project ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all ${
              active === index ? "w-6 bg-violet-500" : "w-2 bg-violet-500/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F5] px-4 py-16 sm:px-6 sm:py-24">
      <div className="relative z-10 mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px]">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-4 py-1 text-xs font-kalam font-bold text-[#E85D8B] shadow-xs mx-auto w-fit">
            <span className="h-2 w-2 rounded-full bg-[#E85D8B] animate-pulse" />
            MY WORK
          </span>

          <h2
            className="font-kalam font-bold mt-6 text-3xl sm:text-5xl md:text-7xl leading-tight text-[#302535]"
          >
            Projects I&apos;ve
            <br />
            <span className="text-[#E85D8B]">
              Built &amp; Shipped.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#756875] sm:text-lg">
            From design systems to full-stack apps — projects spanning frontend engineering, MERN
            development and AI-powered products.
          </p>
        </div>

        <div className="mt-12">
          <MobileCarousel />
        </div>

        <div className="mt-16 hidden grid-cols-2 gap-6 sm:grid lg:hidden">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} fixedWidth />
          ))}
        </div>

        <div className="mt-24 hidden flex-wrap items-start justify-center gap-x-6 gap-y-10 lg:flex">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} applyOffset />
          ))}
        </div>
      </div>
    </section>
  );
}
