import { prisma } from '@/lib/db';
import { Hero } from '@/components/hero';
import { FeaturedServices } from '@/components/featured-services';
import { ServiceAreas } from '@/components/service-areas';
import { RecentReviews } from '@/components/recent-reviews';
import { FAQPreview } from '@/components/faq-preview';
import { TrustBadges } from '@/components/trust-badges';

export default async function HomePage() {
  const [companyInfo, featuredServices, serviceAreas, recentReviews, faqs] =
    await Promise.all([
      prisma.companyInfo.findFirst(),
      prisma.service.findMany({
        where: { isFeatured: true },
        take: 3,
      }),
      prisma.serviceArea.findMany({
        take: 4,
      }),
      prisma.review.findMany({
        orderBy: { publishedAt: 'desc' },
        take: 3,
      }),
      prisma.fAQ.findMany({
        take: 4,
      }),
    ]);

  return (
    <main className="min-h-screen">
      <Hero companyInfo={companyInfo} />
      <TrustBadges />
      <FeaturedServices services={featuredServices} />
      <ServiceAreas areas={serviceAreas} />
      <RecentReviews reviews={recentReviews} />
      <FAQPreview faqs={faqs} />
    </main>
  );
}

