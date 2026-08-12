import { SERVICES_HEADER, SERVICES } from "@/content";
import { SectionHeader, ServiceCard } from "@/components/ui";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader data={SERVICES_HEADER} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
