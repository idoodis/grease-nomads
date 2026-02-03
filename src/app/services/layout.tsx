import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Mobile Mechanic Services | Auto Repair, Maintenance, Diagnostics',
  description:
    'Comprehensive mobile mechanic services in Chicago and suburbs. Auto repair, maintenance, diagnostics, performance modifications, pre-purchase inspections, and roadside assistance. ASE certified technicians. Call 224-652-7264.',
  path: '/services',
  keywords:
    'mobile mechanic services, mobile auto repair, car maintenance, vehicle diagnostics, performance modifications, pre-purchase inspection, roadside assistance, mobile mechanic Chicago',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
