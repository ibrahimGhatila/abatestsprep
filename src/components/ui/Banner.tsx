import Image from 'next/image';
import { banners, type BannerKey } from '@/content/site';

type ScrimTone = 'warm' | 'charcoal' | 'none';

const scrims: Record<ScrimTone, string> = {
  // Warm scrim: orange-deep bleeding up from the base so cream text stays
  // legible without the image turning into a grey wash.
  warm: 'bg-[linear-gradient(to_top,rgba(26,20,16,0.86)_0%,rgba(166,67,26,0.42)_38%,rgba(240,109,46,0.10)_68%,transparent_100%)]',
  charcoal: 'bg-[linear-gradient(to_right,rgba(26,20,16,0.92)_0%,rgba(26,20,16,0.72)_45%,rgba(26,20,16,0.35)_100%)]',
  none: '',
};

/**
 * Art-directed banner frame.
 *
 * Every banner is a fixed-ratio box with `fill` inside it, so the image never
 * causes layout shift regardless of the file that eventually lands there.
 * Scrims are gradients rather than flat overlays — a flat black wash is what
 * makes photography look like stock.
 */
export default function Banner({
  name,
  ratio = '4/5',
  scrim = 'warm',
  priority = false,
  sizes = '100vw',
  className = '',
  imageClassName = '',
  children,
}: {
  name: BannerKey;
  /** CSS aspect-ratio string. */
  ratio?: string;
  scrim?: ScrimTone;
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
    <div className={`relative w-full overflow-hidden bg-sand ${className}`} style={{ aspectRatio: ratio }}>
      <Image
        src={banner.src}
        alt={banner.alt}
        fill
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
