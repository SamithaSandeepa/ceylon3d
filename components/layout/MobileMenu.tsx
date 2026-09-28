"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { NavLink } from "@/types";
import Link from "next/link";
import { mobileMenuVariants } from "@/lib/motion";

interface MobileMenuProps {
  links: NavLink[];
  phoneLabel: string;
  phoneHref: string;
  onClose: () => void;
}

export function MobileMenu({ links, phoneLabel, phoneHref, onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="md:hidden bg-gray-950/98 border-t border-orange-500/20 px-4 pt-1 pb-5 overflow-hidden"
      variants={mobileMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          onClick={onClose}
          className="flex items-center py-3.5 text-gray-300 hover:text-orange-400 border-b border-gray-800/60 text-[15px] transition-colors min-h-[44px]"
        >
          {l.label}
        </Link>
      ))}
      <a
        href={phoneHref}
        className="mt-4 flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-400 text-white text-[15px] font-semibold px-4 py-3.5 rounded-xl transition-colors min-h-[48px]"
      >
        <Phone size={15} strokeWidth={2} aria-hidden="true" />
        <span>{phoneLabel}</span>
      </a>
    </motion.div>
  );
}
