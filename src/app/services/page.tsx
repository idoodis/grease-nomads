'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '48px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f3f4f6',
              borderTop: '4px solid #f97316',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px',
            }}
          ></div>
          <p style={{ color: '#64748b' }}>Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>
          Auto Repair Services | ASE Certified Mobile Mechanics | Grease Nomads
        </title>
        <meta
          name="description"
          content="Professional ASE certified mobile mechanic services in Chicago. Emergency repairs, maintenance, diagnostics, performance modifications, and pre-purchase inspections delivered to your location."
        />
        <meta
          name="keywords"
          content="mobile mechanic services, auto repair, emergency service, car maintenance, diagnostics, performance modifications, pre-purchase inspection, ASE certified, Chicago"
        />
        <link rel="canonical" href="https://greasenomads.com/services" />
      </Head>
      <div style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #000000 45%, #f97316 55%, #f97316 100%)',
            color: 'white',
            padding: '120px 20px 80px',
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
                  height: '100px',
                  width: 'auto',
                  marginRight: '20px',
                }}
              />
              <h1
                style={{
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  lineHeight: '1.1',
                  margin: 0,
                }}
              >
                Our Services
              </h1>
            </div>
            <p
              style={{
                fontSize: '1.25rem',
                color: '#fed7aa',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Professional mobile mechanic services delivered directly to your
              location
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section
          style={{
            padding: '80px 20px',
            backgroundColor: '#0a0a0a',
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
                Complete Automotive Solutions
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#9ca3af',
                  maxWidth: '700px',
                  margin: '0 auto',
                }}
              >
                From routine maintenance to emergency repairs, we&apos;ve got
                you covered
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '32px',
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  style={{
                    backgroundColor: '#0f1115',
                    padding: '40px',
                    borderRadius: '16px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#f97316',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px auto',
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#f3f4f6',
                      marginBottom: '16px',
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{
                      color: '#d1d5db',
                      marginBottom: '24px',
                      lineHeight: '1.6',
                    }}
                  >
                    {service.description}
                  </p>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: '#f97316',
                      marginBottom: '24px',
                    }}
                  >
                    Starting at ${service.price}
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
                      display: 'inline-block',
                    }}
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #000000 45%, #f97316 55%, #f97316 100%)',
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
              Ready to Schedule Service?
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
              service or get a free quote today.
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
