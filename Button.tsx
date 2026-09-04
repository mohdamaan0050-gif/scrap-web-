import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'quiet';
  className?: string;
};

const base =
  'inline-flex items-center justify-center rounded-data px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200';

const variants = {
  solid: 'bg-brand text-white hover:bg-brand-dark',
  outline:
    'border border-steel-faint text-forest hover:border-brand hover:text-brand',
  quiet: 'border border-white/25 text-white hover:border-leaf hover:text-leaf',
};

export default function Button({
  href,
  children,
  variant = 'solid',
  className,
}: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
  const classes = cn(base, variants[variant], className);

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
