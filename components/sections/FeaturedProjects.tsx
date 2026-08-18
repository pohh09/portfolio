"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, ArrowRight, CheckCircle2, Sparkles, Code2 } from "lucide-react";
import { FaGithub, FaFigma, FaLinkedin } from "react-icons/fa";
import { projects } from "@/data/projects";
import { gsap } from "@/lib/animations/gsapSetup";

// Editorial styling metadata per project
const projectStyles = [
  {
    wash: "from-[#FFF5F7]/70 via-[#FFFDFC] to-transparent",
    glow: "rgba(232, 93, 139, 0.12)",
    tagBg: "bg-[#FCE8E8]",
    tagText: "text-[#E85D8B]",
    tagBorder: "border-[#F8D2D9]",
    badge: "FULL-STACK MERN + AI PLATFORM",
    domain: "gethired-sigma.vercel.app",
    role: "Full-Stack + AI",
  },
  {
    wash: "from-[#FAF7FE]/80 via-[#FFFDFC] to-transparent",
    glow: "rgba(157, 128, 228, 0.12)",
    tagBg: "bg-[#E8DDF7]",
    tagText: "text-[#8B72D8]",
    tagBorder: "border-[#D6C4F0]",
    badge: "FRONTEND SYSTEM &bull; FIGMA TO CODE",
    domain: "react-design-system-umber.vercel.app",
    role: "Figma to Code",
  },
  {
    wash: "from-[#F4FCFD]/80 via-[#FFFDFC] to-transparent",
    glow: "rgba(56, 189, 248, 0.12)",
    tagBg: "bg-[#DDF5F8]",
    tagText: "text-[#289BB5]",
    tagBorder: "border-[#BCE8EE]",
    badge: "CONVERSATIONAL AI &bull; NEXT.JS",
    domain: "nyra-chatbot.dev",
    role: "AI Integration",
  },
  {
    wash: "from-[#FFF5F7]/70 via-[#FFFDFC] to-transparent",
    glow: "rgba(232, 93, 139, 0.12)",
    tagBg: "bg-[#FCE8E8]",
    tagText: "text-[#E85D8B]",
    tagBorder: "border-[#F8D2D9]",
    badge: "INTERACTIVE PORTFOLIO &bull; REACT 19",
    domain: "poojadaki.dev",
    role: "Portfolio Engineering",
  },
  {
    wash: "from-[#FFFDF4]/80 via-[#FFFDFC] to-transparent",
    glow: "rgba(250, 208, 116, 0.14)",
    tagBg: "bg-[#FDEEB8]",
    tagText: "text-[#B8860B]",
    tagBorder: "border-[#F8DC82]",
    badge: "FITNESS WEB APPLICATION &bull; REACT",
    domain: "gym-website-react.vercel.app",
    role: "Frontend Web",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectRowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      // 1. Header Reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // 2. Project Rows Scroll Entrance
      projectRowsRef.current.forEach((row) => {
        if (!row) return;

        const infoEl = row.querySelector(".proj-info");
        const frameEl = row.querySelector(".proj-frame");
        const imageEl = row.querySelector(".proj-image");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        if (infoEl) {
          tl.fromTo(
            infoEl,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6 }
          );
        }

        if (frameEl) {
          tl.fromTo(
            frameEl,
            { opacity: 0, scale: 0.96, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.65 },
            "-=0.4"
          );
        }

        if (imageEl) {
          tl.fromTo(
            imageEl,
            { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", scale: 1.05 },
            { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, duration: 0.75, ease: "power3.inOut" },
            "-=0.5"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden bg-[#FFF8F5]"
    >
      {/* ── Soft Ambient Glows Framing Background ── */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#FCE8E8]/70 via-[#FFF1EC]/40 to-transparent blur-3xl opacity-75 select-none -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#E8DDF7]/55 via-[#FCE8E8]/45 to-transparent blur-3xl opacity-70 select-none -z-10" />

      {/* Decorative Doodles */}
      <div className="pointer-events-none absolute top-16 right-16 text-[#E85D8B] text-xl animate-float-slow select-none opacity-40">✦</div>
      <div className="pointer-events-none absolute top-1/3 left-8 text-[#FAD074] text-lg animate-float-slow select-none opacity-45">★</div>
      <div className="pointer-events-none absolute bottom-1/4 right-10 text-[#E85D8B] text-2xl animate-doodle select-none opacity-40">♡</div>
      <div className="pointer-events-none absolute bottom-14 left-14 text-[#B9A1E8] text-base select-none opacity-35">✦</div>

      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">
        
        {/* ════════════════════════════════════════════════════════════════════
            1. SECTION HEADER (Kalam Font & Soft Pink Pill)
        ════════════════════════════════════════════════════════════════════ */}
        <div ref={headerRef} className="max-w-3xl mb-10 sm:mb-18 text-left">
          
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 mb-3 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
            <span>PROJECTS / 04 &bull; SELECTED WORK</span>
          </div>

          {/* Heading */}
          <h2 
            className="font-kalam font-bold tracking-tight text-[#302535] leading-[1.15] text-[clamp(2.2rem,5vw,4.4rem)]"
            style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
          >
            Things I&apos;ve{" "}
            <span className="text-[#E85D8B] relative inline-block">
              Built.
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
            </span>{" "}
            <span className="text-[#E85D8B] text-2xl sm:text-3xl animate-doodle inline-block font-kalam">♡</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[#756875] font-normal leading-relaxed">
            From full-stack AI applications to interactive component design systems, each project represents clean engineering, scalable architecture, and thoughtful user experience.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            2. ALTERNATING ZIG-ZAG PROJECT SHOWCASE (Centered Width)
        ════════════════════════════════════════════════════════════════════ */}
        <div className="space-y-10 sm:space-y-16 w-full lg:w-[90%] xl:w-[80%] mx-auto">
          {projects.map((project, idx) => {
            // isCardRight = true for Project 1 (idx 0), Project 3 (idx 2), Project 5 (idx 4)
            // isCardRight = false for Project 2 (idx 1), Project 4 (idx 3)
            const isCardRight = idx % 2 === 0;
            const isLast = idx === projects.length - 1;
            const style = projectStyles[idx] || projectStyles[0];

            return (
              <div 
                key={project.id}
                ref={(el) => { projectRowsRef.current[idx] = el; }}
                className="relative"
              >
                {/* Clean Transparent Project Row without Outer Card Background */}
                <div className="relative py-4 sm:py-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* ─────────────────────────────────────────────────────────
                        PROJECT DESCRIPTION COLUMN (7 Cols on Desktop)
                        - If isCardRight = true (Project 1, 3, 5): lg:order-1 (LEFT)
                        - If isCardRight = false (Project 2, 4):  lg:order-2 (RIGHT)
                    ───────────────────────────────────────────────────────── */}
                    <div 
                      className={`
                        proj-info lg:col-span-7 flex flex-col justify-center space-y-3.5
                        ${isCardRight ? "lg:order-1" : "lg:order-2"}
                      `}
                    >
                      {/* Number & Category Pill */}
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#EADDE3] shadow-2xs">
                          <span className="text-xs font-mono font-bold text-[#E85D8B]">0{idx + 1}</span>
                          <span className="text-[10px] font-mono text-[#A396A3]">/ 0{projects.length}</span>
                        </div>

                        <span 
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-0.5 rounded-full ${style.tagBg} ${style.tagText} ${style.tagBorder} border`}
                          dangerouslySetInnerHTML={{ __html: style.badge }}
                        />
                      </div>

                      {/* Project Title */}
                      <h3 
                        className="text-2xl sm:text-3xl font-bold tracking-tight text-[#302535] font-kalam leading-tight"
                        style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      {/* Small Narrative Description */}
                      <p className="text-xs sm:text-sm text-[#756875] leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Key Bullet Points / Features */}
                      {project.features && project.features.length > 0 && (
                        <div className="pt-1">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A396A3] block mb-1.5">
                            Key Highlights:
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#302535]">
                            {project.features.slice(0, 4).map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-1.5 leading-snug">
                                <span className="text-[#E85D8B] text-xs leading-tight font-bold mt-0.5">✦</span>
                                <span className="text-[#6D5D70] font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Languages & Tools Used */}
                      <div className="pt-1">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A396A3] block mb-1.5">
                          Languages &amp; Tools:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-white border border-[#EADDE3] px-2.5 py-0.5 text-xs font-bold text-[#302535] shadow-2xs hover:border-[#F29AB2] hover:bg-[#FFF8F6] transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Distinctive Custom Colored Action Links with Hover Effects */}
                      <div className="flex flex-wrap items-center gap-2.5 pt-3">
                        
                        {/* 1. Live Demo / Linked URL -> Soft Light Blue */}
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View Live Demo of ${project.title}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#EBF5FF] text-[#0A66C2] border border-[#D0E7FF] px-4 py-1.5 text-xs font-bold shadow-2xs transition-all duration-200 hover:bg-[#0A66C2] hover:text-white hover:-translate-y-0.5 active:translate-y-0 group"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}

                        {/* 2. GitHub -> Soft Grey */}
                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View GitHub Repository for ${project.title}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F1F5] text-[#4A3E52] border border-[#E2DCE6] px-4 py-1.5 text-xs font-bold shadow-2xs transition-all duration-200 hover:bg-[#302535] hover:text-white hover:-translate-y-0.5 active:translate-y-0 group"
                          >
                            <FaGithub size={12} />
                            <span>GitHub</span>
                            <ArrowUpRight size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-70 group-hover:opacity-100" />
                          </a>
                        )}

                        {/* 3. Figma -> Soft Light Pink */}
                        {project.figma && (
                          <a
                            href={project.figma}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View Figma File for ${project.title}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE8EE] text-[#E85D8B] border border-[#FFD0DC] px-4 py-1.5 text-xs font-bold shadow-2xs transition-all duration-200 hover:bg-[#E85D8B] hover:text-white hover:-translate-y-0.5 active:translate-y-0 group"
                          >
                            <FaFigma size={11} />
                            <span>Figma Blueprint</span>
                            <ExternalLink size={10} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}

                      </div>

                    </div>

                    {/* ─────────────────────────────────────────────────────────
                        PROJECT VISUAL CARD HERO (5 Cols on Desktop, Small Size)
                        - If isCardRight = true (Project 1, 3, 5): lg:order-2 (RIGHT)
                        - If isCardRight = false (Project 2, 4):  lg:order-1 (LEFT)
                    ───────────────────────────────────────────────────────── */}
                    <div 
                      className={`
                        proj-frame lg:col-span-5 flex items-center justify-center
                        ${isCardRight ? "lg:order-2" : "lg:order-1"}
                      `}
                    >
                      <div 
                        className="group/preview relative w-full max-w-[440px] overflow-hidden rounded-[22px] sm:rounded-[26px] border-2 border-[#F0DCE3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{
                          boxShadow: `0 10px 28px -10px ${style.glow}`,
                        }}
                      >
                        {/* Light Mac-Style Browser Header Bar */}
                        <div className="relative z-10 flex items-center justify-between px-3 sm:px-3.5 py-1.5 bg-[#FFF8F6] border-b border-[#F0DCE3] text-xs font-mono text-[#756875]">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#E85D8B]" />
                            <span className="h-2 w-2 rounded-full bg-[#FAD074]" />
                            <span className="h-2 w-2 rounded-full bg-[#82D9A7]" />
                          </div>

                          <div className="rounded-full bg-white px-3 py-0.5 text-[10px] text-[#302535] font-bold truncate max-w-[170px] sm:max-w-[200px] border border-[#F0DCE3] shadow-2xs font-mono">
                            {style.domain}
                          </div>

                          <span className="text-[9px] font-mono font-bold text-[#E85D8B] hidden sm:inline">
                            {style.role}
                          </span>
                        </div>

                        {/* Screenshot Container with GPU Scale Hover */}
                        <div className="proj-image relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 440px"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover/preview:scale-103 will-change-transform"
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                          />

                          {/* Floating "Live Preview ↗" Pill on Hover */}
                          {project.live && project.live !== "#" && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/95 text-[#302535] border border-[#F0DCE3] px-3.5 py-1 text-[11px] font-bold opacity-0 group-hover/preview:opacity-100 transition-all duration-200 translate-y-1 group-hover/preview:translate-y-0 backdrop-blur-md shadow-md hover:bg-[#EBF5FF] hover:text-[#0A66C2]"
                            >
                              <span>Live Preview</span>
                              <ArrowUpRight size={11} className="text-[#0A66C2]" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ── Subtle Divider Between Projects ── */}
                {!isLast && (
                  <div className="my-6 sm:my-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F0DCE3] to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            3. BELOW EVERYTHING: PROMINENT GITHUB CALLOUT FOR MORE PROJECTS
        ════════════════════════════════════════════════════════════════════ */}
        <div className="mt-14 sm:mt-18 pt-4">
          <div className="relative rounded-[28px] bg-gradient-to-r from-[#FFF5F7] via-[#FFFDFC] to-[#F4EEFC] border-2 border-[#F0DCE3] p-6 sm:p-8 shadow-[0_12px_36px_-12px_rgba(232,93,139,0.1)] flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#302535] text-white shadow-md">
                <FaGithub size={24} />
              </div>
              <div>
                <h4 
                  className="text-lg sm:text-xl font-bold text-[#302535] font-kalam leading-tight"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  Looking for more repositories &amp; open-source code?
                </h4>
                <p className="text-xs sm:text-sm text-[#756875] mt-1 font-normal">
                  Explore full repositories, architecture blueprints, API experiments, and component libraries.
                </p>
              </div>
            </div>

            {/* Prominent GitHub Button */}
            <a
              href="https://github.com/pohh09"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#302535] hover:bg-[#E85D8B] text-white px-6 py-3 text-xs sm:text-sm font-extrabold shadow-[0_6px_20px_rgba(48,37,53,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(232,93,139,0.35)] active:translate-y-0 group cursor-pointer"
            >
              <FaGithub size={15} />
              <span>Explore All on GitHub</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}