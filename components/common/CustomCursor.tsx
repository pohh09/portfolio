"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop pointer devices with motion enabled
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      const size = isHovering ? 48 : 28;
      const offset = size / 2;

      ring.style.transform = `translate3d(${ringX - offset}px, ${ringY - offset}px, 0) scale(${
        isHovering ? 1.25 : 1
      })`;

      rafId = requestAnimationFrame(render);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer"))
      ) {
        isHovering = true;
        ring.classList.add("scale-125", "border-[#FF5E86]", "bg-[#FF5E86]/10");
        dot.classList.add("bg-[#FF5E86]");
      } else {
        isHovering = false;
        ring.classList.remove("scale-125", "border-[#FF5E86]", "bg-[#FF5E86]/10");
        dot.classList.remove("bg-[#FF5E86]");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handlePointerOver, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handlePointerOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[#FF5E86] transition-opacity duration-200 hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)", willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-7 w-7 rounded-full border-1.5 border-[#FF5E86]/40 transition-colors duration-200 hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)", willChange: "transform" }}
      />
    </>
  );
}
