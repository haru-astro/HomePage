import { promises as fs } from 'fs'
import path from 'path'

export type HobbyEntryMeta = {
  slug: string
  title: string
  date: string
  summary: string
  description?: string
  image?: string
}

export type HobbyEntry = HobbyEntryMeta & {
  content: string
}

const CATEGORY_DIRS: Record<'travel' | 'idols', string> = {
  travel: 'travel/entries',
  idols: 'idols/entries',
}

function getCategoryDir(category: 'travel' | 'idols') {
  return path.join(process.cwd(), 'app', 'aboutme', CATEGORY_DIRS[category])
}

function parseFrontMatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/) ?? raw.match(/^---\r\n([\s\S]*?)\r\n---\r\n?/) 
  if (!match) {
    return { data: {}, content: raw }
  }

  const yaml = match[1]
  const data = yaml.split(/\r?\n/).reduce<Record<string, string>>((acc, line) => {
    const [key, ...rest] = line.split(':')
    if (!key) return acc
    acc[key.trim()] = rest.join(':').trim().replace(/^['"]|['"]$/g, '')
    return acc
  }, {})

  return {
    data,
    content: raw.slice(match[0].length),
  }
}

export async function getAllEntries(category: 'travel' | 'idols') {
  const dir = getCategoryDir(category)
  const fileNames = await fs.readdir(dir)
  const entries = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const raw = await fs.readFile(path.join(dir, fileName), 'utf8')
        const { data } = parseFrontMatter(raw)

        return {
          slug,
          title: data.title ?? slug,
          date: data.date ?? '',
          summary: data.summary ?? '',
          description: data.description ?? '',
          image: data.image,
        }
      })
  )

  return entries
}

export async function getEntryBySlug(category: 'travel' | 'idols', slug: string) {
  const dir = getCategoryDir(category)
  const filePath = path.join(dir, `${slug}.mdx`)
  const raw = await fs.readFile(filePath, 'utf8')
  const { data, content } = parseFrontMatter(raw)

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      summary: data.summary ?? '',
      description: data.description ?? '',
      image: data.image,
    },
    content,
  }
}
