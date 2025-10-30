import '../globals.css'
import type { ReactNode } from 'react'
import { isRTL, Locale } from '@/lib/i18n'
import { NextSeo } from 'next-seo'

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: Locale } }) {
  const { locale } = params
  const dir = isRTL(locale) ? 'rtl' : 'ltr'
  const title = locale === 'ar' ? 'WINBOX — وكالة رقمية بريميوم | مواقع، براندينغ ونمو' : 'WINBOX — Agence Digitale Premium | Sites Web, Branding & Croissance'
  const description = locale === 'ar' ? 'مواقع سريعة وهوية راقية واستراتيجيات نمو مركزة على العائد.' : 'Sites rapides, branding premium et stratégies de croissance orientées ROI.'

  return (
    <html lang={locale} dir={dir}>
      <head>
        <NextSeo title={title} description={description} openGraph={{ type: 'website', title, description }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  )
}
