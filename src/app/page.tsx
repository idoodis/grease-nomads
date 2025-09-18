export default async function HomePage() {
  // Fetch live services from API (no cache so admin updates reflect immediately)
  let services: Array<{ id: string; name: string; description: string; price: string }> = [];
  try {
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/services`, { cache: 'no-store' });
    if (res.ok) {
      services = await res.json();
    }
  } catch (e) {
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
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #f97316 100%)',
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
                color: '#fed7aa',
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
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
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
            backgroundColor: 'white',
            padding: '80px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '16px',
                }}
              >
                Our Services
              </h2>
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#64748b',
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
                    backgroundColor: 'white',
                    padding: '32px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#1e293b',
                      marginBottom: '16px',
                    }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    style={{
                      color: '#64748b',
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
            backgroundColor: '#f8fafc',
            padding: '80px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '16px',
                }}
              >
                Why Choose Grease Nomads?
              </h2>
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#64748b',
                  maxWidth: '900px',
                  margin: '0 auto',
                }}
              >
                From the start, Z built the company around four guiding principles, each with a purpose:
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '32px auto 0 auto' }}>
              <ul
                style={{
                  listStyle: 'disc',
                  paddingLeft: '1.5rem',
                  color: '#64748b',
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                }}
              >
                <li>
                  <strong style={{ color: '#1e293b' }}>Convenience</strong>
                  {' '}
                  – because your time is valuable, and your car should help you save time. Not take it.
                </li>
                <li>
                  <strong style={{ color: '#1e293b' }}>Professional</strong>
                  {' '}
                  – because every customer deserves dealership-level care without the dealership hassle.
                </li>
                <li>
                  <strong style={{ color: '#1e293b' }}>Reliable</strong>
                  {' '}
                  – because trust is earned, and once we have your business, you'll never wanna go back.
                </li>
                <li>
                  <strong style={{ color: '#1e293b' }}>Affordable</strong>
                  {' '}
                  – because quality service shouldn't come at a price that breaks the bank.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section
          style={{
            backgroundColor: 'white',
            padding: '80px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '16px',
                }}
              >
                What Our Customers Say
              </h2>
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#64748b',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                Don&apos;t just take our word for it - hear from our satisfied
                customers
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#f97316',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                    }}
                  >
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                      J
                    </span>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#1e293b',
                        margin: '0',
                      }}
                    >
                      Jennifer Martinez
                    </h4>
                    <div style={{ color: '#f97316' }}>★★★★★</div>
                  </div>
                </div>
                <p
                  style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;Amazing service! They came to my office and fixed my
                  car during my lunch break. Professional, honest, and
                  reasonably priced. I&apos;ll never go back to a traditional
                  shop.&rdquo;
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#f97316',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                    }}
                  >
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                      R
                    </span>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#1e293b',
                        margin: '0',
                      }}
                    >
                      Robert Kim
                    </h4>
                    <div style={{ color: '#f97316' }}>★★★★★</div>
                  </div>
                </div>
                <p
                  style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;These guys saved my day! My car broke down on the way
                  to an important meeting. They diagnosed and fixed the issue in
                  under an hour. Highly recommend!&rdquo;
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#f97316',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                    }}
                  >
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                      M
                    </span>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#1e293b',
                        margin: '0',
                      }}
                    >
                      Maria Rodriguez
                    </h4>
                    <div style={{ color: '#f97316' }}>★★★★★</div>
                  </div>
                </div>
                <p
                  style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;Finally, a mechanic service that respects my time! They
                  explained everything clearly and didn&apos;t try to upsell me
                  on unnecessary services. Will definitely use again.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
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
                color: '#cbd5e1',
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
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
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
