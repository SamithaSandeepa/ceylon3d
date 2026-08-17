import { HERO_CONTENT } from "@/content";
import { GlowButton } from "@/components/ui";

export function HeroSection() {
  const { eyebrow, headline, subtext, primaryCTA, secondaryCTA, capabilities } = HERO_CONTENT;

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-gray-950">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] lg:object-right"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/about/workshop.jpeg"
      />

      {/* Video Overlays */}
      {/* Mobile: darker everywhere, Desktop: gradient left to right */}
      <div className="absolute inset-0 bg-gray-950/80 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-950/95 sm:via-gray-950/70 sm:to-transparent" />
      {/* Subtle vertical gradient for text readability near top/bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-32 pt-40">
        <div className="section-fade max-w-3xl text-left">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            <div className="w-8 h-[2px] bg-orange-500" />
            {eyebrow}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.05] sm:leading-[1.05] mb-6">
            {headline.prefix}
            <span className="text-orange-500">{headline.highlight}</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            {subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <GlowButton href={primaryCTA.href}>
              {primaryCTA.label}
            </GlowButton>
            <a
              href={secondaryCTA.href}
              className="text-white hover:text-orange-400 font-semibold text-lg transition-colors flex items-center gap-2 group"
            >
              {secondaryCTA.label}
            </a>
          </div>

          {/* Capabilities */}
          <div className="mt-20 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold tracking-widest text-gray-500 uppercase">
            {capabilities.map((cap, i) => (
              <div key={cap} className="flex items-center gap-4">
                <span>{cap}</span>
                {i < capabilities.length - 1 && (
                  <span className="text-gray-700">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

