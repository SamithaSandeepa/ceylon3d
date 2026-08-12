import type { StatItem as StatItemType } from "@/types";

interface StatItemProps {
  stat: StatItemType;
  /** Whether to show a left border divider */
  showDivider?: boolean;
}

export function StatItem({ stat, showDivider = false }: StatItemProps) {
  return (
    <div className={showDivider ? "border-l border-gray-700 pl-8" : ""}>
      <div className={`text-3xl font-black ${showDivider ? "text-white" : "text-orange-400"}`}>
        {stat.value}
      </div>
      <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
    </div>
  );
}
