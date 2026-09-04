'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { gallery } from '@/content/site';

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-data border border-steel-faint text-left"
            >
              <span className="relative block aspect-[4/3] bg-board">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              </span>
              <span className="block px-4 py-3.5 text-sm text-steel">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={gallery[open].caption}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/95 p-4"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image"
              className="absolute right-5 top-5 rounded-data p-2 text-white/80 hover:text-white"
            >
              <X aria-hidden className="h-7 w-7" />
            </button>
            <figure className="max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={gallery[open].src}
                  alt={gallery[open].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm text-white/70">
                {gallery[open].caption}
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
