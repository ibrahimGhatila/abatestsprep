/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Banners are served from the weserv image CDN, which already does the
    // resizing and JPEG encoding (see the `w=` / `q=` params in the URLs).
    remotePatterns: [
      { protocol: 'https', hostname: 'images.weserv.nl' },
      { protocol: 'https', hostname: 'www.trybloom.ai' },
      { protocol: 'https', hostname: 'gamzesart.com' },
    ],
    // Local placeholder art is still SVG.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
