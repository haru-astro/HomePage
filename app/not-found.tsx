import Link from 'next/link'
import { Card } from 'app/components/ui'

export default function NotFound() {
  return (
    <Card className="p-8 sm:p-12">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
        ページが見つかりませんでした
      </h1>
      <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
        お探しのページは削除されたか、URLが変更された可能性があります。
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        トップページへ戻る
      </Link>
    </Card>
  )
}
