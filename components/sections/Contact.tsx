"use client";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
  ArrowUpRight,
  ArrowRight,
  Mail
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "@/lib/animations/gsapSetup";

const quickTopics = [
  { label: "Frontend / Full-Stack Role", message: "Hi Pooja, I came across your portfolio and would love to discuss a Full-Stack / Frontend Developer opportunity with our team!" },
  { label: "Figma to Code Project", message: "Hi Pooja, we have a Figma design system and need a pixel-perfect, high-performance React + Tailwind CSS implementation." },
  { label: "Freelance Collaboration", message: "Hi Pooja, I have a web application project and would love to collaborate on building a scalable MVP together." },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const underlinePathRef = useRef<SVGPathElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const emailNoteRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const emailAddress = "poojadaki09@gmail.com";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // ── Staggered Scroll Reveal Timeline ──
      if (!prefersReducedMotion) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        // 1. Section Header & Tag
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 }
        );

        // 2. Animated Underline Path Draw
        if (underlinePathRef.current) {
          const length = underlinePathRef.current.getTotalLength() || 240;
          gsap.set(underlinePathRef.current, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          tl.to(
            underlinePathRef.current,
            { strokeDashoffset: 0, duration: 0.7, ease: "power2.out" },
            "-=0.2"
          );
        }

        // 3. Left Column Content
        if (leftColRef.current) {
          tl.fromTo(
            leftColRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.55 },
            "-=0.4"
          );
        }

        // 4. Right Form Card Reveal
        if (formCardRef.current) {
          tl.fromTo(
            formCardRef.current,
            { opacity: 0, y: 25, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "power2.out" },
            "-=0.45"
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleTopicSelect = (topic: typeof quickTopics[0]) => {
    setSelectedTopic(topic.label);
    setMessage(topic.message);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);
    const formElement = e.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xykrvvzl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        formElement.reset();
        setMessage("");
        setSelectedTopic("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden pt-16 sm:pt-20 pb-20 sm:pb-28 bg-[#FFF8F5]"
    >
      {/* ── Organic Painted Pink & Lavender Wave Backgrounds ── */}
      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none -z-10">
        <svg
          className="absolute -top-12 -left-20 w-[850px] h-[650px] text-[#F9DDE4]"
          viewBox="0 0 850 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50,80 C180,-20 380,140 520,60 C680,-40 820,90 850,280 C880,480 660,620 480,590 C280,560 120,660 -50,580 Z"
            fill="currentColor"
            fillOpacity="0.28"
          />
        </svg>

        <svg
          className="absolute -bottom-20 -right-20 w-[750px] h-[600px] text-[#E8DDF7]"
          viewBox="0 0 750 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M800,200 C680,60 520,120 380,180 C240,240 100,380 120,520 C140,640 400,620 600,600 C760,580 840,400 800,200 Z"
            fill="currentColor"
            fillOpacity="0.25"
          />
        </svg>
      </div>

      {/* Floating Subtle Doodles */}
      <div className="pointer-events-none absolute top-14 right-16 text-[#E85D8B] text-xl animate-float-slow select-none opacity-40">✦</div>
      <div className="pointer-events-none absolute top-1/2 left-8 text-[#E85D8B] text-sm select-none opacity-30">·</div>
      <div className="pointer-events-none absolute bottom-16 left-1/4 text-[#302535] text-lg select-none opacity-25">✦</div>
      <div className="pointer-events-none absolute bottom-24 right-1/3 text-[#E85D8B] text-2xl animate-doodle select-none opacity-40">♡</div>

      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">

        {/* ════════════════════════════════════════════════════════════════════
            1. SECTION HEADER
        ════════════════════════════════════════════════════════════════════ */}
        <div ref={headerRef} className="max-w-3xl mb-8 sm:mb-10 text-left">

          {/* Handwritten Section Label */}
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-0.5 rounded-full bg-[#FCE8E8] border border-[#F9DDE4] text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B]" />
            <span>CONTACT / 05</span>
          </div>

          {/* Large Kalam Heading with Hand-Drawn Animated Underline */}
          <h2
            className="font-kalam font-bold tracking-tight text-[#302535] leading-[1.06] text-[clamp(2.1rem,5vw,4rem)]"
            style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
          >
            Let&apos;s build something{" "}
            <span className="relative inline-block text-[#E85D8B]">
              <span>extraordinary.</span>
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-3.5 overflow-visible pointer-events-none text-[#E85D8B]"
                viewBox="0 0 220 14"
                fill="none"
              >
                <path
                  ref={underlinePathRef}
                  d="M3,8 C55,2 145,13 216,6"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            2. COMPACT ASYMMETRIC COMPOSITION (Small Cards)
        ════════════════════════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 items-start">

            {/* ─────────────────────────────────────────────────────────────
                LEFT SIDE (6 Cols): Message, Direct Email Note, Socials
            ───────────────────────────────────────────────────────────── */}
            <div ref={leftColRef} className="lg:col-span-6 flex flex-col space-y-4">

              {/* Descriptive Body Paragraph */}
              <p className="text-sm sm:text-base leading-relaxed text-[#756875] font-normal font-sans">
                Looking for a dedicated <strong className="text-[#302535] font-bold">Full-Stack or Frontend Developer</strong> who crafts clean code, responsive UX, and scalable backend services? My inbox is always open.
              </p>

              {/* Handwritten Note */}
              <div className="flex items-center gap-2 text-xs font-kalam font-bold text-[#E85D8B] select-none">
                <span>Let&apos;s talk ✦</span>
                <span className="text-[10px] text-[#A396A3]">· have an idea?</span>
              </div>

              {/* Compact Direct Email Card */}
              <div
                ref={emailNoteRef}
                className="relative p-4 rounded-[20px] bg-[#FFFDFC] border border-[#F9DDE4] shadow-[0_6px_20px_-6px_rgba(232,93,139,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-4px_rgba(232,93,139,0.15)]"
              >
                <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#F9DDE4]/70">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FCE8E8] text-[#E85D8B] border border-[#F9DDE4] shadow-2xs">
                      <Mail size={13} />
                    </div>
                    <span className="text-xs font-kalam font-bold text-[#302535] tracking-wider uppercase">
                      DIRECT EMAIL
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#A396A3]">
                    ✉ inbox
                  </span>
                </div>

                {/* Email Address as Clickable Link & Compact Copy Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-mono font-bold text-[#302535] hover:text-[#E85D8B] transition-colors truncate select-all flex items-center gap-1.5 group/mail"
                    title="Click to send an email"
                  >
                    <span>{emailAddress}</span>
                    <ArrowUpRight size={12} className="text-[#A396A3] group-hover/mail:text-[#E85D8B] transition-transform group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`
                      self-start sm:self-auto flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-2xs active:scale-95
                      ${copiedEmail
                        ? "bg-[#EDFBF3] text-[#2FB86A] border border-[#CEF4DE]"
                        : "bg-[#FCE8E8] text-[#E85D8B] border border-[#F9DDE4] hover:bg-[#E85D8B] hover:text-white"
                      }
                    `}
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={12} className="text-[#2FB86A]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={11} />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Links Row with Custom Colors and Smooth Hovers */}
              <div className="space-y-3 pt-0.5">
                <div className="flex flex-wrap items-center gap-2" ref={socialsRef}>

                  {/* 1. GitHub Pill -> Soft Grey */}
                  <a
                    href="https://github.com/pohh09"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F1F5] text-[#4A3E52] border border-[#E2DCE6] text-xs font-bold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#302535] hover:text-white"
                  >
                    <FaGithub size={12} />
                    <span>GitHub</span>
                    <ArrowUpRight size={10} className="opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* 2. LinkedIn Pill -> Soft Light Blue */}
                  <a
                    href="https://www.linkedin.com/in/pooja-daki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5FF] text-[#0A66C2] border border-[#D0E7FF] text-xs font-bold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white"
                  >
                    <FaLinkedin size={12} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={10} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* 3. Direct Email Pill -> Soft Light Pink */}
                  <a
                    href={`mailto:${emailAddress}`}
                    aria-label="Send direct email"
                    className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE8EE] text-[#E85D8B] border border-[#FFD0DC] text-xs font-bold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E85D8B] hover:text-white"
                  >
                    <Mail size={12} />
                    <span>Email</span>
                    <ArrowUpRight size={10} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#E85D8B] bg-[#FCE8E8] border border-[#F9DDE4] px-3 py-0.5 rounded-full shadow-2xs w-fit">
                  <Sparkles size={11} className="text-[#E85D8B]" />
                  <span>Typically replies within 24 hours ✨</span>
                </div>
              </div>

            </div>

            {/* ─────────────────────────────────────────────────────────────
                RIGHT SIDE (6 Cols): Compact Reduced Contact Form Card
            ───────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-6 flex justify-end w-full">
              <div
                ref={formCardRef}
                className="relative rounded-[22px] sm:rounded-[24px] bg-[#FFFDFC] border border-[#F9DDE4] p-4 sm:p-5 lg:p-5.5 shadow-[0_10px_28px_-8px_rgba(232,93,139,0.1)] will-change-transform w-full max-w-full lg:max-w-md"
              >

                {/* Header with Mail Sending Icon */}
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#F9DDE4]/80">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-[#E85D8B]" />
                      <span className="h-2 w-2 rounded-full bg-[#FAD074]" />
                      <span className="h-2 w-2 rounded-full bg-[#82D9A7]" />
                    </div>
                    <span className="font-kalam font-bold text-xs sm:text-sm text-[#E85D8B] pl-1 tracking-wide">
                      Start a conversation ✦
                    </span>
                  </div>

                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FCE8E8] border border-[#F9DDE4] text-[#E85D8B] text-[10px] font-bold font-kalam shadow-2xs">
                    <Send size={10} className="rotate-45" />
                    <span>Send Note</span>
                  </div>
                </div>

                {/* Quick Topic Selector Pills */}
                <div className="mb-2.5">
                  <label className="block text-[10px] font-bold text-[#756875] uppercase tracking-wider mb-1 font-kalam">
                    Quick Topics / Need Ideas?
                  </label>
                  <div className="flex flex-wrap gap-1">
                    {quickTopics.map((topic) => {
                      const isSelected = selectedTopic === topic.label;
                      return (
                        <button
                          key={topic.label}
                          type="button"
                          onClick={() => handleTopicSelect(topic)}
                          className={`
                            px-2 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95
                            ${isSelected
                              ? "bg-[#E85D8B] text-white border border-[#E85D8B]"
                              : "bg-[#FFF9F6] text-[#302535] border border-[#F0DCE3] hover:border-[#E85D8B] hover:bg-[#FFF1EC]"
                            }
                          `}
                        >
                          {topic.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Transformation / Success State */}
                {status === "success" ? (
                  <div className="py-6 px-3 text-center space-y-2 rounded-xl bg-[#F4FCF7] border border-[#CEF4DE] animate-fadeIn">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#EDFBF3] text-[#2FB86A] border-2 border-[#CEF4DE] shadow-xs">
                      <CheckCircle size={20} />
                    </div>
                    <h4 className="text-lg font-bold font-kalam text-[#302535]">
                      Message sent! ♡
                    </h4>
                    <p className="text-xs text-[#756875] max-w-sm mx-auto leading-relaxed font-sans">
                      Message sent successfully! I&apos;ll get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("")}
                      className="btn-secondary text-[11px] px-3 py-1 rounded-full"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    action="https://formspree.io/f/xykrvvzl"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-2.5"
                  >
                    {/* Field 1: Your Name */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#302535] mb-0.5 font-kalam">
                        Your Name
                      </label>
                      <input
                        name="name"
                        required
                        placeholder="e.g. Alex Morgan"
                        className="w-full rounded-lg border border-[#F0DCE3] bg-[#FFFDFC] px-3 py-2 sm:py-1.5 text-[#302535] placeholder-[#A396A3] outline-none font-sans font-medium text-sm sm:text-xs transition-all focus:border-[#E85D8B] focus:ring-2 focus:ring-[#E85D8B]/10 shadow-2xs"
                      />
                    </div>

                    {/* Field 2: Email Address */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#302535] mb-0.5 font-kalam">
                        Email Address
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="alex@company.com"
                        className="w-full rounded-lg border border-[#F0DCE3] bg-[#FFFDFC] px-3 py-2 sm:py-1.5 text-[#302535] placeholder-[#A396A3] outline-none font-sans font-medium text-sm sm:text-xs transition-all focus:border-[#E85D8B] focus:ring-2 focus:ring-[#E85D8B]/10 shadow-2xs"
                      />
                    </div>

                    {/* Field 3: Your Message */}
                    <div className="relative">
                      <div className="flex items-center justify-between mb-0.5">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#302535] font-kalam">
                          Your Message
                        </label>
                        <span className="text-[#E85D8B] text-[11px] select-none">✦</span>
                      </div>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ minHeight: "75px" }}
                        placeholder="Tell me about the role, project, or vision..."
                        className="w-full rounded-lg border border-[#F0DCE3] bg-[#FFFDFC] px-3 py-2 sm:py-1.5 text-[#302535] placeholder-[#A396A3] outline-none resize-none font-sans font-medium text-sm sm:text-xs leading-relaxed transition-all focus:border-[#E85D8B] focus:ring-2 focus:ring-[#E85D8B]/10 shadow-2xs"
                      />
                    </div>

                    {/* Send Message Button */}
                    <div className="pt-0.5">
                      <button
                        ref={submitBtnRef}
                        type="submit"
                        disabled={loading}
                        className="group relative w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-[#E85D8B] hover:bg-[#D94877] text-white px-5 py-2 text-xs font-extrabold shadow-[0_4px_14px_-3px_rgba(232,93,139,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_-3px_rgba(232,93,139,0.45)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <span>{loading ? "Sending..." : "Send Message"}</span>
                        <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>

                    {/* Error State Banner */}
                    {status === "error" && (
                      <div className="mt-1.5 flex w-full items-center gap-1.5 rounded-lg border border-rose-300 bg-[#FFF5F6] p-2 text-[11px] font-bold text-rose-800 shadow-2xs animate-fadeIn">
                        <AlertCircle size={13} className="text-rose-600 flex-shrink-0" />
                        <span>Something went wrong. Please email directly to {emailAddress}</span>
                      </div>
                    )}
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}