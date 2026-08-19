"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import {
  SERVICES,
  TRANSFORMS,
  useIsDesktop,
  AnimatedServiceCard,
  ServicesProgress,
  ServicesReducedMotion,
} from "@/features/services";

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
  if (shouldReduceMotion) return <ServicesReducedMotion />;

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
          <SectionHeader
            eyebrow="What We Do"
            headingPrefix="From idea to"
            headingHighlight="physical part"
            headingSuffix="."
            description="From early-stage prototypes and reverse engineering to production-quality 3D printing, we help transform ideas and existing components into accurate physical parts."
            className="relative z-20 shrink-0 px-4 pt-12 pb-2 text-center sm:px-6 sm:pt-14 sm:pb-3"
          />

          {/* ── card animation area — fills remaining height ── */}
          <div className="relative min-h-0 flex-1">
            {SERVICES.map((service, i) => (
              <AnimatedServiceCard
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
            <ServicesProgress activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
