"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home",     href: "#home" },
  { name: "About",    href: "#about" },
  { name: "Skills",   href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [discoveredCount, setDiscoveredCount] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    clickCountRef.current += 1;

    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 1500);

    if (clickCountRef.current >= 3) {
      e.preventDefault();
      clickCountRef.current = 0;
      setEasterEggActive(true);
      setDiscoveredCount((prev) => prev + 1);

      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setEasterEggActive(false);
      }, 2200);
    }
  };

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    let lastScrolled = false;
    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(`#${e.target.id}`);
          }
        });
      },
      { threshold: 0.25 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-2.5 sm:top-4 z-50 mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1500px] select-none">
      <div
        ref={navRef}
        className={`
          relative transition-all duration-300
          ${open
            ? "rounded-[24px] sm:rounded-[28px] border border-[#F0DCE3] bg-white/95 shadow-[0_16px_40px_-10px_rgba(232,93,139,0.18)] backdrop-blur-2xl px-3.5 sm:px-4 py-2.5 sm:py-3"
            : scrolled
              ? "rounded-full border border-[#F0DCE3] bg-white/90 shadow-[0_10px_30px_-10px_rgba(232,93,139,0.12)] backdrop-blur-xl py-1.5 px-3.5 sm:px-5 -translate-y-0.5"
              : "rounded-full border border-[#F0DCE3] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl py-1.5 sm:py-2 px-3.5 sm:px-5 shadow-[0_8px_24px_-8px_rgba(232,93,139,0.08)]"
          }
        `}
      >

        {/* Easter Egg Floating Message */}
        <AnimatePresence>
          {easterEggActive && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-12 sm:top-14 left-2 sm:left-4 z-50 pointer-events-none flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#F8D2D9] text-[#E85D8B] text-xs font-mono font-bold shadow-[0_8px_20px_rgba(232,93,139,0.22)] backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
              <span>{discoveredCount > 1 ? "Okay, you found it. 👀" : "You found something. ✦"}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 flex h-9 sm:h-11 items-center justify-between">

          <div className="flex items-center justify-start min-w-0">
            <a
              href="#home"
              onClick={(e) => {
                handleLogoClick(e);
                if (open) setOpen(false);
              }}
              className="group relative flex items-center gap-2 sm:gap-2.5 cursor-pointer"
            >

              {/* Sparkle bursts when Easter Egg is active */}
              {easterEggActive && (
                <>
                  <span className="pointer-events-none absolute -top-2 -left-1 text-[10px] text-[#E85D8B] animate-bounce">✦</span>
                  <span className="pointer-events-none absolute -bottom-1 -right-2 text-[10px] text-[#B9A1E8] animate-pulse">★</span>
                  <span className="pointer-events-none absolute -top-2 right-1 text-[10px] text-[#8DDDE5] animate-ping">✨</span>
                </>
              )}

              <motion.div
                animate={easterEggActive ? { scale: [1, 1.15, 1], rotate: [0, 6, -6, 0] } : {}}
                transition={{ duration: 0.45 }}
                className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#E85D8B] to-[#F29AB2] text-white font-bold text-[11px] sm:text-xs shadow-[0_3px_10px_rgba(232,93,139,0.3)] transition-transform duration-200 group-hover:scale-105"
              >
                PD
              </motion.div>

              <div className="flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-1 leading-tight">
                  <motion.span
                    animate={easterEggActive ? { scale: [1, 1.08, 1] } : {}}
                    transition={{ duration: 0.35 }}
                    className="text-sm sm:text-base font-bold tracking-tight text-[#302535] font-kalam truncate"
                  >
                    Pooja Daki
                  </motion.span>
                </div>
                <span className="text-[7.5px] sm:text-[9px] font-mono font-extrabold uppercase tracking-wider sm:tracking-widest text-[#E85D8B] leading-none truncate">
                  Full Stack Dev
                </span>
              </div>
            </a>
          </div>

          <nav className="hidden items-center justify-center gap-1 md:flex">
            {navLinks.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative rounded-full px-3 py-1 text-xs font-bold tracking-wide transition-colors duration-200"
                >
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? "text-[#E85D8B] font-extrabold" : "text-[#756875] group-hover:text-[#E85D8B]"
                    }`}
                  >
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-[#FCE8E8] border border-[#F8D2D9]"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-1.5 sm:gap-2.5 shrink-0">

            {[
              { href: "https://github.com/pohh09", Icon: FaGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/pooja-daki/", Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full border border-[#EADDE3] bg-white text-[#756875] transition-all hover:bg-[#FCE8E8] hover:border-[#F8D2D9] hover:text-[#E85D8B] hover:-translate-y-0.5 hover:scale-105 shadow-2xs"
              >
                <Icon size={13} />
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#E85D8B] to-[#F29AB2] hover:from-[#D44775] hover:to-[#E85D8B] px-2.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold text-white transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(232,93,139,0.28)] active:translate-y-0"
            >
              <span className="hidden xs:inline">Let&apos;s Connect</span>
              <span className="xs:hidden">Connect</span>
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#F0DCE3] bg-[#FCE8E8] text-[#302535] md:hidden transition-transform active:scale-90"
            >
              {open ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#F0DCE3] pt-3 mt-2 md:hidden"
            >
              <nav className="space-y-1">
                {navLinks.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`
                        flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-all
                        ${isActive
                          ? "bg-[#FCE8E8] text-[#E85D8B] border border-[#F8D2D9]"
                          : "text-[#302535] hover:bg-[#FFF5F7] hover:text-[#E85D8B]"
                        }
                      `}
                    >
                      <span>{item.name}</span>
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-[#F0DCE3] flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/pohh09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F0DCE3] bg-white text-[#302535] hover:bg-[#FCE8E8] transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub size={14} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pooja-daki/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F0DCE3] bg-white text-[#302535] hover:bg-[#FCE8E8] transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin size={14} />
                    </a>
                  </div>

                  <span className="text-xs font-kalam font-bold text-[#E85D8B]">
                    Available for Opportunities ✨
                  </span>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}