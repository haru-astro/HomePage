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
  description: 'このサイトは, 早川晴のホームページです./This is the site of Haru Hayakawa.',
  openGraph: {
    title: 'Haru HAYAKAWA',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'Haru HAYAKAWA',
    locale: 'en_US',
    type: 'website',
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

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
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
