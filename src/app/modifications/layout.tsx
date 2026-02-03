import { generatePageMetadata, getServiceSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = generatePageMetadata({
  title: 'Performance Modifications | Custom Auto Work in Chicago',
  description:
    'Professional performance modifications and custom automotive work in Chicago and suburbs. Hourly labor rate for custom modifications, upgrades, and enhancements. Mobile service. Call 224-652-7264.',
  path: '/modifications',
  keywords:
    'performance modifications, custom auto work, car modifications, mobile mechanic modifications, automotive upgrades, Chicago',
});

export default function ModificationsLayout({ children }: { children: React.ReactNode }) {
  const serviceSchema = getServiceSchema(
    'Performance Modifications',
    'Professional performance modifications and custom automotive work including engine upgrades, suspension modifications, exhaust systems, and custom enhancements. Delivered to your location.',
    '/modifications'
  );

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
