"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Sparkles, Code2, ArrowUpRight, Globe } from "lucide-react";
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

      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-24 lg:h-28 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C280,110 540,15 820,65 C1100,115 1280,25 1440,55 L1440,120 L0,120 Z"
            fill="#FFE8EE"
          />
        </svg>
      </div>

      <div className="w-full bg-gradient-to-b from-[#FFE8EE] via-[#FFF0F4] to-[#FFEBF1] pb-10 sm:pb-14 pt-4 sm:pt-6 border-t border-[#FCD4DF]/50">
        <div className="relative mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start"
          >

            <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-3.5 group cursor-default">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#E85D8B] via-[#F29AB2] to-[#FFCCD9] text-sm font-extrabold text-white shadow-[0_6px_18px_rgba(232,93,139,0.35)] border-2 border-white/60 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  PD
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-2xl sm:text-[1.75rem] font-bold tracking-tight text-[#302535] font-kalam leading-none" style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}>
                      Pooja <span className="text-[#E85D8B]">Daki</span>
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#756875] mt-1">
                    FULL-STACK &amp; FRONTEND ENGINEER
                  </span>
                </div>
              </div>

              <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#756875] font-normal">
                Crafting polished, high-performance web experiences with React, Next.js, TypeScript, Node.js, and fluid UI architecture.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#F8D2D9] bg-white/90 px-3.5 py-1 text-xs font-bold text-[#E85D8B] shadow-2xs backdrop-blur-md transition-all hover:border-[#F29AB2] hover:bg-white hover:shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Full-Stack Opportunities ✨</span>
              </div>
            </div>

            <div className="sm:col-span-1 lg:col-span-3">
              <div className="flex items-center gap-2 mb-3.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FCE8E8] text-[#E85D8B] border border-[#F8D2D9]">
                  <Code2 size={13} />
                </div>
                <h3 className="font-mono font-bold tracking-wider text-xs uppercase text-[#302535]">
                  Navigation
                </h3>
              </div>

              <ul className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#756875] transition-all duration-200 hover:translate-x-1.5 hover:text-[#E85D8B]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-125" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-1 lg:col-span-4">
              <div className="flex items-center gap-2 mb-3.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FCE8E8] text-[#E85D8B] border border-[#F8D2D9]">
                  <Sparkles size={13} />
                </div>
                <h3 className="font-mono font-bold tracking-wider text-xs uppercase text-[#302535]">
                  Connect &amp; Socials
                </h3>
              </div>

              <p className="text-xs text-[#756875] leading-relaxed mb-4 max-w-sm">
                Feel free to connect on GitHub, LinkedIn, or reach out directly for collaborations.
              </p>

              <div className="flex items-center gap-3" role="list" aria-label="Social profiles">
                <SocialCard
                  href="https://github.com/pohh09"
                  icon={<FaGithub size={18} />}
                  name="GitHub"
                  label="GitHub Profile"
                  hoverColor="hover:border-[#302535] hover:bg-[#302535] hover:text-white hover:shadow-[0_8px_20px_rgba(48,37,53,0.25)]"
                />
                <SocialCard
                  href="https://www.linkedin.com/in/pooja-daki/"
                  icon={<FaLinkedin size={18} />}
                  name="LinkedIn"
                  label="LinkedIn Profile"
                  hoverColor="hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_8px_20px_rgba(10,102,194,0.25)]"
                />
                <SocialCard
                  href="mailto:poojadaki09@gmail.com"
                  icon={<Mail size={18} />}
                  name="Email"
                  label="Send an Email"
                  hoverColor="hover:border-[#E85D8B] hover:bg-[#E85D8B] hover:text-white hover:shadow-[0_8px_20px_rgba(232,93,139,0.35)]"
                />
              </div>
            </div>

          </motion.div>

          <div className="mt-10 sm:mt-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-[#F0DCE3] pt-5 text-center sm:text-left">
            <p className="flex flex-wrap items-center justify-center sm:justify-start gap-1 text-[11px] sm:text-xs text-[#756875] font-normal">
              <span>© {year} Pooja Daki • Built with</span>
              <span className="font-semibold text-[#302535]">Next.js 15</span>,
              <span className="font-semibold text-[#302535]">TypeScript</span> &amp;
              <span className="font-semibold text-[#302535]">Tailwind CSS</span>.
            </p>

            <button
              onClick={scrollToTop}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border-2 border-[#F0DCE3] bg-white px-4 py-1.5 text-xs font-bold text-[#302535] shadow-2xs transition-all duration-300 hover:border-[#F29AB2] hover:text-[#E85D8B] hover:bg-[#FFF5F7] hover:shadow-xs cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E85D8B]"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} className="text-[#E85D8B] transition-transform duration-300 group-hover:-translate-y-0.5" />
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

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 z-20 whitespace-nowrap rounded-md bg-[#302535] px-2 py-0.5 text-[10px] font-mono font-bold text-white opacity-0 shadow-md transition-all duration-200 group-hover/btn:opacity-100 group-hover/btn:-translate-y-1"
      >
        {name} ↗
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#302535]" />
      </span>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#F0DCE3] bg-white text-[#302535] shadow-2xs transition-all duration-200 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E85D8B] ${hoverColor}`}
      >
        <span className="transition-transform duration-200 group-hover/btn:scale-110">
          {icon}
        </span>
      </a>
    </div>
  );
}