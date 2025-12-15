import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://winbox.ma';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'WINBOX — Premium Digital Agency | Next.js, Branding, Growth',
    template: '%s | WINBOX',
  },
  description:
    'WINBOX is a premium digital agency crafting futuristic Next.js websites, brand systems, and growth marketing that convert.',
  openGraph: {
    title: 'WINBOX — Premium Digital Agency',
    description:
      'Futuristic Next.js experiences, brand systems, and growth marketing built for conversion.',
    url: siteUrl,
    siteName: 'WINBOX',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WINBOX Premium Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WINBOX — Premium Digital Agency',
    description: 'Premium Next.js builds, branding, and growth.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WINBOX',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ['https://wa.me/212676877273'],
    description:
      'WINBOX is a premium digital agency building Next.js experiences, brand systems, and performance marketing.',
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WINBOX',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/blog/{search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className="bg-obsidian">
      <body className={`${inter.className} min-h-screen bg-obsidian bg-grid-glow`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 space-y-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
