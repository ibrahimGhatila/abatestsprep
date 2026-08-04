/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Banners are art-directed backgrounds; AVIF/WebP keeps them cheap at full-bleed sizes.
    formats: ['image/avif', 'image/webp'],
    // Placeholder banners ship as SVG until the real photography lands (see /public/banners/README.md).
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
