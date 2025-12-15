import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-neonBlue/10 via-electricPurple/10 to-white/5 p-10">
      <div className="absolute inset-0 bg-noise opacity-30" aria-hidden />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Let&apos;s build</p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-white">Ready to launch your next flagship experience?</h3>
          <p className="text-sm text-gray-300 mt-2">We reply within 24h with a clear path to results.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="https://wa.me/212676877273"
            className="rounded-2xl bg-gradient-to-r from-neonBlue to-electricPurple px-6 py-3 text-sm font-semibold text-black shadow-glow-blue transition-transform duration-200 hover:-translate-y-0.5"
          >
            Talk on WhatsApp
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-neonBlue hover:text-neonBlue"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
