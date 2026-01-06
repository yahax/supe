import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Chatbot from '@/components/chatbot';

const inter = Inter({ subsets: ['latin'] });

const title = 'WINBOX.MA | Premium Digital Growth Studio';
const description = 'WINBOX.MA is the premium digital growth studio delivering websites, brand systems, performance media, SEO, analytics, and automation for global teams.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.winbox.ma'),
  title,
  description,
  keywords: ['WINBOX', 'digital agency', 'growth marketing', 'premium websites', 'branding', 'SEO', 'paid media'],
  openGraph: {
    title,
    description,
    url: 'https://www.winbox.ma',
    siteName: 'WINBOX.MA',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@winbox',
  },
  alternates: {
    canonical: 'https://www.winbox.ma'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WINBOX.MA',
    url: 'https://www.winbox.ma',
    logo: 'https://www.winbox.ma/logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@winbox.ma',
      telephone: '+212669694945',
      contactType: 'customer support'
    },
    sameAs: ['https://www.winbox.ma']
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WINBOX.MA',
    url: 'https://www.winbox.ma',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.winbox.ma/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en" className="bg-charcoal">
      <body className={`${inter.className} bg-charcoal text-white antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]) }}
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Chatbot />
      </body>
    </html>
  );
}
