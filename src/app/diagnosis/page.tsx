'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function DiagnosisPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    vehicle: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'diagnosis',
        }),
      });

      if (response.ok) {
        const name = formData.name?.trim() || 'friend';
        alert(`Thanks, ${name}! We'll reach out to schedule your diagnostic visit.`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          vehicle: '',
          message: '',
        });
      } else {
        alert('Failed to send request. Please try again or call us directly.');
      }
    } catch (error) {
      alert('Failed to send request. Please call us at (224) 652-7264');
    }
  };

  return (
    <>
      <Head>
        <title>Diagnosis — Grease Nomads</title>
        <meta
          name="description"
          content="Grease Nomads vehicle diagnostics — mobile check engine light scans, drivability troubleshooting, electrical testing, and more. We come to you."
        />
        <meta name="theme-color" content="#0b0b0b" />
      </Head>
      <style jsx global>{`
        :root {
          --bg: #0b0b0b;
          --fg: #f5f5f5;
          --muted: #c9c9c9;
          --accent: #ff6a00;
          --card: #121212;
          --ring: rgba(255, 106, 0, 0.35);
        }
        @media (max-width: 640px) {
          .responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div
        style={{
          minHeight: '100vh',
          background:
            'radial-gradient(1200px 600px at 100% -10%, rgba(255,106,0,.08), transparent 60%), radial-gradient(900px 500px at -10% 110%, rgba(255,106,0,.06), transparent 60%), #0b0b0b',
          color: '#f5f5f5',
        }}
      >
        {/* Header */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backdropFilter: 'saturate(140%) blur(8px)',
            background: 'rgba(11,11,11,.6)',
            borderBottom: '1px solid rgba(255,255,255,.06)',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              padding: '0 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '.85rem',
              paddingBottom: '.85rem',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.7rem',
                fontWeight: 800,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Image src="/logo.png" alt="Grease Nomads logo" width={50} height={50} />
              <span>GREASE NOMADS</span>
            </Link>
            <nav style={{ color: '#c9c9c9', fontSize: '.9rem' }}>
              <Link href="/" style={{ opacity: 0.95 }}>
                Home
              </Link>{' '}
              / <span>Diagnosis</span>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.2rem 1.25rem 1rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontWeight: 800,
                background: '#ff6a00',
                color: '#111',
                borderRadius: '999px',
                padding: '.2rem .55rem',
                fontSize: '.75rem',
                letterSpacing: '.2px',
              }}
            >
              Diagnosis
            </span>
            <h1
              style={{
                fontSize: 'clamp(1.8rem,3vw+0.6rem,3rem)',
                lineHeight: 1.1,
                margin: '.5rem 0 0',
              }}
            >
              Diagnostic Pricing
            </h1>
            <p style={{ color: '#c9c9c9' }}>
              On-site diagnostics: check-engine codes, drivability issues, electrical testing, and leak checks. We come to you.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '.9rem',
                alignItems: 'flex-start',
                padding: '1rem',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,.12)',
                background: 'linear-gradient(180deg,rgba(255,106,0,.08),rgba(255,106,0,.03))',
                marginTop: '1rem',
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ marginTop: '.15rem' }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v5m0 4h.01" />
              </svg>
              <div>
                <div>
                  <strong style={{ color: '#f5f5f5' }}>A $100 DEPOSIT IS REQUIRED FOR ANY APPOINTMENT.</strong>
                </div>
                <div>
                  <strong style={{ color: '#f5f5f5' }}>PAYMENT IS REQUIRED BEFORE HAND BACK OF KEYS.</strong>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem 1.25rem 0' }}>
            <div
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '14px',
                padding: '1rem',
              }}
            >
              <h2 style={{ fontSize: 'clamp(1.2rem,1.5vw+0.6rem,1.8rem)', margin: '1.6rem 0 .6rem' }}>
                Diagnostic Fee
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '.4rem',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                }}
              >
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Standard Diagnostic: $200 (Covers call out fee. If repairs are approved $150 credit will be applied if applicable.)
                </li>
              </ul>
            </div>

            {/* Service Cards */}
            <div
              style={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                marginTop: '1.5rem',
              }}
            >
              <div
                style={{
                  background: '#121212',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: '14px',
                  padding: '1rem',
                }}
              >
                <h3>Check‑Engine Light</h3>
                <p style={{ color: '#c9c9c9' }}>
                  We scan OBD‑II codes, interpret results, and provide next‑step recommendations.
                </p>
              </div>
              <div
                style={{
                  background: '#121212',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: '14px',
                  padding: '1rem',
                }}
              >
                <h3>Electrical Systems</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Battery, alternator, starter, and wiring diagnostics to find faults quickly.
                </p>
              </div>
              <div
                style={{
                  background: '#121212',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: '14px',
                  padding: '1rem',
                }}
              >
                <h3>Drivability Issues</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Diagnose rough idle, poor acceleration, stalling, or misfires on site.
                </p>
              </div>
              <div
                style={{
                  background: '#121212',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: '14px',
                  padding: '1rem',
                }}
              >
                <h3>Fluid Leaks</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Identify oil, coolant, transmission, and brake fluid leaks before they worsen.
                </p>
              </div>
              <div
                style={{
                  background: '#121212',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: '14px',
                  padding: '1rem',
                }}
              >
                <h3>Heating & Cooling</h3>
                <p style={{ color: '#c9c9c9' }}>
                  We inspect HVAC systems for issues such as weak AC, overheating, or heater problems.
                </p>
              </div>
              <div
                style={{
                  background: '#121212',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: '14px',
                  padding: '1rem',
                }}
              >
                <h3>Noise & Vibration</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Track down unusual sounds or vibrations to pinpoint failing components before they break.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '.8rem',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'linear-gradient(90deg,rgba(255,106,0,.15),transparent)',
                border: '1px solid rgba(255,255,255,.08)',
                padding: '1rem 1.25rem',
                borderRadius: '16px',
                margin: '2rem 0',
              }}
            >
              <h3 style={{ margin: 0 }}>Ready to troubleshoot? Book a diagnostic visit.</h3>
              <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '.5rem',
                    fontWeight: 700,
                    border: '1px solid transparent',
                    padding: '.85rem 1.1rem',
                    borderRadius: '14px',
                    cursor: 'pointer',
                    background: '#ff6a00',
                    color: '#111',
                    textDecoration: 'none',
                  }}
                >
                  Request diagnosis
                </a>
                <Link
                  href="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '.5rem',
                    fontWeight: 700,
                    border: '1px solid rgba(255,255,255,.18)',
                    padding: '.85rem 1.1rem',
                    borderRadius: '14px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section id="contact" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem 2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem,1.5vw+0.6rem,1.8rem)', margin: '1.6rem 0 .6rem' }}>
              Request a Diagnostic Appointment
            </h2>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'grid',
                  gap: '.8rem',
                  gridTemplateColumns: '1fr 1fr',
                }}
                className="responsive-grid"
              >
                <div style={{ display: 'grid', gap: '.35rem' }}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      background: '#0e0e0e',
                      border: '1px solid rgba(255,255,255,.12)',
                      color: '#f5f5f5',
                      padding: '.85rem .9rem',
                      borderRadius: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
                <div style={{ display: 'grid', gap: '.35rem' }}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      background: '#0e0e0e',
                      border: '1px solid rgba(255,255,255,.12)',
                      color: '#f5f5f5',
                      padding: '.85rem .9rem',
                      borderRadius: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gap: '.8rem',
                  gridTemplateColumns: '1fr 1fr',
                  marginTop: '.8rem',
                }}
                className="responsive-grid"
              >
                <div style={{ display: 'grid', gap: '.35rem' }}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="(555) 555-5555"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      background: '#0e0e0e',
                      border: '1px solid rgba(255,255,255,.12)',
                      color: '#f5f5f5',
                      padding: '.85rem .9rem',
                      borderRadius: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
                <div style={{ display: 'grid', gap: '.35rem' }}>
                  <label htmlFor="location">Service Location</label>
                  <input
                    id="location"
                    name="location"
                    placeholder="City / Address"
                    value={formData.location}
                    onChange={handleInputChange}
                    style={{
                      background: '#0e0e0e',
                      border: '1px solid rgba(255,255,255,.12)',
                      color: '#f5f5f5',
                      padding: '.85rem .9rem',
                      borderRadius: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'grid', gap: '.35rem', marginTop: '.8rem' }}>
                <label htmlFor="vehicle">Vehicle</label>
                <input
                  id="vehicle"
                  name="vehicle"
                  placeholder="Year Make Model (e.g., 2000 Chevy Astro)"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                  style={{
                    background: '#0e0e0e',
                    border: '1px solid rgba(255,255,255,.12)',
                    color: '#f5f5f5',
                    padding: '.85rem .9rem',
                    borderRadius: '12px',
                    outline: 'none',
                  }}
                />
              </div>
              <div style={{ display: 'grid', gap: '.35rem', marginTop: '.8rem' }}>
                <label htmlFor="message">Describe the Issue</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Warning lights, symptoms, recent work, etc."
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{
                    background: '#0e0e0e',
                    border: '1px solid rgba(255,255,255,.12)',
                    color: '#f5f5f5',
                    padding: '.85rem .9rem',
                    borderRadius: '12px',
                    outline: 'none',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  fontWeight: 700,
                  border: '1px solid transparent',
                  padding: '.85rem 1.1rem',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  background: '#ff6a00',
                  color: '#111',
                  marginTop: '.8rem',
                }}
              >
                Send request
              </button>
            </form>
            <p style={{ color: '#c9c9c9', marginTop: '.6rem' }}>
              Please Contact Us for a Free Estimate. <br />
              Email: contact@greasenomads.com Phone: (224) 652 7264
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ padding: '2.5rem 0 4rem', color: '#c9c9c9', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem', display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
              <Image src="/logo.png" alt="Grease Nomads logo" width={50} height={50} />
              <strong>Grease Nomads</strong>
              <span style={{ color: '#c9c9c9' }}>Mobile mechanic • Chicagoland</span>
            </div>
            <div style={{ color: '#c9c9c9' }}>© {new Date().getFullYear()} Grease Nomads. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  );
}

