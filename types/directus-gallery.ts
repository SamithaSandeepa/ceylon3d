/**
 * Raw Directus API response types.
 *
 * These types mirror the Directus REST schema exactly and are only used in
 * the API/normalization layer (lib/). UI components never import these —
 * they work exclusively with GalleryCategory / GalleryImage from types/gallery.
 */

// ─── Directus file (from directus_files collection) ─────────────────────────

export type DirectusFile = {
  id: string;
  width: number | null;
  height: number | null;
  title: string | null;
};

// ─── Category ───────────────────────────────────────────────────────────────

export type DirectusCategory = {
  id: number;
  name: string;
  slug: string;
  status: string;
  sort: number | null;
};

// ─── Junction row: gallery_item ↔ directus_files ────────────────────────────

export type DirectusGalleryItemImage = {
  directus_files_id: DirectusFile;
};

// ─── Gallery item ───────────────────────────────────────────────────────────

export type DirectusGalleryItem = {
  id: number;
  status: string;
  title: string;
  description: string | null;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  featured_image: {
    id: string;
    width: number | null;
    height: number | null;
  };
  images: DirectusGalleryItemImage[];
};

// ─── Generic Directus list response wrapper ─────────────────────────────────

export type DirectusResponse<T> = {
  data: T[];
};
