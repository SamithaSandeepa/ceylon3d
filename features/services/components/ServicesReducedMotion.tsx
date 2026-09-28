import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { SERVICES } from "../services.data";

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
              /*
               * Non-interactive article — matches the animated version's
               * informational-only presentation (no Link, no CTA).
               */
              <article
                key={service.number}
                className="relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0a0f]"
              >
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.02]" />

                {/* Header: number + icon */}
                <div className="relative z-10 flex shrink-0 items-center justify-between px-6 pt-5">
                  <span className="text-xs font-mono font-semibold tracking-wider text-white/20">
                    {service.number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                    <Icon size={16} strokeWidth={1.5} className="text-gray-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 shrink-0 px-6 pt-3 text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>

                {/* Image */}
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

                {/* Description + workflow */}
                <div className="relative z-10 shrink-0 px-6 pb-5 pt-3">
                  <p className="mb-3 text-sm leading-relaxed text-gray-400">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
