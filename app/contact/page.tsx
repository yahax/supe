import Link from 'next/link';

export const metadata = {
  title: 'Contact — WINBOX',
  description: 'Reach WINBOX for premium websites, branding, and growth marketing.',
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Contact</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white">Let&apos;s build your next flagship experience.</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          Send a quick note and we&apos;ll reply within 24 hours with next steps. Or message us directly on WhatsApp.
        </p>
        <Link
          href="https://wa.me/212676877273"
          className="inline-flex w-max rounded-2xl bg-gradient-to-r from-neonBlue to-electricPurple px-6 py-3 text-sm font-semibold text-black shadow-glow-blue"
        >
          Message on WhatsApp
        </Link>
        <p className="text-sm text-gray-400">Average response time: under 24h.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <form className="blur-card rounded-3xl border border-white/10 p-6 space-y-4">
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-neonBlue focus:outline-none"
              placeholder="Your name"
              type="text"
              name="name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-neonBlue focus:outline-none"
              placeholder="you@company.com"
              type="email"
              name="email"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300">Project vision</label>
            <textarea
              className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-neonBlue focus:outline-none"
              placeholder="Tell us about the website, brand, or growth challenge."
              rows={4}
              name="message"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-2xl bg-gradient-to-r from-neonBlue to-electricPurple px-6 py-3 text-sm font-semibold text-black shadow-glow-blue"
            >
              Send message
            </button>
            <Link
              href="mailto:hello@winbox.ma"
              className="rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:border-neonBlue hover:text-neonBlue"
            >
              Email us
            </Link>
          </div>
          <p className="text-xs text-gray-400">We keep responses concise and actionable.</p>
        </form>

        <div className="space-y-4">
          <div className="blur-card rounded-3xl border border-white/10 p-6">
            <h2 className="text-lg font-semibold text-white">What to expect</h2>
            <p className="mt-2 text-sm text-gray-300">A senior partner replies with a quick feasibility check and a crisp path to launch.</p>
            <div className="mt-4 grid gap-2 text-sm text-gray-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Timeline clarity</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Budget and scope alignment</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Growth opportunities</div>
            </div>
          </div>
          <div className="blur-card rounded-3xl border border-white/10 p-6">
            <h2 className="text-lg font-semibold text-white">Trust</h2>
            <p className="mt-2 text-sm text-gray-300">Performance-ready builds, SEO baked in, and dedicated QA. References available upon request.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
