import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui";
import { SERVICES } from "../services.data";

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

export function ServicesReducedMotion() {
  return (
    <section id="services" className="scroll-mt-24 bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          headingPrefix="From idea to"
          headingHighlight="physical part"
          headingSuffix="."
          description="From early-stage prototypes and reverse engineering to production-quality 3D printing, we help transform ideas and existing components into accurate physical parts."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.number}
                href={service.href}
                className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0a0f] transition-colors duration-300 hover:border-white/[0.18]"
              >
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.02]" />
                <div className="relative z-10 flex shrink-0 items-center justify-between px-6 pt-5">
                  <span className="text-xs font-mono font-semibold tracking-wider text-white/20">
                    {service.number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                    <Icon size={16} strokeWidth={1.5} className="text-gray-400" />
                  </div>
                </div>
                <h3 className="relative z-10 shrink-0 px-6 pt-3 text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>
                <div className="relative mx-5 mt-3 min-h-[140px] flex-1 overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                </div>
                <div className="relative z-10 shrink-0 px-6 pb-5 pt-3">
                  <p className="mb-2 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-px w-4 bg-orange-500/40" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400/60">
                      {service.workflow}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors group-hover:text-orange-400">
                    {service.cta}
                    <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
