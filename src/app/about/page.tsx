'use client';

import Image from 'next/image';

export default function AboutPage() {

  return (
    <>
      <div style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #000000 30%, #f97316 70%, #f97316 100%)',
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
              <Image
                src="/logo.png"
                alt="Grease Nomads - ASE Certified Mobile Mechanics"
                width={120}
                height={120}
                style={{
                  height: '100px',
                  width: 'auto',
                  marginRight: '20px',
                }}
                priority
              />
              <h1
                style={{
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  lineHeight: '1.1',
                  margin: 0,
                }}
              >
                About Grease Nomads
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
              Your trusted mobile mechanic, servicing the Chicago area and surrounding communities.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section
          style={{
            padding: 'clamp(40px, 8vw, 80px) 20px',
            backgroundColor: '#0a0a0a',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 'bold',
                    color: '#f9fafb',
                    marginBottom: '24px',
                  }}
                >
                  Our Story
                </h2>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#d1d5db',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                  }}
                >
                  The goal of Grease Nomads is to change the way people experience their cars. Founder Z. Shahjee sees cars as more than machines—they are companions on life journeys, tools of freedom, and symbols of independence. That belief drives the company to deliver a high level of care. The work goes beyond fixing vehicles; it is about honoring what they mean to the people who drive them.
                </p>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#d1d5db',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                  }}
                >
                  Everyone on the Grease Nomads team shares that same passion, and that pride is evident in every service—whether the request involves routine maintenance, a complicated problem, vehicle modifications, pre-purchase inspections, or a roadside emergency. Every vehicle receives the same attention the technicians would give their own because they understand what it means to earn a customer&rsquo;s trust.
                </p>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#e5e7eb',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                    fontStyle: 'italic',
                    borderLeft: '4px solid #f97316',
                    paddingLeft: '20px',
                    backgroundColor: '#111827',
                    padding: '20px',
                    borderRadius: '8px',
                  }}
                >
                  Grease Nomads is at the beginning of a long journey. Founded to rethink how people handle car maintenance and repair, the company brings the shop to you—convenient, professional, and reliable. With experience in custom work and Jaguar Land Rover, the team is starting small but building with purpose to create a new standard for automotive care.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#0f1115',
                  padding: 'clamp(24px, 4vw, 40px)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div
                  style={{
                    width: 'clamp(80px, 15vw, 120px)',
                    height: 'clamp(80px, 15vw, 120px)',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px auto',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Grease Nomads Logo"
                    width={96}
                    height={96}
                    style={{
                      width: 'clamp(48px, 9vw, 72px)',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    fontWeight: 'bold',
                    color: '#f3f4f6',
                    marginBottom: '16px',
                  }}
                >
                  Our Mission
                </h3>
                <p
                  style={{
                    color: '#d1d5db',
                    lineHeight: '1.6',
                  }}
                >
                  Grease Nomads exists to change the way people experience
                  automotive care. Built on the principles of convenience,
                  professionalism, reliability, and affordability, we bring
                  expert service directly to you—eliminating wasted time,
                  surprise costs, and the stress of traditional shops. Wherever
                  life takes you, we are there, because we are driven with care,
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #000000 30%, #f97316 70%, #f97316 100%)',
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
              Ready to Experience the Difference?
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
              Join thousands of satisfied customers who trust Grease Nomads for
              their automotive needs.
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
