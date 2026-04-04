import Link from 'next/link'
import { getAllEntries } from '../entryHelpers'

export const metadata = {
  title: 'アイドル',
  description: 'アイドル関連のページです。',
}

export default async function IdolPage() {
  const idolEntries = await getAllEntries('idols')

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">アイドル</h1>
      <p className="mt-4">参加したライブやイベントの記録をまとめています。</p>
      <ul className="mt-8 space-y-4">
        {idolEntries.map((entry) => (
          <li key={entry.slug} className="rounded-lg border border-neutral-200 p-4">
            <h2 className="text-xl font-semibold">{entry.title}</h2>
            <p className="text-sm text-neutral-500">{entry.date}</p>
            <p className="mt-2">{entry.summary}</p>
            <Link href={`/aboutme/idols/${entry.slug}`} className="mt-3 inline-block text-blue-500 hover:underline">
              詳細を見る
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
