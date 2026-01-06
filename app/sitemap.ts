import { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.winbox.ma';
  const routes = ['/', '/services', '/work', '/about', '/pricing', '/contact', '/legal/privacy', '/legal/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
  const caseRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/work/${caseStudy.slug}`,
    lastModified: new Date(),
  }));
  return [...routes, ...caseRoutes];
}
