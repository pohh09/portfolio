"use client";

import { motion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  className,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}