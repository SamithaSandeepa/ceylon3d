"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { SITE_CONFIG } from "@/config/site";
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL, type GoogleReview } from "@/content/reviews";
import { SectionHeader } from "@/components/ui";

/* ──────────────────── Google G Icon ──────────────────── */

function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

/* ──────────────── Helper: Initials Avatar ─────────────── */

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "C";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* ───────────────── Helper: Star Rating ────────────────── */

function StarRating({ rating = 5, size = "sm" }: { rating?: number; size?: "sm" | "lg" }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));
  const textSize = size === "lg" ? "text-xl sm:text-2xl" : "text-sm";

  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {stars.map((filled, idx) => (
        <span key={idx} className={`${textSize} ${filled ? "text-yellow-400" : "text-gray-700"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

/* ────────────── Single Review Card Component ──────────── */

function ReviewCard({ review }: { review: GoogleReview }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const initials = getInitials(review.name);
  const isLongText = review.text.length > 130;

  return (
    <div className="group relative flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-[#0a0a0f]/90 p-6 sm:p-7 shadow-xl shadow-black/30 transition-all duration-300 hover:border-orange-500/30 hover:-translate-y-1">
      {/* Top row: Avatar + User Info + Google G */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {review.avatar ? (
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                <Image src={review.avatar} alt={review.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-xs font-bold text-orange-400 shrink-0">
                {initials}
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold text-white leading-tight line-clamp-1">
                {review.name}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
            </div>
          </div>

          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] shrink-0">
            <GoogleGIcon className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Rating stars */}
        <div className="mb-3">
          <StarRating rating={review.rating} />
        </div>

        {/* Review text */}
        <p className={`text-sm leading-relaxed text-gray-300 ${!isExpanded && isLongText ? "line-clamp-4" : ""}`}>
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Read More button if text is long */}
      {isLongText && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors self-start focus:outline-none focus-visible:underline"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

/* ════════════════════ MAIN SECTION ════════════════════ */

export function RatingBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: GOOGLE_REVIEWS.length > 1,
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("init", onInit);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("init", onInit);
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <section id="reviews" className="scroll-mt-24 relative bg-gray-950 py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ─── Header & Google Rating Summary ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          {/* Left Heading */}
          <SectionHeader
            eyebrow="CUSTOMER REVIEWS"
            headingPrefix="What our"
            headingHighlight="customers say"
            headingSuffix="."
            description="Feedback from customers who trusted Ceylon 3D with their parts, prototypes and custom printing requirements."
            align="left"
            className="max-w-2xl"
          />

          {/* Right Google Rating Badge */}
          <motion.div
            className="shrink-0 flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <GoogleGIcon className="w-5 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-2xl font-black text-white">{SITE_CONFIG.googleRating}</span>
                <StarRating rating={5} size="sm" />
              </div>
              <p className="text-xs text-gray-400 mt-1">Rated 5.0 on Google Reviews</p>
            </div>
          </motion.div>
        </div>

        {/* ─── Review Cards Carousel ─── */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6 backface-hidden">
            {GOOGLE_REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                className="min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[48%] lg:basis-[32%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Controls & Bottom Actions ─── */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/[0.04]">
          {/* View on Google Link */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-orange-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm py-1"
            aria-label="View all reviews on Google (opens in new tab)"
          >
            <span>View all reviews on Google</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          {/* Carousel Navigation Buttons & Counter */}
          {GOOGLE_REVIEWS.length > 1 && (
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono tracking-wider text-white/30">
                {String(selectedIndex + 1).padStart(2, "0")} / {String(scrollSnaps.length || GOOGLE_REVIEWS.length).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={scrollPrev}
                  aria-label="Previous review"
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 text-white hover:border-orange-500/50 hover:text-orange-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={scrollNext}
                  aria-label="Next review"
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 text-white hover:border-orange-500/50 hover:text-orange-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
