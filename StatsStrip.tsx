import Counter from '@/components/ui/Counter';
import { stats } from '@/content/site';

export default function StatsStrip() {
  return (
    <section className="border-b border-steel-faint bg-board">
      <div className="shell grid gap-px py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-steel-faint px-0 py-5 sm:px-6 lg:border-l lg:first:border-l-0 lg:first:pl-0"
          >
            <p className="font-display text-display-sm font-bold text-brand">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm leading-relaxed text-steel">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
