"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function VisualBreak() {
  return (
    <section className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] w-full overflow-hidden bg-gray-950 flex items-center">
      {/* Top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* ── Background Immersive Manufacturing Image ── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/services/3d-printing.jpg"
          alt="Industrial 3D printing process producing a mechanical engineering component at Ceylon 3D"
          fill
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-center"
        />

        {/* Directional gradient overlay: darker on the left for crisp typography, subtle on the right */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/75 to-gray-950/20 lg:via-gray-950/50" />
        
        {/* Top/bottom edge fades */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/40" />
      </motion.div>

      {/* ── Editorial Content Overlay ── */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/[0.08] px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-orange-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            DIGITAL &rarr; PHYSICAL
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Precision at <br />
            <span className="text-orange-500">every layer</span>.
          </h2>

          {/* Description */}
          <p className="mb-8 text-base sm:text-lg leading-relaxed text-gray-300">
            From CAD geometry and reverse-engineered scans to functional,
            production-grade physical components.
          </p>

          {/* Action Link */}
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/[0.12] hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <span>Explore our work</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
}
