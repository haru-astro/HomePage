import Image from 'next/image'
import { PageHeader, Card, PhotoCredit } from 'app/components/ui'
import { photos } from './data'

export const metadata = {
  title: 'Photos',
  description: '早川晴が撮影した写真のギャラリー。',
}

export default function PhotosPage() {
  const [cover, ...rest] = photos

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Photos"
        title="Photos"
        lead="趣味で撮っている写真です。星景を中心に、旅先の風景も撮っています。"
        image={cover.src}
        alt={cover.title}
        location={cover.location || undefined}
        priority
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {rest.map((photo) => (
          <Card key={photo.src} className="overflow-hidden">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, 440px"
                className="object-cover"
              />
              {photo.location && <PhotoCredit>{photo.location}</PhotoCredit>}
            </div>
            <div className="flex items-baseline justify-between gap-3 px-5 py-4">
              <p className="font-medium text-slate-900 dark:text-slate-100">
                {photo.title}
              </p>
              {photo.date && (
                <p className="shrink-0 text-xs tabular-nums text-slate-500 dark:text-slate-400">
                  {photo.date}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
