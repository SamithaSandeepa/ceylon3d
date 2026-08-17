"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, ScanLine, Box } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/* ────────────────────── service data ────────────────────── */

const SERVICES = [
  {
    number: "01",
    title: "Prototyping",
    description:
      "Turn concepts and CAD designs into functional physical prototypes for testing, validation and product development.",
    workflow: "CONCEPT → DESIGN → PROTOTYPE",
    cta: "Explore Prototyping",
    href: "/services/prototyping",
    image: "/images/services/prototyping.jpg",
    icon: Layers,
  },
  {
    number: "02",
    title: "3D Scanning",
    description:
      "Convert existing physical components into accurate digital 3D models for reverse engineering, reproduction and modification.",
    workflow: "PHYSICAL PART → SCAN → DIGITAL MODEL",
    cta: "Explore 3D Scanning",
    href: "/services/3d-scanning",
    image: "/images/services/3d-scanning.jpg",
    icon: ScanLine,
  },
  {
    number: "03",
    title: "3D Printing",
    description:
      "Transform digital 3D models into accurate physical components for prototypes, custom parts, replacements and low-volume production.",
    workflow: "DIGITAL MODEL → PRINT → PHYSICAL PART",
    cta: "Explore 3D Printing",
    href: "/services/3d-printing",
    image: "/images/services/3d-printing.jpg",
    icon: Box,
  },
] as const;

const CARD_COUNT = SERVICES.length;

/* ──────────────────── transform configs ──────────────────── */
/*
 * Each card has 3 keyframes mapped to scrollYProgress [0, 0.5, 1].
 *
 * progress 0   → Card 0 active (center)
 * progress 0.5 → Card 1 active (center)
 * progress 1.0 → Card 2 active (center)
 *
 * x = % of the motion-wrapper's own width (≈ card-area width).
 *     Positive → right, negative → left.
 * y = pixel offset. Positive → down. Creates diagonal cascade.
 *
 * All 3 cards are ALWAYS visible; only scale/opacity/z change.
 */

const SCROLL_KEYS = [0, 0.5, 1];

const TRANSFORMS = {
  desktop: [
    {
      // Card 0 — active at progress 0
      x: ["0%", "-20%", "-30%"],
      y: [0, -10, -18],
      scale: [1, 0.88, 0.76],
      opacity: [1, 0.6, 0.4],
      z: [30, 10, 5],
    },
    {
      // Card 1 — active at progress 0.5
      x: ["16%", "0%", "-20%"],
      y: [14, 0, -10],
      scale: [0.9, 1, 0.88],
      opacity: [0.65, 1, 0.6],
      z: [20, 30, 10],
    },
    {
      // Card 2 — active at progress 1.0
      x: ["26%", "16%", "0%"],
      y: [24, 14, 0],
      scale: [0.78, 0.9, 1],
      opacity: [0.5, 0.65, 1],
      z: [10, 20, 30],
    },
  ],
  mobile: [
    {
      x: ["0%", "-8%", "-14%"],
      y: [0, -6, -12],
      scale: [1, 0.87, 0.76],
      opacity: [1, 0.55, 0.35],
      z: [30, 10, 5],
    },
    {
      x: ["8%", "0%", "-8%"],
      y: [14, 0, -6],
      scale: [0.89, 1, 0.87],
      opacity: [0.6, 1, 0.55],
      z: [20, 30, 10],
    },
    {
      x: ["14%", "8%", "0%"],
      y: [24, 14, 0],
      scale: [0.78, 0.89, 1],
      opacity: [0.4, 0.6, 1],
      z: [10, 20, 30],
    },
  ],
};

/* ─────────────────────── hooks ──────────────────────── */

