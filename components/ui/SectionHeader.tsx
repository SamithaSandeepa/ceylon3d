"use client";

import React from "react";
import { motion } from "framer-motion";
import type { SectionHeaderData } from "@/types";

export interface SectionHeaderProps {
  /** Uppercase eyebrow/subtitle text (e.g. "WHAT WE DO") */
  eyebrow?: string;
  /** Fallback alias for eyebrow */
  subtitle?: string;
  /** Text preceding the highlighted word */
  headingPrefix?: string;
  /** Word highlighted in orange */
  headingHighlight?: string;
  /** Optional text following the highlighted word */
  headingSuffix?: string;
  /** Custom heading element if prefix/highlight structure isn't suitable */
  heading?: React.ReactNode;
  /** Body description paragraph */
  description?: string;
  /** Text alignment ("center" by default, or "left") */
  align?: "center" | "left";
  /** Custom container CSS classes */
  className?: string;
  /** Structured data object (optional) */
  data?: SectionHeaderData;
}

export function SectionHeader({
  eyebrow,
  subtitle,
  headingPrefix,
  headingHighlight,
  headingSuffix,
  heading,
  description,
  align = "center",
  className = "",
  data,
}: SectionHeaderProps) {
  const effectiveEyebrow = eyebrow ?? subtitle ?? data?.subtitle;
  const effectivePrefix = headingPrefix ?? data?.headingPrefix;
  const effectiveHighlight = headingHighlight ?? data?.headingHighlight;
  const effectiveSuffix = headingSuffix ?? data?.headingSuffix;
  const effectiveDescription = description ?? data?.description;

  const isLeft = align === "left";

  return (
    <div className={`${isLeft ? "text-left" : "text-center"} ${className}`}>
      {effectiveEyebrow && (
        <motion.span
          className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {effectiveEyebrow}
        </motion.span>
      )}

      <motion.h2
        className="mb-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        {heading ? (
          heading
        ) : (
          <>
            {effectivePrefix}
            {effectivePrefix && !effectivePrefix.endsWith(" ") ? " " : ""}
            {effectiveHighlight && (
              <span className="text-orange-500">{effectiveHighlight}</span>
            )}
            {effectiveSuffix}
          </>
        )}
      </motion.h2>

      {effectiveDescription && (
        <motion.p
          className={`${
            isLeft ? "max-w-2xl" : "mx-auto max-w-2xl"
          } text-base leading-relaxed text-gray-400 sm:text-lg`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {effectiveDescription}
        </motion.p>
      )}
    </div>
  );
}
