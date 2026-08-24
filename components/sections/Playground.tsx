"use client";

import { useState, useRef, useEffect, useCallback, useId } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Sparkles,
  MousePointer2,
  Waves,
  Eye,
  Layers,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Box,
  Compass,
  Zap,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import { gsap } from "@/lib/animations/gsapSetup";

/* =========================================================================
   1. EXPERIMENT: Magnetic Button
   ========================================================================= */
function MagneticButtonDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [distance, setDistance] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 240, damping: 18, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const textX = useTransform(springX, (val) => val * 0.45);
  const textY = useTransform(springY, (val) => val * 0.45);
  const ringX = useTransform(springX, (val) => val * 0.7);
  const ringY = useTransform(springY, (val) => val * 0.7);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const dist = Math.round(Math.sqrt(dx * dx + dy * dy));
    setDistance(dist);

    const maxDisplacement = 45;
    const boundedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, dx * 0.42));
    const boundedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, dy * 0.42));

    x.set(boundedX);
    y.set(boundedY);
  };

  const handleMouseLeave = () => {
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FFF5F7] border border-[#F0DCE3] flex flex-col items-center justify-center overflow-hidden cursor-crosshair select-none"
    >
      {/* Magnetic grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(#E85D8B_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Orbit radar rings */}
      <div className="pointer-events-none absolute h-64 w-64 rounded-full border border-dashed border-[#F8D2D9]/70" />
      <div className="pointer-events-none absolute h-44 w-44 rounded-full border border-[#F8D2D9]/50" />

      {/* Top telemetry badge */}
      <div className="absolute top-3 left-4 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${isHovered ? "bg-[#E85D8B] animate-ping" : "bg-[#C4B5C7]"}`} />
        <span className="text-[11px] font-mono text-[#756875]">
          {isHovered ? `Magnetic Pull: ${distance}px` : "Magnetic Field Ready"}
        </span>
      </div>

      <div className="absolute top-3 right-4 text-[10px] font-mono text-[#A396A3] hidden xs:block">
        physics: spring(240, 18)
      </div>

      {/* Trailing ghost ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none absolute h-24 w-44 rounded-full border border-[#E85D8B]/20"
      />

      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10"
      >
        <motion.button
          type="button"
          onClick={handleClick}
          whileTap={{ scale: 0.94 }}
          className={`
            relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-md transition-colors duration-200 cursor-pointer
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
                <MousePointer2 size={15} className={isHovered ? "text-white" : "text-[#E85D8B]"} />
                <span className="font-sans font-extrabold">{isHovered ? "Release to Snap Back" : "Hover & Pull Me"}</span>
                <span className="text-xs font-mono opacity-80">✦</span>
              </>
            )}
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Bottom control note */}
      <div className="absolute bottom-3 text-center px-4">
        <span className="text-[11px] font-mono text-[#A396A3]">
          Moves smoothly with cursor proximity &bull; click for impulse response
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   2. EXPERIMENT: Interactive Text Reveal & Distortion
   ========================================================================= */
const revealWords = [
  { word: "Fluid", note: "Motion Physics", color: "#E85D8B", desc: "Spring physics" },
  { word: "Design", note: "Figma Spec", color: "#B9A1E8", desc: "Design tokens" },
  { word: "Code", note: "Next.js & TS", color: "#2BAAB8", desc: "Clean architecture" },
  { word: "Craft", note: "Micro UX", color: "#FAD074", desc: "Attention to detail" },
];

function TextRevealDemo() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [lensPos, setLensPos] = useState<{ x: number; y: number } | null>(null);
  const [mode, setMode] = useState<"lens" | "distort">("lens");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setLensPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    setLensPos(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FAF7FE] border border-[#F0DCE3] flex flex-col items-center justify-center p-6 overflow-hidden select-none cursor-text"
    >
      {/* Interactive lens aura */}
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
          {hoveredIdx !== null ? `Revealed: ${revealWords[hoveredIdx].note}` : "Typographic Lens"}
        </span>
      </div>

      <div className="absolute top-3 right-4 flex items-center gap-1.5 bg-white border border-[#F0DCE3] p-0.5 rounded-full shadow-2xs">
        <button
          type="button"
          onClick={() => setMode("lens")}
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
            mode === "lens" ? "bg-[#E85D8B] text-white" : "text-[#756875] hover:text-[#302535]"
          }`}
        >
          Lens
        </button>
        <button
          type="button"
          onClick={() => setMode("distort")}
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
            mode === "distort" ? "bg-[#E85D8B] text-white" : "text-[#756875] hover:text-[#302535]"
          }`}
        >
          Distort
        </button>
      </div>

      {/* Main interactive words */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-lg text-center my-auto">
        {revealWords.map((item, idx) => {
          const isCurrent = hoveredIdx === idx;

          return (
            <motion.div
              key={item.word}
              onMouseEnter={() => setHoveredIdx(idx)}
              className="relative group px-3 py-1.5 rounded-2xl transition-all duration-200 cursor-pointer"
              whileHover={
                mode === "distort"
                  ? { y: -8, scale: 1.12, rotate: idx % 2 === 0 ? 3 : -3 }
                  : { y: -4, scale: 1.06 }
              }
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
            >
              <span
                className={`
                  text-3xl sm:text-4xl md:text-5xl font-bold font-kalam tracking-tight transition-colors duration-200 block
                  ${isCurrent ? "text-[#E85D8B]" : "text-[#302535] group-hover:text-[#B9A1E8]"}
                `}
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                {item.word}
              </span>

              {/* Animated underline reveal */}
              <motion.span
                className="absolute bottom-0 left-2 right-2 h-1 rounded-full"
                style={{ backgroundColor: item.color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isCurrent ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />

              {/* Hover floating pill */}
              {isCurrent && (
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

      <div className="relative z-10 mt-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#F0DCE3] backdrop-blur-xs text-xs font-sans text-[#756875] text-center max-w-sm">
        {hoveredIdx !== null ? (
          <span className="font-medium text-[#302535]">
            ✦ {revealWords[hoveredIdx].desc}
          </span>
        ) : (
          <span>Hover or glide pointer across the typography to reveal details</span>
        )}
      </div>

      <div className="absolute bottom-3 text-[10px] font-mono text-[#A396A3]">
        Reactive spring typography &bull; multi-layer inspection
      </div>
    </div>
  );
}

/* =========================================================================
   3. EXPERIMENT: Liquid Gradient
   ========================================================================= */
function LiquidGradientDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [colorSchemeIdx, setColorSchemeIdx] = useState(0);
  const [pulseCount, setPulseCount] = useState(0);

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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const yPct = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    setCoords({
      x: Math.max(8, Math.min(92, xPct)),
      y: Math.max(8, Math.min(92, yPct)),
    });
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const xPct = Math.round(((touch.clientX - rect.left) / rect.width) * 100);
    const yPct = Math.round(((touch.clientY - rect.top) / rect.height) * 100);

    setCoords({
      x: Math.max(8, Math.min(92, xPct)),
      y: Math.max(8, Math.min(92, yPct)),
    });
  }, []);

  const handleStageClick = () => {
    setPulseCount((c) => c + 1);
  };

  const cyclePalette = (e: React.MouseEvent) => {
    e.stopPropagation();
    setColorSchemeIdx((prev) => (prev + 1) % palettes.length);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleStageClick}
      className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-[#FFFDFD] border border-[#F0DCE3] flex items-center justify-center overflow-hidden select-none cursor-pointer"
    >
      {/* Top telemetry */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <Waves size={13} className="text-[#E85D8B] animate-pulse" />
        <span className="text-[11px] font-mono text-[#756875]">
          Fluid Position: X: {coords.x}% &bull; Y: {coords.y}%
        </span>
      </div>

      <div className="absolute top-3 right-4 z-20">
        <button
          type="button"
          onClick={cyclePalette}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#F0DCE3] text-[#E85D8B] text-xs font-mono font-bold shadow-2xs hover:bg-[#FFF5F7] transition-all cursor-pointer backdrop-blur-xs"
        >
          <RefreshCw size={11} />
          <span>Palette: {currentPalette.name}</span>
        </button>
      </div>

      {/* Fluid organic blurred gradient mesh */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none filter blur-[40px] sm:blur-[48px] opacity-85">
        {/* Blob 1 — Direct Follower */}
        <div
          className="absolute w-48 h-48 rounded-full transition-all duration-200 ease-out"
          style={{
            backgroundColor: currentPalette.blob1,
            left: `calc(${coords.x}% - 96px)`,
            top: `calc(${coords.y}% - 96px)`,
            opacity: 0.8,
          }}
        />

        {/* Blob 2 — Complementary Counterpoint */}
        <div
          className="absolute w-56 h-56 rounded-full transition-all duration-400 ease-out"
          style={{
            backgroundColor: currentPalette.blob2,
            right: `calc(${coords.x * 0.75}% - 112px)`,
            bottom: `calc(${coords.y * 0.75}% - 112px)`,
            opacity: 0.75,
          }}
        />

        {/* Blob 3 — Orbiting satellite */}
        <div
          className="absolute w-40 h-40 rounded-full transition-all duration-600 ease-out animate-float-slow"
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

      {/* Frosted glass center display */}
      <motion.div
        key={`pulse-${pulseCount}`}
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative z-10 p-5 rounded-3xl bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_12px_32px_rgba(232,93,139,0.14)] flex flex-col items-center gap-2 max-w-xs text-center"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#E85D8B] to-[#B9A1E8] text-white shadow-xs">
          <Waves size={18} />
        </div>
        <h4 className="text-sm font-bold font-kalam text-[#302535] leading-tight">
          GPU-Accelerated Fluid Mesh
        </h4>
        <p className="text-xs text-[#756875] font-sans leading-relaxed">
          Smooth spring interpolation with organic CSS blend filters. Click to pulse ripple!
        </p>
      </motion.div>

      <div className="absolute bottom-3 text-[10px] font-mono text-[#756875] z-20">
        60 FPS &bull; hardware accelerated composite layer
      </div>
    </div>
  );
}

/* =========================================================================
   4. EXPERIMENT: 3D Parallax Card
   ========================================================================= */
function ParallaxCardDemo() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 20 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const glareX = useTransform(smoothRotateY, [-20, 20], ["0%", "100%"]);
  const glareY = useTransform(smoothRotateX, [20, -20], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxRotation = 18;
    const rX = -(mouseY / (rect.height / 2)) * maxRotation;
    const rY = (mouseX / (rect.width / 2)) * maxRotation;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FAF7FE] border border-[#F0DCE3] flex items-center justify-center p-4 overflow-hidden [perspective:1000px] select-none cursor-grab active:cursor-grabbing"
    >
      <div className="absolute top-3 left-4 flex items-center gap-2">
        <Box size={13} className="text-[#E85D8B]" />
        <span className="text-[11px] font-mono text-[#756875]">
          {isHovered ? "3D Perspective Active" : "Tilt Card in 3D Space"}
        </span>
      </div>

      <div className="absolute top-3 right-4">
        <button
          type="button"
          onClick={() => setFlipped(!flipped)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F0DCE3] text-[#302535] text-xs font-mono font-bold shadow-2xs hover:text-[#E85D8B] hover:border-[#F29AB2] transition-colors cursor-pointer"
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

        {/* Top Floating Badge (Deep Z offset) */}
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

        {/* Center Content (Deepest Z offset for strong depth illusion) */}
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
        Move pointer around card to experience 3D perspective distortion
      </div>
    </div>
  );
}

/* =========================================================================
   5. EXPERIMENT: Scroll-based Motion Simulator
   ========================================================================= */
const scrollPillars = [
  { id: 1, title: "Velocity Skew", badge: "Kinetic", color: "from-[#E85D8B] to-[#F29AB2]" },
  { id: 2, title: "Parallax Stagger", badge: "Depth", color: "from-[#B9A1E8] to-[#8DDDE5]" },
  { id: 3, title: "Magnetic Scrub", badge: "Fluid", color: "from-[#8DDDE5] to-[#82D9A7]" },
  { id: 4, title: "Rotate Velocity", badge: "Physics", color: "from-[#FAD074] to-[#E85D8B]" },
];

function ScrollMotionDemo() {
  const [scrollProgress, setScrollProgress] = useState(0.35);
  const [isPlaying, setIsPlaying] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    let dir = 1;
    const step = () => {
      setScrollProgress((prev) => {
        let next = prev + 0.006 * dir;
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

  // Calculated derived motion values
  const translateX = (scrollProgress - 0.5) * -180;
  const rotation = scrollProgress * 360;
  const skewX = (scrollProgress - 0.5) * -14;
  const progressPercent = Math.round(scrollProgress * 100);

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FFF8F5] border border-[#F0DCE3] flex flex-col justify-between p-5 sm:p-6 overflow-hidden select-none">
      {/* Top telemetry & controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass size={13} className="text-[#E85D8B]" />
          <span className="text-[11px] font-mono text-[#756875]">
            Scroll Velocity &bull; Progress: {progressPercent}%
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition-all shadow-2xs cursor-pointer ${
            isPlaying
              ? "bg-[#E85D8B] text-white shadow-xs"
              : "bg-white border border-[#F0DCE3] text-[#302535] hover:text-[#E85D8B]"
          }`}
        >
          {isPlaying ? <Pause size={11} /> : <Play size={11} />}
          <span>{isPlaying ? "Pause Driver" : "Auto Drive"}</span>
        </button>
      </div>

      {/* Interactive Horizontal Motion Track */}
      <div className="relative w-full py-4 flex items-center justify-center overflow-hidden">
        {/* Parallax moving cards */}
        <motion.div
          style={{
            x: translateX,
            skewX: skewX,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="flex items-center gap-3 sm:gap-4 shrink-0"
        >
          {scrollPillars.map((item, idx) => (
            <div
              key={item.id}
              className="w-36 sm:w-44 p-3.5 rounded-2xl bg-white border-2 border-[#F0DCE3] shadow-sm flex flex-col justify-between gap-2"
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
          className="pointer-events-none absolute right-4 sm:right-8 h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-dashed border-[#E85D8B]/30 flex items-center justify-center opacity-60"
        >
          <span className="text-[9px] font-mono font-bold text-[#E85D8B] text-center leading-none">
            ✦ SCROLL ✦
          </span>
        </motion.div>
      </div>

      {/* Interactive Scrub Track / Slider */}
      <div className="space-y-2 pt-2 border-t border-[#F0DCE3]">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#756875]">
          <span>Interactive Scrub Bar &rarr;</span>
          <span className="font-bold text-[#E85D8B]">{progressPercent}%</span>
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.005"
          value={scrollProgress}
          onChange={handleSliderChange}
          className="w-full h-2 rounded-full appearance-none bg-[#FCE8E8] accent-[#E85D8B] cursor-pointer"
        />

        <div className="flex items-center justify-between text-[10px] font-mono text-[#A396A3]">
          <span>0.00 Initial Spec</span>
          <span>1.00 Terminal Frame</span>
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
    desc: "A button that subtly glides toward your cursor with elastic spring momentum and release recoil.",
    instruction: "Move your cursor around the stage to test magnetic spring attraction & snap recoil",
    component: MagneticButtonDemo,
  },
  {
    id: "text",
    num: "02",
    label: "Text",
    title: "Interactive Text Reveal",
    tag: "Typography",
    desc: "Hover across typography to reveal concealed layers, spotlight glow, and spring letter morphing.",
    instruction: "Hover & scrub across words to distort & reveal typography layers",
    component: TextRevealDemo,
  },
  {
    id: "liquid",
    num: "03",
    label: "Liquid",
    title: "Liquid Gradient Mesh",
    tag: "Fluid Mesh",
    desc: "Soft pink, purple, and cyan gradient blobs that smoothly morph and flow with cursor coordinates.",
    instruction: "Move pointer across the card to dynamically morph the organic fluid mesh",
    component: LiquidGradientDemo,
  },
  {
    id: "parallax3d",
    num: "04",
    label: "3D Parallax",
    title: "3D Parallax Tilt Card",
    tag: "3D Perspective",
    desc: "Multi-depth physical card with dynamic specular glare, perspective tilt, and isolated Z-planes.",
    instruction: "Move your pointer across the card to tilt multi-depth 3D layers",
    component: ParallaxCardDemo,
  },
  {
    id: "scroll",
    num: "05",
    label: "Scroll",
    title: "Scroll-Based Motion",
    tag: "Kinetic Driver",
    desc: "Interactive scrub simulator with velocity skew, parallax stagger, and 360° rotational momentum.",
    instruction: "Scrub the scroll slider or toggle Auto Drive to test velocity motion physics",
    component: ScrollMotionDemo,
  },
];

/* =========================================================================
   MAIN PLAYGROUND COMPONENT
   ========================================================================= */
export default function Playground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const labConsoleRef = useRef<HTMLDivElement>(null);

  const activeExp = experiments[activeIndex] || experiments[0];
  const ActiveComponent = activeExp.component;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : experiments.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < experiments.length - 1 ? prev + 1 : 0));
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
            
            {/* Window title & experiment tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
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
                      relative group px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5
                      ${isActive
                        ? "text-[#E85D8B] bg-[#FFF5F7] border border-[#F8D2D9] shadow-2xs"
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
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F0DCE3] shadow-2xs">
                <span className="font-mono text-xs font-extrabold text-[#E85D8B]">{activeExp.num}</span>
                <span className="font-mono text-xs text-[#A396A3]">/</span>
                <span className="font-mono text-xs font-bold text-[#756875]">05</span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous experiment"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#EADDE3] text-[#756875] hover:text-[#E85D8B] hover:border-[#F8D2D9] hover:bg-[#FFF5F7] transition-colors cursor-pointer active:scale-95 shadow-2xs"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next experiment"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#EADDE3] text-[#756875] hover:text-[#E85D8B] hover:border-[#F8D2D9] hover:bg-[#FFF5F7] transition-colors cursor-pointer active:scale-95 shadow-2xs"
                >
                  <ChevronRight size={15} />
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
              <span>Interactive Stage</span>
            </div>
          </div>

          {/* Main Animated Experiment Stage */}
          <div className="relative w-full rounded-2xl bg-white border-2 border-[#F0DCE3] p-2 sm:p-3 shadow-inner overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 12, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.985 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Console Bottom Bar with Interactive Instruction */}
          <div className="mt-4 pt-3 border-t border-[#F0DCE3] flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-[11px] font-mono">
            <div className="flex items-center gap-2 text-[#756875]">
              <span className="flex h-2 w-2 rounded-full bg-[#2FB86A] animate-pulse shrink-0" />
              <span className="font-bold text-[#302535]">Instruction:</span>
              <span className="text-[#756875]">{activeExp.instruction}</span>
            </div>

            <div className="flex items-center gap-2 text-[#A396A3]">
              <span className="hidden sm:inline">GPU Accelerated &bull; Smooth Physics</span>
              <span className="text-[#E85D8B] font-bold">0{activeIndex + 1} / 05</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
