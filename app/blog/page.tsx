import { BlogPosts } from 'app/components/posts'
import { PageHeader, Card } from 'app/components/ui'
import { photoBySrc } from 'app/components/photos'

export const metadata = {
  title: 'Blog',
  description: '早川晴のBlog記事の一覧。',
}

export default function Page() {
  return (
    <section className="space-y-8">
      <PageHeader
        title="Blog"
        lead="日々考えたことや、このサイトについての記事を書いています。"
        image="/cambodia.webp"
        location={photoBySrc('/cambodia.webp')?.location || undefined}
        position={photoBySrc('/cambodia.webp')?.position}
        alt="アンコールワット"
        priority
      />
      <Card className="p-6 sm:p-8">
        <BlogPosts />
      </Card>
    </section>
  )
}
