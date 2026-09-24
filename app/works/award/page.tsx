import Link from 'next/link'
import { PageHeader, Card, SectionTitle, EntryItem } from 'app/components/ui'
import { awards, trainings } from '../data'

export const metadata = {
  title: '受賞・研修',
  description: '早川晴の受賞歴と、参加した研修プログラムの一覧。',
}

export default function AwardPage() {
  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Works / Award"
        title="受賞・研修"
        lead="天文学オリンピックをはじめとする大会での成績と、参加した研修プログラムの記録です。"
      />

      <Card className="space-y-6 p-6 sm:p-8">
        <SectionTitle count={awards.length}>受賞・大会出場</SectionTitle>
        <ul className="space-y-4">
          {awards.map((a) => (
            <EntryItem
              key={a.title}
              meta={a.date}
              title={
                <>
                  {a.title}
                  {a.note && (
                    <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 align-middle text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {a.note}
                    </span>
                  )}
                </>
              }
            />
          ))}
        </ul>
      </Card>

      <Card className="space-y-6 p-6 sm:p-8">
        <SectionTitle count={trainings.length}>研修</SectionTitle>
        <ul className="space-y-4">
          {trainings.map((t) => (
            <EntryItem key={t.title} meta={t.date} title={t.title} />
          ))}
        </ul>
      </Card>

      <Link
        href="/works"
        className="inline-flex text-sm text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        ← 主な活動へ戻る
      </Link>
    </section>
  )
}
