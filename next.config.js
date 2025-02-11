/** @type {import('next').NextConfig} */
const nextConfig = {}

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

module.exports = withNextIntl({
  // Other Next.js configuration ...
  ...nextConfig, // 將原本的 Next.js 配置合併進來
});

