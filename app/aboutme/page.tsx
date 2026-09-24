import { promises as fs } from 'fs'
import path from 'path'
import { CustomMDX } from 'app/components/mdx'
import { PageHeader, Card } from 'app/components/ui'
import { photoBySrc } from 'app/photos/data'

export const metadata = {
  title: 'About me',
  description: '早川晴の経歴・所属・研究テーマなどのプロフィール。',
}

export default async function AboutPage() {
  const content = await fs.readFile(
    path.join(process.cwd(), 'app/aboutme/aboutme.mdx'),
    'utf8'
  )

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="About"
        title="About me"
        lead="経歴・所属・研究テーマについてまとめています。"
        image="/hoshinomura.webp"
        location={photoBySrc('/hoshinomura.webp')?.location || undefined}
        alt="星の村天文台"
        priority
      />
      <Card className="p-6 sm:p-8">
        <article className="prose">
          <CustomMDX source={content} />
        </article>
      </Card>
    </section>
  )
}
