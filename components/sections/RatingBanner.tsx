"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { RATING_BANNER } from "@/content";

export function RatingBanner() {
  return (
    <section className="relative bg-gray-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10 lg:p-12 shadow-2xl shadow-black/20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-8 sm:gap-12">
            
            {/* Left: Google Header & Stars */}
            <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Google Reviews
              </div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-4xl font-bold text-white tracking-tight">{SITE_CONFIG.googleRating}</span>
                <span className="text-2xl text-yellow-500 tracking-widest" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
              </div>
              <div className="text-sm font-medium text-white/70">
                {RATING_BANNER.headline}
              </div>
            </div>

            {/* Middle: Divider */}
            <div className="hidden sm:block w-px bg-white/[0.06] self-stretch" />
            <div className="sm:hidden h-px w-16 bg-white/[0.06]" />

            {/* Right: Text */}
            <div className="flex-1 flex flex-col justify-center sm:py-1">
              <p className="text-base leading-relaxed text-gray-400">
                {RATING_BANNER.description}
              </p>
              {/* Note: No actual Google Business URL exists in the project config yet.
                  Once provided, a CTA like "Read our Google reviews ↗" can be added here. */}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
