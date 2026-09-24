import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'
import { Card, NavCard, Chip, PhotoCredit, ListRow, cardClass } from 'app/components/ui'
import { photoBySrc } from 'app/components/photos'

/** お知らせ・更新履歴。新しいものを先頭に追加する */
const news = [
  { date: '2025/08/16', text: 'サイトをアップデートしました。' },
  { date: '2024/05/12', text: 'サイトを公開しました。' },
]

/** ヒーローのキーワードタグ。書いた順にそのまま並ぶ */
const keywords = ['銀河', '変光星', '系外惑星']

const cover = photoBySrc('/milkyway.webp')

export default function Page() {
  return (
    <section className="space-y-8">
      {/* 1画面目で「誰が・何をしていて・どこを見ればいいか」が分かるようにする */}
      <header className={`${cardClass} overflow-hidden`}>
        <div className="relative h-56 w-full sm:h-72 md:h-80">
          <Image
            src="/milkyway.webp"
            alt="天の川の写真"
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            priority
            className="object-cover"
          />
          {cover?.location && <PhotoCredit>{cover.location}</PhotoCredit>}
        </div>
        <div className="space-y-4 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Haru Hayakawa
          </p>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
              早川 晴
            </h1>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              東京大学 理学部 天文学科 B3
            </p>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            銀河・変光星・系外惑星を対象に天文学の研究をしています。あわせて、中高生を対象とした様々な天文教育・アウトリーチ活動に講師・スタッフとして関わっています。
          </p>
          <div className="flex flex-wrap gap-2">
            {keywords.map((k) => (
              <Chip key={k}>{k}</Chip>
            ))}
          </div>
        </div>
      </header>

      {/* 行き先が明確な誘導 */}
      <div className="grid gap-4 sm:grid-cols-2">
        <NavCard
          href="/activity"
          title="Activity"
          description="学歴・論文・学会発表・受賞・アウトリーチ。"
        />
        <NavCard
          href="/projects"
          title="Projects"
          description="制作したソフトウェアとツール。"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
            お知らせ・更新履歴
          </h2>
          <div className="mt-4 space-y-1">
            {news.map((n) => (
              <ListRow key={n.date} meta={n.date}>
                {n.text}
              </ListRow>
            ))}
          </div>
        </Card>

        <Card className="p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
            Latest Blog
          </h2>
          <div className="mt-4">
            <BlogPosts limit={2} />
          </div>
        </Card>
      </div>
    </section>
  )
}
