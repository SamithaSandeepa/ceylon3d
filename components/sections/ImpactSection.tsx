"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { IMPACT_HEADER, BUSINESS_STATS, IMPACT_CTA } from "@/content/impact";
import type { BusinessStat } from "@/types/impact";
import { GlowButton } from "@/components/ui";

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

/* ──────────────── Single Stat Item Component ────────────── */

function StatCard({ stat, isLast }: { stat: BusinessStat; isLast: boolean }) {
  return (
    <div
      className={`flex flex-col justify-between py-4 sm:py-6 px-4 lg:px-8 ${
        !isLast ? "lg:border-r border-white/[0.08]" : ""
      }`}
    >
      <div>
        <div className="flex items-baseline gap-1 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
          {stat.prefix && <span>{stat.prefix}</span>}
          {typeof stat.numericValue === "number" ? (
            <AnimatedNumber value={stat.numericValue} decimals={stat.decimals ?? 0} />
          ) : (
            <span>{stat.displayValue ?? ""}</span>
          )}
          {stat.suffix && <span className="text-orange-500 font-bold ml-0.5">{stat.suffix}</span>}
        </div>

        <h3 className="mt-3 text-base sm:text-lg font-bold text-white tracking-tight">
          {stat.label}
        </h3>
      </div>

      {stat.sublabel && (
        <p className="mt-2 text-xs leading-relaxed text-gray-400 font-medium">
          {stat.sublabel}
        </p>
      )}
    </div>
  );
}

/* ════════════════════ MAIN COMPONENT ════════════════════ */

export function ImpactSection() {
  return (
    <section id="numbers" className="scroll-mt-24 relative bg-gray-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ─── SECTION 1: CEYLON 3D IN NUMBERS GRID ─── */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start mb-16 sm:mb-20">
          
          {/* Header Column */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-orange-500/50" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
                {IMPACT_HEADER.eyebrow}
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {IMPACT_HEADER.headingPrefix}
              <span className="text-orange-500">{IMPACT_HEADER.headingHighlight}</span>
            </h2>

            <p className="text-base leading-7 text-gray-400">
              {IMPACT_HEADER.description}
            </p>
          </motion.div>

          {/* Business Counters Grid */}
          <motion.div
            className="lg:col-span-7 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-6 lg:p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
              {BUSINESS_STATS.map((stat, index) => (
                <StatCard
                  key={stat.id}
                  stat={stat}
                  isLast={index === BUSINESS_STATS.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── SECTION 2: CONTACT CTA STRIP ─── */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent p-8 sm:p-12 lg:p-14 shadow-2xl shadow-black/40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/90">
                <Sparkles size={14} className="text-orange-400" />
                <span>{IMPACT_CTA.eyebrow}</span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl tracking-tight">
                {IMPACT_CTA.heading}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                {IMPACT_CTA.description}
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <GlowButton href={IMPACT_CTA.primaryHref}>
                {IMPACT_CTA.primaryLabel}
              </GlowButton>

              <Link
                href={SITE_CONFIG.phoneHref}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition-all hover:border-orange-500/50 hover:bg-white/[0.08] hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <Phone size={16} className="text-orange-400" />
                <span>Call or WhatsApp</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
