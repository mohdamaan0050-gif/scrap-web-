import Reveal from '@/components/ui/Reveal';
import { industries } from '@/content/site';
import { getIcon } from '@/lib/icons';

export default function IndustryGrid() {
  return (
    <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((industry, i) => {
        const Icon = getIcon(industry.icon);
        return (
          <li key={industry.title}>
            <Reveal delay={Math.min(i, 5) * 0.04}>
              <Icon aria-hidden className="h-6 w-6 text-brand" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-base font-bold text-forest">
                {industry.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-steel">
                {industry.note}
              </p>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
