import { cn } from '@/lib/cn';

/**
 * Placeholder wordmark drawn as inline SVG so the header stays sharp at any
 * size and costs no extra request.
 *
 * TO SWAP IN THE REAL LOGO: put logo.svg (or logo.png) in /public and replace
 * the <svg> below with:
 *   <Image src="/logo.svg" alt="Apashishta Vyapar Sanstha" width={44} height={44} priority />
 */
export default function Logo({
  tone = 'light',
  className,
}: {
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const ring = tone === 'dark' ? '#8CC63F' : '#1F7A4C';
  const leaf = tone === 'dark' ? '#FFFFFF' : '#8CC63F';

  return (
    <span className={cn('flex items-center gap-3', className)}>
      <svg
        viewBox="0 0 48 48"
        width="40"
        height="40"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M24 5a19 19 0 1 1-13.4 5.6"
          fill="none"
          stroke={ring}
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path d="M10.6 3.4v7.8h7.8" fill="none" stroke={ring} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M24 33c-5-2.2-7.4-6.6-7.4-11.6 5.6-.4 10 1.4 12.2 5 2 3.2 1.4 6.8-.6 9.2"
          fill={leaf}
          opacity="0.95"
        />
        <path d="M24 38v-9" fill="none" stroke={ring} strokeWidth="2.6" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span
          className={cn(
            'block font-display text-[0.95rem] font-bold tracking-tight sm:text-base',
            tone === 'dark' ? 'text-white' : 'text-forest',
          )}
        >
          Apashishta Vyapar Sanstha
        </span>
        <span
          className={cn(
            'mt-1 block text-[0.68rem] tracking-wide',
            tone === 'dark' ? 'text-leaf' : 'text-brand',
          )}
        >
          Waste trading, collection, recycling
        </span>
      </span>
    </span>
  );
}
