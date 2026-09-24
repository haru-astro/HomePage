import {
  PageHeader,
  Card,
  NavCard,
  Stat,
  SectionTitle,
  HighlightItem,
} from 'app/components/ui'
import { photoBySrc } from 'app/components/photos'
import { highlights, featured } from './data'
import { pageMetadata } from 'app/metadata'

export const metadata = pageMetadata({
  title: 'Activity',
  description: '早川晴の学歴・研究業績・受賞・研修・アウトリーチ活動のまとめ。',
  path: '/activity',
})

export default function ActivityPage() {
  return (
    <section className="space-y-8">
      <PageHeader
        title="Activity"
        lead="天文学の研究と、天文教育・アウトリーチ活動に取り組んでいます。それぞれの詳しい記録は下のページにまとめています。"
        image="/poland.webp"
        location={photoBySrc('/poland.webp')?.location || undefined}
        position={photoBySrc('/poland.webp')?.position}
        alt="ポーランド・ホジュフの街並み"
        priority
      />

      <Card className="p-6 sm:p-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat
            value={highlights.papers.total}
            note={`うち筆頭 ${highlights.papers.first}`}
            label="論文"
          />
          <Stat
            value={highlights.talks.total}
            note={`うち筆頭 ${highlights.talks.first}`}
            label="学会・研究会発表"
          />
          <Stat value={highlights.awards} label="受賞・大会出場" />
          <Stat value={`${highlights.outreach}+`} label="アウトリーチ" />
        </div>
      </Card>

      <Card className="space-y-5 p-6 sm:p-8">
        <SectionTitle>Highlights</SectionTitle>
        <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
          {featured.map((f) => (
            <HighlightItem
              key={f.title}
              period={f.period}
              title={f.title}
              detail={f.detail}
            />
          ))}
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NavCard
          href="/activity/research"
          title="Research"
          description="論文と、学会・研究会での発表の一覧。"
        />
        <NavCard
          href="/activity/career"
          title="Career"
          description="学歴・受賞歴・研修・所属団体。"
        />
        <NavCard
          href="/activity/outreach"
          title="Outreach"
          description="講師・スタッフとして関わった活動の記録。"
        />
      </div>

    </section>
  )
}
