/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    localeDetection: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          families: ["Fira Sans Condensed"],
          subsets: ["latin"],
        },
      },
    ],
  },
})
