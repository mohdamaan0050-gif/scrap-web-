import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/archivo';
import '@fontsource-variable/public-sans';
import './globals.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { company, siteUrl } from '@/content/site';
import { organizationSchema } from '@/lib/jsonld';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Industrial waste trading, collection and recycling`,
    template: `%s | ${company.name}`,
  },
  description:
    'Apashishta Vyapar Sanstha buys, collects and recycles industrial scrap and waste across western Uttar Pradesh and Uttarakhand. Weighed, papered and paid on the spot.',
  keywords: [
    'scrap dealer Saharanpur',
    'industrial waste management Uttar Pradesh',
    'recycling company Saharanpur',
    'scrap buyer Haridwar',
    'e-waste disposal UP',
    'factory waste contract',
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: '/favicon.svg' },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: '#0F2E22',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-data focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-forest"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
