import Button from '@/components/ui/Button';
import { company } from '@/content/site';

export default function CTABand() {
  return (
    <section className="dark-panel bg-forest">
      <div className="shell flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-prose">
          <h2 className="text-display-md text-white">
            Tell us what is lying in your yard.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Send a list of materials and rough weights. We will come and see the
            lot, then put a rate in writing.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" className="bg-leaf text-forest hover:bg-white">
            Request a rate
          </Button>
          <Button href={`tel:${company.phoneIntl}`} variant="quiet">
            Call {company.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
