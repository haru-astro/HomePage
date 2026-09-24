import { getBlogPosts } from 'app/blog/utils'

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://haruhayakawa.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = [
    '',
    '/activity',
    '/activity/research',
    '/activity/career',
    '/activity/outreach',
    '/projects',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
