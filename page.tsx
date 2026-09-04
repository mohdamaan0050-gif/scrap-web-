import PageHeader from '@/components/ui/PageHeader';
import WhyGrid from '@/components/sections/WhyGrid';
import CTABand from '@/components/sections/CTABand';
import Testimonials from '@/components/sections/Testimonials';
import SectionHeading from '@/components/ui/SectionHeading';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Why choose us',
  description:
    'Audit-proof documentation, payment on weighment, labour on our own rolls, lifting within 24 hours and material routed to registered recyclers.',
  path: '/why-us',
});

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        title="Six reasons plants stop shopping around."
        lede="Price gets a trader through the gate once. These are the things that keep the contract."
      />

      <section className="shell py-20 lg:py-28">
        <WhyGrid />
      </section>

      <section className="border-t border-steel-faint bg-board py-20 lg:py-28">
        <div className="shell">
          <SectionHeading title="In their words" />
          <Testimonials />
        </div>
      </section>

      <CTABand />
    </>
  );
}
