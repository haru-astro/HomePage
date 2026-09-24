import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '早川晴のページ',
    template: '%s | Haru HAYAKAWA',
  },
  description:
    '東京大学理学部天文学科の早川晴のホームページ。銀河・変光星・系外惑星の研究と、天文教育・アウトリーチ活動の記録。',
  alternates: { canonical: baseUrl },
  openGraph: {
    title: '早川 晴 | Haru HAYAKAWA',
    description:
      '東京大学理学部天文学科の早川晴のホームページ。銀河・変光星・系外惑星の研究と、天文教育・アウトリーチ活動の記録。',
    url: baseUrl,
    siteName: 'Haru HAYAKAWA',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('早川 晴 / Haru HAYAKAWA')}`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '早川 晴 | Haru HAYAKAWA',
    description:
      '東京大学理学部天文学科の早川晴のホームページ。銀河・変光星・系外惑星の研究と、天文教育・アウトリーチ活動の記録。',
    images: [
      `${baseUrl}/og?title=${encodeURIComponent('早川 晴 / Haru HAYAKAWA')}`,
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | undefined | false)[]): string =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={cx(
        'scroll-smooth text-slate-950 bg-slate-50 dark:text-slate-100 dark:bg-slate-950',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased min-h-screen">
        <div className="min-h-screen max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          <main className="flex-auto min-w-0 mt-6 flex flex-col gap-10 px-0 md:px-0">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
