/**
 * Base URL for the site: canonical, Open Graph, sitemap, robots.
 * - Set NEXT_PUBLIC_SITE_URL when you have a custom domain.
 * - Otherwise we use VERCEL_URL (set automatically on Vercel) or localhost for dev.
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
