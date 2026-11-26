import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/resume/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/projects/report-migration-validator/`, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
