import Reveal from '@/components/ui/Reveal';
import { processSteps } from '@/content/site';

/** Numbered because this genuinely is a sequence, from site walk to payment. */
export default function ProcessTimeline() {
  return (
    <ol className="mt-14 grid gap-px bg-steel-faint sm:grid-cols-2 lg:grid-cols-3">
      {processSteps.map((step, i) => (
        <li key={step.title} className="bg-white">
          <Reveal delay={Math.min(i, 5) * 0.05} className="h-full">
            <div className="flex h-full gap-5 p-7 lg:p-8">
              <span
                aria-hidden
                className="tabular font-display text-2xl font-bold text-leaf"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-forest">
                  {step.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-steel">{step.body}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
