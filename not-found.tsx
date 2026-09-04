import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="dark-panel flex min-h-[70vh] items-center bg-forest-deep pt-24 text-white">
      <div className="shell">
        <p className="tabular font-display text-display-md text-leaf">404</p>
        <h1 className="mt-4 text-display-lg text-white">
          That page is not here.
        </h1>
        <p className="mt-5 max-w-prose text-lg text-white/70">
          The link may be old. Start from the home page, or tell us what you were
          looking for.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/" className="bg-leaf text-forest hover:bg-white">
            Go to home page
          </Button>
          <Button href="/contact" variant="quiet">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
