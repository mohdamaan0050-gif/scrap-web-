'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { boardUpdated, rateBoard } from '@/content/site';

/**
 * The one orchestrated moment on the site: the gate rate board ticking into
 * place on load, the way a yard chalks up the day's buying rates.
 */
export default function RateBoard() {
  const reduced = useReducedMotion();

  return (
    <div className="rounded-data border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-lg font-bold text-white">
          Buying rates at the gate
        </h2>
        <span className="text-xs text-leaf">{boardUpdated}</span>
      </div>

      <dl className="mt-6">
        {rateBoard.map((row, i) => (
          <motion.div
            key={row.material}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: reduced ? 0 : 0.15 + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-baseline justify-between gap-4 border-t border-white/10 py-3.5 first:border-0 first:pt-0"
          >
            <dt className="text-[0.95rem] text-white/75">{row.material}</dt>
            <dd className="tabular whitespace-nowrap font-display text-lg font-bold text-leaf">
              ₹{row.rate.toLocaleString('en-IN')}
              <span className="text-sm font-medium text-white/50">{row.unit}</span>
            </dd>
          </motion.div>
        ))}
      </dl>

      <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/45">
        Indicative only. Final rate is fixed on grade and quantity after we see
        the lot.
      </p>
    </div>
  );
}
