"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  name: string;
  icon: LucideIcon;
};

export default function TechChip({
  name,
  icon: Icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        flex
        items-center
        gap-3
        rounded-2xl
        border-2
        border-[#F0DCE3]
        bg-white
        px-4
        py-3
        shadow-xs
        hover:border-[#FF94AF]
      "
    >
      <div className="rounded-xl bg-[#FFE8EE] text-[#FF5E86] p-2">
        <Icon size={18} />
      </div>

      <span className="font-bold text-sm text-[#2E2234]">
        {name}
      </span>
    </motion.div>
  );
}