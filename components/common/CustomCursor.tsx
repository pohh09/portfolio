"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsapSetup";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Strict detection: disable completely on mobile, tablets, coarse pointers & touch devices
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const cursor = cursorRef.current;
    const badge = badgeRef.current;
    const label = labelRef.current;

    if (!cursor || !badge || !label) return;

    // Show cursor on desktop
    cursor.style.display = "block";

    // Setup high-performance GSAP quickTo setters with a subtle trailing lag
    const setCursorX = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power3.out" });
    const setCursorY = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power3.out" });

    let currentMode = "normal";
    let activeMagneticElement: HTMLElement | null = null;

    const setCursorState = (mode: string, text: string) => {
      if (currentMode === mode) return;
      currentMode = mode;

      if (mode === "normal") {
        label.style.opacity = "0";
        label.textContent = "";
        badge.style.width = "9px";
        badge.style.height = "9px";
        badge.style.padding = "0px";
        badge.style.backgroundColor = "#E85D8B";
        badge.style.borderRadius = "9999px";
        badge.style.boxShadow = "0 3px 12px rgba(232, 93, 139, 0.4)";
      } else {
        label.textContent = text;
        label.style.opacity = "1";
        badge.style.width = "auto";
        badge.style.height = "24px";
        badge.style.padding = "2px 10px";
        badge.style.backgroundColor = mode === "try" ? "#8B72D8" : "#E85D8B";
        badge.style.borderRadius = "9999px";
        badge.style.boxShadow = "0 6px 18px rgba(232, 93, 139, 0.45)";
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      // Keep center offset for smoothness
      setCursorX(e.clientX);
      setCursorY(e.clientY);

      // Subtle magnetic pull for primary CTA buttons
      if (activeMagneticElement) {
        const rect = activeMagneticElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 60) {
          gsap.to(activeMagneticElement, {
            x: dx * 0.25,
            y: dy * 0.25,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(activeMagneticElement, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: "elastic.out(1, 0.4)",
            overwrite: "auto",
          });
          activeMagneticElement = null;
        }
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Draggable / Interactive Playground
      if (
        target.closest("[data-cursor='try']") ||
        target.closest("#playground .rounded-2xl") ||
        target.closest(".interactive-stage")
      ) {
        setCursorState("try", "TRY →");
        return;
      }

      // 2. Project Image
      if (
        target.closest(".proj-image") ||
        target.closest("[data-cursor='explore']") ||
        target.closest(".group\\/shot")
      ) {
        setCursorState("explore", "EXPLORE");
        return;
      }

      // 3. Project Card
      if (
        target.closest("[data-cursor='project']") ||
        target.closest(".group\\/preview") ||
        target.closest(".proj-frame")
      ) {
        setCursorState("project", "VIEW");
        return;
      }

      // 4. Primary CTA Magnetic Buttons
      const magneticBtn = target.closest(".btn-primary, [data-magnetic], button[type='submit']") as HTMLElement | null;
      if (magneticBtn) {
        activeMagneticElement = magneticBtn;
        setCursorState("button", "CLICK →");
        return;
      }

      // 5. Button
      if (
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setCursorState("button", "CLICK →");
        return;
      }

      // 6. Link
      if (target.tagName === "A" || target.closest("a")) {
        setCursorState("link", "OPEN →");
        return;
      }

      // Default
      setCursorState("normal", "");
    };

    const onMouseLeave = () => {
      if (activeMagneticElement) {
        gsap.to(activeMagneticElement, {
          x: 0,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
        activeMagneticElement = null;
      }
      cursor.style.opacity = "0";
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (activeMagneticElement) {
        gsap.killTweensOf(activeMagneticElement);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[99999] hidden -translate-x-1/2 -translate-y-1/2 select-none"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
        willChange: "transform",
      }}
    >
      <div
        ref={badgeRef}
        className="relative flex items-center justify-center rounded-full bg-[#E85D8B] text-white shadow-[0_3px_12px_rgba(232,93,139,0.4)] transition-[width,height,background-color,box-shadow,padding] duration-200 ease-out"
        style={{
          width: "9px",
          height: "9px",
        }}
      >
        <span
          ref={labelRef}
          className="whitespace-nowrap font-mono text-[9px] font-extrabold uppercase tracking-wider text-white opacity-0 transition-opacity duration-150"
        />
      </div>
    </div>
  );
}
