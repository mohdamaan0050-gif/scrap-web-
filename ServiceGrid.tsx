import Reveal from '@/components/ui/Reveal';
import { getIcon } from '@/lib/icons';
import type { Service } from '@/content/site';

export default function ServiceGrid({
  items,
  detailed = false,
}: {
  items: Service[];
  detailed?: boolean;
}) {
  return (
    <ul className="grid gap-px border border-steel-faint bg-steel-faint sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => {
        const Icon = getIcon(service.icon);
        return (
          <li key={service.slug} id={service.slug} className="scroll-mt-28 bg-white">
            <Reveal delay={Math.min(i, 5) * 0.04} className="h-full">
              <article className="flex h-full flex-col p-7 lg:p-8">
                <Icon aria-hidden className="h-7 w-7 text-brand" strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-lg font-bold text-forest">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-steel">{service.summary}</p>
                {detailed && (
                  <p className="mt-4 border-t border-steel-faint pt-4 text-[0.95rem] leading-relaxed text-steel">
                    {service.detail}
                  </p>
                )}
              </article>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
