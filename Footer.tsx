import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { company, footerLinks, fullAddress, services } from '@/content/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-panel bg-forest-deep text-white/70">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo tone="dark" />
          <p className="mt-6 max-w-xs leading-relaxed">
            We buy, collect and recycle industrial waste across western Uttar
            Pradesh and Uttarakhand — weighed, papered and paid for.
          </p>
          <p className="mt-6 font-display text-lg font-semibold text-leaf">
            {company.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="font-display text-sm font-bold text-white">Quick links</h2>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-leaf">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="font-display text-sm font-bold text-white">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="transition-colors hover:text-leaf"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic md:col-span-3">
          <h2 className="font-display text-sm font-bold text-white">Reach us</h2>
          <ul className="mt-5 space-y-4">
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
              <a href={`tel:${company.phoneIntl}`} className="tabular hover:text-leaf">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-leaf">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
              <span className="leading-relaxed">{fullAddress}</span>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. Proprietor: {company.proprietor}.
          </p>
          <p className="text-white/50">{company.hours}</p>
        </div>
      </div>
    </footer>
  );
}
