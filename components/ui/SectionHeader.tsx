import type { SectionHeaderData } from "@/types";

interface SectionHeaderProps {
  data: SectionHeaderData;
}

export function SectionHeader({ data }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
        {data.subtitle}
      </span>
      <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
        {data.headingPrefix}
        <span className="gradient-text">{data.headingHighlight}</span>
        {data.headingSuffix ?? ""}
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        {data.description}
      </p>
    </div>
  );
}
