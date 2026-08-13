"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Upload,
  SearchCheck,
  Settings,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

/* ────────────────────── process data ────────────────────── */

interface Step {
  number: string;
  category: string;
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    number: "01",
    category: "INPUT",
    title: "Share Your Requirement",
    description:
      "Send us your CAD file, scan requirement, reference part, sketch or project idea.",
    meta: "CAD · STL · STEP · OBJ · Physical Part",
    icon: Upload,
  },
  {
    number: "02",
    category: "ENGINEERING",
    title: "Review & Quote",
    description:
      "We review geometry, material, printability and project requirements, then provide a clear quotation.",
    meta: "Material · Cost · Lead Time",
    icon: SearchCheck,
  },
  {
    number: "03",
    category: "PRODUCTION",
    title: "Prepare & Manufacture",
    description:
      "We prepare the digital model, optimize the print setup and manufacture the part using the appropriate process and material.",
    meta: "Prepare · Slice · Print · Inspect",
    icon: Settings,
  },
  {
    number: "04",
    category: "DELIVERY",
    title: "Inspect & Deliver",
    description:
      "The completed part is checked and prepared for pickup or delivery.",
    meta: "Inspect · Finish · Pack · Deliver",
    icon: PackageCheck,
  },
];

const STEP_COUNT = STEPS.length;

/* ──────────────────── small helpers ──────────────────── */

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

/* ─────────────── animated connector line ────────────── */

function ConnectorLine({ horizontal = true }: { horizontal?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  if (horizontal) {
    return (
      <div
        ref={ref}
        className="hidden lg:flex items-center justify-center flex-1 px-2"
      >
        <div className="relative h-px w-full bg-white/[0.06]">
          {/* animated fill */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500/40 to-orange-500/10"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {/* arrow at end */}
          <div className="absolute -right-1 top-1/2 -translate-y-1/2">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path
                d="M1 1l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/15"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // vertical connector (mobile / tablet)
  return (
    <div ref={ref} className="flex justify-start pl-[19px] lg:hidden">
      <div className="relative w-px bg-white/[0.06]" style={{ height: 40 }}>
        <motion.div
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-orange-500/40 to-orange-500/10"
          initial={{ height: "0%" }}
          animate={isInView ? { height: "100%" } : { height: "0%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* ─────────────── step card (desktop) ────────────────── */

function StepCard({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon;

  return (
    <motion.div
      className="relative flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.08 + index * 0.12 }}
    >
      {/* number + icon row */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-4xl font-semibold text-orange-500/80 font-mono leading-none md:text-5xl">
          {step.number}
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
          <Icon
            size={15}
            strokeWidth={1.5}
            className="text-gray-500"
          />
        </div>
      </div>

      {/* category */}
      <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400/50">
        {step.category}
      </span>

      {/* title */}
      <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
        {step.title}
      </h3>

      {/* description */}
      <p className="mb-3 text-sm leading-relaxed text-gray-500 sm:text-base sm:leading-7">
        {step.description}
      </p>

      {/* meta labels */}
      <div className="mt-auto flex items-center gap-1.5 pt-1">
        <div className="h-px w-3 bg-orange-500/30" />
        <span className="text-[10px] font-mono uppercase tracking-wider text-white/20">
          {step.meta}
        </span>
      </div>
    </motion.div>
  );
}

/* ─────────────── step row (mobile) ─────────────────── */

function MobileStep({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon;

  return (
    <motion.div
      className="flex gap-4 lg:hidden"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.06 + index * 0.1 }}
    >
      {/* left: number circle */}
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/[0.06]">
          <span className="text-sm font-semibold font-mono text-orange-400">
            {step.number}
          </span>
        </div>
      </div>

      {/* right: content */}
      <div className="pb-2">
        {/* category */}
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400/50">
          {step.category}
        </span>

        {/* title */}
        <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>

        {/* description */}
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
          {step.description}
        </p>

        {/* meta */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="h-px w-3 bg-orange-500/30" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-white/20">
            {step.meta}
          </span>
        </div>

        {/* icon */}
        <div className="mt-3 flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.05] bg-white/[0.02]">
          <Icon size={13} strokeWidth={1.5} className="text-gray-600" />
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════ MAIN COMPONENT ═══════════════════ */

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // subtle progress bar across the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="scroll-mt-24 relative bg-gray-950 py-24 sm:py-32 lg:py-36"
    >
      {/* top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── heading ─── */}
        <div className="mb-16 text-center sm:mb-20 lg:mb-24">
          <motion.div
            className="mb-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-6 bg-orange-500/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
              Simple Process
            </span>
            <div className="h-px w-6 bg-orange-500/40" />
          </motion.div>

          <motion.h2
            className="mb-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            From idea to <span className="text-orange-500">finished part</span>.
          </motion.h2>

          <motion.p
            className="mx-auto max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            A clear process from your initial requirement to a finished 3D
            printed component.
          </motion.p>
        </div>

        {/* ─── desktop workflow (lg+) ─── */}
        <div className="hidden lg:block">
          {/* subtle global progress bar */}
          <div className="relative mb-12 h-px w-full bg-white/[0.04]">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500/30 via-orange-500/20 to-transparent"
              style={{ width: progressWidth }}
            />
          </div>

          {/* step cards + connectors */}
          <div className="flex items-start">
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex flex-1 items-start">
                <div className="flex-1">
                  <StepCard step={step} index={i} />
                </div>
                {i < STEP_COUNT - 1 && <ConnectorLine horizontal />}
              </div>
            ))}
          </div>
        </div>

        {/* ─── mobile / tablet workflow ─── */}
        <div className="lg:hidden">
          {STEPS.map((step, i) => (
            <div key={step.number}>
              <MobileStep step={step} index={i} />
              {i < STEP_COUNT - 1 && <ConnectorLine horizontal={false} />}
            </div>
          ))}
        </div>

        {/* ─── bottom CTA ─── */}
        <motion.div
          className="mt-16 text-center sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="mb-3 text-sm text-gray-500">
            Have a project in mind?
          </p>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-orange-400"
          >
            Start your project
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* bottom separator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
