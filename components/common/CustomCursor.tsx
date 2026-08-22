"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

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
    let isClicking = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const render = () => {
      // Butter-smooth lerp interpolation
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      const size = isHovering ? 44 : 26;
      const offset = size / 2;
      const scale = isClicking ? 0.85 : isHovering ? 1.2 : 1;

      ring.style.transform = `translate3d(${ringX - offset}px, ${ringY - offset}px, 0) scale(${scale})`;

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
          target.classList.contains("cursor-pointer") ||
          target.closest(".cursor-pointer"))
      ) {
        isHovering = true;
        ring.classList.add("border-[#E85D8B]", "bg-[#E85D8B]/12", "backdrop-blur-2xs");
        dot.classList.add("scale-125", "bg-[#E85D8B]");
      } else {
        isHovering = false;
        ring.classList.remove("border-[#E85D8B]", "bg-[#E85D8B]/12", "backdrop-blur-2xs");
        dot.classList.remove("scale-125", "bg-[#E85D8B]");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    window.addEventListener("mouseover", handlePointerOver, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handlePointerOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[#E85D8B] transition-transform duration-150 ease-out hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)", willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-6.5 w-6.5 rounded-full border-[1.5px] border-[#E85D8B]/50 shadow-[0_0_12px_rgba(232,93,139,0.15)] transition-[border-color,background-color] duration-200 ease-out hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)", willChange: "transform" }}
      />
    </>
  );
}

