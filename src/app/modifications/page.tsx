'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ModificationsPage() {
  return (
    <>
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
              / <span>Modifications</span>
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
              Modifications
            </span>
            <h1
              style={{
                fontSize: 'clamp(1.8rem,3vw+0.6rem,3rem)',
                lineHeight: 1.1,
                margin: '.5rem 0 0',
              }}
            >
              Modification Pricing
            </h1>
            <p style={{ color: '#c9c9c9' }}>
              Performance upgrades and custom modifications, performed on-site. Transparent hourly labor rate, professional results.
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
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem' }}>
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
                Hourly Rate
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.4rem' }}>
                <li
                  style={{
                    background: '#ff6a00',
                    color: '#111',
                    padding: '.4rem .6rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  $250 per hour
                </li>
              </ul>
              <p style={{ color: '#c9c9c9' }}>Please contact us for a free consultation before booking modifications.</p>
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
                <h3>Performance Upgrades</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Turbochargers, superchargers, and engine tuning for maximum performance.
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
                <h3>Exhaust Systems</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Custom headers, high-flow cats, and cat-back systems for power and sound.
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
                <h3>Suspension Upgrades</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Coilovers, lowering kits, and performance suspension tuning.
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
                <h3>Brake Upgrades</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Big brake kits, performance pads, and rotors for improved stopping power.
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
                <h3>Wheels & Tires</h3>
                <p style={{ color: '#c9c9c9' }}>
                  Performance wheels and tires fitted and balanced for optimal handling.
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
                <h3>Interior/Exterior Customization</h3>
                <p style={{ color: '#c9c9c9' }}>
                  From racing seats and harnesses to body kits and aero parts.
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
              <h3 style={{ margin: 0 }}>Want to modify your vehicle? Book a consultation today.</h3>
              <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
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
                  Request modification
                </Link>
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

