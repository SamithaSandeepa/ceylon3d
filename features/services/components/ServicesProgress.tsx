"use client";

import { motion } from "framer-motion";
import { SERVICES, CARD_COUNT } from "../services.data";

export interface ServicesProgressProps {
  activeIndex: number;
}

export function ServicesProgress({ activeIndex }: ServicesProgressProps) {
  return (
    <div className="flex items-center justify-between px-6 sm:px-10">
      <div className="flex items-center gap-2">
        {SERVICES.map((s, i) => (
          <div key={s.number} className="flex items-center gap-2">
            <div
              className={`rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "h-1.5 w-7 bg-orange-500"
                  : "h-1.5 w-1.5 bg-white/15 hover:bg-white/25"
              }`}
            />
            {i < CARD_COUNT - 1 && (
              <div className="h-px w-2.5 bg-white/[0.06]" />
            )}
          </div>
        ))}
      </div>

      <motion.span
        key={activeIndex}
        className="text-[11px] font-mono tracking-wider text-white/20"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {String(activeIndex + 1).padStart(2, "0")} /{" "}
        {String(CARD_COUNT).padStart(2, "0")}
      </motion.span>
    </div>
  );
}
