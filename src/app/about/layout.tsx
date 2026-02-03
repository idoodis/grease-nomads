import { generatePageMetadata, getOrganizationSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = generatePageMetadata({
  title: 'About Us | Mobile Mechanic Team in Chicago',
  description:
    'Learn about Grease Nomads, a trusted ASE certified mobile mechanic team serving Chicago and suburbs. Founded to rethink automotive care, we bring professional service directly to you.',
  path: '/about',
  keywords:
    'about mobile mechanic, mobile mechanic team, ASE certified mechanics, Chicago auto repair, company story, professional mechanics',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      <JsonLd data={organizationSchema} />
      {children}
    </>
  );
}
