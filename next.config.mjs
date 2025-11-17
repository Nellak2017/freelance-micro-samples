/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, images: { minimumCacheTTL: 60, }, experimental: { webpackMemoryOptimizations: true,},}
export default nextConfig // images - https://www.codemotion.com/magazine/frontend/optimize-next-js-for-production/, experimental - https://nextjs.org/docs/app/guides/memory-usage