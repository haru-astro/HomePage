import Image from 'next/image'
import { PageHeader, Card, SectionTitle, Chip } from 'app/components/ui'
import { projects, usedStack, categoryLabel, type Project } from './data'
import { photoBySrc } from 'app/components/photos'

export const metadata = {
  title: 'Projects',
  description: '早川晴が制作したソフトウェア・ツールのポートフォリオ。',
}

/** 動いている様子。未登録のうちはプレースホルダを出す */
function Preview({ project }: { project: Project }) {
  if (!project.media) {
    return (
      <div className="flex aspect-video w-full items-center justify-center border-b border-slate-200/80 bg-slate-100/70 text-xs text-slate-400 dark:border-slate-800/80 dark:bg-slate-800/50 dark:text-slate-500">
        動作の様子は準備中です
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200/80 bg-slate-100 dark:border-slate-800/80 dark:bg-slate-800">
      <Image
        src={project.media}
        alt={project.mediaAlt ?? `${project.title}の動作の様子`}
        fill
        sizes="(max-width: 640px) 100vw, 440px"
        unoptimized
        className="object-cover"
      />
    </div>
  )
}

export default function ProjectsPage() {
  const stack = usedStack()

  return (
    <section className="space-y-8">
      <PageHeader
        title="Projects"
        lead="研究の解析ツールから Web サイトまで、自分で作ったものをまとめています。"
        image="/malaysia.webp"
        location={photoBySrc('/malaysia.webp')?.location || undefined}
        alt="ペトロナスツインタワー"
        priority
      />

      {stack.length > 0 && (
        <Card className="space-y-4 p-6 sm:p-8">
          <SectionTitle>Skills</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </Card>
      )}

      <div className="space-y-4">
        <SectionTitle count={projects.length}>Works</SectionTitle>

        {projects.length === 0 ? (
          <Card className="p-8 text-center text-sm text-slate-500 dark:text-slate-400">
            準備中です。
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} className="flex flex-col overflow-hidden">
                <Preview project={p} />

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-semibold text-slate-950 dark:text-slate-50">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium dark:bg-slate-800">
                        {categoryLabel[p.category]}
                      </span>
                      {p.period && (
                        <span className="tabular-nums">{p.period}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {p.description}
                  </p>

                  {p.role && (
                    <p className="border-l-2 border-slate-300 pl-3 text-sm leading-6 text-slate-500 dark:border-slate-600 dark:text-slate-400">
                      <span className="mr-2 font-medium text-slate-700 dark:text-slate-300">
                        担当
                      </span>
                      {p.role}
                    </p>
                  )}

                  {p.stack.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-2 pt-1">
                      {p.stack.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
