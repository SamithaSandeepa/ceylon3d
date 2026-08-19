"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { SectionHeader } from "@/components/ui";

export function WhyUsSection() {
  return (
    <section id="about" className="scroll-mt-24 relative bg-gray-950 py-24 sm:py-32 lg:py-36 overflow-hidden">
      {/* Top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Editorial Hero Composition: Text + Overlapping Image Structure ─── */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* ── Left Column: Editorial Typography & Story ── */}
          <div className="lg:col-span-5">
            {/* Header */}
            <SectionHeader
              eyebrow="About Ceylon 3D"
              heading={
                <>
                  Engineering ideas
                  <br />
                  into <span className="text-orange-500">real things</span>.
                </>
              }
              align="left"
              className="mb-6"
            />

            {/* Story Paragraphs */}
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

            {/* Location + Direct Workshop CTA */}
            <motion.div
              className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-orange-400/80"
                />
                <div className="text-sm leading-relaxed text-gray-500">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 block">
                    Our Workshop
                  </span>
                  <p className="text-gray-300 font-medium mt-0.5">
                    {SITE_CONFIG.address.line1}
                  </p>
                  <p className="text-gray-500 text-xs">{SITE_CONFIG.address.line2}</p>
                </div>
              </div>

              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-orange-400 shrink-0"
              >
                Visit workshop
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* ── Right Column: Overlapping Editorial Imagery ── */}
          <motion.div
            className="relative lg:col-span-7"
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Dominant Workshop Image Container */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0f] lg:rounded-3xl shadow-2xl shadow-black/60">
              <Image
                src="/images/about/workshop.jpeg"
                alt="Ceylon 3D workshop — 3D printers and precision-printed engineering components on a workbench"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              
              {/* Subtle directional gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />

              {/* Workshop Tag Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 backdrop-blur-md border border-white/[0.06]">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Active Fabrication Facility
                </span>
              </div>

              {/* Location pill */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-[11px] font-mono uppercase tracking-wider text-white/50 bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">
                Makandura, Sri Lanka
              </div>
            </div>

            {/* Overlapping Precision Detail Inset */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 z-10 w-[170px] sm:w-[210px] lg:w-[230px] overflow-hidden rounded-xl sm:rounded-2xl border border-white/[0.12] bg-[#0a0a0f] shadow-2xl shadow-black/80 transition-transform duration-500 hover:-translate-y-1">
              <div className="relative aspect-square">
                <Image
                  src="/images/about/detail.jpg"
                  alt="Close-up of a precision 3D printed component being measured with calipers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 170px, 230px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/80">
                  <span>TOLERANCE CHECK</span>
                  <span className="text-orange-400 font-bold">±0.1mm</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom separator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
