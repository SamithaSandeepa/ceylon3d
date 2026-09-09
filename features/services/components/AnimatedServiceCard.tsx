"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ServiceItem } from "../services.types";
import { SCROLL_KEYS, type CardTransform } from "../services.motion";

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
      {/*
       * Non-interactive article — no Link, no cursor-pointer.
       * Subtle hover border brightening is purely presentational (visual depth),
       * not a navigation signal.
       */}
      <article
        className="relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl
                   border border-white/[0.08] bg-[#0a0a0f]/95 backdrop-blur-sm
                   w-[min(560px,82vw)] shadow-2xl shadow-black/50
                   transition-colors duration-300 hover:border-white/[0.14]"
        style={{ height: "min(520px, calc(100vh - 250px))" }}
      >
        <div className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.02]" />

        {/* Header row: service number + icon */}
        <div className="relative z-10 flex shrink-0 items-center justify-between px-5 pt-4 sm:px-7 sm:pt-5">
          <span className="text-xs font-mono font-semibold tracking-wider text-white/20">
            {service.number}
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
            <Icon
              size={16}
              strokeWidth={1.5}
              className="text-gray-400"
            />
          </div>
        </div>

        {/* Service title */}
        <h3 className="relative z-10 shrink-0 px-5 pt-2.5 text-xl font-bold tracking-tight text-white sm:px-7 sm:pt-3 sm:text-2xl">
          {service.title}
        </h3>

        {/* Service image */}
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

        {/* Description + workflow */}
        <div className="relative z-10 shrink-0 px-5 pb-4 pt-3 sm:px-7 sm:pb-5 sm:pt-3.5">
          <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-400">
            {service.description}
          </p>

          <div className="flex items-center gap-2">
            <div className="h-px w-4 bg-orange-500/40" aria-hidden="true" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400/60">
              {service.workflow}
            </span>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
