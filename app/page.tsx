import Image from 'next/image'
import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'
import { Card, NavCard, Chip, PhotoCredit, cardClass } from 'app/components/ui'
import { photos, photoBySrc } from 'app/photos/data'

/** お知らせ・更新履歴。新しいものを先頭に追加する */
const news = [
  { date: '2025年8月16日', text: 'サイトをアップデートしました。' },
  { date: '2024年5月12日', text: 'サイトを公開しました。' },
]

const keywords = ['系外惑星', '変光星', '銀河']

const cover = photoBySrc('/milkyway.webp')

export default function Page() {
  return (
    <section className="space-y-8">
      {/* 1画面目で「誰が・何をしていて・どこを見ればいいか」が分かるようにする */}
      <header className={`${cardClass} overflow-hidden`}>
        <div className="relative h-32 w-full sm:h-40">
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
            系外惑星・変光星・銀河を対象に天文学の研究をしています。あわせて、天文学オリンピックを中心とした教育・アウトリーチ活動に講師・スタッフとして関わっています。
          </p>
          <div className="flex flex-wrap gap-2">
            {keywords.map((k) => (
              <Chip key={k}>{k}</Chip>
            ))}
          </div>
        </div>
      </header>

      {/* 行き先が明確な誘導 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NavCard
          href="/aboutme"
          title="About me"
          description="経歴・所属・研究テーマ。"
        />
        <NavCard
          href="/activity"
          title="Activity"
          description="論文・学会発表・受賞・アウトリーチ。"
        />
        <NavCard
          href="/projects"
          title="Projects"
          description="制作したソフトウェアとツール。"
        />
        <NavCard
          href="/blog"
          title="Blog"
          description="日々考えたことの記録。"
        />
      </div>

      {/* 趣味の写真。撮影地つきで並べる */}
      <div className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
            Photos
          </h2>
          <Link
            href="/photos"
            className="text-sm text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {photos.slice(0, 4).map((photo) => (
            <Link
              key={photo.src}
              href="/photos"
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/80"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, 220px"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              {photo.location && <PhotoCredit>{photo.location}</PhotoCredit>}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
            お知らせ・更新履歴
          </h2>
          <ul className="mt-4 space-y-3">
            {news.map((n) => (
              <li key={n.date} className="flex flex-col sm:flex-row sm:gap-4">
                <span className="shrink-0 text-sm tabular-nums text-slate-500 dark:text-slate-400 sm:w-28">
                  {n.date}
                </span>
                <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {n.text}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
            最新のブログ
          </h2>
          <div className="mt-4">
            <BlogPosts limit={2} />
          </div>
        </Card>
      </div>
    </section>
  )
}
