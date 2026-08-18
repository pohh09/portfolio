"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
        }}
        className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-300/40 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-cyan-300/40 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
        }}
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-pink-300/30 blur-3xl"
      />
    </>
  );
}