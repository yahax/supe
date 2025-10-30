export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WINBOX',
  url: 'https://winbox.ma',
  logo: 'https://winbox.ma/og-image.svg',
  sameAs: ['https://instagram.com/winbox']
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WINBOX',
  url: 'https://winbox.ma',
  areaServed: 'Morocco',
  telephone: '+212676877273',
  image: 'https://winbox.ma/og-image.svg',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MA'
  }
};
