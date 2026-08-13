"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

/* ─────────────────── small helpers ─────────────────── */

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

/* ════════════════════ MAIN COMPONENT ════════════════════ */

export function WhyUsSection() {
  return (
    <section id="about" className="scroll-mt-24 relative bg-gray-950 py-24 sm:py-32 lg:py-36">
      {/* top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── editorial hero: text + image ─── */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-start">
          {/* ── left column: text ── */}
          <div className="lg:col-span-5 xl:col-span-5">
            {/* eyebrow */}
            <motion.div
              className="mb-6 flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-px w-8 bg-orange-500/50" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
                About Ceylon 3D
              </span>
            </motion.div>

            {/* heading */}
            <motion.h2
              className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Engineering ideas
              <br />
              into <span className="text-orange-500">real things</span>.
            </motion.h2>

            {/* company story */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="text-base leading-7 text-gray-400">
                Ceylon 3D provides professional 3D printing, prototyping and
                digital manufacturing services from Makandura, Sri Lanka. We work
                with individuals, students, designers and businesses to transform
                concepts, CAD models and existing components into accurate physical
                parts.
              </p>
              <p className="text-base leading-7 text-gray-400">
                Our approach combines practical engineering support with accessible
                local manufacturing — helping customers move from an idea or
                digital design to a finished physical product.
              </p>
            </motion.div>

            {/* location + CTA */}
            <motion.div
              className="mt-8 space-y-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              {/* location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-orange-400/70"
                />
                <div className="text-sm leading-relaxed text-gray-500">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    Our Workshop
                  </span>
                  <p className="mt-1 text-gray-400">
                    {SITE_CONFIG.address.line1}
                  </p>
                  <p className="text-gray-400">{SITE_CONFIG.address.line2}</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-orange-400"
              >
                Visit our workshop
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* ── right column: imagery ── */}
          <motion.div
            className="relative lg:col-span-7 xl:col-span-7"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* main workshop image */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] lg:rounded-3xl">
              <Image
                src="/images/about/workshop.jpeg"
                alt="Ceylon 3D workshop — 3D printers and precision-printed engineering components on a workbench"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 58vw"
                priority
              />
              {/* subtle bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-950/60 to-transparent" />

              {/* location label on image */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-black/50 px-3 py-1.5 backdrop-blur-sm sm:bottom-5 sm:left-5">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Makandura, Sri Lanka
                </span>
              </div>
            </div>

            {/* detail image — overlapping bottom-right */}
            <div className="absolute -bottom-6 -right-2 z-10 hidden w-[180px] overflow-hidden rounded-xl border border-white/[0.08] shadow-2xl shadow-black/40 sm:block sm:w-[200px] lg:-bottom-8 lg:-right-4 lg:w-[220px]">
              <div className="relative aspect-square">
                <Image
                  src="/images/about/detail.jpg"
                  alt="Close-up of a precision 3D printed component being measured with calipers"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* bottom separator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
