import { Phone, Wrench, MapPin } from 'lucide-react';
import Link from 'next/link';

interface CompanyInfo {
  id: string;
  name: string;
  phone: string;
  email: string;
  hours: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  address?: string | null;
}

interface HeroProps {
  companyInfo: CompanyInfo | null;
}

export function Hero({ companyInfo }: HeroProps) {
  if (!companyInfo) return null;

  return (
    <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 mechanic-bg opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                {companyInfo.heroTitle}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                {companyInfo.heroSubtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 h-11 rounded-lg px-8"
              >
                {companyInfo.heroCTA}
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent text-white hover:bg-white hover:text-secondary-900 focus-visible:ring-white h-11 rounded-lg px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Mobile Service</p>
                  <p className="text-gray-300 text-sm">We come to you</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Local Areas</p>
                  <p className="text-gray-300 text-sm">4+ cities served</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-heading font-bold mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-300">Hours:</span>
                  <span className="font-medium">{companyInfo.hours}</span>
                </div>
                {companyInfo.address && (
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-300">{companyInfo.address}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
