"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  Layout
} from "lucide-react";
import { FaFigma } from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Design Tokens & Spec",
    description: "Inspecting auto-layouts, spacing tokens, color variables, and typography scales.",
    icon: FaFigma,
    color: "from-[#E85D8B] to-[#B9A1E8]",
    tag: "Tokens",
  },
  {
    step: "02",
    title: "Component Architecture",
    description: "Structuring modular, reusable React component interfaces with strict TypeScript typing.",
    icon: Layers,
    color: "from-[#B9A1E8] to-[#8DDDE5]",
    tag: "Architecture",
  },
  {
    step: "03",
    title: "Component Implementation",
    description: "Building responsive, clean UI using Next.js, Tailwind CSS, and semantic HTML5.",
    icon: Code2,
    color: "from-[#8DDDE5] to-[#B9A1E8]",
    tag: "Development",
  },
  {
    step: "04",
    title: "Micro-Animations",
    description: "Crafting fluid spring physics and gesture animations with Framer Motion and GSAP.",
    icon: Sparkles,
    color: "from-[#E85D8B] to-[#FAD074]",
    tag: "Motion",
  },
  {
    step: "05",
    title: "QA & Refinement",
    description: "Reviewing responsiveness, keyboard navigation, cross-browser styling, and performance.",
    icon: ShieldCheck,
    color: "from-[#82D9A7] to-[#8DDDE5]",
    tag: "Refinement",
  },
];

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
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleCode = `import { motion } from "framer-motion";

export default function AtelierCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-5 rounded-2xl bg-white border-2 border-[#F0DCE3] shadow-md"
    >
      <Badge variant="pastel">Auto Layout Spec</Badge>
      <h3 className="font-kalam font-bold text-[#302535]">Design Tokens</h3>
      <ActionButton variant="primary">Get Started &rarr;</ActionButton>
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

  return (
    <section id="workflow" className="relative overflow-hidden py-16 sm:py-24 scroll-mt-28 bg-[#FFF8F5]">

      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#E85D8B]/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-[#B9A1E8]/6 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute top-16 left-16 text-[#E85D8B] text-xl animate-float-slow select-none opacity-45">✦</div>
      <div className="pointer-events-none absolute top-1/2 right-12 text-[#FAD074] text-lg animate-float-slow select-none opacity-50">★</div>
      <div className="pointer-events-none absolute bottom-20 left-12 text-[#B9A1E8] text-base select-none opacity-40">✦</div>

      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">

        <div className="max-w-3xl mb-8 sm:mb-12 text-left">

          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
            <span>FIGMA TO CODE</span>
          </div>

          <h2
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#302535] font-kalam leading-[1.15]"
            style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
          >
            From Figma Blueprint to{" "}
            <span className="text-[#E85D8B] relative inline-block">
              Working Code.
              <motion.svg
                className="absolute -bottom-1.5 left-0 w-full h-3.5 overflow-visible pointer-events-none text-[#E85D8B]"
                viewBox="0 0 200 12"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false }}
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

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[#756875] font-normal leading-relaxed">
            Translating design concepts into responsive, accessible, and maintainable React components with careful attention to layout and tokens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10 sm:mb-14">
          {superpowers.map((power, idx) => {
            const Icon = power.icon;
            return (
              <motion.div
                key={power.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] p-4 sm:p-7 shadow-[0_16px_45px_-15px_rgba(232,93,139,0.12)] mb-12 sm:mb-16"
        >

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-[#F0DCE3]">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E85D8B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FAD074]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#82D9A7]" />
              </div>
              <span className="text-xs font-mono font-bold text-[#302535] pl-1.5">
                Figma_Spec_to_React_Output.tsx
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems?t=3eeIRiZMSmXrxYRf-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5F7] border border-[#F8D2D9] px-3 py-1 text-xs font-mono font-bold text-[#E85D8B] hover:bg-[#FFE8EE] transition-all shadow-2xs"
              >
                <FaFigma size={12} />
                <span>Open in Figma</span>
                <ExternalLink size={10} />
              </a>

              <a
                href="https://reactdesignsystem.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#302535] text-white px-3.5 py-1 text-xs font-mono font-bold hover:bg-[#E85D8B] transition-all shadow-2xs"
              >
                <Eye size={12} />
                <span>Live Storybook Demo</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

            <div className="lg:col-span-6 flex flex-col justify-between rounded-[22px] bg-white border-2 border-[#0D99FF]/30 p-4 sm:p-5 shadow-2xs">

              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA] mb-3">
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

              <div className="my-auto py-2 space-y-3">

                <div className="relative rounded-2xl border border-dashed border-[#0D99FF]/40 p-3.5 bg-[#FFF9F6]">
                  <span className="absolute -top-2 left-3 px-1.5 text-[9px] font-mono text-[#0D99FF] bg-white font-bold rounded shadow-2xs">
                    ❖ Button Group &bull; gap: 8px &bull; radius: full
                  </span>
                  <div className="flex items-center gap-2.5 pt-1">
                    <button type="button" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E85D8B] text-white text-xs font-bold shadow-xs hover:scale-105 transition-transform cursor-pointer">
                      <span>Primary Action</span>
                      <ArrowRight size={12} />
                    </button>
                    <button type="button" className="px-3.5 py-2 rounded-full bg-white border border-[#EADDE3] text-[#302535] text-xs font-bold shadow-2xs hover:bg-[#FFF5F7] transition-colors cursor-pointer">
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

            </div>

            <div className="lg:col-span-6 flex flex-col justify-between rounded-[22px] bg-[#221927] border-2 border-[#3E3247] p-4 sm:p-5 text-slate-300 shadow-inner">

              <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8DDF7] text-[#8B72D8]">
                    <Code2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono leading-tight">
                      React + Tailwind Component
                    </h4>
                    <p className="text-[10px] font-mono text-slate-400">TypeScript &bull; Framer Motion &bull; Next.js</p>
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

              <div className="my-auto py-1 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-slate-300 space-y-1">
                <div><span className="text-[#B9A1E8]">import</span> {"{ motion }"} <span className="text-[#B9A1E8]">from</span> <span className="text-[#8DDDE5]">&quot;framer-motion&quot;</span>;</div>
                <div><span className="text-[#B9A1E8]">export default function</span> <span className="text-[#E85D8B] font-bold">AtelierCard</span>() {"{"}</div>
                <div className="pl-3.5"><span className="text-[#B9A1E8]">return</span> (</div>
                <div className="pl-7 text-[#8DDDE5]">&lt;<span className="text-[#E85D8B]">motion.div</span> <span className="text-[#FAD074]">whileHover</span>=<span className="text-slate-300">{"{{ y: -4 }}"}</span></div>
                <div className="pl-10 text-[#FAD074]">className=<span className="text-[#8DDDE5]">&quot;p-5 rounded-2xl bg-white border-2 border-[#F0DCE3]&quot;</span>&gt;</div>
                <div className="pl-10 text-slate-300">&lt;<span className="text-[#E85D8B]">ActionButton</span> <span className="text-[#FAD074]">variant</span>=<span className="text-[#8DDDE5]">&quot;primary&quot;</span> /&gt;</div>
                <div className="pl-7 text-[#8DDDE5]">&lt;/<span className="text-[#E85D8B]">motion.div</span>&gt;</div>
                <div className="pl-3.5">);</div>
                <div>{"}"}</div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-700/60 text-[10px] font-mono">
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span>Stable Layout Structure</span>
                </span>
                <span className="text-slate-400">Strict Type-Checking ✓</span>
              </div>

            </div>

          </div>
        </motion.div>

        <div className="pt-2">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <h3
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#302535] font-kalam"
              style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
            >
              5-Step Implementation Pipeline
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#756875]">
              My workflow for turning a design into a working, responsive UI.
            </p>
          </div>

          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative rounded-[20px] p-4 bg-white border-2 border-[#F0DCE3] flex flex-col justify-between group shadow-2xs hover:border-[#F29AB2] hover:shadow-xs transition-all"
                >
                  <div>

                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-kalam font-bold px-2.5 py-0.5 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] text-[#E85D8B]">
                        {item.step}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#756875] uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-2xs mb-2.5 group-hover:scale-105 transition-transform`}>
                      <Icon size={15} />
                    </div>

                    <h4 className="text-sm font-bold text-[#302535] font-kalam tracking-tight group-hover:text-[#E85D8B] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#756875]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#F0DCE3] flex items-center justify-between text-[10px] font-mono text-[#756875]">
                    <span>Phase {index + 1} of 5</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B]" />
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