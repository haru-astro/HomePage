/** @type {import('next').NextConfig} */
const nextConfig = {
  // dev サーバーと確認用ビルドが .next を奪い合うと、
  // 稼働中の dev サーバーのチャンクが消えてページが壊れる。
  // 確認用ビルドは NEXT_DIST_DIR で別ディレクトリに出す（pnpm build:check）。
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // /activity は実ページに戻したのでリダイレクトしない
      {
        source: '/aboutme',
        destination: '/activity',
        permanent: true,
      },
      {
        source: '/outreach',
        destination: '/activity/outreach',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
