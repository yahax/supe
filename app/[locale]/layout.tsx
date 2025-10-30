import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'

import { isRTL, type Locale } from '@/lib/i18n'
import { orgSchema, localBusinessSchema } from '@/lib/schema'

const SITE_URL = 'https://winbox.ma'

const TITLES: Record<Locale, string> = {
  fr: 'WINBOX — Agence Digitale Premium | Sites Web, Branding & Croissance',
  ar: 'WINBOX — وكالة رقمية بريميوم | مواقع، براندينغ ونمو'
}

const DESCRIPTIONS: Record<Locale, string> = {
  fr: 'Sites rapides, branding premium et stratégies de croissance orientées ROI.',
  ar: 'مواقع سريعة وهوية راقية واستراتيجيات نمو مركزة على العائد.'
}

const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
  fr: 'fr_FR',
  ar: 'ar'
}

export const dynamicParams = false

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'ar' }]
}

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const locale = params.locale
  const title = TITLES[locale]
  const description = DESCRIPTIONS[locale]
  const url = `${SITE_URL}/${locale}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr`,
        ar: `${SITE_URL}/ar`
      }
    },
    openGraph: {
      type: 'website',
      locale: OPEN_GRAPH_LOCALES[locale],
      url,
      siteName: 'WINBOX',
      title,
      description
    }
  }
}

const SCHEMAS = [
  { id: 'org-schema', data: orgSchema },
  { id: 'local-business-schema', data: localBusinessSchema }
]

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: Locale } }) {
  const locale = params.locale
  const dir = isRTL(locale) ? 'rtl' : 'ltr'
  const scriptContent = `document.documentElement.lang="${locale}";document.documentElement.dir="${dir}";document.body.dir="${dir}";document.body.setAttribute('data-locale', '${locale}');`

  return (
    <div dir={dir} lang={locale} className="flex min-h-dvh flex-col" data-locale={locale}>
      <Script id="set-locale-attributes" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: scriptContent }} />
      {SCHEMAS.map(({ id, data }) => (
        <script key={id} id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      {children}
    </div>
  )
}
