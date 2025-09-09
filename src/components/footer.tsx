import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Grease Nomads</h3>
            <p className="text-gray-300 leading-relaxed">
              Professional mobile mechanic services delivered directly to your
              location. Serving the Greater Chicago area with quality automotive
              care.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+13122085007"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:Z@Greasenomads.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">
              Service Areas
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/service-areas/des-plaines"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Des Plaines
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/schaumburg"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Schaumburg
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/hoffman-estates"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Hoffman Estates
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/chicago"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Chicago
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+13122085007"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  (312) 208-5007
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:Z@Greasenomads.com"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Z@Greasenomads.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Mon–Sat 8am–7pm</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Greater Chicago Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Grease Nomads. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

