export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/db';
import ReviewsCarousel from '@/components/reviews-carousel';

export default async function HomePage() {
  // Read services directly from the database to match Services page
  let services: Array<{ id: string; name: string; description: string; price: string }> = [];
  let reviews: Array<{ id: string; authorName: string; rating: number; body: string }> = [];
  try {
    const dbServices = await prisma.service.findMany({ orderBy: { updatedAt: 'desc' } });
    services = dbServices.map((s) => ({
      id: s.id,
      name: s.name,
      description: s.description,
      price: String(s.basePrice),
    }));
    const dbReviews = await prisma.review.findMany({ orderBy: { publishedAt: 'desc' } });
    reviews = dbReviews.map((r) => ({
      id: r.id,
      authorName: r.authorName,
      rating: r.rating,
      body: r.body,
    }));
  } catch (_e) {
    // Fail silently; we'll show static content if fetch fails
  }
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Grease Nomads',
    description:
      'Professional ASE certified mobile mechanic services in Chicago. Same-day auto repair, maintenance, diagnostics, and emergency service delivered to your location.',
    url: 'https://greasenomads.com',
    telephone: '+12246527264',
    email: 'info@greasenomads.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Chicago',
    },
    serviceType: [
      'Auto Repair',
      'Mobile Mechanic',
      'Emergency Service',
      'Car Maintenance',
      'Diagnostics',
      'Performance Modifications',
      'Pre-Purchase Inspection',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'ASE Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'National Institute for Automotive Service Excellence',
      },
    },
    priceRange: '$49-$299',
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [
      'https://www.facebook.com/greasenomads',
      'https://www.instagram.com/greasenomads',
      'https://www.linkedin.com/company/greasenomads',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #000000 50%, #f97316 50%, #f97316 100%)',
            color: 'white',
            padding: '80px 20px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              className="logo-container"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px',
              }}
            >
              <img
                src="/logo.png"
                alt="Grease Nomads - ASE Certified Mobile Mechanics"
                style={{
                  height: '120px',
                  width: 'auto',
                  marginRight: '24px',
                }}
              />
              <h1
                style={{
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  lineHeight: '1.1',
                  margin: 0,
                }}
              >
                GREASE NOMADS
              </h1>
            </div>
            <p
              style={{
                fontSize: '1.5rem',
                marginBottom: '32px',
                color: 'white',
                maxWidth: '800px',
                margin: '0 auto 32px auto',
              }}
            >
              Driven by Care, Anywhere
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="/contact"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  border: '2px solid white',
                }}
              >
                Get Free Quote
              </a>
              <a
                href="tel:+12246527264"
                style={{
                  border: '2px solid white',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                }}
              >
                Call 224-652-7264
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          style={{
            backgroundColor: '#0a0a0a',
            padding: '80px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#f9fafb',
                  marginBottom: '16px',
                }}
              >
                Our Services
              </h2>
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#d1d5db',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                Professional automotive services delivered directly to your
                location
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
              {(services.length > 0 ? services : []).map((svc) => (
                <div
                  key={svc.id}
                  style={{
                    backgroundColor: '#0f1115',
                    padding: '32px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#f3f4f6',
                      marginBottom: '16px',
                    }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    style={{
                      color: '#d1d5db',
                      marginBottom: '24px',
                      lineHeight: '1.6',
                    }}
                  >
                    {svc.description}
                  </p>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: '#f97316',
                      marginBottom: '24px',
                    }}
                  >
                    {`Starting at $${svc.price}`}
                  </div>
                  <a
                    href="/contact"
                    style={{
                      backgroundColor: '#f97316',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'block',
                      textAlign: 'center',
                    }}
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section
          style={{
            backgroundColor: '#0a0a0a',
            padding: '80px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#f9fafb',
                  marginBottom: '16px',
                }}
              >
                Why Choose Grease Nomads?
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#d1d5db',
                  maxWidth: '900px',
                  margin: '0 auto',
                  lineHeight: '1.8',
                }}
              >
                We provide a smarter alternative to overpriced dealerships and time-consuming repair shops; with us, you can continue your day—whether relaxing at home, running errands, or at work—we bring the service to you. We provide routine maintenance, help with unexpected issues, vehicle modifications, Pre-Purchase Inspections, and Roadside Assistance. Our team delivers expert service wherever you are. We follow four guiding principles, each with a purpose:
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '32px auto 0 auto' }}>
              <ul
                style={{
                  listStyle: 'disc',
                  paddingLeft: '1.5rem',
                  color: '#d1d5db',
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                }}
              >
                <li>
                  <strong style={{ color: '#f3f4f6' }}>Convenience</strong>
                  {' '}
                  – Because your time is valuable, and your car should help you save time. Not take it.
                </li>
                <li>
                  <strong style={{ color: '#f3f4f6' }}>Professionalism</strong>
                  {' '}
                  – Because every customer deserves dealership-level care without the dealership hassle.
                </li>
                <li>
                  <strong style={{ color: '#f3f4f6' }}>Reliability</strong>
                  {' '}
                  – Because trust is earned, and once we have your business, you’ll never wanna go back.
                </li>
                <li>
                  <strong style={{ color: '#f3f4f6' }}>Affordability</strong>
                  {' '}
                  – Because quality service shouldn’t come at a price that breaks the bank.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section
          style={{
            backgroundColor: '#0a0a0a',
            padding: '80px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#f9fafb',
                  marginBottom: '16px',
                }}
              >
                What Our Customers Say
              </h2>
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#9ca3af',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                Don&apos;t just take our word for it - hear from our satisfied
                customers
              </p>
            </div>

            <ReviewsCarousel reviews={reviews} />
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #000000 50%, #f97316 50%, #f97316 100%)',
            color: 'white',
            padding: '80px 20px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '24px',
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              style={{
                fontSize: '1.25rem',
                color: 'white',
                marginBottom: '48px',
                maxWidth: '600px',
                margin: '0 auto 48px auto',
              }}
            >
              Don&apos;t wait for car troubles to find you. Schedule your
              maintenance or get a free quote today.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="/contact"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  border: '2px solid white',
                }}
              >
                Get Free Quote
              </a>
              <a
                href="tel:+12246527264"
                style={{
                  border: '2px solid white',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                }}
              >
                Call 224-652-7264
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
