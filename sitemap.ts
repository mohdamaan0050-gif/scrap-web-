import type { MetadataRoute } from 'next';
import { footerLinks, siteUrl } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...footerLinks.map((link) => ({
      url: `${siteUrl}${link.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: link.href === '/contact' ? 0.9 : 0.7,
    })),
  ];
}
