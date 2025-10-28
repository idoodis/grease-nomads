import type { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { ServicesPage as ServicesPageView } from '@/components/services-page';

type ServiceRecord = {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  basePrice: number;
  priceUnit: string;
  isFeatured: boolean;
};

export const metadata: Metadata = {
  title: 'Auto Repair Services | ASE Certified Mobile Mechanics | Grease Nomads',
  description:
    'Professional ASE certified mobile mechanic services in Chicago. Emergency repairs, maintenance, diagnostics, performance modifications, and pre-purchase inspections delivered to your location.',
  keywords:
    'mobile mechanic services, auto repair, emergency service, car maintenance, diagnostics, performance modifications, pre-purchase inspection, ASE certified, Chicago',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Auto Repair Services | Grease Nomads',
    description:
      'Discover our full suite of ASE certified mobile mechanic services in Chicago, from emergency repairs to routine maintenance.',
    url: 'https://greasenomads.com/services',
    type: 'website',
  },
};

export default async function ServicesPage() {
  let services: ServiceRecord[] = [];

  try {
    const dbServices = await prisma.service.findMany({
      orderBy: [
        { isFeatured: 'desc' },
        { name: 'asc' },
      ],
    });

    services = dbServices.map((service) => ({
      id: service.id,
      name: service.name,
      slug: service.slug,
      description: service.description,
      longDescription: service.longDescription,
      basePrice: service.basePrice,
      priceUnit: service.priceUnit,
      isFeatured: service.isFeatured,
    }));
  } catch (error) {
    console.error('Failed to load services from database', error);
  }

  return <ServicesPageView services={services} />;
}
