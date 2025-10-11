/**
 * Converts a string into a "slug" - a URL-friendly version.
 * E.g., "Disaster Response!" becomes "disaster-response".
 *
 * @param text The input string to slugify.
 * @returns The slugified string.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
