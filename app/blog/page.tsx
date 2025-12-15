import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog — WINBOX',
  description: 'Insights on Next.js, branding, and growth from the WINBOX team.',
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Insights</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white">Ideas from the WINBOX lab.</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          Short, actionable pieces on building premium digital experiences and growth engines.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="blur-card block rounded-3xl border border-white/10 p-6 transition duration-200 hover:-translate-y-1 hover:border-neonBlue/50"
          >
            <div className="text-xs text-gray-400 flex items-center gap-3">
              <span>{new Date(post.metadata.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span className="text-neonBlue">•</span>
              <span>{post.metadata.readTime}</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-white">{post.metadata.title}</h2>
            <p className="mt-2 text-sm text-gray-300">{post.metadata.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-200">
              {post.metadata.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
