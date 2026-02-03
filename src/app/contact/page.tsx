import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, getLocalBusinessSchema, serviceAreaTextShort, serviceAreaTextFull } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = generatePageMetadata({
  title: 'Contact Mobile Mechanic | Free Quote | Chicago Northwest Suburbs',
  description:
    'Contact Grease Nomads for professional mobile mechanic services in Mount Prospect, Schaumburg, Naperville and nearby northwest suburbs. Get a free quote, call 224-652-7264, or email Z@Greasenomads.com. Same-day service available.',
  path: '/contact',
  keywords:
    'contact mobile mechanic, mobile mechanic near me, free quote, mobile auto repair contact, Chicago mobile mechanic, schedule service',
});

export default function ContactPage() {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <div style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
        {/* Header */}
        <header
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #000000 30%, #f97316 70%, #f97316 100%)',
            color: 'white',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <div
            className="logo-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
            }}
          >
            <Image
              src="/logo.png"
              alt="Grease Nomads - ASE Certified Mobile Mechanics"
              width={120}
              height={120}
              style={{
                height: '80px',
                width: 'auto',
                marginRight: '16px',
              }}
              priority
            />
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
              Contact Grease Nomads
            </h1>
          </div>
          <p style={{ color: '#cbd5e1', marginTop: '8px' }}>
            Get in touch for Professional, Reliable Mobile Mechanic Service.
          </p>
        </header>

        {/* ShopMonkey Contact Form Section */}
        <section
          style={{
            padding: '80px 20px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              backgroundColor: '#0f1115',
              padding: '48px',
              borderRadius: '12px',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#f3f4f6',
                marginBottom: '24px',
                textAlign: 'center',
              }}
            >
              Get Your Free Quote
            </h2>
            
            <div
              style={{
                width: '100%',
                height: '600px',
                border: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <iframe
                src="https://app.shopmonkey.cloud/public/quote-request/2812c016-32a0-4e84-8aa9-2f0df7280682?noExternalScripts=1"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{
                  border: 'none',
                  borderRadius: '8px',
                }}
                title="Grease Nomads Quote Request Form"
              />
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
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
                Get In Touch
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#d1d5db',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                Multiple ways to reach us for your automotive needs
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
                  backgroundColor: '#0f1115',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
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
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#f3f4f6',
                    marginBottom: '8px',
                  }}
                >
                  Call Us
                </h3>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                  Available 7 days a week
                </p>
                <a
                  href="tel:+12246527264"
                  style={{
                    color: '#f97316',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  224-652-7264
                </a>
              </div>

              <div
                style={{
                  backgroundColor: '#0f1115',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
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
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#f3f4f6',
                    marginBottom: '8px',
                  }}
                >
                  Email Us
                </h3>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                  Send us a message anytime
                </p>
                <a
                  href="mailto:Z@Greasenomads.com"
                  style={{
                    color: '#f97316',
                    fontSize: '1rem',
                    textDecoration: 'none',
                  }}
                >
                  Z@Greasenomads.com
                </a>
              </div>

              <div
                style={{
                  backgroundColor: '#0f1115',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
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
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#f3f4f6',
                    marginBottom: '8px',
                  }}
                >
                  Service Area
                </h3>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                  We come to you
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                  Greater Chicago Area including Chicago, Des Plaines, Schaumburg, Hoffman Estates, and nearby suburbs.
                </p>
              </div>
            </div>
            {/* NAP Block */}
            <div
              style={{
                marginTop: '48px',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#f3f4f6',
                  marginBottom: '12px',
                }}
              >
                Business Information
              </h3>
              <p style={{ color: '#d1d5db', marginBottom: '4px' }}>
                <strong>Grease Nomads</strong>
              </p>
              <p style={{ color: '#d1d5db', marginBottom: '4px' }}>
                Phone:{' '}
                <a
                  href="tel:+12246527264"
                  style={{ color: '#f97316', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  224-652-7264
                </a>
              </p>
              <p style={{ color: '#d1d5db', marginBottom: '4px' }}>
                Email:{' '}
                <a
                  href="mailto:Z@Greasenomads.com"
                  style={{ color: '#f97316', textDecoration: 'none' }}
                >
                  Z@Greasenomads.com
                </a>
              </p>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                Service Area: Greater Chicago Area (Chicago, Des Plaines, Schaumburg, Hoffman Estates, and nearby suburbs)
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #000000 30%, #f97316 70%, #f97316 100%)',
            color: 'white',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Image
                src="/logo.png"
                alt="Grease Nomads - ASE Certified Mobile Mechanics"
                width={100}
                height={100}
                style={{
                  height: '60px',
                  width: 'auto',
                  marginRight: '12px',
                }}
              />
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: 0,
                }}
              >
                Grease Nomads
              </h3>
            </div>
            <p
              style={{
                color: '#cbd5e1',
                marginBottom: '24px',
              }}
            >
              Professional mobile mechanic services delivered directly to your
              location
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '32px',
                flexWrap: 'wrap',
                marginBottom: '24px',
              }}
            >
              <Link
                href="/"
                style={{ color: '#cbd5e1', textDecoration: 'none' }}
              >
                Home
              </Link>
              <a
                href="/contact"
                style={{ color: '#cbd5e1', textDecoration: 'none' }}
              >
                Contact
              </a>
              <a
                href="tel:+12246527264"
                style={{ color: '#cbd5e1', textDecoration: 'none' }}
              >
                Call 224-652-7264
              </a>
            </div>
            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.875rem',
              }}
            >
              © 2024 Grease Nomads. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
