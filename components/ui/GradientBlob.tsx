"use client";

import { motion } from "framer-motion";

export default function GradientBlob() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-300/35 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
        }}
        className="absolute right-0 top-24 h-[450px] w-[450px] rounded-full bg-cyan-300/35 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -70, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
        }}
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-pink-300/30 blur-[120px]"
      />
    </>
  );
}