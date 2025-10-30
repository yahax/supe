import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import Testimonials from '@/components/Testimonials'
import CtaBanner from '@/components/CtaBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import { copy } from '@/lib/content'
import type { Locale } from '@/lib/i18n'

export default function Home({ params }: { params: { locale: Locale } }) {
  const t = copy[params.locale]
  return (
    <>
      <Header t={t} locale={params.locale} />
      <main>
        <Hero t={t} locale={params.locale} />
        <Services t={t} />
        <Cases t={t} />
        <Testimonials t={t} />
        <CtaBanner t={t} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
