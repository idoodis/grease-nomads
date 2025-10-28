import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight, CalendarCheck } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Maintenance & Tune-Ups', href: '/maintenance' },
    { label: 'Diagnostics', href: '/diagnosis' },
    { label: 'Repairs', href: '/repairs' },
    { label: 'Roadside Assistance', href: '/roadside-assistance' },
    { label: 'Pre-Purchase Inspection', href: '/pre-purchase-inspection' },
    { label: 'Performance Modifications', href: '/modifications' },
  ];

  const supportLinks = [
    { label: 'Request a Quote', href: '/contact' },
    { label: 'Schedule an Appointment', href: '/contact' },
    { label: 'Call 224-652-7264', href: 'tel:+12246527264', external: true },
    { label: 'Email Z@Greasenomads.com', href: 'mailto:Z@Greasenomads.com', external: true },
  ];

  return (
    <footer className="relative bg-secondary-900 text-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <div className="rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 px-8 py-10 shadow-2xl text-white flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                Trusted Mobile Mechanics
              </span>
              <h3 className="mt-4 text-2xl lg:text-3xl font-heading font-bold">
                Need mobile auto service? We&apos;re ready when you are.
              </h3>
              <p className="mt-3 max-w-2xl text-white/80">
                Schedule an appointment that works for you or connect with our team for emergency support anywhere in the Greater Chicago area.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+12246527264"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white/15 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/25"
              >
                <Phone className="h-4 w-4" /> Call 224-652-7264
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-secondary-900 transition-colors hover:bg-gray-100"
              >
                <CalendarCheck className="h-4 w-4" /> Book Online
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <h3 className="text-2xl font-heading font-bold text-white">Grease Nomads</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Mobile mechanics providing dependable maintenance, diagnostics, and emergency repairs with concierge-level service throughout Chicagoland.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+12246527264" className="hover:text-white transition-colors">
                224-652-7264
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:Z@Greasenomads.com" className="hover:text-white transition-colors">
                Z@Greasenomads.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <Clock className="h-4 w-4 text-primary" />
              <span>Mon–Sat 8am–7pm</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Serving the Greater Chicago Area</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold text-white">Core Services</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold text-white">Get Support</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                    >
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                    >
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} Grease Nomads. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
