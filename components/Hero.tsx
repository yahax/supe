import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-8 sm:p-12">
      <div className="absolute inset-0 bg-grid-glow opacity-70" aria-hidden />
      <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-40" aria-hidden />
      <div className="relative grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neonBlue">
            Premium Digital Lab
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            We architect obsidian-grade experiences that convert and scale.
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            WINBOX designs and builds Next.js experiences, sharp identities, and growth engines that turn attention into revenue.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://wa.me/212676877273"
              className="rounded-2xl bg-gradient-to-r from-neonBlue to-electricPurple px-6 py-3 text-sm font-semibold text-black shadow-glow-blue transition-transform duration-200 hover:-translate-y-0.5"
            >
              Talk on WhatsApp
            </Link>
            <Link
              href="/services"
              className="rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-neonBlue hover:text-neonBlue"
            >
              Explore services
            </Link>
          </div>
          <div className="flex gap-4 text-sm text-gray-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xl font-semibold text-white">+120%</div>
              <div className="text-xs uppercase tracking-wide text-gray-400">Avg. conversion lift</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xl font-semibold text-white">0.9s</div>
              <div className="text-xs uppercase tracking-wide text-gray-400">LCP on landing</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="blur-card glow-border relative overflow-hidden rounded-3xl p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/20 via-transparent to-electricPurple/20" aria-hidden />
            <div className="relative grid grid-cols-2 gap-4 text-sm text-gray-200">
              {["Next.js builds", "Brand systems", "Launch strategy", "Growth ops", "Design sprints", "Performance"].map(
                (item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {item}
                  </div>
                )
              )}
            </div>
            <div className="mt-6 rounded-2xl bg-black/60 border border-white/10 p-5 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=300&q=80"
                  alt="Team"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <div>
                <p className="text-sm text-gray-300">"They shipped a premium site in 4 weeks and kept our CAC in check."</p>
                <p className="text-xs text-neonBlue font-semibold mt-1">Growth Lead, Series A SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
