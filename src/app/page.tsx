export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Grease Nomads',
    description:
      'Professional ASE certified mobile mechanic services in Chicago. Same-day auto repair, maintenance, diagnostics, and emergency service delivered to your location.',
    url: 'https://greasenomads.com',
    telephone: '+13122085007',
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
                Grease Nomads
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
              Professional mobile mechanic services delivered directly to your
              location
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
                href="tel:+13122085007"
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
                Call (312) 208-5007
              </a>
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
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                We&apos;re your trusted automotive partners
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#f97316',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '8px',
                  }}
                >
                  ASE Certified Mechanics
                </h3>
                <p style={{ color: '#64748b' }}>
                  Nationally certified automotive technicians with proven
                  expertise
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#f97316',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '8px',
                  }}
                >
                  Same Day Service
                </h3>
                <p style={{ color: '#64748b' }}>
                  Available 7 days a week for emergency repairs
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#f97316',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '8px',
                  }}
                >
                  Quality Guarantee
                </h3>
                <p style={{ color: '#64748b' }}>
                  All work backed by our satisfaction guarantee
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#f97316',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '8px',
                  }}
                >
                  Local Experts
                </h3>
                <p style={{ color: '#64748b' }}>
                  Serving the community for years with trusted service
                </p>
              </div>
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
              <div
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
                  Maintenance
                </h3>
                <p
                  style={{
                    color: '#64748b',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                  }}
                >
                  Keep your vehicle running smoothly with our comprehensive
                  maintenance services.
                </p>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#f97316',
                    marginBottom: '24px',
                  }}
                >
                  Starting at $89
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

              <div
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
                  Diagnosis
                </h3>
                <p
                  style={{
                    color: '#64748b',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                  }}
                >
                  Expert diagnosis of automotive issues with detailed reports
                  and transparent pricing.
                </p>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#f97316',
                    marginBottom: '24px',
                  }}
                >
                  Starting at $49
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

              <div
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
                  Emergency Service
                </h3>
                <p
                  style={{
                    color: '#64748b',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                  }}
                >
                  24/7 emergency roadside assistance when you need it most.
                </p>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#f97316',
                    marginBottom: '24px',
                  }}
                >
                  Starting at $99
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
                href="tel:+13122085007"
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
                Call (312) 208-5007
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
