"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

export function PreFooterCTA() {
  return (
    <section className="relative bg-gray-950 overflow-hidden">
      {/* Top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <motion.div
          className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.08]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[280px] sm:h-[340px] lg:h-auto lg:min-h-[420px]">
              <Image
                src="/images/about/detail.jpg"
                alt="Precision 3D printed component being measured with calipers at Ceylon 3D workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />

              {/* Gradient overlay on mobile (bottom) and desktop (right edge) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0a0a0f]" />
            </div>

            {/* Content Side */}
            <div className="relative flex flex-col justify-center bg-[#0a0a0f] p-8 sm:p-10 lg:p-14">
              {/* Subtle background glow */}
              <div className="pointer-events-none absolute -left-20 -top-20 w-60 h-60 rounded-full bg-orange-500/[0.06] blur-3xl" />

              <div className="relative z-10">
                <span className="mb-4 inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-400/80">
                  HAVE A PART, DESIGN OR IDEA?
                </span>

                <h2 className="mb-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl">
                  Let&apos;s make it{" "}
                  <span className="text-orange-500">real</span>.
                </h2>

                <p className="mb-8 max-w-md text-base leading-relaxed text-gray-400">
                  Share your requirement and we&apos;ll help determine the right
                  prototyping, scanning or printing approach.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/#contact"
                    className="glow-btn inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange-400"
                  >
                    Start a Project
                    <ArrowUpRight size={16} />
                  </Link>

                  <Link
                    href={SITE_CONFIG.phoneHref}
                    className="group/phone inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-orange-500/50 hover:bg-white/[0.08] hover:text-orange-400"
                  >
                    <Phone size={15} className="text-orange-400" />
                    <span>Call or WhatsApp</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
