"use client";

import { Heart, ArrowUp, Mail, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-transparent text-[#302535]">
      {/* ── Top Organic Wave Transition (Wave top boundary in soft pink #FFE8EE) ── */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 sm:h-20 md:h-28 lg:h-36 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C280,120 540,10 820,65 C1100,120 1280,20 1440,55 L1440,120 L0,120 Z"
            fill="#FFE8EE"
          />
        </svg>
      </div>

      {/* ── Solid Soft Pink Footer Content Body ── */}
      <div className="w-full bg-[#FFE8EE] pb-12 sm:pb-16 pt-2 sm:pt-4">
        <div className="relative mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-6 lg:px-8">
        
        {/* Main Grid: 12-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── Brand Column (Desktop: 5 Cols, Tablet: 2 Cols, Mobile: 1 Col) ── */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#E85D8B] via-[#F29AB2] to-[#FCE8E8] text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(232,93,139,0.35)] border border-white/40 transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
                PD
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#302535] font-display">
                    Pooja <span className="text-[#E85D8B]">Daki</span>
                  </h2>
                  <span className="text-[#E85D8B] text-lg animate-doodle inline-block">♡</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A396A3]">
                  Full-Stack &amp; Frontend Engineer
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#756875] font-normal">
              Crafting high-performance web applications with React 19, Next.js 15, TypeScript, Node.js, and fluid animation architecture.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#F8D2D9] bg-white/95 px-4 py-1.5 text-xs font-bold text-[#E85D8B] shadow-xs backdrop-blur-md transition-all hover:border-[#F29AB2] hover:shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E85D8B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E85D8B]" />
              </span>
              <span>Available for Full-Stack Opportunities ✨</span>
            </div>
          </div>

          {/* ── Quick Navigation Column (Desktop: 3 Cols, Tablet: 1 Col, Mobile: 1 Col) ── */}
          <div className="sm:col-span-1 lg:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FCE8E8] text-[#E85D8B]">
                <Code2 size={14} />
              </div>
              <h3 className="font-extrabold tracking-wider text-xs uppercase text-[#302535] font-display">
                Navigation <span className="text-[#E85D8B] text-[10px] ml-1">✦</span>
              </h3>
            </div>

            <ul className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-2.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-[#756875] transition-all duration-200 hover:translate-x-1.5 hover:text-[#E85D8B]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-125" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Connect Column (Desktop: 4 Cols, Tablet: 1 Col, Mobile: 1 Col) ── */}
          <div className="sm:col-span-1 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FCE8E8] text-[#E85D8B]">
                <Sparkles size={14} />
              </div>
              <h3 className="font-extrabold tracking-wider text-xs uppercase text-[#302535] font-display">
                Let&apos;s Connect <ArrowUpRight size={13} className="text-[#E85D8B] inline-block ml-0.5" />
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#756875] leading-relaxed mb-5 max-w-sm">
              Open for full-stack engineering roles, freelance collaborations, and tech chats.
            </p>

            {/* Social Interactive Icon Cards (GitHub, LinkedIn, Email ONLY) */}
            <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap" role="list" aria-label="Social profiles">
              <SocialCard
                href="https://github.com/pohh09"
                icon={<FaGithub size={20} />}
                name="GitHub"
                label="GitHub Profile"
                hoverColor="hover:border-[#302535] hover:bg-[#302535] hover:text-white hover:shadow-[0_10px_24px_rgba(48,37,53,0.25)]"
              />
              <SocialCard
                href="https://www.linkedin.com/in/pooja-daki/"
                icon={<FaLinkedin size={20} />}
                name="LinkedIn"
                label="LinkedIn Profile"
                hoverColor="hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_10px_24px_rgba(10,102,194,0.25)]"
              />
              <SocialCard
                href="mailto:poojadaki09@gmail.com"
                icon={<Mail size={20} />}
                name="Email Me"
                label="Send an Email"
                hoverColor="hover:border-[#E85D8B] hover:bg-[#E85D8B] hover:text-white hover:shadow-[0_10px_24px_rgba(232,93,139,0.35)]"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom Copyright & Back to Top Bar ── */}
        <div className="mt-12 sm:mt-16 flex flex-col-reverse sm:flex-row items-center justify-between gap-5 border-t border-[#EADDE3] pt-6 text-center sm:text-left">
          <p className="flex flex-wrap items-center justify-center sm:justify-start gap-1 text-xs text-[#756875] font-normal">
            <span>© {year} Pooja Daki • Crafted with</span>
            <Heart size={13} className="fill-[#E85D8B] text-[#E85D8B] inline-block mx-0.5 animate-pulse" />
            <span>using</span>
            <span className="font-semibold text-[#302535]">Next.js 15</span>,
            <span className="font-semibold text-[#302535]">TypeScript</span> &amp;
            <span className="font-semibold text-[#302535]">Tailwind CSS</span>.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-[#EADDE3] bg-white px-5 py-2 text-xs font-bold text-[#302535] shadow-xs transition-all duration-300 hover:border-[#F29AB2] hover:text-[#E85D8B] hover:bg-[#FCE8E8] hover:shadow-md cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E85D8B] focus:ring-offset-2"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="text-[#E85D8B] transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </div>
  </footer>
  );
}

function SocialCard({
  href,
  icon,
  name,
  label,
  hoverColor,
}: {
  href: string;
  icon: React.ReactNode;
  name: string;
  label: string;
  hoverColor: string;
}) {
  return (
    <div className="relative group/btn flex flex-col items-center">
      {/* Floating Micro-Tooltip */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-9 z-20 whitespace-nowrap rounded-lg bg-[#2E2234] px-2.5 py-1 text-[10px] font-bold text-white opacity-0 shadow-md transition-all duration-200 group-hover/btn:opacity-100 group-hover/btn:-translate-y-1"
      >
        {name}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2E2234]" />
      </span>

      {/* Social Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#F0DCE3] bg-white/90 text-[#2E2234] shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FF5E86] focus:ring-offset-2 ${hoverColor}`}
      >
        <span className="transition-transform duration-300 group-hover/btn:scale-110">
          {icon}
        </span>
      </a>
    </div>
  );
}