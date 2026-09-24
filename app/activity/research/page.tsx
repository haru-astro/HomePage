import Link from 'next/link'
import { PageHeader, Card, SectionTitle, EntryItem } from 'app/components/ui'
import { photoBySrc } from 'app/components/photos'
import { papers, talks, talkKindLabel, type Talk, type TalkKind } from '../data'

export const metadata = {
  title: 'Research',
  description: '早川晴の論文と、学会・研究会での発表の一覧。',
}

const kindOrder: TalkKind[] = ['oral', 'poster', 'public']

function TalkGroup({ role }: { role: Talk['role'] }) {
  const groups = kindOrder
    .map((kind) => ({
      kind,
      items: talks
        .filter((t) => t.role === role && t.kind === kind)
        .sort((a, b) => b.year - a.year),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <div className="space-y-6">
      {groups.map(({ kind, items }) => (
        <div key={kind}>
          <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {talkKindLabel[kind]}
          </h4>
          <ul className="mt-3 space-y-4">
            {items.map((t) => (
              <EntryItem
                key={`${t.meeting}-${t.title}`}
                meta={t.date}
                title={`「${t.title}」`}
                detail={
                  <>
                    {t.authors}({t.year}), {t.meeting}
                    {t.id && `, ${t.id}`}, {t.place}
                  </>
                }
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function ResearchPage() {
  // 一般向け講演は筆頭であることが自明なので、筆頭の件数には数えない
  const firstAuthorTalks = talks.filter(
    (t) => t.role === 'first' && t.kind !== 'public'
  ).length

  return (
    <section className="space-y-8">
      <PageHeader
        title="Research"
        lead="系外惑星のトランジット時刻変動(TTV)観測や、Be星の分光モニター観測に取り組んできました。現在、銀河系バルジ内に存在するMira型変更星に関する研究を進めています。"
        image="/hoshinomura.webp"
        location={photoBySrc('/hoshinomura.webp')?.location || undefined}
        alt="星の村天文台"
        priority
      />

      <Card className="space-y-6 p-6 sm:p-8">
        <SectionTitle
          count={papers.length}
          note={`うち筆頭 ${papers.filter((p) => p.role === 'first').length}`}
        >
          論文
        </SectionTitle>
        <ul className="space-y-4">
          {papers.map((p) => (
            <EntryItem
              key={p.title}
              meta={`${p.year} / ${p.role === 'first' ? '筆頭著者' : '共著者'}`}
              title={
                p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500"
                  >
                    {p.title}
                  </a>
                ) : (
                  p.title
                )
              }
              detail={
                <>
                  {p.authors}, {p.journal}
                </>
              }
            />
          ))}
        </ul>
      </Card>

      <Card className="space-y-6 p-6 sm:p-8">
        <SectionTitle count={talks.length} note={`うち筆頭 ${firstAuthorTalks}`}>
          研究会・セミナー発表
        </SectionTitle>

        <div>
          <h3 className="mb-4 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
            筆頭著者
          </h3>
          <TalkGroup role="first" />
        </div>

        <div className="border-t border-slate-200 pt-6 dark:border-slate-800">
          <h3 className="mb-4 inline-flex rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-600 dark:text-slate-300">
            共著者
          </h3>
          <TalkGroup role="co" />
        </div>
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
