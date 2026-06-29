/**
 * Privacy-friendly analytics using Umami.
 *
 * To enable:
 * 1. Sign up at https://cloud.umami.is (free tier available)
 * 2. Add your site and get the website ID
 * 3. Replace WEBSITE_ID below with your actual ID
 * 4. Uncomment the Script tag
 *
 * Umami is GDPR-compliant by default — no cookie banner required.
 */

import Script from 'next/script';

// Set your Umami website ID here after signing up
const UMAMI_WEBSITE_ID = '';
const UMAMI_SRC = 'https://cloud.umami.is/script.js';

export function Analytics() {
  if (!UMAMI_WEBSITE_ID) return null;

  return (
    <Script
      src={UMAMI_SRC}
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
