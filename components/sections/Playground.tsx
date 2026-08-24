"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, PanInfo } from "framer-motion";
import {
  Sparkles,
  MousePointer2,
  Waves,
  Eye,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Box,
  Compass,
  Play,
  Pause,
  RotateCcw,
  Hand
} from "lucide-react";
import { gsap } from "@/lib/animations/gsapSetup";

/* Helper hook to detect touch / coarse pointer */
function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch, { passive: true });
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  return isTouch;
}

/* =========================================================================
   1. EXPERIMENT: Magnetic Button (Desktop Mouse + Mobile Touch/Tap)
   ========================================================================= */
function MagneticButtonDemo({ isTouch }: { isTouch: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [distance, setDistance] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 20, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const textX = useTransform(springX, (val) => val * 0.45);
  const textY = useTransform(springY, (val) => val * 0.45);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const dist = Math.round(Math.sqrt(dx * dx + dy * dy));
    setDistance(dist);

    const maxDisplacement = 42;
    const boundedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, dx * 0.42));
    const boundedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, dy * 0.42));

    x.set(boundedX);
    y.set(boundedY);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    setIsHovered(false);
    setDistance(0);
    x.set(0);
    y.set(0);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
    setDistance(35);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const touch = e.touches[0];
    const dx = touch.clientX - centerX;
    const dy = touch.clientY - centerY;
    const dist = Math.round(Math.sqrt(dx * dx + dy * dy));
    setDistance(dist);

    const maxDisplacement = 40;
    const boundedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, dx * 0.4));
    const boundedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, dy * 0.4));

    x.set(boundedX);
    y.set(boundedY);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    setDistance(0);
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1600);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => !isTouch && setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FFF5F7] border border-[#F0DCE3] flex flex-col items-center justify-center overflow-hidden select-none touch-none cursor-pointer"
    >
      {/* Decorative magnetic grid & ambient rings */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(#E85D8B_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="pointer-events-none absolute h-60 w-60 rounded-full border border-dashed border-[#F8D2D9]/70 animate-pulse" />
      <div className="pointer-events-none absolute h-40 w-40 rounded-full border border-[#F8D2D9]/50" />

      {/* Top telemetry */}
      <div className="absolute top-3 left-4 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${isHovered || clicked ? "bg-[#E85D8B] animate-ping" : "bg-[#C4B5C7]"}`} />
        <span className="text-[11px] font-mono text-[#756875]">
          {isTouch
            ? (clicked ? "Spring Recoil Active ✨" : isHovered ? `Touch Distance: ${distance}px` : "Tap or Drag anywhere")
            : (isHovered ? `Magnetic Pull: ${distance}px` : "Magnetic Field Ready")
          }
        </span>
      </div>

      <div className="absolute top-3 right-4 text-[10px] font-mono text-[#A396A3] hidden xs:block">
        physics: spring(260, 20)
      </div>

      <motion.div
        style={{ x: springX, y: springY }}
        animate={!isHovered && !clicked ? { y: [0, -4, 0] } : {}}
        transition={!isHovered && !clicked ? { repeat: Infinity, duration: 3.5, ease: "easeInOut" } : {}}
        className="relative z-10"
      >
        <motion.button
          type="button"
          onClick={handleClick}
          whileTap={{ scale: 0.92 }}
          className={`
            relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-md transition-colors duration-200 cursor-pointer min-h-[52px]
            ${clicked
              ? "bg-[#2FB86A] text-white shadow-[0_10px_30px_rgba(47,184,106,0.4)]"
              : isHovered
                ? "bg-[#E85D8B] text-white shadow-[0_14px_35px_rgba(232,93,139,0.45)]"
                : "bg-white text-[#302535] border-2 border-[#F0DCE3] shadow-[0_6px_20px_rgba(232,93,139,0.1)]"
            }
          `}
        >
          <motion.span
            style={{ x: textX, y: textY }}
            className="inline-flex items-center gap-2.5"
          >
            {clicked ? (
              <>
                <Sparkles size={16} className="animate-spin" />
                <span className="font-kalam text-base sm:text-lg">Magnetic Snap! ✨</span>
              </>
            ) : (
              <>
                {isTouch ? (
                  <Hand size={16} className={isHovered ? "text-white" : "text-[#E85D8B] animate-bounce"} />
                ) : (
                  <MousePointer2 size={15} className={isHovered ? "text-white" : "text-[#E85D8B]"} />
                )}
                <span className="font-sans font-extrabold">
                  {isTouch
                    ? (isHovered ? "Release to Recoil" : "Tap & Pull Button")
                    : (isHovered ? "Release to Snap Back" : "Hover & Pull Me")
                  }
                </span>
                <span className="text-xs font-mono opacity-80">✦</span>
              </>
            )}
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Bottom control hint */}
      <div className="absolute bottom-3 text-center px-4">
        <span className="text-[11px] font-mono text-[#A396A3]">
          {isTouch
            ? "Tap or drag across stage &bull; button smoothly springs back on release"
            : "Moves smoothly with cursor proximity &bull; click for impulse snap"}
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   2. EXPERIMENT: Interactive Text Reveal & Distortion
   ========================================================================= */
const revealWords = [
  { word: "Fluid", note: "Motion Physics", color: "#E85D8B", desc: "Spring kinematics & dampening" },
  { word: "Design", note: "Figma Spec", color: "#B9A1E8", desc: "Design tokens & auto layout" },
  { word: "Code", note: "Next.js & TS", color: "#2BAAB8", desc: "Clean, type-safe architecture" },
  { word: "Craft", note: "Micro UX", color: "#FAD074", desc: "Attention to subtle details" },
];

function TextRevealDemo({ isTouch }: { isTouch: boolean }) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [lensPos, setLensPos] = useState<{ x: number; y: number } | null>(null);
  const [mode, setMode] = useState<"lens" | "distort">("lens");
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-cycle for touch when idle so mobile is never static
  useEffect(() => {
    if (!isTouch) return;
    const interval = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % revealWords.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isTouch]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setLensPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleWordTap = (idx: number) => {
    if (selectedIdx === idx) {
      // Re-trigger animation
      setSelectedIdx(-1);
      setTimeout(() => setSelectedIdx(idx), 50);
    } else {
      setSelectedIdx(idx);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => !isTouch && setLensPos(null)}
      className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FAF7FE] border border-[#F0DCE3] flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden select-none cursor-pointer"
    >
      {/* Interactive lens aura on desktop or active word aura on mobile */}
      {lensPos && (
        <div
          className="pointer-events-none absolute w-48 h-48 rounded-full bg-gradient-to-tr from-[#E85D8B]/20 via-[#B9A1E8]/25 to-[#8DDDE5]/20 blur-3xl transition-all duration-75"
          style={{
            left: lensPos.x - 96,
            top: lensPos.y - 96,
          }}
        />
      )}

      {/* Top telemetry & mode switch */}
      <div className="absolute top-3 left-4 flex items-center gap-2">
        <Eye size={13} className="text-[#B9A1E8]" />
        <span className="text-[11px] font-mono text-[#756875]">
          {selectedIdx >= 0 ? `Revealed: ${revealWords[selectedIdx].note}` : "Typographic Lens"}
        </span>
      </div>

      <div className="absolute top-3 right-4 flex items-center gap-1.5 bg-white border border-[#F0DCE3] p-0.5 rounded-full shadow-2xs">
        <button
          type="button"
          onClick={() => setMode("lens")}
          className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer min-h-[32px] flex items-center ${
            mode === "lens" ? "bg-[#E85D8B] text-white" : "text-[#756875] hover:text-[#302535]"
          }`}
        >
          Lens
        </button>
        <button
          type="button"
          onClick={() => setMode("distort")}
          className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer min-h-[32px] flex items-center ${
            mode === "distort" ? "bg-[#E85D8B] text-white" : "text-[#756875] hover:text-[#302535]"
          }`}
        >
          Distort
        </button>
      </div>

      {/* Main interactive words */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-lg text-center my-auto">
        {revealWords.map((item, idx) => {
          const isSelected = selectedIdx === idx;

          return (
            <motion.div
              key={item.word}
              onClick={() => handleWordTap(idx)}
              onMouseEnter={() => !isTouch && setSelectedIdx(idx)}
              className="relative group px-3 py-1.5 rounded-2xl transition-all duration-200 cursor-pointer min-h-[44px] flex items-center"
              animate={
                isSelected
                  ? mode === "distort"
                    ? { y: -8, scale: 1.12, rotate: idx % 2 === 0 ? 3 : -3 }
                    : { y: -5, scale: 1.08 }
                  : { y: 0, scale: 1, rotate: 0 }
              }
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
            >
              <span
                className={`
                  text-3xl sm:text-4xl md:text-5xl font-bold font-kalam tracking-tight transition-colors duration-200 block
                  ${isSelected ? "text-[#E85D8B]" : "text-[#302535] group-hover:text-[#B9A1E8]"}
                `}
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                {item.word}
              </span>

              {/* Animated underline */}
              <motion.span
                className="absolute bottom-0 left-2 right-2 h-1 rounded-full"
                style={{ backgroundColor: item.color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isSelected ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />

              {/* Detail popover on active */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.88 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.16 }}
                  className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-[#302535] text-white text-[10px] font-mono font-bold shadow-md pointer-events-none flex items-center gap-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#82D9A7]" />
                  <span>{item.note}</span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic descriptor note */}
      <div className="relative z-10 mt-2 px-4 py-1.5 rounded-full bg-white/85 border border-[#F0DCE3] backdrop-blur-xs text-xs font-sans text-[#756875] text-center max-w-sm">
        {selectedIdx >= 0 ? (
          <span className="font-medium text-[#302535]">
            ✦ {revealWords[selectedIdx].desc}
          </span>
        ) : (
          <span>Tap any word to trigger interactive reveal &amp; morphing</span>
        )}
      </div>

      <div className="absolute bottom-3 text-[10px] font-mono text-[#A396A3]">
        {isTouch ? "Tap words to reveal details &bull; auto-cycles when idle" : "Hover & glide cursor &bull; multi-layer inspection"}
      </div>
    </div>
  );
}

/* =========================================================================
   3. EXPERIMENT: Liquid Gradient (Desktop Cursor + Mobile Touch + Idle Float)
   ========================================================================= */
function LiquidGradientDemo({ isTouch }: { isTouch: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [colorSchemeIdx, setColorSchemeIdx] = useState(0);
  const [pulseCount, setPulseCount] = useState(0);
  const idleAnimRef = useRef<number | null>(null);

  const palettes = [
    {
      name: "Pastel Glow",
      blob1: "#E85D8B",
      blob2: "#B9A1E8",
      blob3: "#8DDDE5",
      blob4: "#FAD074",
    },
    {
      name: "Cyber Orchid",
      blob1: "#9D80E4",
      blob2: "#E85D8B",
      blob3: "#82D9A7",
      blob4: "#8DDDE5",
    },
    {
      name: "Cotton Blush",
      blob1: "#F29AB2",
      blob2: "#8DDDE5",
      blob3: "#B9A1E8",
      blob4: "#FCE8E8",
    },
  ];

  const currentPalette = palettes[colorSchemeIdx];

  // Autonomous smooth idle float when user is not touching/moving
  useEffect(() => {
    let t = 0;
    const floatLoop = () => {
      if (!isInteracting) {
        t += 0.015;
        // Lissajous curve for organic fluid motion
        const autoX = 50 + Math.sin(t) * 28;
        const autoY = 50 + Math.cos(t * 0.8) * 24;
        setCoords({
          x: Math.round(autoX),
          y: Math.round(autoY),
        });
      }
      idleAnimRef.current = requestAnimationFrame(floatLoop);
    };

    idleAnimRef.current = requestAnimationFrame(floatLoop);
    return () => {
      if (idleAnimRef.current) cancelAnimationFrame(idleAnimRef.current);
    };
  }, [isInteracting]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !containerRef.current) return;
    setIsInteracting(true);
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const yPct = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    setCoords({
      x: Math.max(8, Math.min(92, xPct)),
      y: Math.max(8, Math.min(92, yPct)),
    });
  }, [isTouch]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    setIsInteracting(true);
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const xPct = Math.round(((touch.clientX - rect.left) / rect.width) * 100);
    const yPct = Math.round(((touch.clientY - rect.top) / rect.height) * 100);

    setCoords({
      x: Math.max(8, Math.min(92, xPct)),
      y: Math.max(8, Math.min(92, yPct)),
    });
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Resume autonomous gentle motion after 1 second of inactivity
    setTimeout(() => setIsInteracting(false), 1000);
  }, []);

  const handleStageClick = () => {
    setPulseCount((c) => c + 1);
  };

  const cyclePalette = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setColorSchemeIdx((prev) => (prev + 1) % palettes.length);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => !isTouch && setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleStageClick}
      className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-[#FFFDFD] border border-[#F0DCE3] flex items-center justify-center overflow-hidden select-none cursor-pointer touch-none"
    >
      {/* Top telemetry */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <Waves size={13} className="text-[#E85D8B] animate-pulse" />
        <span className="text-[11px] font-mono text-[#756875]">
          Fluid Mesh: X: {coords.x}% &bull; Y: {coords.y}% {!isInteracting && "(Autonomous Float)"}
        </span>
      </div>

      <div className="absolute top-3 right-4 z-20">
        <button
          type="button"
          onClick={cyclePalette}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#F0DCE3] text-[#E85D8B] text-xs font-mono font-bold shadow-2xs hover:bg-[#FFF5F7] transition-all cursor-pointer backdrop-blur-xs min-h-[36px]"
        >
          <RefreshCw size={11} />
          <span>{currentPalette.name}</span>
        </button>
      </div>

      {/* Fluid organic blurred gradient mesh */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none filter blur-[38px] sm:blur-[48px] opacity-85">
        {/* Blob 1 — Direct Follower */}
        <div
          className="absolute w-48 h-48 rounded-full transition-all duration-300 ease-out"
          style={{
            backgroundColor: currentPalette.blob1,
            left: `calc(${coords.x}% - 96px)`,
            top: `calc(${coords.y}% - 96px)`,
            opacity: 0.8,
          }}
        />

        {/* Blob 2 — Counterpoint */}
        <div
          className="absolute w-56 h-56 rounded-full transition-all duration-500 ease-out"
          style={{
            backgroundColor: currentPalette.blob2,
            right: `calc(${coords.x * 0.75}% - 112px)`,
            bottom: `calc(${coords.y * 0.75}% - 112px)`,
            opacity: 0.75,
          }}
        />

        {/* Blob 3 — Satellite */}
        <div
          className="absolute w-40 h-40 rounded-full transition-all duration-700 ease-out"
          style={{
            backgroundColor: currentPalette.blob3,
            left: `calc(45% + ${(coords.x - 50) * 0.35}%)`,
            top: `calc(40% + ${(coords.y - 50) * 0.35}%)`,
            opacity: 0.7,
          }}
        />

        {/* Blob 4 — Warm accent */}
        <div
          className="absolute w-36 h-36 rounded-full transition-all duration-700 ease-out"
          style={{
            backgroundColor: currentPalette.blob4,
            left: `calc(60% - ${(coords.x - 50) * 0.25}%)`,
            top: `calc(60% - ${(coords.y - 50) * 0.25}%)`,
            opacity: 0.65,
          }}
        />
      </div>

      {/* Frosted center display */}
      <motion.div
        key={`pulse-${pulseCount}`}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative z-10 p-5 rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 shadow-[0_12px_32px_rgba(232,93,139,0.14)] flex flex-col items-center gap-1.5 max-w-[260px] sm:max-w-xs text-center pointer-events-none"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#E85D8B] to-[#B9A1E8] text-white shadow-xs">
          <Waves size={16} />
        </div>
        <h4 className="text-sm font-bold font-kalam text-[#302535] leading-tight">
          Liquid Gradient Mesh
        </h4>
        <p className="text-xs text-[#756875] font-sans leading-relaxed">
          {isTouch ? "Drag your finger to fluidly guide the mesh &bull; tap for pulse" : "Follows cursor position smoothly &bull; click for ripple pulse"}
        </p>
      </motion.div>

      <div className="absolute bottom-3 text-[10px] font-mono text-[#756875] z-20">
        GPU-accelerated compositing &bull; 60 FPS
      </div>
    </div>
  );
}

/* =========================================================================
   4. EXPERIMENT: 3D Parallax Card (Desktop Mouse + Mobile Touch + Idle Float)
   ========================================================================= */
function ParallaxCardDemo({ isTouch }: { isTouch: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 20 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const glareX = useTransform(smoothRotateY, [-20, 20], ["0%", "100%"]);
  const glareY = useTransform(smoothRotateX, [20, -20], ["0%", "100%"]);

  // Mobile idle floating tilt loop when untouched
  const idleTiltRef = useRef<number | null>(null);
  useEffect(() => {
    let t = 0;
    const idleLoop = () => {
      if (!isHovered && !isTouching) {
        t += 0.02;
        // Subtle autonomous 3D wobble
        rotateX.set(Math.sin(t) * 8);
        rotateY.set(Math.cos(t * 0.8) * 10);
      }
      idleTiltRef.current = requestAnimationFrame(idleLoop);
    };

    idleTiltRef.current = requestAnimationFrame(idleLoop);
    return () => {
      if (idleTiltRef.current) cancelAnimationFrame(idleTiltRef.current);
    };
  }, [isHovered, isTouching, rotateX, rotateY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    setIsHovered(true);
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxRotation = 18;
    rotateX.set(-(mouseY / (rect.height / 2)) * maxRotation);
    rotateY.set((mouseX / (rect.width / 2)) * maxRotation);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || !e.touches[0]) return;
    setIsTouching(true);
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const touch = e.touches[0];
    const touchX = touch.clientX - centerX;
    const touchY = touch.clientY - centerY;

    const maxRotation = 20;
    rotateX.set(-(touchY / (rect.height / 2)) * maxRotation);
    rotateY.set((touchX / (rect.width / 2)) * maxRotation);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouching(false), 1200);
  };

  return (
    <div
      onMouseEnter={() => !isTouch && setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => !isTouch && setIsHovered(false)}
      onTouchStart={() => setIsTouching(true)}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FAF7FE] border border-[#F0DCE3] flex items-center justify-center p-4 overflow-hidden [perspective:1000px] select-none touch-none cursor-grab active:cursor-grabbing"
    >
      <div className="absolute top-3 left-4 flex items-center gap-2">
        <Box size={13} className="text-[#E85D8B]" />
        <span className="text-[11px] font-mono text-[#756875]">
          {isTouch ? (isTouching ? "Touch 3D Active" : "Autonomous 3D Float") : (isHovered ? "3D Perspective Active" : "Tilt Card in 3D Space")}
        </span>
      </div>

      <div className="absolute top-3 right-4">
        <button
          type="button"
          onClick={() => setFlipped(!flipped)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#F0DCE3] text-[#302535] text-xs font-mono font-bold shadow-2xs hover:text-[#E85D8B] hover:border-[#F29AB2] transition-colors cursor-pointer min-h-[36px]"
        >
          <RotateCcw size={10} />
          <span>Flip 3D Spec</span>
        </button>
      </div>

      {/* 3D Multi-layer Card */}
      <motion.div
        ref={cardRef}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateZ: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[280px] sm:w-[320px] h-[210px] sm:h-[230px] rounded-[24px] bg-gradient-to-br from-white via-[#FFF9FA] to-[#FAF6FE] border-2 border-[#F0DCE3] shadow-[0_20px_45px_-12px_rgba(232,93,139,0.22)] p-5 flex flex-col justify-between overflow-hidden"
      >
        {/* Holographic Specular Glare */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[24px] opacity-40 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.95), transparent 70%)`,
          }}
        />

        {/* Top Floating Badge */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#FCE8E8] text-[#E85D8B] font-bold text-xs shadow-2xs">
              ✦
            </span>
            <span className="text-xs font-mono font-bold text-[#302535]">
              UI_Component_3D
            </span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full bg-[#EDFBF3] border border-[#CEF4DE] text-[#2FB86A] text-[10px] font-mono font-bold">
            Live 3D Spec
          </span>
        </div>

        {/* Center Content (High Z offset) */}
        <div
          style={{ transform: "translateZ(65px)" }}
          className="space-y-1"
        >
          <h4
            className="text-lg sm:text-xl font-bold text-[#302535] font-kalam leading-tight"
            style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
          >
            Multi-Layer Parallax
          </h4>
          <p className="text-xs text-[#756875] font-sans">
            Independent depth planes with dynamic specular glare &amp; spring inertia.
          </p>
        </div>

        {/* Bottom Metadata */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="pt-2 border-t border-[#F0DCE3] flex items-center justify-between text-[10px] font-mono text-[#A396A3]"
        >
          <span>CSS 3D &bull; Preserve-3D</span>
          <span className="text-[#E85D8B] font-bold">depth: 65px ↗</span>
        </div>
      </motion.div>

      <div className="absolute bottom-3 text-[10px] font-mono text-[#A396A3]">
        {isTouch ? "Drag finger to tilt in 3D &bull; auto-floats with depth" : "Move pointer around card &bull; 3D perspective distortion"}
      </div>
    </div>
  );
}

/* =========================================================================
   5. EXPERIMENT: Scroll-based Motion Simulator (Touch Swipable + Slider)
   ========================================================================= */
const scrollPillars = [
  { id: 1, title: "Velocity Skew", badge: "Kinetic", color: "from-[#E85D8B] to-[#F29AB2]" },
  { id: 2, title: "Parallax Stagger", badge: "Depth", color: "from-[#B9A1E8] to-[#8DDDE5]" },
  { id: 3, title: "Magnetic Scrub", badge: "Fluid", color: "from-[#8DDDE5] to-[#82D9A7]" },
  { id: 4, title: "Rotate Velocity", badge: "Physics", color: "from-[#FAD074] to-[#E85D8B]" },
];

function ScrollMotionDemo({ isTouch }: { isTouch: boolean }) {
  const [scrollProgress, setScrollProgress] = useState(0.35);
  const [isPlaying, setIsPlaying] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  // Auto-drive loop
  useEffect(() => {
    if (!isPlaying) return;

    let dir = 1;
    const step = () => {
      setScrollProgress((prev) => {
        let next = prev + 0.005 * dir;
        if (next >= 1) {
          next = 1;
          dir = -1;
        } else if (next <= 0) {
          next = 0;
          dir = 1;
        }
        return next;
      });
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPlaying(false);
    setScrollProgress(parseFloat(e.target.value));
  };

  // Swiping on the cards directly updates progress on touch devices
  const handleDrag = (_: any, info: PanInfo) => {
    setIsPlaying(false);
    const deltaProgress = info.delta.x * -0.003;
    setScrollProgress((prev) => Math.max(0, Math.min(1, prev + deltaProgress)));
  };

  const translateX = (scrollProgress - 0.5) * -180;
  const rotation = scrollProgress * 360;
  const skewX = (scrollProgress - 0.5) * -14;
  const progressPercent = Math.round(scrollProgress * 100);

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FFF8F5] border border-[#F0DCE3] flex flex-col justify-between p-4 sm:p-6 overflow-hidden select-none">
      {/* Top telemetry & controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass size={13} className="text-[#E85D8B]" />
          <span className="text-[11px] font-mono text-[#756875]">
            Scroll Velocity: {progressPercent}%
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all shadow-2xs cursor-pointer min-h-[36px] ${
            isPlaying
              ? "bg-[#E85D8B] text-white shadow-xs"
              : "bg-white border border-[#F0DCE3] text-[#302535] hover:text-[#E85D8B]"
          }`}
        >
          {isPlaying ? <Pause size={11} /> : <Play size={11} />}
          <span>{isPlaying ? "Pause Driver" : "Auto Drive"}</span>
        </button>
      </div>

      {/* Interactive Horizontal Motion Track (Swipable on mobile) */}
      <div className="relative w-full py-2 sm:py-4 flex items-center justify-center overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleDrag}
          style={{
            x: translateX,
            skewX: skewX,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="flex items-center gap-3 sm:gap-4 shrink-0 cursor-grab active:cursor-grabbing"
        >
          {scrollPillars.map((item, idx) => (
            <div
              key={item.id}
              className="w-32 sm:w-44 p-3 sm:p-3.5 rounded-2xl bg-white border-2 border-[#F0DCE3] shadow-sm flex flex-col justify-between gap-2 touch-none select-none"
              style={{
                transform: `translateY(${Math.sin((scrollProgress + idx * 0.25) * Math.PI * 2) * 12}px)`,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#A396A3]">0{item.id}</span>
                <span className="px-2 py-0.5 rounded-full bg-[#FFF5F7] border border-[#F8D2D9] text-[9px] font-mono font-bold text-[#E85D8B]">
                  {item.badge}
                </span>
              </div>
              <h5 className="text-xs sm:text-sm font-bold font-kalam text-[#302535] leading-tight">
                {item.title}
              </h5>
              <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${item.color}`} />
            </div>
          ))}
        </motion.div>

        {/* Rotating kinetic stamp */}
        <motion.div
          style={{ rotate: rotation }}
          className="pointer-events-none absolute right-2 sm:right-8 h-14 w-14 sm:h-20 sm:w-20 rounded-full border-2 border-dashed border-[#E85D8B]/30 flex items-center justify-center opacity-60"
        >
          <span className="text-[8px] sm:text-[9px] font-mono font-bold text-[#E85D8B] text-center leading-none">
            ✦ SCROLL ✦
          </span>
        </motion.div>
      </div>

      {/* Interactive Scrub Track / Slider */}
      <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-[#F0DCE3]">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#756875]">
          <span>{isTouch ? "Touch-swipe cards or scrub slider &rarr;" : "Interactive Scrub Bar &rarr;"}</span>
          <span className="font-bold text-[#E85D8B]">{progressPercent}%</span>
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.005"
          value={scrollProgress}
          onChange={handleSliderChange}
          className="w-full h-3 rounded-full appearance-none bg-[#FCE8E8] accent-[#E85D8B] cursor-pointer touch-none"
        />

        <div className="flex items-center justify-between text-[10px] font-mono text-[#A396A3]">
          <span>0.00 Initial</span>
          <span>1.00 Terminal</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   LAB EXPERIMENTS DEFINITION
   ========================================================================= */
const experiments = [
  {
    id: "magnetic",
    num: "01",
    label: "Magnetic",
    title: "Magnetic Button",
    tag: "Spring Physics",
    desc: "A button that subtly glides toward your cursor on desktop, or springs & snaps on mobile touch/tap.",
    instructionDesktop: "Move your cursor around the stage to test magnetic spring attraction & snap recoil",
    instructionMobile: "Tap or drag across the stage to test spring momentum & release recoil",
    component: MagneticButtonDemo,
  },
  {
    id: "text",
    num: "02",
    label: "Text",
    title: "Interactive Text Reveal",
    tag: "Typography",
    desc: "Hover on desktop or tap on mobile to reveal concealed layers, spotlight glow, and spring letter morphing.",
    instructionDesktop: "Hover & scrub across words to distort & reveal typography layers",
    instructionMobile: "Tap words to reveal details & cycle morphing layers",
    component: TextRevealDemo,
  },
  {
    id: "liquid",
    num: "03",
    label: "Liquid",
    title: "Liquid Gradient Mesh",
    tag: "Fluid Mesh",
    desc: "Soft pastel gradient mesh that tracks pointer on desktop, follows touch on mobile, and floats autonomously.",
    instructionDesktop: "Move pointer across the card to dynamically morph the organic fluid mesh",
    instructionMobile: "Drag your finger to fluidly guide the mesh, or enjoy the autonomous float",
    component: LiquidGradientDemo,
  },
  {
    id: "parallax3d",
    num: "04",
    label: "3D Parallax",
    title: "3D Parallax Tilt Card",
    tag: "3D Perspective",
    desc: "Multi-depth physical card with dynamic specular glare, perspective tilt, and touch swiping.",
    instructionDesktop: "Move your pointer across the card to tilt multi-depth 3D layers",
    instructionMobile: "Drag across the card to tilt in 3D, or watch the gentle floating perspective",
    component: ParallaxCardDemo,
  },
  {
    id: "scroll",
    num: "05",
    label: "Scroll",
    title: "Scroll-Based Motion",
    tag: "Kinetic Driver",
    desc: "Interactive scrub simulator with velocity skew, parallax stagger, and 360° rotational momentum.",
    instructionDesktop: "Scrub the scroll slider or toggle Auto Drive to test velocity motion physics",
    instructionMobile: "Swipe cards directly, scrub the bar, or toggle Auto Drive",
    component: ScrollMotionDemo,
  },
];

/* =========================================================================
   MAIN PLAYGROUND COMPONENT
   ========================================================================= */
export default function Playground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isTouch = useIsTouchDevice();
  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const labConsoleRef = useRef<HTMLDivElement>(null);

  const activeExp = experiments[activeIndex] || experiments[0];
  const ActiveComponent = activeExp.component;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : experiments.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < experiments.length - 1 ? prev + 1 : 0));
  }, []);

  // Mobile horizontal swipe handler between experiments
  const handleStageSwipe = (_: any, info: PanInfo) => {
    if (info.offset.x < -60) {
      handleNext();
    } else if (info.offset.x > 60) {
      handlePrev();
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

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
        tagRef.current,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45 }
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.2"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          labConsoleRef.current,
          { opacity: 0, y: 26, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="playground"
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24 bg-[#FFF8F5] scroll-mt-24"
    >
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none -z-10">
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-[#E85D8B]/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 h-96 w-96 rounded-full bg-[#B9A1E8]/6 blur-3xl" />
      </div>

      {/* Decorative star / sparkle doodles */}
      <div className="pointer-events-none absolute top-14 left-14 text-[#E85D8B] text-xl animate-float-slow select-none opacity-40">✦</div>
      <div className="pointer-events-none absolute top-1/2 right-12 text-[#FAD074] text-lg animate-float-slow select-none opacity-50">★</div>
      <div className="pointer-events-none absolute bottom-16 left-12 text-[#B9A1E8] text-base select-none opacity-40">✦</div>

      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-[1600px] px-1 sm:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div
            ref={tagRef}
            className="inline-flex items-center gap-2 mb-4 sm:mb-5 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] px-3.5 py-0.5 text-xs font-kalam font-bold text-[#E85D8B] shadow-2xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D8B] animate-ping" />
            <span>PLAYGROUND</span>
          </div>

          <h2
            ref={headingRef}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#302535] font-kalam leading-[1.15]"
            style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
          >
            Playground &bull;{" "}
            <span className="text-[#E85D8B] relative inline-block">
              Things I like to break.
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
            </span>
          </h2>

          <p
            ref={subtitleRef}
            className="mt-3 text-xs sm:text-sm lg:text-base text-[#756875] font-normal leading-relaxed"
          >
            Small experiments in motion, interaction &amp; frontend magic.
          </p>
        </div>

        {/* Frontend Lab Interactive Console */}
        <div
          ref={labConsoleRef}
          className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF9FA] to-[#FAF7FE] border-2 border-[#F0DCE3] p-4 sm:p-7 shadow-[0_16px_45px_-15px_rgba(232,93,139,0.14)]"
        >
          {/* Top Console Bar & Tabs Selector */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-6 border-b border-[#F0DCE3]">
            
            {/* Experiment tabs with large, touch-friendly tap targets */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
              <div className="flex items-center gap-1.5 pr-2 hidden sm:flex">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E85D8B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FAD074]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#82D9A7]" />
              </div>

              {experiments.map((exp, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`
                      relative group px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5 min-h-[38px] active:scale-95
                      ${isActive
                        ? "text-[#E85D8B] bg-[#FFF5F7] border border-[#F8D2D9] shadow-2xs ring-1 ring-[#E85D8B]/20"
                        : "text-[#756875] bg-white border border-[#EADDE3] hover:text-[#302535] hover:border-[#F29AB2]"
                      }
                    `}
                  >
                    <span className="text-[10px] text-[#E85D8B] opacity-75">{exp.num}</span>
                    <span>{exp.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Experiment Progress Indicator & Nav Buttons */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#F0DCE3] shadow-2xs min-h-[38px]">
                <span className="font-mono text-xs font-extrabold text-[#E85D8B]">{activeExp.num}</span>
                <span className="font-mono text-xs text-[#A396A3]">/</span>
                <span className="font-mono text-xs font-bold text-[#756875]">05</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous experiment"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#EADDE3] text-[#756875] hover:text-[#E85D8B] hover:border-[#F8D2D9] hover:bg-[#FFF5F7] transition-colors cursor-pointer active:scale-90 shadow-2xs"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next experiment"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#EADDE3] text-[#756875] hover:text-[#E85D8B] hover:border-[#F8D2D9] hover:bg-[#FFF5F7] transition-colors cursor-pointer active:scale-90 shadow-2xs"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>

          </div>

          {/* Active Experiment Header Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 px-1">
            <div>
              <div className="flex items-center gap-2">
                <h3
                  className="text-lg sm:text-xl font-bold font-kalam text-[#302535] leading-tight"
                  style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
                >
                  {activeExp.title}
                </h3>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E85D8B] bg-[#FCE8E8] border border-[#F8D2D9] px-2.5 py-0.5 rounded-full">
                  {activeExp.tag}
                </span>
              </div>
              <p className="text-xs text-[#756875] font-sans mt-0.5">
                {activeExp.desc}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#E85D8B] shrink-0 font-bold">
              <Sparkles size={12} className="text-[#E85D8B]" />
              <span>{isTouch ? "Touch / Swipe Stage" : "Interactive Stage"}</span>
            </div>
          </div>

          {/* Main Animated Experiment Stage with Horizontal Swipe between Tabs */}
          <motion.div
            onPanEnd={handleStageSwipe}
            className="relative w-full rounded-2xl bg-white border-2 border-[#F0DCE3] p-2 sm:p-3 shadow-inner overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 10, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.985 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <ActiveComponent isTouch={isTouch} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Console Bottom Bar with Dynamic Mobile / Desktop Instruction */}
          <div className="mt-4 pt-3 border-t border-[#F0DCE3] flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-[11px] font-mono">
            <div className="flex items-center gap-2 text-[#756875]">
              <span className="flex h-2 w-2 rounded-full bg-[#2FB86A] animate-pulse shrink-0" />
              <span className="font-bold text-[#302535]">Hint:</span>
              <span className="text-[#756875]">
                {isTouch ? activeExp.instructionMobile : activeExp.instructionDesktop}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[#A396A3]">
              <span className="hidden sm:inline">GPU Accelerated &bull; Touch Optimized</span>
              <span className="text-[#E85D8B] font-bold">0{activeIndex + 1} / 05</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
