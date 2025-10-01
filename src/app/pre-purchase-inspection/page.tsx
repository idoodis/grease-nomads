'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function PrePurchaseInspectionPage() {
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
          service: 'pre-purchase-inspection',
        }),
      });

      if (response.ok) {
        const name = formData.name?.trim() || 'friend';
        alert(`Thanks, ${name}! We'll reach out to schedule your Pre-Purchase Inspection.`);
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
        <title>Pre-Purchase Inspections — Grease Nomads</title>
        <meta
          name="description"
          content="Grease Nomads Pre-Purchase Inspection services — thorough checks before you buy. Professional, reliable, and mobile."
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
          background: '#0b0b0b',
          color: '#f5f5f5',
        }}
      >
        {/* Header */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: '#111',
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
              / <span>Pre-Purchase Inspections</span>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.25rem 1rem' }}>
            <h1
              style={{
                fontSize: '2.4rem',
                margin: '.5rem 0 0',
              }}
            >
              Pre-Purchase Inspection Pricing
            </h1>
            <p style={{ color: '#c9c9c9' }}>
              Get peace of mind before buying a vehicle. We inspect on-site and provide a detailed report so you can make an informed decision.
            </p>
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                border: '1px solid rgba(255,255,255,.12)',
                borderRadius: '14px',
                background: 'rgba(255,106,0,.08)',
              }}
            >
              <strong>
                A $100 DEPOSIT IS REQUIRED FOR ANY APPOINTMENT.
                <br />
                PAYMENT IS REQUIRED BEFORE REPORT IS SENT.
              </strong>
            </div>
          </section>

          {/* Pricing Section */}
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem' }}>
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '14px',
                background: '#0f0f0f',
                textAlign: 'center',
              }}
            >
              <h2 style={{ marginBottom: '.8rem', fontSize: '1.6rem', margin: '1.6rem 0 .6rem' }}>
                Standard Pre-Purchase Inspection
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.6rem 1rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    display: 'inline-block',
                    minWidth: '120px',
                  }}
                >
                  $250
                </li>
              </ul>
              <p style={{ color: '#c9c9c9', marginTop: '1rem' }}>
                Schedule your inspection today. Contact us for availability.
              </p>
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
                <h3>Exterior & Body</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Check for rust, damage, paint condition, and prior repairs.
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
                <h3>Engine & Transmission</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Inspect for leaks, noises, and overall drivetrain health.
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
                <h3>Suspension & Brakes</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Assess suspension wear, shocks, struts, and brake condition.
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
                <h3>Interior & Electronics</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Review seats, dash, lights, A/C, infotainment, and power accessories.
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
                <h3>Road Test</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Drive the vehicle to evaluate acceleration, handling, and braking.
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
                <h3>Diagnostic Scan</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Perform OBD-II scan to detect hidden codes and electronic system issues.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                margin: '2rem 0',
                padding: '1rem 1.25rem',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '16px',
                background: 'rgba(255,106,0,.15)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '.8rem',
              }}
            >
              <h3 style={{ margin: 0 }}>Ready to buy? Book a Pre-Purchase Inspection now.</h3>
              <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  style={{
                    padding: '.85rem 1.1rem',
                    borderRadius: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    background: '#ff6a00',
                    color: '#111',
                  }}
                >
                  Request inspection
                </a>
                <Link
                  href="/"
                  style={{
                    padding: '.85rem 1.1rem',
                    borderRadius: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,.18)',
                    color: '#f5f5f5',
                  }}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section id="contact" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem 2.5rem' }}>
            <h2 style={{ fontSize: '1.6rem', margin: '1.6rem 0 .6rem' }}>
              Request a Pre-Purchase Inspection
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gap: '.8rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '.35rem' }}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      background: '#0e0e0e',
                      border: '1px solid rgba(255,255,255,.12)',
                      color: '#f5f5f5',
                      padding: '.85rem .9rem',
                      borderRadius: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '.35rem' }}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      background: '#0e0e0e',
                      border: '1px solid rgba(255,255,255,.12)',
                      color: '#f5f5f5',
                      padding: '.85rem .9rem',
                      borderRadius: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '.35rem' }}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      background: '#0e0e0e',
                      border: '1px solid rgba(255,255,255,.12)',
                      color: '#f5f5f5',
                      padding: '.85rem .9rem',
                      borderRadius: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="location" style={{ display: 'block', marginBottom: '.35rem' }}>
                    Service Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      background: '#0e0e0e',
                      border: '1px solid rgba(255,255,255,.12)',
                      color: '#f5f5f5',
                      padding: '.85rem .9rem',
                      borderRadius: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="vehicle" style={{ display: 'block', marginBottom: '.35rem' }}>
                    Vehicle
                  </label>
                  <input
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      background: '#0e0e0e',
                      border: '1px solid rgba(255,255,255,.12)',
                      color: '#f5f5f5',
                      padding: '.85rem .9rem',
                      borderRadius: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '.35rem' }}>
                    Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
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
              <button
                type="submit"
                style={{
                  marginTop: '.8rem',
                  padding: '.85rem 1.1rem',
                  borderRadius: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: '#ff6a00',
                  color: '#111',
                  border: 'none',
                }}
              >
                Send request
              </button>
            </form>
            <p style={{ color: '#c9c9c9', marginTop: '.6rem' }}>
              Please Contact Us to Schedule Now.
              <br />
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

