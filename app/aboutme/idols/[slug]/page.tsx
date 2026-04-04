import { notFound } from 'next/navigation'
import { CustomMDX } from '../../../components/mdx'
import { getAllEntries, getEntryBySlug } from '../../entryHelpers'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const idolEntries = await getAllEntries('idols')
  return idolEntries.map((entry) => ({ slug: entry.slug }))
}

export default async function IdolDetailPage({ params }: Props) {
  let entry
  try {
    entry = await getEntryBySlug('idols', params.slug)
  } catch {
    notFound()
  }

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">{entry.meta.title}</h1>
      <p className="text-sm text-neutral-500 mt-2">{entry.meta.date}</p>
      {entry.meta.image ? (
        <img
          src={entry.meta.image}
          alt={entry.meta.title}
          className="mt-6 rounded-lg border border-neutral-200"
        />
      ) : null}
      <p className="mt-4">{entry.meta.description}</p>
      <article className="prose mt-6">
        <CustomMDX source={entry.content} />
      </article>
    </section>
  )
}
