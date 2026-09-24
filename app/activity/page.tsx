import { PageHeader, Card, NavCard, Stat, SectionTitle, ListRow } from 'app/components/ui'
import { photoBySrc } from 'app/components/photos'
import { highlights, education, memberships } from './data'

export const metadata = {
  title: 'Activity',
  description:
    '早川晴の学歴・研究業績・受賞・研修・アウトリーチ活動のまとめ。',
}

export default function ActivityPage() {
  return (
    <section className="space-y-8">
      <PageHeader
        title="Activity"
        lead="天文学の研究と、天文学オリンピックを中心とした教育・アウトリーチ活動に取り組んでいます。それぞれの詳しい記録は下のページにまとめています。"
        image="/poland.webp"
        location={photoBySrc('/poland.webp')?.location || undefined}
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NavCard
          href="/activity/research"
          title="Research"
          description="論文と、学会・研究会での発表の一覧。"
        />
        <NavCard
          href="/activity/award"
          title="Award & Training"
          description="オリンピックでの受賞歴と、参加した研修プログラム。"
        />
        <NavCard
          href="/activity/outreach"
          title="Outreach"
          description="講師・スタッフとして関わった活動の年別の記録。"
        />
      </div>

      <Card className="space-y-4 p-6 sm:p-8">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-1">
          {education.map((e) => (
            <ListRow key={e.period} meta={e.period} wideMeta>
              {e.school}
            </ListRow>
          ))}
        </div>
      </Card>

      <Card className="space-y-4 p-6 sm:p-8">
        <SectionTitle>Member</SectionTitle>
        <ul className="space-y-2">
          {memberships.map((m) => (
            <li
              key={m}
              className="border-l-2 border-slate-200 pl-4 leading-7 text-slate-700 dark:border-slate-700 dark:text-slate-300"
            >
              {m}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
