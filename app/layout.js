import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  metadataBase: new URL('https://srushtimohire.com'),
  title: 'Srushti Mohire — Data Engineer & Python Developer',
  description:
    'Srushti Mohire — System Associate at Infosys. Data Engineer building Python, SQL, Databricks and Snowflake pipelines. Based in Bengaluru, India.',
  authors: [{ name: 'Srushti Mohire' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://srushtimohire.com/',
    title: 'Srushti Mohire — Data Engineer & Python Developer',
    description:
      'System Associate at Infosys. Data Engineer building Python, SQL, Databricks and Snowflake pipelines.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srushti Mohire — Data Engineer & Python Developer',
    description:
      'System Associate at Infosys. Data Engineer building Python, SQL, Databricks and Snowflake pipelines.',
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
  url: 'https://srushtimohire.com/',
  jobTitle: 'System Associate, Data Engineer',
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
    'https://github.com/Srushti-4/my-portfolio',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
