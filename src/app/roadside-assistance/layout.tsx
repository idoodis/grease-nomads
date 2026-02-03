import { generatePageMetadata, getServiceSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = generatePageMetadata({
  title: 'Emergency Roadside Assistance | Jump Starts, Tire Changes, Fuel Delivery',
  description:
    '24/7 emergency roadside assistance in Chicago and suburbs. Jump starts, tire changes, fuel delivery, lockout service, and more. Fast response, professional service. Call 224-652-7264.',
  path: '/roadside-assistance',
  keywords:
    'roadside assistance, emergency roadside service, jump start, tire change, fuel delivery, mobile mechanic emergency, Chicago roadside assistance',
});

export default function RoadsideAssistanceLayout({ children }: { children: React.ReactNode }) {
  const serviceSchema = getServiceSchema(
    'Emergency Roadside Assistance',
    '24/7 emergency roadside assistance services including jump starts, tire changes, fuel delivery, lockout service, and towing coordination. Fast response throughout Chicago and suburbs.',
    '/roadside-assistance'
  );

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
