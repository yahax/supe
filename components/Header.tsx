'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ t, locale }: any) {
  const base = `/${locale}`
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href={base} className="font-bold">WINBOX</Link>
        <nav className="hidden md:flex gap-6">
          <Link href={`${base}/services`} className="hover:opacity-80">{t.nav.services}</Link>
          <Link href={`${base}/realisations`} className="hover:opacity-80">{t.nav.cases}</Link>
          <Link href={`${base}/a-propos`} className="hover:opacity-80">{t.nav.about}</Link>
          <Link href={`${base}/contact`} className="hover:opacity-80">{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <a href={`https://wa.me/212676877273?text=${encodeURIComponent('Bonjour WINBOX 👋 J’ai un projet (site/branding/ads).')}`} className="btn btn-primary">WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
