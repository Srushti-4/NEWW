/* The site's public URL, resolved at build time (server-side only).
   Priority:
   1. NEXT_PUBLIC_SITE_URL — set this in Vercel → Settings → Environment Variables
      once you have a custom domain (e.g. https://srushtimohire.com).
   2. VERCEL_PROJECT_PRODUCTION_URL — provided automatically by Vercel
      (e.g. neww-nn1v.vercel.app), so the free link works with zero setup.
   3. localhost for local development. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '');
