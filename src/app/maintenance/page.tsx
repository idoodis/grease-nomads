import Image from 'next/image';
import Link from 'next/link';
import styles from './maintenance.module.css';
import { generatePageMetadata, getServiceSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = generatePageMetadata({
  title: 'Mobile Car Maintenance Services | Oil Changes, Fluid Flushes, Filters',
  description:
    'Professional mobile car maintenance services in Chicago and suburbs. Oil changes, fluid flushes, filters, spark plugs, brake service, and more delivered to your location. Starting at $49. Call 224-652-7264.',
  path: '/maintenance',
  keywords:
    'mobile car maintenance, mobile oil change, mobile mechanic maintenance, fluid flush, brake service, spark plugs, car filters, mobile mechanic Chicago',
});

export default function MaintenancePage() {
  const serviceSchema = getServiceSchema(
    'Mobile Car Maintenance',
    'Professional mobile car maintenance services including oil changes, fluid flushes, filters, spark plugs, brake service, and more. Delivered to your location in Chicago and surrounding suburbs.',
    '/maintenance'
  );

  return (
    <>
      <JsonLd data={serviceSchema} />
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

