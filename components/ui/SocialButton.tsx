"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  href: string;
  icon: React.ElementType;
  label: string;
};

export default function SocialButton({ href, icon: Icon, label }: Props) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex h-11 sm:h-12 w-11 sm:w-12 items-center justify-center
          rounded-2xl border-2 border-[#F0DCE3] bg-white text-[#2E2234]
          shadow-xs transition-all duration-300
          hover:border-[#FF94AF] hover:bg-[#FFE8EE] hover:text-[#FF5E86]
          hover:shadow-[0_4px_14px_rgba(255,94,134,0.25)]
        "
        aria-label={label}
      >
        <Icon size={18} />
      </Link>
    </motion.div>
  );
}