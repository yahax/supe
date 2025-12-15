export default function robots() {
  const baseUrl = 'https://winbox.ma';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
