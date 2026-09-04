import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionHeadingProps = {
  title: string;
  lede?: string;
  as?: 'h1' | 'h2';
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  children?: ReactNode;
};

export default function SectionHeading({
  title,
  lede,
  as: Tag = 'h2',
  align = 'left',
  tone = 'light',
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-prose',
        align === 'center' && 'mx-auto text-center',
      )}
    >
      <Tag
        className={cn(
          Tag === 'h1' ? 'text-display-lg' : 'text-display-md',
          tone === 'dark' ? 'text-white' : 'text-forest',
        )}
      >
        {title}
      </Tag>
      {lede && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            tone === 'dark' ? 'text-white/70' : 'text-steel',
          )}
        >
          {lede}
        </p>
      )}
      {children}
    </div>
  );
}
