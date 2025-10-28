"use client";

import { useEffect } from 'react';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, TimerReset } from 'lucide-react';
import Image from 'next/image';

// Match service link destinations to Home page behavior
const getServiceHref = (serviceName: string) => {
  const name = serviceName.toLowerCase();
  if (name.includes('repair')) return '/repairs';
  if (name.includes('diagn')) return '/diagnosis';
  if (name.includes('modif')) return '/modifications';
  if (name.includes('pre-purchase') || name.includes('inspection')) return '/pre-purchase-inspection';
  if (name.includes('maintenance')) return '/maintenance';
  if (name.includes('roadside') || name.includes('assistance')) return '/roadside-assistance';
  return '/contact';
};

// Function to map service names to logo files
const getServiceLogo = (serviceName: string) => {
  const logoMap: { [key: string]: string } = {
    maintenance: '/maintenance-logo.png',
    diagnosis: '/diagnostics-logo.png',
    diagnostics: '/diagnostics-logo.png',
    'performance modifications': '/modifications-logo.png',
    modifications: '/modifications-logo.png',
    'roadside assistance': '/roadside-assistance-logo.png',
    'pre-purchase inspection': '/ppi-logo.png',
    'pre purchase inspection': '/ppi-logo.png',
    'auto repair': '/repair-logo.png',
    repairs: '/repair-logo.png',
    repair: '/repair-logo.png',
  };
  
  const lowerServiceName = serviceName.toLowerCase();
  
  // Find the closest match
  for (const [key, path] of Object.entries(logoMap)) {
    if (lowerServiceName.includes(key) || key.includes(lowerServiceName)) {
      return path;
    }
  }
  
  // Exact match check for better precision
  if (lowerServiceName === 'repair' || lowerServiceName === 'repairs') return '/repair-logo.png';
  if (lowerServiceName.includes('modification')) return '/modifications-logo.png';
  if (lowerServiceName.includes('pre-purchase') || lowerServiceName.includes('pre purchase')) return '/ppi-logo.png';

  // Default fallback
  return '/repair-logo.png';
};

interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  basePrice: number;
  priceUnit: string;
  isFeatured: boolean;
}

interface ServicesPageProps {
  services: Service[];
}

const whyChooseUs = [
  {
    title: 'ASE Certified Technicians',
    description:
      'Highly trained professionals with years of experience servicing all major makes and models.',
  },
  {
    title: 'Mobile Convenience',
    description:
      'We come to you equipped with professional tools so you can get back on the road faster.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'Upfront estimates with no hidden fees and flexible service options to fit your needs.',
  },
];

const renderLongDescription = (longDescription: string) => {
  const items = longDescription
    .split(/\r?\n|•/)
    .map((item) => item.replace(/^[–•\-\s]+/, '').trim())
    .filter(Boolean);

  if (items.length <= 1) {
    return <p className="text-sm text-gray-200 leading-relaxed">{longDescription}</p>;
  }

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-sm text-gray-200">
          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export function ServicesPage({ services }: ServicesPageProps) {
  // Reveal-on-scroll for elements with .reveal
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];
    if (!('IntersectionObserver' in window) || elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-24">
        <div className="absolute inset-0 animated-gradient opacity-80" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-primary-500/40 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-400/30 blur-3xl animate-float-slow" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center reveal is-visible">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
              Full-Service Mobile Mechanics
            </span>
            <h1 className="mt-6 text-5xl lg:text-7xl font-heading font-bold tracking-tight">
              Premium Auto Care, Delivered
            </h1>
            <p className="mt-5 text-lg lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Expert maintenance, repairs, diagnostics, modifications, and inspections—whenever and wherever you need us in Greater Chicago.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white bg-white text-secondary-900 hover:bg-gray-100 h-12 px-7"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+12246527264"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40 border border-white/40 bg-transparent hover:bg-white/10 h-12 px-7"
              >
                Call 224-652-7264
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900">
                Comprehensive Services Tailored To Your Vehicle
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                From diagnostics and routine maintenance to performance upgrades and emergency roadside support, our ASE certified team has you covered.
              </p>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-500 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Backed by our service guarantee</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const isFeatured = Boolean(service.isFeatured);

              return (
                <article
                  key={service.id}
                  className={`group relative overflow-hidden rounded-3xl border p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl reveal ${
                    isFeatured ? 'border-white/15' : 'border-white/10'
                  } bg-[#0f1115] hover:border-primary-400/40 hover:shadow-primary/20`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                  <div className="pointer-events-none absolute -inset-px rounded-3xl ring-1 ring-white/10 transition-colors duration-300 group-hover:ring-white/20" />

                  <div className="relative">
                    {isFeatured && (
                      <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        Popular Choice
                      </span>
                    )}

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-white">
                          {service.name}
                        </h3>
                        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 shadow-inner animate-float-slow transition-transform duration-300 ease-out will-change-transform group-hover:scale-105 group-hover:-rotate-3">
                        <Image
                          src={getServiceLogo(service.name)}
                          alt={`${service.name} service icon`}
                          width={72}
                          height={72}
                          className="object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {formatPrice(service.basePrice, service.priceUnit)}
                      </span>
                      <span className="text-sm text-gray-400">Starting at</span>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-center gap-3 text-sm font-semibold text-white">
                        <TimerReset className="w-4 h-4 text-primary" />
                        <span>Typical turnaround within 24-48 hours</span>
                      </div>
                      <div className="rounded-2xl bg-white/5 p-5">
                        <h4 className="text-sm font-semibold text-white tracking-wide uppercase">What&apos;s Included</h4>
                        <div className="mt-3 space-y-3">
                          {renderLongDescription(service.longDescription)}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={getServiceHref(service.name)}
                        className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 bg-primary-500 text-white hover:bg-primary-600 h-11"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40 border border-white/20 bg-transparent text-white hover:bg-white/10 h-11"
                      >
                        Book Service
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {!services.length && (
            <div className="mt-12 rounded-3xl border border-dashed border-white/20 bg-[#0f1115] p-10 text-center text-gray-300">
              We&apos;re updating our service catalog. Please check back soon or contact us for assistance.
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">
              Why Drivers Trust Grease Nomads
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Every appointment is handled with the same care, transparency, and professionalism we would expect for our own vehicles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 animated-gradient" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white reveal">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold">
            Ready To Schedule Your Service?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Speak with our team today to receive a personalized quote and convenient appointment time that fits your schedule.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white bg-white text-secondary-900 hover:bg-gray-100 h-12 px-8"
            >
              Request Service
            </Link>
            <a
              href="tel:+12246527264"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40 border border-white/60 bg-transparent hover:bg-white/10 h-12 px-8"
            >
              Call 224-652-7264
            </a>
          </div>
          <p className="mt-6 text-sm text-white/70">Licensed and insured. Serving Greater Chicago 7 days a week.</p>
        </div>
      </section>
    </main>
  );
}
