import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card-hover bg-gray-950 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-6">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
      <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full border border-orange-500/20">
        {service.highlight}
      </span>
    </div>
  );
}
