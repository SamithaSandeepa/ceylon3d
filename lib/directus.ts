/**
 * Directus client utilities.
 *
 * Low-level helpers for talking to the Directus REST API.
 * Higher-level, gallery-specific functions live in lib/gallery-api.ts.
 */

// ─── Constants ──────────────────────────────────────────────────────────────

/**
 * Directus base URL.
 * Override by setting NEXT_PUBLIC_DIRECTUS_URL in your .env.local file.
 * Example: NEXT_PUBLIC_DIRECTUS_URL=https://cms.example.com
 */
const DIRECTUS_BASE_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL ??
  "https://cms.print3d.hitinnovations.lk";

// ─── Asset URL helper ───────────────────────────────────────────────────────

/**
 * Build a full Directus asset URL from a file ID.
 *
 * @example getDirectusAssetUrl("abc-123") → "https://cms.print3d.hitinnovations.lk/assets/abc-123"
 */
export function getDirectusAssetUrl(fileId: string): string {
  return `${DIRECTUS_BASE_URL}/assets/${fileId}`;
}

// ─── Generic fetch wrapper ──────────────────────────────────────────────────

/**
 * Fetch JSON from a Directus REST endpoint.
 *
 * @param endpoint  Path relative to the base URL (e.g. "/items/categories").
 * @param params    URLSearchParams-compatible entries to append as query string.
 *                  Duplicate keys are supported (e.g. multiple `fields[]` values).
 */
export async function fetchDirectus<T>(
  endpoint: string,
  params?: URLSearchParams,
): Promise<T> {
  const url = new URL(endpoint, DIRECTUS_BASE_URL);

  if (params) {
    // Merge provided params into the URL
    params.forEach((value, key) => {
      url.searchParams.append(key, value);
    });
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(
      `Directus API error: ${res.status} ${res.statusText} — ${endpoint}`,
    );
  }

  return res.json() as Promise<T>;
}
