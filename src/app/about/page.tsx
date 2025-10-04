'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export default function AboutPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/team');
        const data = await res.json();
        setTeam(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <>
      <Head>
        <title>
          About Grease Nomads | ASE Certified Mobile Mechanics Team | Chicago
        </title>
        <meta
          name="description"
          content="Learn about Grease Nomads, Chicago's trusted ASE certified mobile mechanic team. Founded in 2018, we bring professional auto repair services directly to your location."
        />
        <meta
          name="keywords"
          content="about grease nomads, mobile mechanic team, ASE certified mechanics, Chicago auto repair, company story, professional mechanics"
        />
        <link rel="canonical" href="https://greasenomads.com/about" />
      </Head>
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
              Your trusted mobile mechanic, servicing Chicago's surrounding areas.
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
                  Grease Nomads goal is to change the way people experience their cars. The company was founded by Z. Shahjee. To him, cars are more than machines—they're companions on life's journeys, tools of freedom, and symbols of independence. That belief drives the company's high level of care. It's not just about fixing vehicles; it's about respecting what they mean to the people who drive them.
                </p>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#d1d5db',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                  }}
                >
                  Everyone on the Grease Nomads team shares that same passion and that pride shows in the way we approach every service—whether it's routine maintenance, a weird problem, vehicle modifications, Pre-Purchase Inspections, or an emergency on the side of the road. Every vehicle is treated as if it were their own, because they know what it means to have your trust.
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
                  At its core, Grease Nomads stands for convenience, professionalism, reliability, and affordability, all built around a genuine love for the craft. We bring the shop to you, saving you time, money, and stress. We want you to take pride in your ride, not to despair the repairs.
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
                  <img
                    src="/logo.png"
                    alt="Grease Nomads Logo"
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
                  life takes you, we’re there, because we’re driven with care,
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section (Dynamic) */}
        <section style={{ padding: '80px 20px', backgroundColor: '#0a0a0a' }}>
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
                Meet Our Team
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#9ca3af',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                Certified professionals dedicated to keeping your vehicle
                running smoothly
              </p>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', color: '#64748b' }}>
                Loading team...
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                }}
              >
                {team.map((member) => (
                  <div
                    key={member.id}
                    style={{
                      backgroundColor: '#0f1115',
                      padding: '32px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
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
                        margin: '0 auto 16px auto',
                      }}
                    >
                      <svg
                        width="40"
                        height="40"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
                      {member.name}
                    </h3>
                    <p
                      style={{
                        color: '#f97316',
                        fontWeight: '600',
                        marginBottom: '8px',
                      }}
                    >
                      {member.role}
                    </p>
                    <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            )}
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
