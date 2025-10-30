import './globals.css'
import type { ReactNode } from 'react'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter'
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-arabic'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansArabic.variable} min-h-dvh`}>
        {children}
      </body>
    </html>
  )
}
