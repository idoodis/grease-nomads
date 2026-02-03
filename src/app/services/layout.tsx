import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Mobile Mechanic Services in Chicago Northwest Suburbs',
  description:
    'Comprehensive mobile mechanic services in Mount Prospect, Schaumburg, Naperville and nearby northwest suburbs. Auto repair, maintenance, diagnostics, performance modifications, pre-purchase inspections, and roadside assistance from ASE certified technicians.',
  path: '/services',
  keywords:
    'mobile mechanic services, mobile auto repair, car maintenance, vehicle diagnostics, performance modifications, pre-purchase inspection, roadside assistance, mobile mechanic Chicago suburbs',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
