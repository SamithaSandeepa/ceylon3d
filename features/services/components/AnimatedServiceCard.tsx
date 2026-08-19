"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ServiceItem } from "../services.types";
import { SCROLL_KEYS, type CardTransform } from "../services.motion";

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

export interface AnimatedServiceCardProps {
  service: ServiceItem;
  index: number;
  scrollProgress: MotionValue<number>;
  transforms: CardTransform[];
}

export function AnimatedServiceCard({
  service,
  index,
  scrollProgress,
  transforms,
}: AnimatedServiceCardProps) {
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
        <div className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.02]" />

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

        <h3 className="relative z-10 shrink-0 px-5 pt-2.5 text-xl font-bold tracking-tight text-white sm:px-7 sm:pt-3 sm:text-2xl">
          {service.title}
        </h3>

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

        <div className="relative z-10 shrink-0 px-5 pb-4 pt-3 sm:px-7 sm:pb-5 sm:pt-3.5">
          <p className="mb-2 line-clamp-2 text-sm leading-relaxed text-gray-400">
            {service.description}
          </p>

          <div className="mb-3 flex items-center gap-2">
            <div className="h-px w-4 bg-orange-500/40" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400/60">
              {service.workflow}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-orange-400">
            {service.cta}
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
