import Button from '@/components/ui/Button';
import RateBoard from '@/components/sections/RateBoard';

export default function Hero() {
  return (
    <section className="dark-panel relative overflow-hidden bg-forest-deep pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
      {/* Quiet backdrop: one soft light source, no decorative gradients. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-brand/20 blur-3xl"
      />
      <div className="shell relative grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h1 className="text-display-xl text-white">
            Your scrap is worth more than the yard it is sitting in.
          </h1>
          <p className="mt-7 max-w-prose text-lg leading-relaxed text-white/75 sm:text-xl">
            Apashishta buys, collects and recycles industrial waste across
            western Uttar Pradesh and Uttarakhand. Every lot is weighed on a
            calibrated bridge, papered properly, and paid for before the truck
            leaves your gate.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" className="bg-leaf text-forest hover:bg-white">
              Get a rate for your scrap
            </Button>
            <Button href="/services" variant="quiet">
              See what we handle
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <RateBoard />
        </div>
      </div>
    </section>
  );
}
