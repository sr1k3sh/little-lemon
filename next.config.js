/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
