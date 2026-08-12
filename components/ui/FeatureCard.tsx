import type { WhyUsFeature } from "@/types";

interface FeatureCardProps {
  feature: WhyUsFeature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="card-hover bg-gray-900 border border-gray-800 hover:border-orange-500/40 rounded-2xl p-5">
      <div className="text-3xl mb-3">{feature.icon}</div>
      <h4 className="text-white font-bold mb-2">{feature.title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
    </div>
  );
}