function useIsDesktop() {
  const [desktop, setDesktop] = useState(true);
  useEffect(() => {
    const check = () => setDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return desktop;
}

/* ──────────────────── small helpers ─────────────────── */

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M3.333 8h9.334M9.333 4.667 12.667 8l-3.334 3.333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─────────────────── animated card ──────────────────── */

interface AnimatedCardProps {
  service: (typeof SERVICES)[number];
  index: number;
  scrollProgress: MotionValue<number>;
  transforms: (typeof TRANSFORMS)["desktop"];
}

function AnimatedCard({
  service,
  index,
  scrollProgress,
  transforms,
}: AnimatedCardProps) {
  const Icon = service.icon;
  const t = transforms[index];

  const x = useTransform(scrollProgress, SCROLL_KEYS, t.x);
  const y = useTransform(scrollProgress, SCROLL_KEYS, t.y);
  const scale = useTransform(scrollProgress, SCROLL_KEYS, t.scale);
  const opacity = useTransform(scrollProgress, SCROLL_KEYS, t.opacity);
  const zIndex = useTransform(scrollProgress, SCROLL_KEYS, t.z);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center will-change-transform"
      style={{ x, y, scale, opacity, zIndex }}
    >
      <Link
        href={service.href}
        className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl
                   border border-white/[0.08] bg-[#0a0a0f]/95 backdrop-blur-sm
                   w-[min(560px,82vw)] shadow-2xl shadow-black/50
                   transition-colors duration-300 hover:border-orange-500/20"
        style={{ height: "min(520px, calc(100vh - 250px))" }}
      >
        {/* glass edge glow */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.02]" />

        {/* ── number + icon row ── */}
        <div className="relative z-10 flex shrink-0 items-center justify-between px-5 pt-4 sm:px-7 sm:pt-5">
          <span className="text-xs font-mono font-semibold tracking-wider text-white/20">
            {service.number}
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] transition-colors duration-300 group-hover:border-orange-500/25 group-hover:bg-orange-500/[0.06]">
            <Icon
              size={16}
              strokeWidth={1.5}
              className="text-gray-400 transition-colors duration-300 group-hover:text-orange-400"
            />
          </div>
        </div>

        {/* ── title ── */}
        <h3 className="relative z-10 shrink-0 px-5 pt-2.5 text-xl font-bold tracking-tight text-white sm:px-7 sm:pt-3 sm:text-2xl">
          {service.title}
        </h3>

        {/* ── image (flex-grows to fill available space) ── */}
        <div className="relative mx-4 mt-3 min-h-0 flex-1 overflow-hidden rounded-xl sm:mx-5 sm:mt-4 sm:rounded-2xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="560px"
            priority={index === 0}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        </div>

        {/* ── description + workflow + CTA ── */}
        <div className="relative z-10 shrink-0 px-5 pb-4 pt-3 sm:px-7 sm:pb-5 sm:pt-3.5">
          <p className="mb-2 line-clamp-2 text-sm leading-relaxed text-gray-400">
            {service.description}
          </p>

          {/* workflow */}
          <div className="mb-3 flex items-center gap-2">
            <div className="h-px w-4 bg-orange-500/40" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400/60">
              {service.workflow}
            </span>
          </div>

          {/* CTA */}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-orange-400">
            {service.cta}
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────── reduced-motion fallback (simple grid) ──────── */

function ReducedMotionFallback() {
  return (
    <section id="services" className="scroll-mt-24 bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
            What We Do
          </span>
          <h2 className="mb-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            From idea to{" "}
            <span className="text-orange-500">physical part</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            From early-stage prototypes and reverse engineering to
            production-quality 3D printing, we help transform ideas and existing
            components into accurate physical parts.
          </p>
        </div>

        {/* simple card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.number}
                href={service.href}
                className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0a0f] transition-colors duration-300 hover:border-white/[0.18]"
              >
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.02]" />
                <div className="relative z-10 flex shrink-0 items-center justify-between px-6 pt-5">
                  <span className="text-xs font-mono font-semibold tracking-wider text-white/20">
                    {service.number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                    <Icon size={16} strokeWidth={1.5} className="text-gray-400" />
                  </div>
                </div>
                <h3 className="relative z-10 shrink-0 px-6 pt-3 text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>
                <div className="relative mx-5 mt-3 min-h-[140px] flex-1 overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                </div>
                <div className="relative z-10 shrink-0 px-6 pb-5 pt-3">
                  <p className="mb-2 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-px w-4 bg-orange-500/40" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400/60">
                      {service.workflow}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors group-hover:text-orange-400">
                    {service.cta}
                    <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── progress indicator ───────────────── */

function ProgressBar({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex items-center justify-between px-6 sm:px-10">
      {/* dots */}
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

      {/* counter */}
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

/* ──────────────── section heading ───────────────────── */

function SectionHeading() {
  return (
    <div className="relative z-20 shrink-0 px-4 pt-12 pb-2 text-center sm:px-6 sm:pt-14 sm:pb-3">
      <motion.span
        className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What We Do
      </motion.span>

      <motion.h2
        className="mb-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        From idea to <span className="text-orange-500">physical part</span>.
      </motion.h2>

      <motion.p
        className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        From early-stage prototypes and reverse engineering to
        production-quality 3D printing, we help transform ideas and existing
        components into accurate physical parts.
      </motion.p>
    </div>
  );
}

/* ═══════════════════ MAIN COMPONENT ═══════════════════ */

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useIsDesktop();
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* derive active card index from scroll progress */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Transition midpoints: 0.25 and 0.75
    const idx = v < 0.25 ? 0 : v < 0.75 ? 1 : 2;
    setActiveIndex(idx);
  });

  const transforms = isDesktop ? TRANSFORMS.desktop : TRANSFORMS.mobile;

  /* ── reduced-motion: simple static grid ── */
  if (shouldReduceMotion) return <ReducedMotionFallback />;

  return (
    <section id="services" className="scroll-mt-24">
      {/* outer scroll container — 300vh drives the animation progress */}
      <div
        ref={containerRef}
        className="relative bg-gray-950"
        style={{ height: "300vh" }}
      >
        {/* sticky viewport — fills screen while pinned */}
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          {/* subtle top edge line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* heading (compact, above cards) */}
          <SectionHeading />

          {/* ── card animation area — fills remaining height ── */}
          <div className="relative min-h-0 flex-1">
            {SERVICES.map((service, i) => (
              <AnimatedCard
                key={service.number}
                service={service}
                index={i}
                scrollProgress={scrollYProgress}
                transforms={transforms}
              />
            ))}
          </div>

          {/* progress indicator (bottom) */}
          <div className="relative z-20 shrink-0 pb-5 sm:pb-6">
            <ProgressBar activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
