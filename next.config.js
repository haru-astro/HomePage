/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/activity',
        destination: '/works',
        permanent: true,
      },
      {
        source: '/outreach',
        destination: '/works/outreach',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
