import { company, fullAddress } from '@/content/site';

/**
 * Lazy-loaded map. Kept out of the critical path so it never affects LCP.
 * No API key needed for the embed.
 */
export default function MapEmbed() {
  const query = encodeURIComponent(fullAddress);

  return (
    <div className="overflow-hidden rounded-data border border-steel-faint">
      <iframe
        title={`Map showing ${company.name} in ${company.address.city}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[380px] w-full border-0"
      />
    </div>
  );
}
