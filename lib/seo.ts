export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FavoriVoyages',
  url: 'https://favorivoyages.com',
  email: 'contact@favorivoyages.com',
  telephone: '+212537674233',
  logo: 'https://favorivoyages.com/logo.png'
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'FavoriVoyages',
  url: 'https://favorivoyages.com',
  telephone: '+212537674233',
  email: 'contact@favorivoyages.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'FavoriVoyages',
    addressLocality: 'Rabat',
    addressCountry: 'MA'
  },
  hasMap: 'https://share.google/dkFc02TBAVKUBA5Bs'
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FavoriVoyages',
  url: 'https://favorivoyages.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://favorivoyages.com/destinations?search={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};
