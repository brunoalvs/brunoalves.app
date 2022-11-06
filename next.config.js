/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    localeDetection: true,
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
}
