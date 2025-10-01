'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function MaintenancePage() {
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
          service: 'maintenance',
        }),
      });

      if (response.ok) {
        const name = formData.name?.trim() || 'friend';
        alert(`Thanks, ${name}! We'll reach out to schedule your maintenance.`);
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
        <title>Maintenance — Grease Nomads</title>
        <meta
          name="description"
          content="Grease Nomads Maintenance service page and price list. We come to you—oil changes, fluid flushes, filters, spark plugs, brakes, and more."
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
              / <span>Maintenance</span>
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
              Maintenance
            </span>
            <h1
              style={{
                fontSize: 'clamp(1.8rem,3vw+0.6rem,3rem)',
                lineHeight: 1.1,
                margin: '.5rem 0 0',
              }}
            >
              Maintenance Service & Pricing
            </h1>
            <p style={{ color: '#c9c9c9' }}>
              Mobile service & fluid disposal included. Does not include price of parts, please contact us for a free estimate.
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
                <div>
                  <strong style={{ color: '#f5f5f5' }}>The prices below do not include parts. LABOUR PRICES ONLY.</strong>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Sections */}
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem 1.25rem 0' }}>
            {/* Oil Change */}
            <div
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '14px',
                padding: '1rem',
              }}
            >
              <h2 style={{ fontSize: 'clamp(1.2rem,1.5vw+0.6rem,1.8rem)', margin: '1.6rem 0 .6rem' }}>
                Oil Change
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
                  Standard Oil Change: $100 ($45 when combined with other services.)
                </li>
              </ul>
            </div>

            {/* Fluid Flushes */}
            <div
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '14px',
                padding: '1rem',
                marginTop: '1rem',
              }}
            >
              <h2 style={{ fontSize: 'clamp(1.2rem,1.5vw+0.6rem,1.8rem)', margin: '1.6rem 0 .6rem' }}>
                Fluid Flushes
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
                  Coolant Flush: $150 ($80 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Transmission Fluid Flush: $150 ($100 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Brake Fluid Flush: $150 ($60 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Power Steering Fluid Flush: $130 ($90 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Driveline Flush: $300 ($250 when combined with other services.)
                </li>
              </ul>
            </div>

            {/* Filters */}
            <div
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '14px',
                padding: '1rem',
                marginTop: '1rem',
              }}
            >
              <h2 style={{ fontSize: 'clamp(1.2rem,1.5vw+0.6rem,1.8rem)', margin: '1.6rem 0 .6rem' }}>
                Filters
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
                  Cabin Air Filter Replacement: $150 ($20 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Engine Air Filter Replacement: $150 ($20 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Fuel Filters: $150 ($70 when combined with other services.)
                </li>
              </ul>
            </div>

            {/* Spark Plugs/Coil Packs */}
            <div
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '14px',
                padding: '1rem',
                marginTop: '1rem',
              }}
            >
              <h2 style={{ fontSize: 'clamp(1.2rem,1.5vw+0.6rem,1.8rem)', margin: '1.6rem 0 .6rem' }}>
                Spark Plugs/Coil Packs
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
                  Inline 4: $150 ($55 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Inline 6: $150 ($75 when combined with other services. Price May Vary.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  V6/V8: $200 ($100 when combined with other services. Price May Vary.)
                </li>
              </ul>
            </div>

            {/* Brake Jobs */}
            <div
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '14px',
                padding: '1rem',
                marginTop: '1rem',
              }}
            >
              <h2 style={{ fontSize: 'clamp(1.2rem,1.5vw+0.6rem,1.8rem)', margin: '1.6rem 0 .6rem' }}>
                Brake Jobs
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
                  Brake Pads: $300 ($200 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Brake Rotors: $300 ($200 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Brake Pads and Rotors: $350 ($300 when combined with other services.)
                </li>
              </ul>
            </div>

            {/* Other Maintenance */}
            <div
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '14px',
                padding: '1rem',
                marginTop: '1rem',
              }}
            >
              <h2 style={{ fontSize: 'clamp(1.2rem,1.5vw+0.6rem,1.8rem)', margin: '1.6rem 0 .6rem' }}>
                Other Maintenance
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
                  Tire Rotation: $150 ($20 when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Wiper Blades: $150 (Free when combined with other services.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Fluid Top-Off: $150 (Free when combined with other services. No Charge for Fluids.)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  Serpentine Belt: $100 ($45 when combined with other services. Price May Vary.)
                </li>
              </ul>
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
              <h3 style={{ margin: 0 }}>Bundle services and save on combined labor.</h3>
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
                  Request service
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
              Request a Maintenance Appointment
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
                <label htmlFor="message">Requested Maintenance</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="List the services above you want"
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

