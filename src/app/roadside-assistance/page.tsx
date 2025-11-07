'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function RoadsideAssistancePage() {
  return (
    <>
      <Head>
        <title>Roadside Assistance — Grease Nomads</title>
        <meta
          name="description"
          content="Grease Nomads Roadside Assistance — emergency services including jump starts, tire changes, and fuel delivery."
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
              / <span>Roadside Assistance</span>
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
              Roadside Assistance Pricing
            </h1>
            <p style={{ color: '#c9c9c9' }}>
              Emergency services to get you back on the road. Fast, professional, and reliable.
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
                PAYMENT IS REQUIRED BEFORE HAND BACK OF KEYS.
              </strong>
            </div>
          </section>

          {/* Pricing Section */}
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem' }}>
            <div
              style={{
                marginTop: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '14px',
                background: '#0f0f0f',
                textAlign: 'center',
              }}
            >
              <h2 style={{ marginBottom: '1rem', fontSize: '1.6rem', margin: '1.6rem 0 .6rem' }}>
                Emergency Services
              </h2>
              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                  display: 'grid',
                  gap: '.75rem',
                }}
              >
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.7rem 1.2rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  Jump Start — $150 (Includes free battery test)
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.7rem 1.2rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  Tire Change/Tire Repair (with spare) — $160
                </li>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.7rem 1.2rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  Fuel Delivery (5 gallons) — $175
                </li>
              </ul>
              <p style={{ color: '#c9c9c9', marginTop: '1rem' }}>
                * We do not offer lockout services.
                <br />* If we are unable to get the vehicle back on the road we will help organize a tow.
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
                <h3>Battery Issues</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Jump starts and diagnostics to identify charging or alternator problems.
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
                <h3>Tire Problems</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Flat tire replacement with your spare or temporary repair solutions.
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
                <h3>Out of Fuel</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Emergency fuel delivery (5 gallons) to get you to the nearest station.
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
              <h3 style={{ margin: 0 }}>Stranded? Book roadside assistance now.</h3>
              <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
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
                  Request assistance
                </Link>
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

