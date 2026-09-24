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
}

export const photos: Photo[] = [
  {
    src: '/milkyway.webp',
    title: '天の川',
    // TODO: 撮影地を記入してください
    location: '',
  },
  {
    src: '/bluepond.webp',
    title: '青い池',
    location: '北海道 美瑛町',
  },
  {
    src: '/hoshinomura.webp',
    title: '星の村天文台',
    location: '福島県 田村市',
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
]

/** src から写真を引く（帯写真に撮影地を出すため） */
export function photoBySrc(src: string): Photo | undefined {
  return photos.find((p) => p.src === src)
}
