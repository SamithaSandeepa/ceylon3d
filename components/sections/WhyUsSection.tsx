import { WHY_US_HEADING, WHY_US_DESCRIPTION, WHY_US_LOCATION, WHY_US } from "@/content";
import { FeatureCard } from "@/components/ui";

export function WhyUsSection() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
            {WHY_US_HEADING.subtitle}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6">
            {WHY_US_HEADING.headingPrefix}
            <span className="gradient-text">{WHY_US_HEADING.headingHighlight}</span>
            {WHY_US_HEADING.headingSuffix ?? ""}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {WHY_US_DESCRIPTION}
          </p>
          <div className="flex items-center gap-4 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
            <span className="text-4xl">{WHY_US_LOCATION.icon}</span>
            <div>
              <div className="text-white font-semibold">{WHY_US_LOCATION.title}</div>
              <div className="text-gray-400 text-sm">{WHY_US_LOCATION.line1}</div>
              <div className="text-gray-400 text-sm">{WHY_US_LOCATION.line2}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {WHY_US.map((w) => (
            <FeatureCard key={w.title} feature={w} />
          ))}
        </div>
      </div>
    </section>
  );
}
