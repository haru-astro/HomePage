/** @type {import('next').NextConfig} */
const nextConfig = {
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
