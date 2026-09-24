# HomePage

早川 晴 (Haru Hayakawa) の個人サイトのソースコードです。

**https://haruhayakawa.vercel.app**

東京大学理学部天文学科での研究業績、天文教育・アウトリーチ活動の記録、
制作したソフトウェア、ブログを公開しています。

## 技術構成

| | |
|---|---|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイル | Tailwind CSS v4 |
| 記事 | MDX (`next-mdx-remote`) |
| ホスティング | Vercel |

## ページ構成

```
/                      名前・所属・研究分野と、各ページへの導線
/activity              活動のハブ（実績サマリと Highlights）
  ├ /activity/research   論文・学会発表
  ├ /activity/career     学歴・受賞・研修・所属団体
  └ /activity/outreach   アウトリーチ活動の年表
/projects              制作したソフトウェア
/blog                  記事一覧
  └ /blog/[slug]         記事本文（MDX）
```

## 開発

```bash
pnpm install
pnpm dev
```

| コマンド | 用途 |
|---|---|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 本番ビルド（Vercel もこれを使う） |
| `pnpm build:check` | 確認用ビルド。出力先が `.next-check` なので **開発サーバーを止めずに実行できる** |
| `pnpm type-check` | 型チェック |

> `pnpm build` は `.next` を上書きするため、開発サーバーの稼働中に実行すると
> チャンクが失われてページが壊れます。動作確認は `pnpm build:check` を使ってください。

## 内容の更新

文章以外のほとんどの情報は、型付きのデータファイルにまとまっています。
配列に1件追加すれば、一覧表示も件数の集計も自動で追従します。

| ファイル | 内容 |
|---|---|
| [`app/activity/data.ts`](app/activity/data.ts) | 学歴・受賞・研修・論文・発表・アウトリーチ・Highlights |
| [`app/projects/data.ts`](app/projects/data.ts) | 制作物（技術スタック、担当範囲、動作を示す GIF のパス） |
| [`app/components/photos.ts`](app/components/photos.ts) | 各ページの帯写真（撮影地ラベル、切り出し位置） |
| `app/blog/posts/*.mdx` | ブログ記事 |

### 写真を追加・差し替えるとき

1. 画像を WebP に変換して `public/` に置く（長辺 1920px 程度）

   ```bash
   cwebp -q 80 -resize 1920 0 photo.jpg -o public/photo.webp
   ```

2. `app/components/photos.ts` に 1 件追加する

   ```ts
   {
     src: '/photo.webp',
     title: '写真の説明',
     location: '撮影地',   // 画像右下にラベルとして出る
     position: 60,         // 0 = 上端 / 50 = 中央（既定）/ 100 = 下端
   }
   ```

3. 使いたいページの `PageHeader` で `image` に指定する

### 制作物に動作の GIF を追加するとき

`public/projects/` に GIF を置き、`app/projects/data.ts` の `media` にパスを書きます。
GIF は Next.js の画像最適化を通すとアニメーションが止まるため、`unoptimized` で配信しています。

## ライセンス

MIT
