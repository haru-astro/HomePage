import Link from 'next/link'
import { PageHeader, Card, SectionTitle, EntryItem, ListRow } from 'app/components/ui'
import { education, awards, trainings, memberships } from '../data'
import { photoBySrc } from 'app/components/photos'
import { pageMetadata } from 'app/metadata'

export const metadata = pageMetadata({
  title: 'Career',
  description: '早川晴の学歴・受賞歴・研修・所属団体。',
  path: '/activity/career',
})

export default function CareerPage() {
  return (
    <section className="space-y-8">
      <PageHeader
        title="Career"
        lead="学歴と、これまでの受賞・研修、所属している団体をまとめています。"
        image="/china_greatwall.webp"
        location={photoBySrc('/china_greatwall.webp')?.location || undefined}
        position={photoBySrc('/china_greatwall.webp')?.position}
        alt="万里の長城"
        priority
      />

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

      <Card className="space-y-6 p-6 sm:p-8">
        <SectionTitle count={awards.length}>Award</SectionTitle>
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
        <SectionTitle count={trainings.length}>Training</SectionTitle>
        <ul className="space-y-4">
          {trainings.map((t) => (
            <EntryItem key={t.title} meta={t.date} title={t.title} />
          ))}
        </ul>
      </Card>

      <Card className="space-y-4 p-6 sm:p-8">
        <SectionTitle>Member</SectionTitle>
        <ul className="space-y-2">
          {memberships.map((m) => (
            <li
              key={m}
              className="border-l-2 border-slate-200 pl-4 text-sm leading-7 text-slate-700 dark:border-slate-700 dark:text-slate-300"
            >
              {m}
            </li>
          ))}
        </ul>
      </Card>

      <Link
        href="/activity"
        className="inline-flex text-sm text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        ← Activity へ戻る
      </Link>
    </section>
  )
}
