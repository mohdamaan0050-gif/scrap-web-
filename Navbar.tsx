'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { company, nav } from '@/content/site';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  const onHome = pathname === '/';
  // Over the dark hero the bar is transparent; everywhere else it is solid.
  const transparent = onHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        transparent
          ? 'dark-panel bg-transparent'
          : 'border-b border-steel-faint bg-white/95 backdrop-blur',
      )}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={`${company.name} home`}>
          <Logo tone={transparent ? 'dark' : 'light'} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm font-medium transition-colors',
                  transparent
                    ? active
                      ? 'text-leaf'
                      : 'text-white/80 hover:text-white'
                    : active
                      ? 'text-brand'
                      : 'text-steel hover:text-forest',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.phoneIntl}`}
            className={cn(
              'hidden items-center gap-2 rounded-data px-4 py-2.5 text-sm font-semibold transition-colors sm:inline-flex',
              transparent
                ? 'bg-leaf text-forest hover:bg-white'
                : 'bg-brand text-white hover:bg-brand-dark',
            )}
          >
            <Phone aria-hidden className="h-4 w-4" />
            <span className="tabular">{company.phone}</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={cn(
              'rounded-data p-2 lg:hidden',
              transparent ? 'text-white' : 'text-forest',
            )}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-steel-faint bg-white lg:hidden"
          >
            <ul className="shell py-2">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-steel-faint/60 last:border-0">
                  <Link
                    href={item.href}
                    className="block py-3.5 font-display text-lg font-semibold text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <a
                  href={`tel:${company.phoneIntl}`}
                  className="inline-flex items-center gap-2 rounded-data bg-brand px-5 py-3 text-sm font-semibold text-white"
                >
                  <Phone aria-hidden className="h-4 w-4" />
                  <span className="tabular">Call {company.phone}</span>
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
