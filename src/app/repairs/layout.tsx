import { generatePageMetadata, getServiceSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = generatePageMetadata({
  title: 'Mobile Auto Repair Services | Same-Day Repairs in Chicago',
  description:
    'Professional mobile auto repair services in Chicago and suburbs. Same-day repairs, hourly labor rate, comprehensive automotive fixes delivered to your location. Call 224-652-7264.',
  path: '/repairs',
  keywords:
    'mobile auto repair, mobile mechanic repair, same-day auto repair, mobile car repair, emergency auto repair, Chicago mobile mechanic',
});

export default function RepairsLayout({ children }: { children: React.ReactNode }) {
  const serviceSchema = getServiceSchema(
    'Mobile Auto Repair',
    'Professional mobile auto repair services including engine repairs, transmission work, brake repairs, suspension fixes, and comprehensive automotive repairs. Delivered to your location.',
    '/repairs'
  );

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
