import NextBundleAnalyzer from '@next/bundle-analyzer'
const withBundleAnalyzer = NextBundleAnalyzer({ enabled: process.env.ANALYZE === 'true', }) // https://nextjs.org/docs/app/guides/package-bundling
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, images: { minimumCacheTTL: 60, }, experimental: { webpackMemoryOptimizations: true,}, compiler: { emotion: true },
}
export default withBundleAnalyzer(nextConfig) // images - https://www.codemotion.com/magazine/frontend/optimize-next-js-for-production/, experimental - https://nextjs.org/docs/app/guides/memory-usage