import type { MDXContent } from 'mdx/types';

import PostFutureWeb, { metadata as futureWebMeta } from '@/content/blog/01-future-web.mdx';
import PostBrandOperating, { metadata as brandOperatingMeta } from '@/content/blog/02-brand-operating.mdx';
import PostGrowthBlueprint, { metadata as growthBlueprintMeta } from '@/content/blog/03-growth-blueprint.mdx';
import PostUxPerformance, { metadata as uxPerformanceMeta } from '@/content/blog/04-ux-meets-performance.mdx';
import PostFrictionless, { metadata as frictionlessMeta } from '@/content/blog/05-frictionless-contact.mdx';

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
};

export type Post = {
  slug: string;
  metadata: PostMeta;
  component: MDXContent;
};

const posts: Post[] = [
  { slug: 'future-of-premium-web-builds', metadata: futureWebMeta, component: PostFutureWeb },
  { slug: 'brand-operating-system', metadata: brandOperatingMeta, component: PostBrandOperating },
  { slug: 'growth-blueprint-cac', metadata: growthBlueprintMeta, component: PostGrowthBlueprint },
  { slug: 'ux-meets-performance', metadata: uxPerformanceMeta, component: PostUxPerformance },
  { slug: 'frictionless-contact-flows', metadata: frictionlessMeta, component: PostFrictionless },
];

export function getPosts() {
  return posts.sort((a, b) => (a.metadata.date < b.metadata.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
