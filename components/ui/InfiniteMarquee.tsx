"use client";

import { motion } from "framer-motion";

type Item = {
  name: string;
  icon: React.ElementType;
  color: string;
};

type Props = {
  items: Item[];
};

export default function InfiniteMarquee({ items }: Props) {
  const loop = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-4">

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 sm:w-32 bg-gradient-to-r from-[#FFF8F6] via-[#FFF8F6]/80 to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 sm:w-32 bg-gradient-to-l from-[#FFF8F6] via-[#FFF8F6]/80 to-transparent" />

      <motion.div
        animate={{
          x: ["0%", "-33.333%"],
        }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max gap-4 sm:gap-5"
      >
        {loop.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
              }}
              className="
                flex flex-col items-center justify-center gap-2
                h-22 w-22 sm:h-26 sm:w-26 shrink-0
                rounded-2xl border-2 border-[#F0DCE3]
                bg-white shadow-xs
                transition-all duration-300
                hover:border-[#FF94AF] hover:shadow-[0_8px_20px_rgba(255,94,134,0.15)]
                group cursor-pointer
              "
            >
              <Icon
                size={30}
                style={{
                  color: tech.color,
                }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-[11px] font-bold text-[#2E2234] group-hover:text-[#FF5E86] transition-colors">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}