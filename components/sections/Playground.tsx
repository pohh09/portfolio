"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, MousePointer2, Waves, Eye, Move, RefreshCw } from "lucide-react";
import { gsap } from "@/lib/animations/gsapSetup";

/* =========================================================================
   1. EXPERIMENT: Magnetic Button
   ========================================================================= */
function MagneticButtonDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 18, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const textX = useTransform(springX, (val) => val * 0.45);
  const textY = useTransform(springY, (val) => val * 0.45);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Limit maximum displacement to keep it tasteful & controlled
    const maxDisplacement = 32;
    const boundedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, distanceX * 0.4));
    const boundedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, distanceY * 0.4));

    x.set(boundedX);
    y.set(boundedY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      className="relative w-full h-[220px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FFF5F7] border border-[#F0DCE3] flex flex-col items-center justify-center overflow-hidden cursor-crosshair select-none"
    >
      {/* Decorative magnetic field grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(#E85D8B_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="absolute top-2.5 left-3 text-[10px] font-mono text-[#A396A3] flex items-center gap-1">
        <span className={`h-1.5 w-1.5 rounded-full ${isHovered ? "bg-[#E85D8B] animate-ping" : "bg-[#C4B5C7]"}`} />
        <span>{isHovered ? "Magnetic Field Active" : "Hover near button"}</span>
      </div>

      <motion.div
        style={{ x: springX, y: springY }}
        className="relative"
      >
        <motion.button
          type="button"
          onClick={handleClick}
          whileTap={{ scale: 0.94 }}
          className={`
            relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-colors duration-200 cursor-pointer
            ${clicked
              ? "bg-[#2FB86A] text-white shadow-[0_8px_20px_rgba(47,184,106,0.35)]"
              : isHovered
                ? "bg-[#E85D8B] text-white shadow-[0_10px_25px_rgba(232,93,139,0.4)]"
                : "bg-white text-[#302535] border-2 border-[#F0DCE3] shadow-[0_4px_14px_rgba(232,93,139,0.08)]"
            }
          `}
        >
          <motion.span
            style={{ x: textX, y: textY }}
            className="inline-flex items-center gap-2"
          >
            {clicked ? (
              <>
                <Sparkles size={14} className="animate-spin" />
                <span className="font-kalam text-sm">Magnetic Snap! ✨</span>
              </>
            ) : (
              <>
                <MousePointer2 size={13} className={isHovered ? "text-white" : "text-[#E85D8B]"} />
                <span>{isHovered ? "Release to Snap" : "Hover & Pull Me"}</span>
                <span className="text-[10px] font-mono opacity-80">✦</span>
              </>
            )}
          </motion.span>
        </motion.button>
      </motion.div>

      <div className="absolute bottom-2.5 text-[10px] font-mono text-[#A396A3]">
        Spring physics &bull; stiffness: 220, damping: 18
      </div>
    </div>
  );
}

/* =========================================================================
   2. EXPERIMENT: Text Reveal & Lens
   ========================================================================= */
const revealPhrases = [
  { word: "Design", highlight: "#E85D8B", note: "Tokens & UX" },
  { word: "Meets", highlight: "#B9A1E8", note: "Interaction" },
  { word: "Physics", highlight: "#2BAAB8", note: "Spring Motion" },
  { word: "Craft", highlight: "#E85D8B", note: "Attention to Detail" },
];

function TextRevealDemo() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [lensPos, setLensPos] = useState<{ x: number; y: number } | null>(null);
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
      className="relative w-full h-[220px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#FAF7FE] border border-[#F0DCE3] flex flex-col items-center justify-center p-4 overflow-hidden select-none cursor-text"
    >
      {/* Subtle background glow that follows lens */}
      {lensPos && (
        <div
          className="pointer-events-none absolute w-32 h-32 rounded-full bg-gradient-to-tr from-[#E85D8B]/15 via-[#B9A1E8]/20 to-[#8DDDE5]/15 blur-2xl transition-all duration-75"
          style={{
            left: lensPos.x - 64,
            top: lensPos.y - 64,
          }}
        />
      )}

      <div className="absolute top-2.5 left-3 text-[10px] font-mono text-[#A396A3] flex items-center gap-1">
        <Eye size={11} className="text-[#B9A1E8]" />
        <span>Hover over words to reveal layers</span>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-[280px] sm:max-w-none text-center">
        {revealPhrases.map((item, idx) => {
          const isCurrent = hoveredIdx === idx;

          return (
            <motion.div
              key={item.word}
              onMouseEnter={() => setHoveredIdx(idx)}
              className="relative group py-1 px-2.5 rounded-xl transition-all duration-200 cursor-pointer"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <span
                className={`
                  text-2xl sm:text-3xl font-bold font-kalam tracking-tight transition-colors duration-200 block
                  ${isCurrent ? "text-[#E85D8B]" : "text-[#302535] group-hover:text-[#B9A1E8]"}
                `}
                style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
              >
                {item.word}
              </span>

              {/* Animated underline reveal */}
              <motion.span
                className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                style={{ backgroundColor: item.highlight }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isCurrent ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />

              {/* Floating micro-badge note on hover */}
              {isCurrent && (
                <motion.span
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full bg-[#302535] text-white text-[9px] font-mono font-bold shadow-xs pointer-events-none"
                >
                  {item.note} ✦
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>

      <p className="mt-3 text-[11px] font-mono text-[#756875] text-center max-w-xs px-2">
        {hoveredIdx !== null
          ? `✦ Revealing depth: ${revealPhrases[hoveredIdx].note}`
          : "Glissade your pointer across the typography"}
      </p>

      <div className="absolute bottom-2.5 text-[10px] font-mono text-[#A396A3]">
        Staggered spring lift &bull; interactive typography
      </div>
    </div>
  );
}

/* =========================================================================
   3. EXPERIMENT: Cursor Reaction & Physics Follower
   ========================================================================= */
const targetChips = [
  { id: 1, label: "React", defaultX: -65, defaultY: -35, color: "#E85D8B", bg: "bg-[#FFF5F7]", border: "border-[#F8D2D9]" },
  { id: 2, label: "Motion", defaultX: 65, defaultY: -35, color: "#B9A1E8", bg: "bg-[#FAF7FE]", border: "border-[#E8DDF7]" },
  { id: 3, label: "CSS", defaultX: -60, defaultY: 35, color: "#2BAAB8", bg: "bg-[#EBF8FA]", border: "border-[#CEF1F5]" },
  { id: 4, label: "GSAP", defaultX: 60, defaultY: 35, color: "#E5A01A", bg: "bg-[#FFF9EB]", border: "border-[#FCE8B8]" },
];

function CursorPhysicsDemo() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [pointerInside, setPointerInside] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  const orbX = useMotionValue(0);
  const orbY = useMotionValue(0);

  const smoothOrbX = useSpring(orbX, { stiffness: 180, damping: 18 });
  const smoothOrbY = useSpring(orbY, { stiffness: 180, damping: 18 });

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    orbX.set(relX);
    orbY.set(relY);
    setMouseOffset({ x: relX, y: relY });
  };

  const handlePointerEnter = () => setPointerInside(true);

  const handlePointerLeave = () => {
    setPointerInside(false);
    orbX.set(0);
    orbY.set(0);
    setMouseOffset({ x: 0, y: 0 });
  };

  const handlePulse = () => {
    setPulseKey((k) => k + 1);
  };

  return (
    <div
      ref={stageRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handlePulse}
      className="relative w-full h-[220px] rounded-2xl bg-gradient-to-b from-[#FFFDFD] to-[#F4FCFD] border border-[#F0DCE3] flex items-center justify-center overflow-hidden cursor-crosshair select-none touch-none"
    >
      <div className="absolute top-2.5 left-3 text-[10px] font-mono text-[#A396A3] flex items-center gap-1.5">
        <Move size={11} className="text-[#2BAAB8]" />
        <span>{pointerInside ? "Tracking Proximity" : "Move cursor inside stage"}</span>
      </div>

      {/* Floating repel chips */}
      {targetChips.map((chip) => {
        // Calculate dynamic repulsion based on orb proximity
        const dx = mouseOffset.x - chip.defaultX;
        const dy = mouseOffset.y - chip.defaultY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        let repelX = 0;
        let repelY = 0;

        if (pointerInside && dist < 75) {
          const force = (75 - dist) * 0.35;
          repelX = -(dx / dist) * force;
          repelY = -(dy / dist) * force;
        }

        return (
          <motion.div
            key={chip.id}
            animate={{
              x: chip.defaultX + repelX,
              y: chip.defaultY + repelY,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`
              absolute px-2.5 py-1 rounded-full text-[11px] font-mono font-bold shadow-2xs border ${chip.bg} ${chip.border} pointer-events-none transition-colors
            `}
            style={{ color: chip.color }}
          >
            {chip.label}
          </motion.div>
        );
      })}

      {/* Responsive physics tracking orb */}
      <motion.div
        style={{
          x: smoothOrbX,
          y: smoothOrbY,
        }}
        className="pointer-events-none relative flex items-center justify-center"
      >
        <motion.div
          key={`pulse-${pulseKey}`}
          initial={{ scale: 0.8, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#E85D8B] via-[#B9A1E8] to-[#8DDDE5] p-[2px] shadow-[0_6px_20px_rgba(232,93,139,0.35)] flex items-center justify-center"
        >
          <div className="h-full w-full rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E85D8B] animate-pulse" />
          </div>
        </motion.div>

        {/* Outer subtle radar ring */}
        <div className="absolute -inset-2.5 rounded-full border border-[#E85D8B]/20 animate-ping pointer-events-none" />
      </motion.div>

      <div className="absolute bottom-2.5 text-[10px] font-mono text-[#A396A3]">
        Proximity repulsion &bull; click to trigger pulse
      </div>
    </div>
  );
}

/* =========================================================================
   4. EXPERIMENT: Liquid Gradient
   ========================================================================= */
function LiquidGradientDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [colorSchemeIdx, setColorSchemeIdx] = useState(0);

  const palettes = [
    {
      name: "Pastel Glow",
      blob1: "#E85D8B", // Rose Pink
      blob2: "#B9A1E8", // Soft Lavender
      blob3: "#8DDDE5", // Pastel Cyan
      blob4: "#FAD074", // Sunny Yellow
    },
    {
      name: "Cotton Candy",
      blob1: "#F29AB2", // Blush Rose
      blob2: "#8DDDE5", // Cyan
      blob3: "#B9A1E8", // Lavender
      blob4: "#FCE8E8", // Soft Cream
    },
  ];

  const currentPalette = palettes[colorSchemeIdx];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const yPct = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    setCoords({
      x: Math.max(10, Math.min(90, xPct)),
      y: Math.max(10, Math.min(90, yPct)),
    });
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const xPct = Math.round(((touch.clientX - rect.left) / rect.width) * 100);
    const yPct = Math.round(((touch.clientY - rect.top) / rect.height) * 100);

    setCoords({
      x: Math.max(10, Math.min(90, xPct)),
      y: Math.max(10, Math.min(90, yPct)),
    });
  }, []);

  const cyclePalette = (e: React.MouseEvent) => {
    e.stopPropagation();
    setColorSchemeIdx((prev) => (prev + 1) % palettes.length);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[220px] rounded-2xl bg-[#FFFDFD] border border-[#F0DCE3] flex items-center justify-center overflow-hidden select-none cursor-pointer"
    >
      {/* Organic fluid gradient layer with soft blur */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none filter blur-[32px] sm:blur-[38px] opacity-80">
        {/* Blob 1 (Follows cursor smoothly) */}
        <div
          className="absolute w-36 h-36 rounded-full transition-all duration-300 ease-out"
          style={{
            backgroundColor: currentPalette.blob1,
            left: `calc(${coords.x}% - 72px)`,
            top: `calc(${coords.y}% - 72px)`,
            opacity: 0.75,
          }}
        />

        {/* Blob 2 (Counter-balances cursor) */}
        <div
          className="absolute w-40 h-40 rounded-full transition-all duration-500 ease-out"
          style={{
            backgroundColor: currentPalette.blob2,
            right: `calc(${coords.x * 0.7}% - 80px)`,
            bottom: `calc(${coords.y * 0.7}% - 80px)`,
            opacity: 0.7,
          }}
        />

        {/* Blob 3 (Organic center float) */}
        <div
          className="absolute w-32 h-32 rounded-full transition-all duration-700 ease-out animate-float-slow"
          style={{
            backgroundColor: currentPalette.blob3,
            left: `calc(40% + ${(coords.x - 50) * 0.3}%)`,
            top: `calc(35% + ${(coords.y - 50) * 0.3}%)`,
            opacity: 0.65,
          }}
        />

        {/* Blob 4 (Accent yellow warmth) */}
        <div
          className="absolute w-28 h-28 rounded-full transition-all duration-700 ease-out"
          style={{
            backgroundColor: currentPalette.blob4,
            left: `calc(60% - ${(coords.x - 50) * 0.2}%)`,
            top: `calc(65% - ${(coords.y - 50) * 0.2}%)`,
            opacity: 0.6,
          }}
        />
      </div>

      {/* Frosted Glass Overlay Card */}
      <div className="relative z-10 p-3.5 sm:p-4 rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 shadow-[0_8px_24px_rgba(232,93,139,0.12)] flex flex-col items-center gap-1.5 max-w-[210px] text-center">
        <div className="flex items-center gap-1.5">
          <Waves size={13} className="text-[#E85D8B] animate-pulse" />
          <span className="text-xs font-mono font-bold text-[#302535]">Fluid Mesh</span>
        </div>
        <span className="text-[10px] font-mono text-[#756875]">
          X: {coords.x}% &bull; Y: {coords.y}%
        </span>
        <button
          type="button"
          onClick={cyclePalette}
          className="mt-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFF5F7] border border-[#F8D2D9] text-[#E85D8B] text-[10px] font-mono font-bold shadow-2xs hover:bg-[#FFE8EE] transition-colors cursor-pointer"
        >
          <RefreshCw size={9} />
          <span>{currentPalette.name}</span>
        </button>
      </div>

      <div className="absolute bottom-2.5 text-[10px] font-mono text-[#756875] z-10">
        Organic mesh &bull; GPU accelerated blur
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN PLAYGROUND SECTION COMPONENT
   ========================================================================= */
const experiments = [
  {
    num: "01",
    name: "Magnetic Button",
    tag: "Spring Physics",
    desc: "A button that subtly glides toward your cursor with elastic spring momentum.",
    component: MagneticButtonDemo,
  },
  {
    num: "02",
    name: "Text Reveal",
    tag: "Interactive Typography",
    desc: "Hover across words to reveal concealed typographic layers and micro-details.",
    component: TextRevealDemo,
  },
  {
    num: "03",
    name: "Cursor Interaction",
    tag: "Proximity Physics",
    desc: "An elastic follower orb that triggers proximity repulsion on surrounding chips.",
    component: CursorPhysicsDemo,
  },
  {
    num: "04",
    name: "Liquid Gradient",
    tag: "Fluid Mesh",
    desc: "Soft pink, purple, and cyan gradient blobs that smoothly morph with cursor motion.",
    component: LiquidGradientDemo,
  },
];

export default function Playground() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

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
          cardsGridRef.current ? cardsGridRef.current.children : [],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
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
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
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
            A little{" "}
            <span className="text-[#E85D8B] relative inline-block">
              playground.
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
            Some things are better experienced than explained.
          </p>
        </div>

        {/* 2x2 Grid on Desktop / 1 column on mobile */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7"
        >
          {experiments.map((exp) => {
            const DemoComponent = exp.component;

            return (
              <div
                key={exp.num}
                className="rounded-[24px] sm:rounded-[28px] bg-white border-2 border-[#F0DCE3] p-5 sm:p-6 shadow-[0_8px_24px_-8px_rgba(232,93,139,0.08)] hover:border-[#F29AB2] hover:shadow-[0_12px_32px_-8px_rgba(232,93,139,0.16)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Card Top Metadata */}
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#F0DCE3]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FCE8E8] border border-[#F8D2D9] text-[#E85D8B]">
                        {exp.num}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold font-kalam text-[#302535]">
                        {exp.name}
                      </h3>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-[#756875] uppercase tracking-wider bg-[#FFF8F5] border border-[#F0DCE3] px-2.5 py-0.5 rounded-full">
                      {exp.tag}
                    </span>
                  </div>

                  <p className="text-xs text-[#756875] leading-relaxed mb-4">
                    {exp.desc}
                  </p>
                </div>

                {/* Interactive Demo Container */}
                <div className="mt-auto">
                  <DemoComponent />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
