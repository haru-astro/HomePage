import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/aboutme': {
    name: 'About me',
  },
  '/activity': {
    name: 'Activity',
  },
  '/outreach': {
    name: 'Outreach',
  },
  '/blog': {
    name: 'Blog',
  },
}

export function Navbar() {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-3 rounded-full border border-slate-200/80 bg-white/80 px-4 py-3 text-sm shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <Link
            key={path}
            href={path}
            className="rounded-full px-4 py-2 transition text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {name}
          </Link>
        )
      })}
    </nav>
  )
}
