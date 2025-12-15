import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/posts';

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.metadata.title} — WINBOX`,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: 'article',
      publishedTime: post.metadata.date,
      url: `https://winbox.ma/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const posts = getPosts();

  if (!post) return notFound();

  const PostContent = post.component;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    description: post.metadata.description,
    datePublished: post.metadata.date,
    author: {
      '@type': 'Organization',
      name: 'WINBOX',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WINBOX',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://winbox.ma/blog/${post.slug}`,
    },
  };

  return (
    <article className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Blog</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white">{post.metadata.title}</h1>
        <div className="text-sm text-gray-400 flex items-center gap-3">
          <span>{new Date(post.metadata.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span className="text-neonBlue">•</span>
          <span>{post.metadata.readTime}</span>
        </div>
        <p className="text-lg text-gray-300 max-w-3xl">{post.metadata.description}</p>
      </header>

      <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-200 prose-strong:text-white prose-a:text-neonBlue">
        <PostContent />
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-gray-200">
        {post.metadata.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
        <div className="text-sm font-semibold text-white">Share this insight</div>
        <div className="flex gap-3 text-sm text-gray-200">
          <Link href={`https://wa.me/212676877273?text=${encodeURIComponent(post.metadata.title)}`} className="hover:text-neonBlue">
            WhatsApp
          </Link>
          <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://winbox.ma/blog/${post.slug}`)}`} className="hover:text-neonBlue">
            LinkedIn
          </Link>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Related</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="blur-card rounded-3xl border border-white/10 p-5 text-sm text-gray-300 hover:border-neonBlue/50"
            >
              <div className="text-xs text-gray-400">{item.metadata.readTime}</div>
              <div className="mt-2 text-white font-semibold">{item.metadata.title}</div>
              <p className="mt-2 text-xs text-gray-400">{item.metadata.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
