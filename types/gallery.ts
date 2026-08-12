export interface GalleryItem {
  /** Display label */
  label: string;
  /** Tailwind gradient classes (e.g., "from-orange-900 to-gray-900") */
  color: string;
  /** Category tag */
  tag: string;
  /** Optional image path (relative to /public) */
  image?: string;
}
