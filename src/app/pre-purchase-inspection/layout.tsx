import { generatePageMetadata, getServiceSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = generatePageMetadata({
  title: 'Pre-Purchase Vehicle Inspection | Used Car Inspection in Chicago',
  description:
    'Professional pre-purchase vehicle inspections in Chicago and suburbs. Thorough checks before you buy. Mobile service, comprehensive reports. Call 224-652-7264.',
  path: '/pre-purchase-inspection',
  keywords:
    'pre-purchase inspection, used car inspection, vehicle inspection, mobile inspection, car inspection before buying, Chicago',
});

export default function PrePurchaseInspectionLayout({ children }: { children: React.ReactNode }) {
  const serviceSchema = getServiceSchema(
    'Pre-Purchase Vehicle Inspection',
    'Professional pre-purchase vehicle inspections including comprehensive mechanical checks, safety inspections, and detailed reports to help you make informed buying decisions.',
    '/pre-purchase-inspection'
  );

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
