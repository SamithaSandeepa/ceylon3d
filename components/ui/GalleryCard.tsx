import type { GalleryItem } from "@/types";

interface GalleryCardProps {
  item: GalleryItem;
}

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <div
      className={`card-hover relative h-56 rounded-2xl bg-gradient-to-br ${item.color} border border-gray-800 overflow-hidden group cursor-pointer`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-orange-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <span className="text-white font-semibold text-center">{item.label}</span>
        <span className="bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full border border-orange-500/30">
          {item.tag}
        </span>
      </div>
      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors" />
    </div>
  );
}
