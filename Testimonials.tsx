'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { testimonials } from '@/content/site';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const item = testimonials[index];

  const go = (delta: number) =>
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-display-sm font-semibold leading-snug text-forest">
              {item.quote}
            </p>
            <footer className="mt-6 text-[0.95rem] text-steel">
              {item.role}, {item.place}
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="rounded-data border border-steel-faint p-2.5 text-forest transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft aria-hidden className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="rounded-data border border-steel-faint p-2.5 text-forest transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight aria-hidden className="h-5 w-5" />
          </button>
          <span className="tabular ml-2 text-sm text-steel-light">
            {index + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </div>
  );
}
