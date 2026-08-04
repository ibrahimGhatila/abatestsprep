import Image from 'next/image';
import { banners, type BannerKey } from '@/content/site';

/**
 * `flat-dark` / `flat-orange` are solid brand-colour washes at fixed opacity —
 * not gradients. The new design language is colour blocking, and a moody
 * multi-stop gradient over a photograph is exactly the look it replaced.
 */
type ScrimTone = 'flat-dark' | 'flat-orange' | 'edge-dark' | 'none';

const scrims: Record<ScrimTone, string> = {
  'flat-dark': 'bg-charcoal/72',
  'flat-orange': 'bg-orange/78 mix-blend-multiply',
  // A single hard-edged wash from the left for copy-over-image blocks.
  'edge-dark': 'bg-[linear-gradient(to_right,rgba(26,20,16,0.9)_0%,rgba(26,20,16,0.9)_46%,rgba(26,20,16,0.45)_100%)]',
  none: '',
};

/**
 * Art-directed banner frame.
 *
 * Fixed-ratio box with `fill` inside it, so the image can never cause layout
 * shift. The box also carries a flat brand colour, which means a slow or
 * failed image load degrades to a solid panel that still fits the design
 * rather than leaving a hole.
 *
 * `unoptimized` is deliberate: these URLs are already served by the weserv
 * CDN with resize and quality parameters baked in, so running them through
 * Next's optimizer would re-encode an optimised JPEG for no gain.
 */
export default function Banner({
  name,
  ratio = '4/5',
  scrim = 'flat-dark',
  bg = 'bg-charcoal',
  priority = false,
  sizes = '100vw',
  className = '',
  imageClassName = '',
  children,
}: {
  name: BannerKey;
  /** CSS aspect-ratio string, or `auto` to fill a sized parent. */
  ratio?: string;
  scrim?: ScrimTone;
  /** Flat colour behind the image — also the fallback if it fails to load. */
  bg?: string;
  /** Only the hero should be priority; everything else lazy-loads. */
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}) {
  const banner = banners[name];

  return (
    /* `w-full` is load-bearing: with only `aspect-ratio` set, a block box that
       also has a `min-height` resolves its width from the ratio and can grow
       wider than its parent. */
    <div className={`relative w-full overflow-hidden ${bg} ${className}`} style={{ aspectRatio: ratio }}>
      <Image
        src={banner.src}
        alt={banner.alt}
        fill
        unoptimized
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className={`object-cover ${imageClassName}`}
      />
      {scrim !== 'none' && <div aria-hidden="true" className={`absolute inset-0 ${scrims[scrim]}`} />}
      {children}
    </div>
  );
}
