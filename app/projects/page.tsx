import { PageHeader, Card, SectionTitle, Chip } from 'app/components/ui'
import { projects, usedStack, categoryLabel } from './data'

export const metadata = {
  title: 'Projects',
  description: '早川晴が制作したソフトウェア・ツールのポートフォリオ。',
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      {label}
      <svg
        width="11"
        height="11"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path
          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
          fill="currentColor"
        />
      </svg>
    </a>
  )
}

export default function ProjectsPage() {
  const stack = usedStack()

  return (
    <section className="space-y-8">
      <PageHeader
        title="Projects"
        lead="研究の解析ツールから Web サイトまで、自分で作ったものをまとめています。"
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
          <Card className="p-8 text-center text-slate-500 dark:text-slate-400">
            準備中です。
          </Card>
        ) : (
          <div className="grid gap-4">
            {projects.map((p) => (
              <Card key={p.title} className="space-y-4 p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium dark:bg-slate-800">
                      {categoryLabel[p.category]}
                    </span>
                    {p.period && <span className="tabular-nums">{p.period}</span>}
                  </div>
                </div>

                <p className="leading-8 text-slate-600 dark:text-slate-300">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>

                {(p.url || p.repo) && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.url && <ExternalLink href={p.url} label="サイトを見る" />}
                    {p.repo && <ExternalLink href={p.repo} label="ソースコード" />}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
