"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, CheckCircle2, Lightbulb, Palette, Code2, ArrowRight } from "lucide-react";
import { gsap } from "@/lib/animations/gsapSetup";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const eduCardRef = useRef<HTMLDivElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 16, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4 }
      )
        .fromTo(
          statementRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          introTextRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.25"
        )
        .fromTo(
          eduCardRef.current,
          { opacity: 0, y: 24, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          processLineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.2"
        );

      // Subtle parallax on decorative floating elements
      const floatingSparkles = sectionRef.current?.querySelectorAll(".about-parallax-item");
      if (floatingSparkles && floatingSparkles.length > 0) {
        gsap.to(floatingSparkles, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-8 sm:py-10 lg:py-12 overflow-hidden bg-[#FFF8F5]"
    >

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
            opacity="0.4"
          />
          <path
            d="M1440,150 C1200,240 950,180 750,380 C550,580 900,750 350,920 L1440,1000 Z"
            fill="#FFF1EC"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="about-parallax-item pointer-events-none absolute top-8 right-12 text-[#E85D8B] text-sm animate-float-slow select-none opacity-35">✦</div>
      <div className="about-parallax-item pointer-events-none absolute bottom-10 left-8 text-[#FAD074] text-xs animate-float-slow select-none opacity-45">★</div>

      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          <div className="lg:col-span-7 flex flex-col items-start text-left">

            <div
              ref={tagRef}
              className="inline-flex items-center gap-2 mb-4 sm:mb-5 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
              <span>ABOUT</span>
            </div>

            <h2
              ref={statementRef}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#302535] font-kalam leading-[1.15]"
              style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
            >
              A little{" "}
              <span className="text-[#E85D8B] relative inline-block">
                about me.
              </span>
            </h2>

            <p
              ref={introTextRef}
              className="mt-4 text-sm sm:text-base lg:text-[17px] leading-relaxed sm:leading-[1.8] text-[#5A4D5D] font-normal"
            >
              It started with a simple curiosity about how websites and applications were built. That curiosity grew through learning, experimenting, and creating projects of my own. I enjoy exploring ideas, solving problems, and paying attention to the small details that make a digital experience feel thoughtful.
            </p>

          </div>

          <div className="lg:col-span-5 flex flex-col justify-center w-full">
            <div
              ref={eduCardRef}
              className="pastel-card group/edu relative w-full rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 border-2 border-[#F0DCE3] bg-gradient-to-br from-white via-[#FFFDFD] to-[#FAF6FE] shadow-[0_8px_24px_-8px_rgba(232,93,139,0.12)] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(232,93,139,0.18)] hover:border-[#F29AB2]"
            >

              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#E85D8B] via-[#9D80E4] to-[#8DDDE5]" />

              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#F0DCE3]">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FCE8E8] text-[#E85D8B] shadow-2xs group-hover/edu:scale-105 transition-transform">
                    <GraduationCap size={16} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#302535] font-kalam leading-tight">
                    Academic Background
                  </h3>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#E85D8B] shadow-2xs">
                  <CheckCircle2 size={10} className="text-[#E85D8B]" />
                  Class of 2023
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-base sm:text-lg font-bold text-[#302535] font-kalam leading-snug">
                  B.Tech in Information Technology
                </p>
                <p className="text-xs text-[#6D5D70] leading-relaxed">
                  A foundation in software engineering, databases, and web development.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div
          ref={processLineRef}
          className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-[#F0DCE3]/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
        >

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A396A3]">
              HOW I BUILD:
            </span>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-[#F0DCE3] shadow-2xs text-xs font-bold text-[#302535]">
              <span className="inline-flex items-center gap-1 text-[#E85D8B]">
                <Lightbulb size={12} />
                <span>Idea</span>
              </span>
              <span className="text-[#C4B5C7]">&rarr;</span>
              <span className="inline-flex items-center gap-1 text-[#8B72D8]">
                <Palette size={12} />
                <span>Design</span>
              </span>
              <span className="text-[#C4B5C7]">&rarr;</span>
              <span className="inline-flex items-center gap-1 text-[#289BB5]">
                <Code2 size={12} />
                <span>Build</span>
              </span>
            </div>
          </div>

          <a
            href="#skills"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#E85D8B] hover:text-[#8B72D8] transition-colors group font-kalam"
          >
            <span>Explore My Tech Stack &amp; Skills</span>
            <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}