import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.winbox.ma'),
  title: 'Winbox.ma – Création de sites web, publicités Meta & Google Ads, design premium au Maroc',
  description:
    'Winbox.ma accompagne les marques et entrepreneurs marocains dans la création de sites web performants, la gestion de campagnes Meta & Google Ads et le design visuel premium, orienté résultats.',
  keywords: [
    'agence marketing digital maroc',
    'création site web maroc',
    'agence publicité digitale',
    'Meta Ads Maroc',
    'Google Ads Maroc',
    'design premium',
    'agence web Rabat',
    'winbox.ma'
  ],
  alternates: {
    canonical: 'https://www.winbox.ma/'
  },
  openGraph: {
    title: 'Winbox.ma – Agence marketing digital & design premium au Maroc',
    description:
      'Sites web performants, Meta & Google Ads orientés ROI et design haut de gamme pour entrepreneurs et marques au Maroc.',
    url: 'https://www.winbox.ma/',
    type: 'website',
    images: [
      {
        url: 'https://www.winbox.ma/og-image-winbox.jpg',
        alt: 'Winbox.ma – Création de sites web, publicités digitales et design premium',
        width: 1200,
        height: 630
      }
    ]
  }
};

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Winbox.ma',
  image: 'https://www.winbox.ma/logo-winbox.png',
  url: 'https://www.winbox.ma',
  telephone: '+212669694945',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Centre-ville',
    addressLocality: 'Rabat',
    addressRegion: 'Rabat-Salé-Kénitra',
    postalCode: '10000',
    addressCountry: 'MA'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.020882,
    longitude: -6.84165
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:30',
      closes: '19:30'
    }
  ],
  sameAs: ['https://www.facebook.com/Winbox.m', 'https://www.instagram.com/winbox.ma/'],
  description:
    'Agence de marketing digital et création de sites web basée à Rabat, spécialisée dans les campagnes Meta & Google Ads et le design premium orienté performance.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-text-primary">
        <Script id="json-ld-local-business" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLdLocalBusiness)}
        </Script>
        {children}
      </body>
    </html>
  );
}
