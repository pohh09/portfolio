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
  Mail,
  MessageSquare
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { gsap } from "@/lib/animations/gsapSetup";

const quickTopics = [
  {
    label: "Frontend / Full-Stack Role",
    message: "Hi Pooja, I came across your portfolio and would love to discuss a Full-Stack / Frontend Developer opportunity with our team!"
  },
  {
    label: "Figma to Code Project",
    message: "Hi Pooja, we have a Figma design and need a clean, responsive React + Tailwind CSS implementation."
  },
  {
    label: "Freelance / MVP Build",
    message: "Hi Pooja, I have a web application project and would love to collaborate on building a scalable MVP together."
  },
  {
    label: "Say Hello / Chat",
    message: "Hi Pooja, just wanted to say great work on your portfolio! Let's stay connected."
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const underlinePathRef = useRef<SVGPathElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const emailAddress = "poojadaki09@gmail.com";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!prefersReducedMotion) {
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
          headerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55 }
        );

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

        if (leftColRef.current && formCardRef.current) {
          tl.fromTo(
            [leftColRef.current, formCardRef.current],
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
            "-=0.3"
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
        setName("");
        setEmail("");
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
      className="relative overflow-hidden pt-10 sm:pt-14 pb-14 sm:pb-20 bg-[#FFF8F5]"
    >

      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none -z-10">
        <div className="absolute top-1/4 left-1/3 h-80 w-80 rounded-full bg-[#E85D8B]/4 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-[#B9A1E8]/5 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute top-10 right-14 text-[#E85D8B] text-lg animate-float-slow select-none opacity-35">✦</div>
      <div className="pointer-events-none absolute top-1/2 left-6 text-[#FAD074] text-base animate-float-slow select-none opacity-45">★</div>
      <div className="pointer-events-none absolute bottom-12 left-1/4 text-[#B9A1E8] text-sm select-none opacity-30">✦</div>
      <div className="pointer-events-none absolute bottom-16 right-1/4 text-[#E85D8B] text-lg animate-float-slow select-none opacity-35">✦</div>

      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">

        <div ref={headerRef} className="max-w-3xl mb-6 sm:mb-8 text-left">

          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
            <span>CONTACT</span>
          </div>

          <h2
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#302535] font-kalam leading-[1.15]"
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

          <p className="mt-2 text-xs sm:text-sm lg:text-base text-[#756875] font-normal leading-relaxed">
            Looking for a dedicated <strong className="text-[#302535] font-bold">Full-Stack or Frontend Developer</strong> who crafts clean code, responsive UX, and scalable backend architecture? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">

          <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-between space-y-4">

            <div className="relative rounded-[24px] sm:rounded-[26px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF8F9] to-[#FAF7FE] border-2 border-[#F0DCE3] p-5 sm:p-6 shadow-[0_10px_28px_-10px_rgba(232,93,139,0.1)] transition-all duration-300 hover:border-[#F29AB2] hover:shadow-[0_12px_32px_-8px_rgba(232,93,139,0.16)] flex flex-col justify-between">

              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0DCE3]">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E85D8B] text-white shadow-2xs">
                      <Mail size={15} />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#302535]">
                        DIRECT EMAIL
                      </h3>
                      <p className="text-[11px] text-[#756875] font-normal">Quickest way to reach me</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E85D8B] bg-[#FCE8E8] px-2.5 py-0.5 rounded-full border border-[#F8D2D9]">
                    Primary
                  </span>
                </div>

                <div className="py-1">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-base sm:text-lg font-mono font-bold text-[#302535] hover:text-[#E85D8B] transition-colors truncate select-all flex items-center gap-1.5 group/mail"
                    title="Click to send an email"
                  >
                    <span>{emailAddress}</span>
                    <ArrowUpRight size={15} className="text-[#A396A3] group-hover/mail:text-[#E85D8B] transition-transform group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              <div className="pt-3 mt-2 border-t border-[#F0DCE3]/70 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#A396A3]">click or copy directly &rarr;</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`
                    px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95
                    ${copiedEmail
                      ? "bg-[#EDFBF3] text-[#2FB86A] border border-[#CEF4DE]"
                      : "bg-[#FFFFFF] text-[#302535] border border-[#EADDE3] hover:border-[#E85D8B] hover:text-[#E85D8B] hover:bg-[#FFF8F6]"
                    }
                  `}
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={12} className="text-[#2FB86A]" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} className="text-[#756875]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            <div className="relative rounded-[24px] sm:rounded-[26px] bg-white border-2 border-[#F0DCE3] p-5 shadow-[0_10px_28px_-10px_rgba(232,93,139,0.08)] flex flex-col justify-between">

              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0DCE3]">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#302535]">
                  PROFESSIONAL PROFILES
                </h3>
                <span className="text-xs font-kalam text-[#E85D8B]">find me online ↗</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">

                <a
                  href="https://github.com/pohh09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="group flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-[#F3F1F5] text-[#302535] border border-[#E2DCE6] text-xs font-bold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#302535] hover:text-white"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={11} className="opacity-60 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/pooja-daki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="group flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-[#EBF5FF] text-[#0A66C2] border border-[#D0E7FF] text-xs font-bold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white"
                >
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  aria-label="Send direct email"
                  className="group flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-[#FFE8EE] text-[#E85D8B] border border-[#FFD0DC] text-xs font-bold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E85D8B] hover:text-white"
                >
                  <Mail size={14} />
                  <span>Email</span>
                  <ArrowUpRight size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

              </div>

              <div className="mt-3.5 pt-2.5 border-t border-[#F0DCE3]/70 flex items-center justify-between text-[11px] font-mono text-[#756875]">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Typically replies within 24 hours ✨</span>
                </div>
                <span className="text-[#E85D8B] font-bold font-kalam">let&apos;s talk ✨</span>
              </div>

            </div>

          </div>

          <div className="lg:col-span-7 flex">
            <div
              ref={formCardRef}
              className="relative w-full rounded-[24px] sm:rounded-[28px] bg-white border-2 border-[#F0DCE3] p-5 sm:p-6 lg:p-7 shadow-[0_14px_40px_-12px_rgba(232,93,139,0.12)] flex flex-col justify-between will-change-transform"
            >

              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F0DCE3]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E85D8B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FAD074]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#82D9A7]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#302535] pl-1.5">
                    send_message.tsx
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFF5F7] border border-[#F8D2D9] text-[#E85D8B] text-xs font-mono font-bold shadow-2xs">
                  <MessageSquare size={11} />
                  <span>Start Conversation</span>
                </div>
              </div>

              <div className="mb-3.5">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[11px] font-mono font-bold text-[#756875] uppercase tracking-wider">
                    Select a Topic / Need Ideas?
                  </label>
                  <span className="text-[10px] font-kalam text-[#E85D8B]">auto-fills message ✨</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {quickTopics.map((topic) => {
                    const isSelected = selectedTopic === topic.label;
                    return (
                      <button
                        key={topic.label}
                        type="button"
                        onClick={() => handleTopicSelect(topic)}
                        className={`
                          px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95
                          ${isSelected
                            ? "bg-[#E85D8B] text-white border border-[#E85D8B] shadow-xs"
                            : "bg-[#FFF9F6] text-[#302535] border border-[#F0DCE3] hover:border-[#E85D8B] hover:bg-[#FFF1EC]"
                          }
                        `}
                      >
                        <span>{topic.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {status === "success" ? (
                <div className="py-8 px-4 text-center space-y-2.5 rounded-2xl bg-[#F4FCF7] border-2 border-[#CEF4DE] animate-fadeIn my-auto">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#EDFBF3] text-[#2FB86A] border-2 border-[#CEF4DE] shadow-xs animate-bounce">
                    <CheckCircle size={22} />
                  </div>
                  <h4
                    className="text-xl font-bold font-kalam text-[#302535]"
                    style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                  >
                    Message sent successfully! ✨
                  </h4>
                  <p className="text-xs text-[#756875] max-w-sm mx-auto leading-relaxed font-sans">
                    Thank you for reaching out! I typically respond within 24 hours. Looking forward to speaking with you!
                  </p>
                  <div className="pt-1.5">
                    <button
                      type="button"
                      onClick={() => setStatus("")}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#302535] hover:bg-[#E85D8B] text-white px-4 py-1.5 text-xs font-bold shadow-xs transition-all cursor-pointer active:scale-95"
                    >
                      <span>Send another message</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/xykrvvzl"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#302535] mb-1">
                        Your Name <span className="text-[#E85D8B]">*</span>
                      </label>
                      <input
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full rounded-xl border border-[#F0DCE3] bg-[#FFFDFC] px-3.5 py-2 text-[#302535] placeholder-[#A396A3] outline-none font-sans font-medium text-xs sm:text-sm transition-all focus:border-[#E85D8B] focus:ring-2 focus:ring-[#E85D8B]/15 shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#302535] mb-1">
                        Email Address <span className="text-[#E85D8B]">*</span>
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-[#F0DCE3] bg-[#FFFDFC] px-3.5 py-2 text-[#302535] placeholder-[#A396A3] outline-none font-sans font-medium text-xs sm:text-sm transition-all focus:border-[#E85D8B] focus:ring-2 focus:ring-[#E85D8B]/15 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#302535]">
                        Your Message <span className="text-[#E85D8B]">*</span>
                      </label>
                      <span className="text-[#E85D8B] text-[11px] font-kalam select-none">tell me about your vision ✦</span>
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ minHeight: "85px" }}
                      placeholder="Tell me about the role, project, design tokens, or vision..."
                      className="w-full rounded-xl border border-[#F0DCE3] bg-[#FFFDFC] px-3.5 py-2 text-[#302535] placeholder-[#A396A3] outline-none resize-none font-sans font-medium text-xs sm:text-sm leading-relaxed transition-all focus:border-[#E85D8B] focus:ring-2 focus:ring-[#E85D8B]/15 shadow-2xs"
                    />
                  </div>

                  <div className="pt-0.5">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E85D8B] to-[#F29AB2] hover:from-[#D84C7A] hover:to-[#E85D8B] text-white px-6 py-2.5 text-xs sm:text-sm font-extrabold shadow-[0_4px_16px_rgba(232,93,139,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,93,139,0.45)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Send size={14} className={`transition-transform duration-200 ${loading ? "animate-spin" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                      <span>{loading ? "Sending Message..." : "Send Message"}</span>
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>

                  {status === "error" && (
                    <div className="mt-2 flex w-full items-center gap-2 rounded-xl border border-rose-300 bg-[#FFF5F6] p-3 text-xs font-bold text-rose-800 shadow-2xs animate-fadeIn">
                      <AlertCircle size={15} className="text-rose-600 shrink-0" />
                      <span>Something went wrong. Please email directly to <a href={`mailto:${emailAddress}`} className="underline text-[#E85D8B]">{emailAddress}</a></span>
                    </div>
                  )}
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}