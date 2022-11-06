/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "via.placeholder.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
    ],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    localeDetection: true,
  },
}
