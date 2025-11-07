import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from './maintenance.module.css';

export default function MaintenancePage() {
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
      <div className={styles.page}>
        <Link href="/services" className={styles.backLink}>
          ← Back to Services
        </Link>
        <section className={styles.board}>
          <div className={styles.hero}>
            <div className={styles.heroTop}>
              <Image src="/Maintenance logo.png" alt="Maintenance" width={160} height={160} priority />
              <div>
                <div className={styles.heroNote}>Maintenance</div>
                <div className={styles.heroTitle}>Prices Are Estimates and Subject to Change.</div>
              </div>
            </div>
            <p className={styles.heroDescription}>
              Standard labour pricing for mobile maintenance services. Parts are quoted separately. A $100 deposit secures your
              appointment and is applied to the final bill.
            </p>
          </div>

          <div className={`${styles.card} animate-in ${styles.cardWhite} ${styles.cardTall} ${styles.oil}`}>
            <div className={styles.label}>Oil Change</div>
            <div className={`${styles.entries} ${styles.entriesCompact}`}>
              <span>Standard Oil Change: $150</span>
              <span>($125 when combined with other services.)</span>
            </div>
          </div>

          <div className={`${styles.card} animate-in ${styles.flush}`}>
            <div className={styles.label}>Fluid Flushes</div>
            <div className={styles.entries}>
              <span>Coolant Flush: $280 ($250 when combined with other services.)</span>
              <span>Transmission Fluid Flush: $280 ($250 when combined with other services.)</span>
              <span>Brake Fluid Flush: $250 ($200 when combined with other services.)</span>
              <span>Power Steering Fluid Flush: $280 ($250 when combined with other services.)</span>
              <span>Driveline Flush: $400 ($350 when combined with other services.)</span>
            </div>
          </div>

          <div className={`${styles.card} animate-in ${styles.cardTall} ${styles.spark} ${styles.cardSpark}`}>
            <div className={styles.label}>Spark Plugs / Coil Packs</div>
            <div className={`${styles.entries} ${styles.entriesCompact}`}>
              <span>Inline 4: $200 ($150 when combined with other services.)</span>
              <span>Inline 6: $200 ($150 when combined with other services. Price may vary.)</span>
              <span>V6 / V8: $300 ($250 when combined with other services. Price may vary.)</span>
            </div>
            <div className={styles.footnote}>*Parts not included in price</div>
          </div>

          <div className={`${styles.card} animate-in ${styles.cardWhite} ${styles.filters}`}>
            <div className={styles.label}>Filters</div>
            <div className={styles.entries}>
              <span>Cabin Air Filter Replacement: $150 ($100 when combined with other services.)</span>
              <span>Engine Air Filter Replacement: $150 ($100 when combined with other services.)</span>
              <span>Fuel Filters: $200 ($150 when combined with other services.)</span>
            </div>
          </div>

          <div className={`${styles.card} animate-in ${styles.cardWhite} ${styles.brake}`}>
            <div className={styles.label}>Brake Jobs</div>
            <div className={styles.entries}>
              <span>Brake Pads: $300 ($200 when combined with other services.)</span>
              <span>Brake Rotors: $300 ($200 when combined with other services.)</span>
              <span>Brake Pads and Rotors: $350 ($300 when combined with other services.)</span>
            </div>
            <div className={styles.footnote}>*Parts not included in price</div>
          </div>

          <div className={`${styles.card} animate-in ${styles.other}`}>
            <div className={styles.label}>Other Maintenance</div>
            <div className={styles.entries}>
              <span>Tire Rotation: $200 ($50 when combined with other services.)</span>
              <span>Wiper Blades: $150 (Free when combined with other services.)</span>
              <span>Fluid Top-Off: $150 (Free when combined with other services. No charge for fluids.)</span>
              <span>Serpentine Belt: $150 ($100 when combined with other services. Price may vary.)</span>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.ctaButton}>
              Request Maintenance
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

