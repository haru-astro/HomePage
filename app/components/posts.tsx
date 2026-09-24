import { formatDate, getBlogPosts } from 'app/blog/utils'
import { ListRow } from 'app/components/ui'

export function BlogPosts({ limit }: { limit?: number } = {}) {
  const allBlogs = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  )

  const posts = typeof limit === 'number' ? allBlogs.slice(0, limit) : allBlogs

  return (
    <div className="space-y-1">
      {posts.map((post) => (
        <ListRow
          key={post.slug}
          meta={formatDate(post.metadata.publishedAt, false)}
          href={`/blog/${post.slug}`}
        >
          {post.metadata.title}
        </ListRow>
      ))}
    </div>
  )
}
