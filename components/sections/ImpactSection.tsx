"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { IMPACT_HEADER, BUSINESS_STATS, IMPACT_CTA } from "@/content/impact";
import type { BusinessStat } from "@/types/impact";
import { GlowButton, SectionHeader } from "@/components/ui";

/* ──────────────── Helper: Animated Count-up ─────────────── */

function AnimatedNumber({
  value,
  decimals = 0,
  duration = 1.2,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;

    const start = 0;
    const end = value;
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (end - start) * easeOut;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(end);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue)}
    </span>
  );
}

/* ──────────────────── Single Stat Item ──────────────────── */

function StatItem({ stat }: { stat: BusinessStat }) {
  return (
    <div className="flex flex-col">
      {/* Number — the dominant visual element */}
      <div
        className="flex items-baseline leading-none mb-3"
        aria-label={`${stat.numericValue ?? stat.displayValue}${stat.suffix ?? ""} — ${stat.label}`}
      >
        {stat.prefix && (
          <span className="text-[2.75rem] sm:text-[3.25rem] lg:text-[3.75rem] font-black text-white tracking-tight">
            {stat.prefix}
          </span>
        )}
        <span className="text-[2.75rem] sm:text-[3.25rem] lg:text-[3.75rem] font-black text-white tracking-tight">
          {typeof stat.numericValue === "number" ? (
            <AnimatedNumber value={stat.numericValue} decimals={stat.decimals ?? 0} />
          ) : (
            stat.displayValue ?? ""
          )}
        </span>
        {stat.suffix && (
          <span
            aria-hidden="true"
            className="ml-0.5 text-[2rem] sm:text-[2.5rem] lg:text-[2.875rem] font-black text-orange-500 tracking-tight"
          >
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-sm font-semibold text-white/80 tracking-wide leading-tight mb-1.5">
        {stat.label}
      </p>

      {/* Sublabel — muted detail */}
      {stat.sublabel && (
        <p className="text-xs text-gray-600 leading-relaxed">{stat.sublabel}</p>
      )}
    </div>
  );
}

/* ════════════════════ MAIN COMPONENT ════════════════════ */

export function ImpactSection() {
  return (
    <section
      id="numbers"
      className="scroll-mt-24 relative bg-gray-950 py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ─── SECTION 1: Editorial Header + Open Stat Row ─── */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-center mb-20 sm:mb-24">

          {/* Left column: heading */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={IMPACT_HEADER.eyebrow}
              headingPrefix={IMPACT_HEADER.headingPrefix}
              headingHighlight={IMPACT_HEADER.headingHighlight}
              description={IMPACT_HEADER.description}
              headingSuffix="."
              align="left"
            />
          </div>

          {/* Right column: stat row — open, no container card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/*
             * Mobile: vertical stack with horizontal rule between each stat.
             * Tablet (sm:): horizontal row with left-border separators.
             * Desktop: same as tablet, with extra horizontal padding.
             */}
            <div className="flex flex-col sm:flex-row sm:items-start">
              {BUSINESS_STATS.map((stat, i) => (
                <div
                  key={stat.id}
                  className={[
                    "flex-1",
                    // Vertical separator on mobile; left-border on sm+
                    i > 0
                      ? "mt-8 pt-8 border-t border-white/[0.08] sm:mt-0 sm:pt-0 sm:border-t-0 sm:border-l sm:border-white/[0.08] sm:pl-8 lg:pl-12"
                      : "",
                    // Right padding to centre content in the column gap
                    i < BUSINESS_STATS.length - 1
                      ? "sm:pr-8 lg:pr-12"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <StatItem stat={stat} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── SECTION 2: CTA Strip ─── */}
        {/*
         * Separated from the stats by a simple border-t line.
         * No rounded card, no gradient box, no glow blob.
         * The CTA feels like the natural editorial continuation of the numbers above.
         */}
        <motion.div
          className="border-t border-white/[0.08] pt-10 sm:pt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">

            {/* Left: Message */}
            <div className="max-w-xl">
              {/* Eyebrow — small accent line + label */}
              <div className="mb-3 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-5 shrink-0 bg-orange-500/60"
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
                  {IMPACT_CTA.eyebrow}
                </span>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl tracking-tight">
                {IMPACT_CTA.heading}
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                {IMPACT_CTA.description}
              </p>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <GlowButton href={IMPACT_CTA.primaryHref}>
                {IMPACT_CTA.primaryLabel}
              </GlowButton>

              <Link
                href={SITE_CONFIG.phoneHref}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition-all hover:border-orange-500/50 hover:bg-white/[0.08] hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <Phone size={16} aria-hidden="true" className="text-orange-400" />
                <span>Call or WhatsApp</span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom separator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
