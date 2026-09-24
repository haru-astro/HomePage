import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts({ limit }: { limit?: number } = {}) {
  const allBlogs = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  )

  const posts = typeof limit === 'number' ? allBlogs.slice(0, limit) : allBlogs

  return (
    <div className="space-y-1">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="-mx-3 flex flex-col rounded-2xl px-3 py-2 transition hover:bg-slate-100/80 dark:hover:bg-slate-800/60 md:flex-row md:gap-4"
          href={`/blog/${post.slug}`}
        >
          <p className="shrink-0 tabular-nums text-sm leading-7 text-slate-500 dark:text-slate-400 md:w-28">
            {formatDate(post.metadata.publishedAt, false)}
          </p>
          <p className="leading-7 tracking-tight text-slate-900 dark:text-slate-100">
            {post.metadata.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
