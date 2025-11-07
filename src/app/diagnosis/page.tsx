'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function DiagnosisPage() {
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
                background: '#f97316',
                borderRadius: '32px',
                padding: '2.5rem 2rem',
                color: '#111827',
                boxShadow: '0 18px 45px rgba(249, 115, 22, 0.18)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', justifyContent: 'center' }}>
                <Image src="/Diagnostics logo.png" alt="Diagnostics" width={120} height={120} priority />
                <div>
                  <div style={{ fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase' }}>Diagnostics</div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
                      fontWeight: 800,
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      margin: '.4rem 0 0 0',
                    }}
                  >
                    Standard Diagnostic Fee
                  </h2>
                </div>
              </div>
              <div
                style={{
                  alignSelf: 'center',
                  background: '#111827',
                  color: '#ffffff',
                  padding: '1.3rem 3.5rem',
                  borderRadius: '24px',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '.1em',
                }}
              >
                $150
              </div>
              <p
                style={{
                  textAlign: 'center',
                  fontWeight: 700,
                  letterSpacing: '.065em',
                  textTransform: 'uppercase',
                  maxWidth: '520px',
                  margin: '0 auto',
                  lineHeight: 1.5,
                }}
              >
                (Covers call out fee) If repairs are approved a $100 credit will be applied if applicable.
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
                  Request diagnosis
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

