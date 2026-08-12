import type { GalleryItem } from "@/types";
import type { SectionHeaderData } from "@/types";

export const GALLERY_HEADER: SectionHeaderData = {
  subtitle: "Our Work",
  headingPrefix: "Sample ",
  headingHighlight: "Gallery",
  description:
    "A glimpse of the precision and variety we deliver for our clients.",
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { label: "Mechanical Gear Assembly", color: "from-orange-900 to-gray-900", tag: "Engineering" },
  { label: "Architectural House Model", color: "from-amber-900 to-gray-900", tag: "Architecture" },
  { label: "Custom Phone Stand", color: "from-orange-800 to-gray-900", tag: "Consumer" },
  { label: "School Anatomy Model", color: "from-yellow-900 to-gray-900", tag: "Education" },
  { label: "Trophy Design", color: "from-amber-800 to-gray-900", tag: "Awards" },
  { label: "Replacement Bracket", color: "from-orange-700 to-gray-900", tag: "Parts" },
];
