import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/80">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Portfolio
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
              Welcome to my Portfolio!
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              ご覧いただきありがとうございます。
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              早川晴のホームページです。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/aboutme"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                詳細を見る
              </Link>
              <a
                href="#news"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                お知らせ
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-slate-50/90 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/80">
            <Image
              src="/milkyway.jpg"
              alt="天の川の写真"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article id="news" className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/80">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
            お知らせ・更新履歴
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
            <div className="rounded-3xl bg-slate-100/80 p-4 dark:bg-slate-900/80">
              <p className="font-semibold text-slate-900 dark:text-slate-100">2025年8月16日</p>
              <p className="text-sm leading-6">サイトをアップデートしました。</p>
            </div>
            <div className="rounded-3xl bg-slate-100/80 p-4 dark:bg-slate-900/80">
              <p className="font-semibold text-slate-900 dark:text-slate-100">2024年5月12日</p>
              <p className="text-sm leading-6">サイトを公開しました。</p>
            </div>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/80">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
            Latest Blog
          </h2>
          <div className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
            <BlogPosts />
          </div>
        </article>
      </div>
    </section>
  )
}
