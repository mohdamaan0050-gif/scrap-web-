import Reveal from '@/components/ui/Reveal';
import { whyUs } from '@/content/site';
import { getIcon } from '@/lib/icons';

export default function WhyGrid() {
  return (
    <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {whyUs.map((item, i) => {
        const Icon = getIcon(item.icon);
        return (
          <li key={item.title}>
            <Reveal delay={Math.min(i, 5) * 0.04}>
              <div className="flex h-11 w-11 items-center justify-center rounded-data bg-brand/10">
                <Icon aria-hidden className="h-5 w-5 text-brand" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-forest">
                {item.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-steel">{item.body}</p>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
