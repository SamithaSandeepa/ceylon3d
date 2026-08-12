"use client";

import { MapPin, Phone, Clock3, ArrowUpRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { BUSINESS_HOURS } from "@/content";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-gray-950 py-24 sm:py-32 lg:py-36">
      {/* top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          
          {/* ─── LEFT COLUMN: Info ─── */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-orange-500/50" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
                  Get In Touch
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Let’s build your <br className="hidden sm:block" />
                <span className="text-orange-500">next part.</span>
              </h2>
              <p className="text-base leading-7 text-gray-400">
                Tell us what you need, share your design or reference part, and we’ll help you determine the next step.
              </p>
            </div>

            <div className="space-y-10">
              {/* Phone */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Phone size={14} className="text-orange-400/70" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Direct Contact
                  </span>
                </div>
                <Link 
                  href={SITE_CONFIG.phoneHref}
                  className="group inline-block transition-opacity hover:opacity-80"
                >
                  <div className="text-2xl font-semibold text-white tracking-wide">
                    {SITE_CONFIG.phone}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm font-medium text-orange-400">
                    Call or WhatsApp
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </div>

              <div className="h-px w-full bg-white/[0.04]" />

              {/* Location */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <MapPin size={14} className="text-orange-400/70" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Workshop
                  </span>
                </div>
                <div className="text-base text-gray-300">
                  {SITE_CONFIG.address.line1}
                  <br />
                  {SITE_CONFIG.address.line2}
                </div>
              </div>

              <div className="h-px w-full bg-white/[0.04]" />

              {/* Hours */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Clock3 size={14} className="text-orange-400/70" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Opening Hours
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {BUSINESS_HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-400">{h.day}</span>
                      <span className={h.isClosed ? "text-gray-600" : "font-medium text-orange-400"}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Project CTA Panel ─── */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12 h-full flex flex-col justify-center">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/80">
                Start a Project
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Have a design, part or idea?
              </h3>
              <p className="mb-10 text-base leading-relaxed text-gray-400">
                Share your requirement with us and we’ll help determine the best prototyping, scanning or printing approach. We review geometry, material, and requirements before starting any job.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row mb-12">
                <Link
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-[0.98]"
                >
                  <Send size={16} />
                  Call or WhatsApp
                </Link>
                
                {/* Note: If an email is added to SITE_CONFIG, this can be updated to mailto: */}
                <Link
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-white/[0.06] active:scale-[0.98]"
                >
                  Contact Us
                </Link>
              </div>

              {/* Helper text */}
              <div className="mt-auto rounded-xl border border-orange-500/10 bg-orange-500/[0.02] p-5">
                <div className="mb-2 text-xs font-semibold text-white/60">
                  Helpful to include when messaging:
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-orange-400/60">
                  <span>CAD file</span>
                  <span className="text-white/10">·</span>
                  <span>Dimensions</span>
                  <span className="text-white/10">·</span>
                  <span>Quantity</span>
                  <span className="text-white/10">·</span>
                  <span>Intended use</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
