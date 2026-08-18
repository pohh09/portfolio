"use client";

import { motion } from "framer-motion";
import { Search, Layers, Code2, Sparkles, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { FaFigma } from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Research & Spec",
    description: "Analyzing user flows, component hierarchy, and responsive constraints before coding.",
    icon: Search,
    color: "from-[#FF5E86] to-[#9D80E4]",
    tag: "Planning",
  },
  {
    step: "02",
    title: "Figma Deconstruction",
    description: "Inspecting auto-layouts, spacing tokens, typography scales, and color variables.",
    icon: FaFigma,
    color: "from-[#9D80E4] to-[#FF5E86]",
    tag: "Tokens",
  },
  {
    step: "03",
    title: "Component Architecture",
    description: "Designing modular, reusable React component interfaces with strict TypeScript typing.",
    icon: Layers,
    color: "from-[#9D80E4] to-[#52D1DC]",
    tag: "Architecture",
  },
  {
    step: "04",
    title: "Production Coding",
    description: "Crafting 60 FPS fluid interactions with Next.js, Tailwind CSS, and Framer Motion.",
    icon: Code2,
    color: "from-[#52D1DC] to-[#9D80E4]",
    tag: "Development",
  },
  {
    step: "05",
    title: "QA & Optimization",
    description: "Auditing accessibility (a11y), Core Web Vitals, performance, and SEO optimization.",
    icon: Sparkles,
    color: "from-[#FF5E86] to-[#9D80E4]",
    tag: "Delivery",
  },
];

