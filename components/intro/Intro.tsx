"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectShowcase from "./ProjectShowcase";
import Availability from "./Availability";

type AnimatedLettersProps = {
  text: string;
  className?: string;
  exiting: boolean;
  onExitComplete?: () => void;
};

function AnimatedLetters({ text, className = "", exiting, onExitComplete }: AnimatedLettersProps) {
  const letters = text.split("");
  const lastIndex = letters.length - 1;

  return (
    <h1 className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.85 }}
          animate={
            exiting
              ? {
                  opacity: 0,
                  y: -40,
                  scale: 0.9,
                  transition: { delay: index * 0.025, duration: 0.4, ease: [0.7, 0, 0.84, 0] },
                }
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: index * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                }
          }
          onAnimationComplete={() => {
            if (exiting && index === lastIndex) onExitComplete?.();
          }}
          style={{ display: "inline-block", whiteSpace: "pre", willChange: "transform" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
}

type Phase =
  | "welcomeIn"
  | "welcomeOut"
  | "portfolioIn"
  | "portfolioOut"
  | "reveal"
  | "projects"
  | "availability"
  | "exit";

const HOLD_AFTER_WELCOME = 600;
const HOLD_AFTER_PORTFOLIO = 700;
const REVEAL_DURATION = 800;
const PROJECTS_DURATION = 2500;
const AVAILABILITY_DURATION = 2500;

type Props = {
  onFinish: () => void;
};

export default function AppleIntro({ onFinish }: Props) {
  const [phase, setPhase] = useState<Phase>("welcomeIn");

  useEffect(() => {
    if (phase === "welcomeIn") return schedule(setPhase, "welcomeOut", HOLD_AFTER_WELCOME);
    if (phase === "portfolioIn") return schedule(setPhase, "portfolioOut", HOLD_AFTER_PORTFOLIO);
    if (phase === "reveal") return schedule(setPhase, "projects", REVEAL_DURATION);
    if (phase === "projects") return schedule(setPhase, "availability", PROJECTS_DURATION);
    if (phase === "availability") return schedule(setPhase, "exit", AVAILABILITY_DURATION);
    if (phase === "exit") {
      const t = setTimeout(() => onFinish(), 600);
      return () => clearTimeout(t);
    }
  }, [phase, onFinish]);

  const showDarkCurtain = phase === "welcomeIn" || phase === "welcomeOut" || phase === "portfolioIn" || phase === "portfolioOut";
  const revealing = phase === "reveal";
  const showLight = phase === "reveal" || phase === "projects" || phase === "availability";
  const exiting = phase === "exit";

  return (
    <motion.div
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#FFF8F6]"
    >

      <div className="absolute inset-0 bg-[#FFF8F6]">
        <motion.div
          className="absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-[#FFE8EC] blur-[100px] opacity-70"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#FFF0EB] blur-[100px] opacity-70"
          animate={{ opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#E8FAFC]/40 blur-[90px]" />

        {(phase === "welcomeIn" || phase === "welcomeOut") && (
          <div className="flex h-full items-center justify-center px-4">
            <AnimatedLetters
              text="Welcome to my"
              exiting={phase === "welcomeOut"}
              onExitComplete={() => setPhase("portfolioIn")}
              className="text-center font-kalam font-bold leading-none text-[#FF5E86] text-5xl sm:text-6xl md:text-8xl lg:text-9xl"
            />
          </div>
        )}

        {(phase === "portfolioIn" || phase === "portfolioOut") && (
          <div className="flex h-full items-center justify-center px-4">
            <AnimatedLetters
              text="Portfolio"
              exiting={phase === "portfolioOut"}
              onExitComplete={() => setPhase("reveal")}
              className="text-center font-kalam font-bold leading-none tracking-tight text-[#2E2234] text-6xl sm:text-7xl md:text-9xl lg:text-[10rem]"
            />
          </div>
        )}

        {showDarkCurtain && (
          <button
            type="button"
            onClick={onFinish}
            className="absolute bottom-6 right-6 rounded-full border-2 border-[#F0DCE3] bg-white/90 px-5 py-2 text-xs font-bold text-[#FF5E86] shadow-sm backdrop-blur transition hover:bg-[#FFE8EE] sm:bottom-8 sm:right-8 cursor-pointer"
          >
            Skip intro →
          </button>
        )}
      </div>

      {showLight && (
        <motion.div
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(150% at 50% 50%)" }}
          transition={{ duration: REVEAL_DURATION / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 overflow-y-auto bg-[#FFF8F6]"
        >
          {revealing || phase === "projects" ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectShowcase />
            </motion.div>
          ) : (
            <motion.div
              key="availability"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Availability />
            </motion.div>
          )}

          <button
            type="button"
            onClick={onFinish}
            className="fixed bottom-6 right-6 rounded-full border-2 border-[#F0DCE3] bg-white/90 px-5 py-2 text-xs font-bold text-[#FF5E86] shadow-sm backdrop-blur transition hover:bg-[#FFE8EE] sm:bottom-8 sm:right-8 cursor-pointer z-50"
          >
            Enter Portfolio →
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

function schedule(setPhase: (p: Phase) => void, next: Phase, delay: number) {
  const t = setTimeout(() => setPhase(next), delay);
  return () => clearTimeout(t);
}