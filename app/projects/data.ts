/**
 * プログラミングの成果物。
 * ここに1件追加すれば Projects ページに並ぶ。
 * 実際に公開しているものを追記していってください。
 */

export type Project = {
  title: string
  /** 1〜2行の説明 */
  description: string
  /** 使用技術。Skills のタグにもそのまま使われる */
  stack: string[]
  /** 制作時期 */
  period?: string
  /** 公開URL（あれば） */
  url?: string
  /** ソースコード（あれば） */
  repo?: string
  /** 研究向けか、Web/ツールかの区分 */
  category: 'web' | 'research' | 'tool'
}

export const categoryLabel: Record<Project['category'], string> = {
  web: 'Web',
  research: 'Research',
  tool: 'Tool',
}

export const projects: Project[] = [
  {
    title: 'Personal Homepage',
    description:
      'このサイト。Next.js の App Router で構築し、記事は MDX、活動実績は型付きデータから生成しています。Vercel で公開。',
    stack: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'MDX'],
    period: '2024 -',
    url: 'https://haruhayakawa.vercel.app',
    repo: 'https://github.com/haru-astro/HomePage',
    category: 'web',
  },
  // ここに成果物を追加してください。例:
  // {
  //   title: 'TTV 解析スクリプト',
  //   description: '系外惑星のトランジット時刻を測定し、TTV を求める解析パイプライン。',
  //   stack: ['Python', 'NumPy', 'Astropy'],
  //   period: '2025',
  //   repo: 'https://github.com/haru-astro/...',
  //   category: 'research',
  // },
]

/** 成果物で使った技術を重複なく集めたもの */
export function usedStack(): string[] {
  return Array.from(new Set(projects.flatMap((p) => p.stack)))
}
