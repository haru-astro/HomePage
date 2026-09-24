import type { Metadata } from 'next'
import { baseUrl } from 'app/sitemap'

/**
 * 各ページの metadata を組み立てる。
 * canonical / OG / Twitter カードを揃えて出すために、ページ側はこれを使う。
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  /** '/activity' のようにサイトルートからのパス */
  path: string
}): Metadata {
  const url = `${baseUrl}${path}`
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Haru HAYAKAWA`,
      description,
      url,
      siteName: 'Haru HAYAKAWA',
      locale: 'ja_JP',
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Haru HAYAKAWA`,
      description,
      images: [ogImage],
    },
  }
}
