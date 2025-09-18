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
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #f97316 100%)',
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
              Your trusted mobile mechanic service in Chicago and surrounding
              areas
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section
          style={{
            padding: '80px 20px',
            backgroundColor: 'white',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '64px',
                alignItems: 'center',
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '24px',
                  }}
                >
                  Our Story
                </h2>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#64748b',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                  }}
                >
                  From the start, Z built the company around four guiding principles, each with a purpose:
                </p>
                <div
                  style={{
                    marginBottom: '32px',
                    padding: '24px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '16px',
                        fontSize: '1.125rem',
                        color: '#64748b',
                        lineHeight: '1.6',
                      }}
                    >
                      <span
                        style={{
                          color: '#f97316',
                          fontWeight: 'bold',
                          marginRight: '12px',
                          fontSize: '1.25rem',
                        }}
                      >
                        •
                      </span>
                      <span>
                        <strong style={{ color: '#1e293b' }}>Convenience</strong> – because your time is valuable, and your car should help you save time. Not take it.
                      </span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '16px',
                        fontSize: '1.125rem',
                        color: '#64748b',
                        lineHeight: '1.6',
                      }}
                    >
                      <span
                        style={{
                          color: '#f97316',
                          fontWeight: 'bold',
                          marginRight: '12px',
                          fontSize: '1.25rem',
                        }}
                      >
                        •
                      </span>
                      <span>
                        <strong style={{ color: '#1e293b' }}>Professionalism</strong> – because every customer deserves dealership-level care without the dealership hassle.
                      </span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '16px',
                        fontSize: '1.125rem',
                        color: '#64748b',
                        lineHeight: '1.6',
                      }}
                    >
                      <span
                        style={{
                          color: '#f97316',
                          fontWeight: 'bold',
                          marginRight: '12px',
                          fontSize: '1.25rem',
                        }}
                      >
                        •
                      </span>
                      <span>
                        <strong style={{ color: '#1e293b' }}>Reliability</strong> – because trust is earned, and once we have your business, you'll never wanna go back.
                      </span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '0',
                        fontSize: '1.125rem',
                        color: '#64748b',
                        lineHeight: '1.6',
                      }}
                    >
                      <span
                        style={{
                          color: '#f97316',
                          fontWeight: 'bold',
                          marginRight: '12px',
                          fontSize: '1.25rem',
                        }}
                      >
                        •
                      </span>
                      <span>
                        <strong style={{ color: '#1e293b' }}>Affordability</strong> – because quality service shouldn't come at a price that breaks the bank.
                      </span>
                    </li>
                  </ul>
                </div>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#64748b',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                    fontStyle: 'italic',
                    borderLeft: '4px solid #f97316',
                    paddingLeft: '20px',
                    backgroundColor: '#fef7ed',
                    padding: '20px',
                    borderRadius: '8px',
                  }}
                >
                  Grease Nomads exists to change the way people experience automotive care. Built on the principles of convenience, professionalism, reliability, and affordability, we bring expert service directly to you—eliminating wasted time, surprise costs, and the stress of traditional shops. Wherever life takes you, we're there, because we're driven with care, anywhere.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '40px',
                  borderRadius: '16px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: '#f97316',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px auto',
                  }}
                >
                  <svg width="60" height="60" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '16px',
                  }}
                >
                  Our Mission
                </h3>
                <p
                  style={{
                    color: '#64748b',
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
        <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc' }}>
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
                Meet Our Team
              </h2>
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#64748b',
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
                      backgroundColor: '#f8fafc',
                      padding: '32px',
                      borderRadius: '12px',
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
                        color: '#1e293b',
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
                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
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
