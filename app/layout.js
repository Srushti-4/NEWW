import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/lib/site';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Srushti Mohire — Databricks Engineer',
  description:
    'Srushti Mohire — Databricks Engineer at Infosys working on RRP reports migration: creating and testing functions in Databricks. 2× Databricks Professional, SnowPro Advanced. Bengaluru, India.',
  authors: [{ name: 'Srushti Mohire' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    title: 'Srushti Mohire — Databricks Engineer',
    description:
      'Databricks Engineer at Infosys working on RRP reports migration — creating and testing functions in Databricks.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srushti Mohire — Databricks Engineer',
    description:
      'Databricks Engineer at Infosys working on RRP reports migration — creating and testing functions in Databricks.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  themeColor: '#3b6bcc',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Srushti Mohire',
  url: `${SITE_URL}/`,
  jobTitle: 'Databricks Engineer (System Associate)',
  worksFor: { '@type': 'Organization', name: 'Infosys' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/srushti-mohire-781528227/',
    'https://www.kaggle.com/srushtikmohire',
    'https://github.com/Srushti-4',
  ],
};

// Runs before first paint so dark-mode users never see a flash of the light theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
