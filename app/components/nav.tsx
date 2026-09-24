'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': { name: 'Home' },
  '/aboutme': { name: 'About me' },
  '/activity': { name: 'Activity' },
  '/projects': { name: 'Projects' },
  '/blog': { name: 'Blog' },
}

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    // スクロール時に本文が透けないよう、外側でページ背景をフェードさせる
    <div className="sticky top-0 z-20 -mx-4 mb-8 bg-gradient-to-b from-slate-50 via-slate-50/95 to-transparent px-4 pb-6 pt-4 dark:from-slate-950 dark:via-slate-950/95">
      <nav className="flex items-center gap-1 overflow-x-auto rounded-full border border-slate-200/80 bg-white/90 px-2 py-2 text-sm shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/90">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            aria-current={isActive(path) ? 'page' : undefined}
            className={
              isActive(path)
                ? 'shrink-0 whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 font-medium text-white dark:bg-slate-100 dark:text-slate-900'
                : 'shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
            }
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
