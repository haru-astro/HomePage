import { BlogPosts } from 'app/components/posts'
import { PageHeader, Card } from 'app/components/ui'

export const metadata = {
  title: 'Blog',
  description: '早川晴のブログ記事の一覧。',
}

export default function Page() {
  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Blog"
        title="Blog"
        lead="日々考えたことや、このサイトについての記事を書いています。"
        image="/bluepond.webp"
        alt="青い池@北海道美瑛町"
        priority
      />
      <Card className="p-6 sm:p-8">
        <BlogPosts />
      </Card>
    </section>
  )
}
