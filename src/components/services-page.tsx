import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

// Function to map service names to logo files
const getServiceLogo = (serviceName: string) => {
  const logoMap: { [key: string]: string } = {
    'maintenance': '/Maintenance logo.png',
    'diagnosis': '/Diagnostics logo.png',
    'diagnostics': '/Diagnostics logo.png',
    'performance modifications': '/Modifications logo.png',
    'modifications': '/Modifications logo.png',
    'roadside assistance': '/Roadside Assistance logo.png',
    'pre-purchase inspection': '/PPI logo.png',
    'auto repair': '/Repair logo.png',
    'repairs': '/Repair logo.png',
    'repair': '/Repair logo.png'
  };
  
  const lowerServiceName = serviceName.toLowerCase();
  
  // Find the closest match
  for (const [key, path] of Object.entries(logoMap)) {
    if (lowerServiceName.includes(key) || key.includes(lowerServiceName)) {
      return path;
    }
  }
  
  // Exact match check for better precision
  if (lowerServiceName === 'repair' || lowerServiceName === 'repairs') return '/Repair logo.png';
  if (lowerServiceName.includes('modification')) return '/Modifications logo.png';
  if (lowerServiceName.includes('pre-purchase') || lowerServiceName.includes('pre purchase')) return '/PPI logo.png';
  
  // Default fallback
  return '/Repair logo.png';
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

export function ServicesPage({ services }: ServicesPageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Professional mobile mechanic services delivered directly to your
              location
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg border-2 p-8 hover:shadow-xl transition-shadow ${
                  service.isFeatured ? 'border-primary' : 'border-gray-100'
                }`}
              >
                {service.isFeatured && (
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">
                      Featured Service
                    </span>
                  </div>
                )}

                <div className="flex justify-center mb-4">
                  <Image
                    src={getServiceLogo(service.name)}
                    alt={`${service.name} service logo`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
                  {service.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {formatPrice(service.basePrice, service.priceUnit)}
                  </div>
                  <p className="text-sm text-gray-500">Starting price</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-sm text-gray-700">
                    <strong>What&apos;s included:</strong>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {service.longDescription}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 h-10 px-4 py-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free quote on any of our mobile mechanic
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 h-11 rounded-lg px-8"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+12246527264"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-gray-500 h-11 rounded-lg px-8"
            >
              Call 224-652-7264
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
