const links = [
  { name: 'GitHub', href: 'https://github.com/haru-astro' },
]

export default function Footer() {
  return (
    <footer className="mb-12 mt-20 border-t border-slate-200 pt-8 dark:border-slate-800">
      <div className="flex flex-col items-center gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p>contact : haruhayakawa[at]g.ecc.u-tokyo.ac.jp</p>
          <p>© {new Date().getFullYear()} haru hayakawa. MIT Licensed</p>
        </div>
        <div className="flex gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              {l.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
