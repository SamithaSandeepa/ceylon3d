import { PROCESS_HEADER, PROCESS } from "@/content";
import { SectionHeader, ProcessStep } from "@/components/ui";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader data={PROCESS_HEADER} />

        <div className="grid md:grid-cols-3 gap-8">
          {PROCESS.map((p, i) => (
            <ProcessStep
              key={p.step}
              process={p}
              showConnector={i < PROCESS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
