import Link from 'next/link'
import { getAllEntries } from '../entryHelpers'

export const metadata = {
  title: '旅行',
  description: '旅行の一覧ページです。',
}

export default async function TravelPage() {
  const travelEntries = await getAllEntries('travel')

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">旅行</h1>
      <p className="mt-4">旅先での思い出を一覧で紹介します。</p>
      <ul className="mt-8 space-y-4">
        {travelEntries.map((entry) => (
          <li key={entry.slug} className="rounded-lg border border-neutral-200 p-4">
            <h2 className="text-xl font-semibold">{entry.title}</h2>
            <p className="text-sm text-neutral-500">{entry.date}</p>
            <p className="mt-2">{entry.summary}</p>
            <Link href={`/aboutme/travel/${entry.slug}`} className="mt-3 inline-block text-blue-500 hover:underline">
              詳細を見る
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
