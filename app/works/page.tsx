import { PageHeader, Card, NavCard, Stat } from 'app/components/ui'
import { highlights } from './data'

export const metadata = {
  title: '主な活動',
  description:
    '早川晴の研究業績・受賞・研修・アウトリーチ活動のまとめ。',
}

export default function WorksPage() {
  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Works"
        title="主な活動"
        lead="天文学の研究と、天文学オリンピックを中心とした教育・アウトリーチ活動に取り組んでいます。それぞれの詳しい記録は下のページにまとめています。"
        image="/poland.webp"
        alt="ポーランド・ホジュフの街並み"
        priority
      />

      <Card className="p-6 sm:p-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat value={highlights.papers} label="論文" />
          <Stat value={highlights.talks} label="学会・研究会発表" />
          <Stat value={highlights.awards} label="受賞・大会出場" />
          <Stat value={`${highlights.outreach}+`} label="アウトリーチ" />
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NavCard
          href="/works/research"
          title="研究業績"
          description="論文と、学会・研究会での発表の一覧。"
        />
        <NavCard
          href="/works/award"
          title="受賞・研修"
          description="オリンピックでの受賞歴と、参加した研修プログラム。"
        />
        <NavCard
          href="/works/outreach"
          title="アウトリーチ・教育"
          description="講師・スタッフとして関わった活動の年別の記録。"
        />
      </div>
    </section>
  )
}
