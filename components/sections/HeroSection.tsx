import { HERO_CONTENT } from "@/content";
import { Badge, GlowButton, OutlineButton, StatItem } from "@/components/ui";

export function HeroSection() {
  const { badgeText, headline, subtext, primaryCTA, secondaryCTA, stats } = HERO_CONTENT;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center">
        <div className="section-fade">
          <div className="mb-6 flex justify-center">
            <Badge text={badgeText} showDot />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            {headline.line1}
            <br />
            <span className="gradient-text">{headline.highlight}</span>
            <br />
            {headline.line3}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {subtext}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <GlowButton
              href={primaryCTA.href}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              {primaryCTA.label}
            </GlowButton>
            <OutlineButton href={secondaryCTA.href}>
              {secondaryCTA.label}
            </OutlineButton>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-12">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} showDivider={i > 0} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs z-10">
        <span>Scroll down</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

