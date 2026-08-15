/**
 * Gallery-specific API functions.
 *
 * Fetches data from Directus and normalizes it into the GalleryCategory /
 * GalleryImage shapes expected by the existing UI components.
 */

import type { GalleryCategory, GalleryImage } from "@/types/gallery";
import type {
  DirectusCategory,
  DirectusGalleryItem,
  DirectusResponse,
} from "@/types/directus-gallery";
import { fetchDirectus, getDirectusAssetUrl } from "./directus";

// ─── Field selection (never use fields=*.*) ─────────────────────────────────

const GALLERY_ITEM_FIELDS = [
  "id",
  "title",
  "description",
  "category.id",
  "category.name",
  "category.slug",
  "featured_image.id",
  "featured_image.width",
  "featured_image.height",
  "images.directus_files_id.id",
  "images.directus_files_id.width",
  "images.directus_files_id.height",
  "images.directus_files_id.title",
] as const;

// ─── Normalizer ─────────────────────────────────────────────────────────────

/**
 * Flatten a list of Directus gallery items (all belonging to the same
 * category) into a deduplicated array of GalleryImage objects.
 *
 * For each gallery_item the featured_image comes first, followed by the
 * junction images. File IDs that have already been seen are skipped.
 */
function normalizeGalleryItems(
  items: DirectusGalleryItem[],
): GalleryImage[] {
  const seen = new Set<string>();
  const images: GalleryImage[] = [];

  for (const item of items) {
    // 1. Featured image
    if (item.featured_image?.id && !seen.has(item.featured_image.id)) {
      seen.add(item.featured_image.id);
      images.push({
        id: item.featured_image.id,
        src: getDirectusAssetUrl(item.featured_image.id),
        alt: item.title,
        title: item.title,
        description: item.description ?? undefined,
      });
    }

    // 2. Junction images
    if (item.images) {
      for (const junction of item.images) {
        const file = junction.directus_files_id;
        if (file?.id && !seen.has(file.id)) {
          seen.add(file.id);
          images.push({
            id: file.id,
            src: getDirectusAssetUrl(file.id),
            alt: file.title || item.title,
            title: file.title || item.title,
            description: item.description ?? undefined,
          });
        }
      }
    }
  }

  return images;
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Fetch all published categories with their gallery images from Directus.
 *
 * Returns data in the exact GalleryCategory[] shape used by existing UI
 * components, so no downstream changes are required.
 */
export async function fetchCategories(): Promise<GalleryCategory[]> {
  // 1. Fetch published categories (sorted by sort, then name)
  const categoryParams = new URLSearchParams();
  categoryParams.append("filter[status][_eq]", "published");
  categoryParams.append("sort", "sort,name");

  const { data: rawCategories } = await fetchDirectus<
    DirectusResponse<DirectusCategory>
  >("/items/categories", categoryParams);

  // 2. For each category, fetch its gallery items
  const categories: GalleryCategory[] = [];

  for (const cat of rawCategories) {
    const itemParams = new URLSearchParams();
    itemParams.append("filter[status][_eq]", "published");
    itemParams.append("filter[category][slug][_eq]", cat.slug);
    for (const field of GALLERY_ITEM_FIELDS) {
      itemParams.append("fields[]", field);
    }

    const { data: rawItems } = await fetchDirectus<
      DirectusResponse<DirectusGalleryItem>
    >("/items/gallery_items", itemParams);

    const images = normalizeGalleryItems(rawItems);

    // Skip categories with zero published images
    if (images.length === 0) continue;

    categories.push({
      id: String(cat.id),
      name: cat.name,
      slug: cat.slug,
      coverImage: images[0].src, // first featured_image as cover
      images,
    });
  }

  return categories;
}
