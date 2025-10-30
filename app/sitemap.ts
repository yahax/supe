export default function sitemap() {
  const base = 'https://winbox.ma'
  return [
    { url: `${base}/fr`, lastModified: new Date() },
    { url: `${base}/fr/services`, lastModified: new Date() },
    { url: `${base}/fr/realisations`, lastModified: new Date() },
    { url: `${base}/fr/a-propos`, lastModified: new Date() },
    { url: `${base}/fr/contact`, lastModified: new Date() },
    { url: `${base}/ar`, lastModified: new Date() }
  ]
}
