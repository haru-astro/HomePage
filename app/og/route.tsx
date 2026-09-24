import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || '早川 晴 / Haru HAYAKAWA'

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full flex-col justify-between bg-white"
        style={{ padding: '72px' }}
      >
        <div tw="flex text-2xl tracking-widest text-slate-500">
          HARU HAYAKAWA
        </div>
        <div tw="flex text-6xl font-bold leading-tight text-slate-900">
          {title}
        </div>
        <div tw="flex text-2xl text-slate-500">
          東京大学 理学部 天文学科 ・ haruhayakawa.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
