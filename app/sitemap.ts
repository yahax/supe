import { getPosts } from '@/lib/posts';

export default function sitemap() {
  const baseUrl = 'https://winbox.ma';
  const routes = ['', '/services', '/portfolio', '/blog', '/about', '/contact'];
  const blogRoutes = getPosts().map((post) => `/blog/${post.slug}`);

  return [...routes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
