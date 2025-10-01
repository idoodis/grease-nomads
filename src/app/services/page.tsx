'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
}

// Function to map service names to logo files
const getServiceLogo = (serviceName: string) => {
  const logoMap: { [key: string]: string } = {
    'maintenance': '/Maintenance logo.png',
    'diagnosis': '/Diagnostics logo.png',
    'diagnostics': '/Diagnostics logo.png',
    'performance modifications': '/Modifications logo.png',
    'modifications': '/Modifications logo.png',
    'roadside assistance': '/Roadside Assistance logo.png',
    'pre-purchase inspection': '/PPI logo.png',
    'auto repair': '/Repair logo.png',
    'repairs': '/Repair logo.png',
    'repair': '/Repair logo.png'
  };
  
  const lowerServiceName = serviceName.toLowerCase();
  
  // Find the closest match
  for (const [key, path] of Object.entries(logoMap)) {
    if (lowerServiceName.includes(key) || key.includes(lowerServiceName)) {
      return path;
    }
  }
  
  // Exact match check for better precision
  if (lowerServiceName === 'repair' || lowerServiceName === 'repairs') return '/Repair logo.png';
  if (lowerServiceName.includes('modification')) return '/Modifications logo.png';
  if (lowerServiceName.includes('pre-purchase') || lowerServiceName.includes('pre purchase')) return '/PPI logo.png';
  
  // Default fallback
  return '/Repair logo.png';
};

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
                    margin: '0 auto 24px auto',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={getServiceLogo(service.name)}
                    alt={`${service.name} service logo`}
                    width={100}
                    height={100}
                    style={{
                      objectFit: 'contain',
                    }}
                  />
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
                    href={
                      service.name.toLowerCase().includes('repair') 
                        ? '/repairs' 
                        : service.name.toLowerCase().includes('diagn')
                        ? '/diagnosis'
                        : service.name.toLowerCase().includes('modif')
                        ? '/modifications'
                        : '/contact'
                    }
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
