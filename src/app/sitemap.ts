import { MetadataRoute } from 'next';
import { prisma } from '@/lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXTAUTH_URL || 'https://greasenomads.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = [];
  const serviceAreaPages: MetadataRoute.Sitemap = [];

  if (!process.env.DATABASE_URL) {
    console.warn(
      'DATABASE_URL is not defined. Skipping dynamic entries in the sitemap.'
    );
  } else {
    try {
      const services = await prisma.service.findMany({
        select: { slug: true, updatedAt: true },
      });

      servicePages.push(
        ...services.map((service) => ({
          url: `${baseUrl}/services/${service.slug}`,
          lastModified: service.updatedAt,
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }))
      );
    } catch (error) {
      console.error('Failed to load service entries for sitemap:', error);
    }

    try {
      const serviceAreas = await prisma.serviceArea.findMany({
        select: { slug: true },
      });

      serviceAreaPages.push(
        ...serviceAreas.map((area) => ({
          url: `${baseUrl}/service-areas/${area.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }))
      );
    } catch (error) {
      console.error('Failed to load service area entries for sitemap:', error);
    }
  }

  return [...staticPages, ...servicePages, ...serviceAreaPages];
}
