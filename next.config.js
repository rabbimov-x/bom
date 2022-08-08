/** @type {import('next').NextConfig} */



module.exports = {
  reactStrictMode: true,
  env: {
     GOOGLE_ANALYTICS_ID: "UA-233419368-1"
  },
  images: {
    domains: ['backend.carto-go.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // loader: 'imgix',
    // path: 'https://backend.carto-go.com/',
    // minimumCacheTTL: 60,
    // reactStrictMode: true,
  },
}