export default function DesignToCode() {
  return (
    <section id="workflow" className="relative overflow-hidden py-20 sm:py-28 scroll-mt-28 bg-[#FFF8F5]">
      {/* ── Large Organic Wave Background ── */}
      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none -z-10">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C340,90 640,20 840,230 C1040,440 590,660 1040,830 C1240,910 1360,890 1440,990 L1440,1000 L0,1000 Z"
            fill="#FCE8E8"
            opacity="0.65"
          />
          <path
            d="M0,150 C240,250 490,190 690,390 C890,590 540,760 1090,930 L0,1000 Z"
            fill="#F3EDFC"
            opacity="0.45"
          />
        </svg>
      </div>

      {/* Decorative Doodles */}
      <div className="pointer-events-none absolute top-16 left-16 text-[#E85D8B] text-xl animate-float-slow select-none opacity-50">✦</div>
      <div className="pointer-events-none absolute bottom-20 right-12 text-[#FAD074] text-lg animate-float-slow select-none opacity-60">★</div>

      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">
        
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 mb-3 rounded-full bg-[#FFE8EE] border border-[#FFD0DC] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#FF5E86] shadow-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E86]" />
          <span>FRONTEND CRAFT &bull; FIGMA TO CODE</span>
        </div>

        {/* Section Header with Kalam */}
        <div className="max-w-3xl mb-8 sm:mb-14 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2E2234] font-kalam leading-tight"
            style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
          >
            From Figma Blueprint to <span className="text-[#FF5E86]">Production Code.</span> <span className="text-[#FF5E86] text-2xl animate-doodle">♡</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="mt-2.5 text-xs sm:text-sm lg:text-base text-[#6D5D70] font-normal leading-relaxed"
          >
            Translating visual design tokens into responsive, accessible, and high-performance React components with zero layout shift.
          </motion.p>
        </div>

        {/* ── Perfectly Matched Figma vs Code Screens ── */}
        <div className="max-w-5xl mx-auto">
          <div className="grid items-stretch gap-4 sm:gap-5 lg:gap-8 lg:grid-cols-[1fr_auto_1fr]">
            
            {/* 1. Figma Screen Card */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 bg-white border-2 border-[#F0DCE3] shadow-[0_10px_30px_-10px_rgba(232,93,139,0.1)] flex flex-col justify-between h-full"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#F0DCE3] mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFE8EE] border border-[#FFD0DC] text-[#FF5E86] shadow-2xs">
                    <FaFigma size={15} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#2E2234] font-kalam leading-tight">Figma Design Spec</h3>
                    <p className="text-[11px] font-mono text-[#6D5D70]">Auto Layout &bull; Tokens</p>
                  </div>
                </div>
                <a
                  href="https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems?t=3eeIRiZMSmXrxYRf-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-[#FFE8EE] border border-[#FFD0DC] px-3 py-1 text-xs font-bold text-[#FF5E86] hover:bg-[#FFE8EE]/80 transition-all shadow-2xs"
                >
                  <span>Figma</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Interactive Figma Design Canvas Frame (Matched Dimensions) */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#0D99FF]/40 bg-[#F5F5F7] p-3.5 sm:p-4 min-h-[240px] sm:h-[270px] flex flex-col justify-between shadow-inner">
                
                {/* Figma Frame Top Breadcrumb & Dev Mode */}
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E5EA]">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-[#0D99FF] bg-[#0D99FF]/10 px-2.5 py-0.5 rounded flex items-center gap-1">
                      <span>❖</span>
                      <span>FRAME: UI Components</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#8E8E93] hidden sm:inline">16px auto-layout</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#0D99FF] font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0D99FF] animate-pulse" />
                    <span>Dev Mode</span>
                  </div>
                </div>

                {/* Inside Canvas: Designed UI Components */}
                <div className="space-y-2.5 my-auto">
                  
                  {/* Button Group Spec */}
                  <div className="relative rounded-xl border border-dashed border-[#0D99FF]/40 p-2.5 bg-white/90">
                    <span className="absolute -top-2 left-2.5 px-1 text-[8px] font-mono text-[#0D99FF] bg-white font-bold rounded">
                      ❖ Button Group &bull; gap: 10px
                    </span>
                    <div className="flex items-center gap-2.5 pt-0.5">
                      <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E85D8B] text-white text-xs font-bold shadow-xs">
                        <span>Get Started</span>
                        <ArrowRight size={11} />
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-white border border-[#EADDE3] text-[#302535] text-xs font-bold shadow-2xs">
                        <span>Preview</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#756875] ml-auto hidden sm:inline">
                        radius: 999px
                      </span>
                    </div>
                  </div>

                  {/* Design Card Component Spec */}
                  <div className="relative rounded-xl border border-dashed border-[#0D99FF]/40 p-2.5 bg-white shadow-2xs flex items-center justify-between">
                    <span className="absolute -top-2 left-2.5 px-1 text-[8px] font-mono text-[#0D99FF] bg-white font-bold rounded">
                      ❖ DesignCard Spec
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#302535]">DesignCard Spec</span>
                      <p className="text-[10px] text-[#756875]">Pixel-perfect token match</p>
                    </div>
                    <span className="text-[10px] font-mono bg-[#FCE8E8] text-[#E85D8B] px-2.5 py-0.5 rounded-md font-bold">
                      #FFF8F5 &bull; #E85D8B
                    </span>
                  </div>

                </div>

                {/* Bottom Figma Spec Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-[#E5E5EA] text-[10px] font-mono text-[#756875]">
                  <span className="text-[#0D99FF] font-bold">Tokens: #E85D8B, #302535</span>
                  <span className="text-[#8E8E93]">100% Token Match ❖</span>
                </div>

              </div>
            </motion.div>

            {/* Center Transition Icon */}
            <div className="flex items-center justify-center my-1 lg:my-0">
              <div className="rounded-full border-2 border-[#F0DCE3] bg-white p-2.5 sm:p-3 text-[#FF5E86] shadow-xs rotate-90 lg:rotate-0">
                <ArrowRight size={18} />
              </div>
            </div>

            {/* 2. TSX Code Card (Matched Dimensions) */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 bg-white border-2 border-[#F0DCE3] shadow-[0_10px_30px_-10px_rgba(232,93,139,0.1)] flex flex-col justify-between h-full"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#F0DCE3] mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8DDF7] border border-[#D6C4F0] text-[#8B72D8] shadow-2xs">
                    <Code2 size={15} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#2E2234] font-kalam leading-tight">Production TSX</h3>
                    <p className="text-[11px] font-mono text-[#6D5D70]">React 19 &bull; Tailwind CSS</p>
                  </div>
                </div>
                <a
                  href="https://react-design-system-umber.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-[#E8DDF7] border border-[#D6C4F0] px-3 py-1 text-xs font-bold text-[#8B72D8] hover:bg-[#D6C4F0]/80 transition-all shadow-2xs"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Code Window with Charcoal Base (Matched Dimensions) */}
              <div className="overflow-hidden rounded-2xl border border-[#3E3247] bg-[#221927] font-mono text-xs leading-relaxed text-slate-300 min-h-[240px] sm:h-[270px] flex flex-col justify-between p-3.5 sm:p-4 relative shadow-inner">
                <div className="space-y-1 overflow-x-auto text-[11px] sm:text-xs">
                  <div><span className="text-[#9D80E4]">import</span> {"{ motion }"} <span className="text-[#9D80E4]">from</span> <span className="text-[#52D1DC]">&quot;framer-motion&quot;</span>;</div>
                  <div className="text-slate-500">// Pixel-perfect Figma token spec</div>
                  <div><span className="text-[#9D80E4]">export default function</span> <span className="text-[#FF5E86] font-bold">DesignCard</span>() {"{"}</div>
                  <div className="pl-3.5"><span className="text-[#9D80E4]">return</span> (</div>
                  <div className="pl-7 text-[#52D1DC]">&lt;<span className="text-[#FF5E86]">motion.div</span> <span className="text-amber-300">className</span>=<span className="text-[#52D1DC]">&quot;p-5 rounded-2xl&quot;</span>&gt;</div>
                  <div className="pl-11 text-slate-200">&lt;<span className="text-[#FF5E86]">DesignTokens</span> <span className="text-amber-300">theme</span>=<span className="text-[#52D1DC]">&quot;aurora&quot;</span> /&gt;</div>
                  <div className="pl-11 text-slate-200">&lt;<span className="text-[#FF5E86]">ActionButton</span> <span className="text-amber-300">variant</span>=<span className="text-[#52D1DC]">&quot;primary&quot;</span> /&gt;</div>
                  <div className="pl-7 text-[#52D1DC]">&lt;/<span className="text-[#FF5E86]">motion.div</span>&gt;</div>
                  <div className="pl-3.5">);</div>
                  <div>{"}"}</div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-700/60 pt-2 text-[10px] text-slate-400">
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 size={12} className="text-emerald-400 inline-block" />
                    <span>Zero Layout Shift</span>
                  </span>
                  <span className="text-slate-400">Type-Safe TSX</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── 5-Step Engineering Pipeline (Compact Cards) ── */}
        <div className="mt-12 sm:mt-18 pt-4">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <h3 
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#2E2234] font-kalam"
              style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
            >
              End-to-End Implementation Workflow
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#6D5D70]">
              A disciplined, step-by-step engineering pipeline from initial concept to deployment.
            </p>
          </div>

          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="relative rounded-[20px] p-4 bg-white border-2 border-[#F0DCE3] flex flex-col justify-between group shadow-2xs hover:border-[#FF94AF] transition-all"
                >
                  <div>
                    {/* Step Header */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-kalam font-bold px-2 py-0.5 rounded-full bg-[#FFE8EE] border border-[#FFD0DC] text-[#FF5E86]">
                        {item.step}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#6D5D70] uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    {/* Step Icon */}
                    <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-2xs mb-2.5 group-hover:scale-105 transition-transform`}>
                      <Icon size={15} />
                    </div>

                    {/* Step Content */}
                    <h4 className="text-sm font-bold text-[#2E2234] font-kalam tracking-tight group-hover:text-[#FF5E86] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#6D5D70]">
                      {item.description}
                    </p>
                  </div>

                  {/* Step Progress Line */}
                  <div className="mt-3 pt-2 border-t border-[#F0DCE3] flex items-center justify-between text-[10px] font-mono text-[#6D5D70]">
                    <span>Phase {index + 1} of 5</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E86]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}