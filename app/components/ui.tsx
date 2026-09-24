import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'

/** サイト全体で共通のカード外観 */
export const cardClass =
  'rounded-[1.75rem] border border-slate-200/80 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/80'

export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`${cardClass} ${className}`}>{children}</div>
}

/** 各ページ共通のヘッダー。画像は主役ではなく帯として扱う */
export function PageHeader({
  title,
  lead,
  image,
  alt,
  location,
  priority = false,
}: {
  title: string
  lead?: ReactNode
  image?: string
  alt?: string
  /** 帯写真の撮影地。指定すると画像右下に控えめに表示される */
  location?: string
  priority?: boolean
}) {
  return (
    <header className={`${cardClass} overflow-hidden`}>
      {image && (
        <div className="relative h-56 w-full sm:h-72 md:h-80">
          <Image
            src={image}
            alt={alt ?? ''}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            priority={priority}
            className="object-cover"
          />
          {location && <PhotoCredit>{location}</PhotoCredit>}
        </div>
      )}
      <div className="space-y-3 p-6 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
          {title}
        </h1>
        {lead && (
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {lead}
          </p>
        )}
      </div>
    </header>
  )
}

export function SectionTitle({
  children,
  count,
  note,
}: {
  children: ReactNode
  count?: number
  /** 件数の内訳。「うち筆頭 4」のように渡す */
  note?: string
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
        {children}
      </h2>
      {typeof count === 'number' && (
        <span className="ml-1 text-sm tabular-nums text-slate-400 dark:text-slate-500">
          {count}
        </span>
      )}
      {note && (
        <span className="text-xs tabular-nums text-slate-500 dark:text-slate-400">
          ({note})
        </span>
      )}
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** 行き先が明確な誘導カード */
export function NavCard({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className={`${cardClass} group flex flex-col gap-2 p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)] dark:hover:border-slate-700`}
    >
      <span className="flex items-center justify-between gap-2 text-base font-semibold text-slate-950 dark:text-slate-50">
        {title}
        <ArrowIcon />
      </span>
      <span className="text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </span>
    </Link>
  )
}

/** 実績サマリの数値。note には「うち筆頭 4」のような内訳を渡す */
export function Stat({
  value,
  label,
  note,
}: {
  value: string | number
  label: string
  note?: string
}) {
  return (
    <div className="rounded-2xl bg-slate-100/80 px-4 py-3 dark:bg-slate-800/60">
      <p className="flex items-baseline gap-1.5">
        <span className="text-2xl font-semibold tabular-nums text-slate-950 dark:text-slate-50">
          {value}
        </span>
        {note && (
          <span className="text-xs tabular-nums text-slate-500 dark:text-slate-400">
            ({note})
          </span>
        )}
      </p>
      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  )
}

/** 写真の上に重ねる撮影地ラベル */
export function PhotoCredit({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-slate-950/45 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </svg>
      {children}
    </span>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
      {children}
    </span>
  )
}

/**
 * 「日付 + 本文」の1行。お知らせと Blog 一覧で行の高さを揃えるために共有する。
 * href を渡すとリンクになる。
 */
export function ListRow({
  meta,
  href,
  children,
  wideMeta = false,
}: {
  meta: string
  href?: string
  children: ReactNode
  /** 在学期間のように meta が長いとき、日付側の列を広げる */
  wideMeta?: boolean
}) {
  const base = '-mx-3 flex flex-col rounded-2xl px-3 py-2 md:flex-row md:gap-4'
  const inner = (
    <>
      <span
        className={`shrink-0 text-sm leading-7 tabular-nums text-slate-500 dark:text-slate-400 ${
          wideMeta ? 'md:w-56' : 'md:w-32'
        }`}
      >
        {meta}
      </span>
      <span className="leading-7 tracking-tight text-slate-900 dark:text-slate-100">
        {children}
      </span>
    </>
  )

  if (!href) {
    return <div className={base}>{inner}</div>
  }

  return (
    <Link
      href={href}
      className={`${base} transition hover:bg-slate-100/80 dark:hover:bg-slate-800/60`}
    >
      {inner}
    </Link>
  )
}

/** 年・日付つきの一覧項目 */
export function EntryItem({
  meta,
  title,
  detail,
}: {
  meta: string
  title: ReactNode
  detail?: ReactNode
}) {
  return (
    <li className="flex flex-col gap-1 border-l-2 border-slate-200 pl-4 dark:border-slate-700 sm:flex-row sm:gap-4 sm:border-l-0 sm:pl-0">
      <span className="shrink-0 pt-0.5 text-sm tabular-nums text-slate-500 dark:text-slate-400 sm:w-36">
        {meta}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block leading-7 text-slate-900 dark:text-slate-100">
          {title}
        </span>
        {detail && (
          <span className="mt-0.5 block text-sm leading-6 text-slate-500 dark:text-slate-400">
            {detail}
          </span>
        )}
      </span>
    </li>
  )
}
