import Link from 'next/link'
import { PageHeader, Card, SectionTitle, EntryItem } from 'app/components/ui'
import { outreachByYear, earlyOutreach, highlights } from '../data'
import { photoBySrc } from 'app/components/photos'
import { pageMetadata } from 'app/metadata'

export const metadata = pageMetadata({
  title: 'Outreach',
  description: '早川晴が講師・スタッフとして関わった天文教育・アウトリーチ活動の年別の記録。',
  path: '/activity/outreach',
})

export default function OutreachPage() {
  const years = outreachByYear()

  return (
    <section className="space-y-8">
      <PageHeader
        title="Outreach"
        lead={`天文学オリンピックの代表研修やプラネタリウム投影など、これまでに ${highlights.outreach} 件以上の教育・アウトリーチ活動に講師・スタッフとして関わってきました。`}
        image="/planetarium.webp"
        location={photoBySrc('/planetarium.webp')?.location || undefined}
        position={photoBySrc('/planetarium.webp')?.position}
        alt="平塚市博物館のプラネタリウム"
        priority
      />

      {years.map(({ year, events }) => (
        <Card key={year} className="space-y-6 p-6 sm:p-8">
          <SectionTitle count={events.length}>{year}年</SectionTitle>
          <ul className="space-y-4">
            {events.map((e) => (
              <EntryItem
                key={`${e.date}-${e.title}`}
                meta={e.date}
                title={e.title}
                detail={e.place && `@${e.place}`}
              />
            ))}
          </ul>
        </Card>
      ))}

      <Card className="space-y-6 p-6 sm:p-8">
        <SectionTitle>高校生以前</SectionTitle>
        <ul className="space-y-3">
          {earlyOutreach.map((text) => (
            <li
              key={text}
              className="border-l-2 border-slate-200 pl-4 leading-7 text-slate-700 dark:border-slate-700 dark:text-slate-300"
            >
              {text}
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
