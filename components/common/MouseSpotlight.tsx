"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function MouseSpotlight() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const rawMouseX = useMotionValue(-500);
  const rawMouseY = useMotionValue(-500);

  const springConfig = { damping: 26, stiffness: 220, mass: 0.4 };
  const smoothX = useSpring(rawMouseX, springConfig);
  const smoothY = useSpring(rawMouseY, springConfig);

  useEffect(() => {

    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX.set(e.clientX);
      rawMouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [rawMouseX, rawMouseY, isVisible]);

  const radius = isClicking ? "520px" : "680px";
  const coreOpacity = isClicking ? "0.18" : "0.13";
  const midOpacity = isClicking ? "0.12" : "0.08";
  const outerOpacity = isClicking ? "0.07" : "0.04";

  const background = useMotionTemplate`radial-gradient(
    ${radius} circle at ${smoothX}px ${smoothY}px,
    rgba(232, 93, 139, ${coreOpacity}) 0%,
    rgba(185, 161, 232, ${midOpacity}) 30%,
    rgba(141, 221, 229, ${outerOpacity}) 55%,
    rgba(250, 208, 116, 0.02) 70%,
    transparent 80%
  )`;

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 hidden md:block"
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{
        background,
        willChange: "background, opacity",
      }}
    />
  );
}