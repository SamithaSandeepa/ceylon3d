"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE, REVEAL_Y } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Travel distance in px (default: REVEAL_Y = 20) */
  distance?: number;
  /**
   * Animation direction.
   * "up"   — element rises  from below (default)
   * "down" — element drops  from above
   * "left" — element slides from the left
   * "right"— element slides from the right
   * "none" — fade only, no movement
   */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Duration override (seconds). Defaults to DURATION.normal */
  duration?: number;
  /** Tailwind / CSS class forwarded to the wrapper div */
  className?: string;
}

/**
 * <Reveal> — lightweight scroll-triggered entrance wrapper.
 *
 * Wraps any content in a motion.div that fades + slides in once when
 * the element enters the viewport. Respects prefers-reduced-motion.
 *
 * Usage:
 *   <Reveal>
 *     <SectionHeader ... />
 *   </Reveal>
 *
 *   <Reveal delay={0.12} direction="right">
 *     <FormCard />
 *   </Reveal>
 */
export function Reveal({
  children,
  delay = 0,
  distance = REVEAL_Y,
  direction = "up",
  duration = DURATION.normal,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // When reduced motion is preferred: only opacity, no translate
  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        ...(direction === "up" && { y: distance }),
        ...(direction === "down" && { y: -distance }),
        ...(direction === "left" && { x: distance }),
        ...(direction === "right" && { x: -distance }),
      };

  const animate = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: EASE.out }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
