import { generatePageMetadata, getServiceSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = generatePageMetadata({
  title: 'Mobile Auto Diagnostics | Check Engine Light, Troubleshooting',
  description:
    'Professional mobile vehicle diagnostics in Chicago and suburbs. Check engine light scans, drivability troubleshooting, electrical testing, and more. Standard diagnostic fee $150. Call 224-652-7264.',
  path: '/diagnosis',
  keywords:
    'mobile auto diagnostics, check engine light, mobile diagnostic service, vehicle troubleshooting, electrical testing, mobile mechanic diagnostics, Chicago',
});

export default function DiagnosisLayout({ children }: { children: React.ReactNode }) {
  const serviceSchema = getServiceSchema(
    'Mobile Auto Diagnostics',
    'Professional mobile vehicle diagnostics including check engine light scans, drivability troubleshooting, electrical testing, and comprehensive vehicle health checks. Delivered to your location.',
    '/diagnosis'
  );

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
