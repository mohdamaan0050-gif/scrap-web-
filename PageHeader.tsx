import SectionHeading from '@/components/ui/SectionHeading';

/** Consistent top-of-page block for every inner page. */
export default function PageHeader({
  title,
  lede,
}: {
  title: string;
  lede: string;
}) {
  return (
    <section className="dark-panel bg-forest-deep pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
      <div className="shell">
        <SectionHeading as="h1" title={title} lede={lede} tone="dark" />
      </div>
    </section>
  );
}
