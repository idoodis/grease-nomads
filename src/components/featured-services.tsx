import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  priceUnit: string;
  isFeatured: boolean;
}

interface FeaturedServicesProps {
  services: Service[];
}

export function FeaturedServices({ services }: FeaturedServicesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
            Our Featured Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional mobile mechanic services delivered directly to your
            location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-1">
                  {formatPrice(service.basePrice, service.priceUnit)}
                </div>
                <p className="text-sm text-gray-500">Starting price</p>
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

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-gray-500 h-11 rounded-lg px-8"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
