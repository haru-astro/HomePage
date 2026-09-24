/**
 * 各ページの帯写真の一次データ。写真は1ページにつき1枚使う。
 * public/ に画像を置き、ここに1件追加してページ側で src を指定する。
 * location を入れると、帯写真の右下に撮影地ラベルが出る。
 */

export type Photo = {
  src: string
  /** 画像の説明（alt にも使う） */
  title: string
  /** 撮影地。未記入なら撮影地ラベルは表示されない */
  location?: string
  /** 撮影時期（任意） */
  date?: string
  /**
   * 横長の帯に切り出すとき、元画像のどのあたりを使うか。
   * 0 = 一番上, 50 = 中央(既定), 100 = 一番下。
   * 55〜60 くらいで「ほんの少し下」、30 や 75 まで振ると「割と動く」。
   */
  position?: number
}

export const photos: Photo[] = [
  {
    src: '/milkyway.webp',
    title: '天の川',
    // TODO: 撮影地を記入してください
    location: '',
  },
  {
    src: '/poland.webp',
    title: 'ホジュフの街並み',
    location: 'ポーランド ホジュフ',
  },
  {
    src: '/planetarium.webp',
    title: 'プラネタリウム',
    location: '平塚市博物館',
  },
  {
    src: '/uzbekistan.webp',
    title: 'レギスタン広場',
    location: 'ウズベキスタン サマルカンド',
    position: 65,
  },
  {
    src: '/china_greatwall.webp',
    title: '万里の長城',
    location: '中国 北京',
    position: 30,
  },
  {
    src: '/malaysia.webp',
    title: 'ペトロナスツインタワー',
    location: 'マレーシア クアラルンプール',
  },
  {
    src: '/cambodia.webp',
    title: 'アンコールワット',
    location: 'カンボジア シェムリアップ',
    position: 60,
  },
]

/** src から写真を引く（帯写真に撮影地を出すため） */
export function photoBySrc(src: string): Photo | undefined {
  return photos.find((p) => p.src === src)
}
