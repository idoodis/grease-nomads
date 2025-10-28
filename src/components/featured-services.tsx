import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

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
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    <Star className="mr-1 h-3.5 w-3.5" /> Top Rated
                  </span>
                  <h3 className="mt-4 text-2xl font-heading font-bold text-secondary-900">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 px-4 py-3 text-right">
                  <div className="text-2xl font-semibold text-primary">
                    {formatPrice(service.basePrice, service.priceUnit)}
                  </div>
                  <span className="text-xs uppercase tracking-wide text-gray-500">
                    Starting at
                  </span>
                </div>
              </div>

              <div className="relative mt-6 flex flex-col gap-3">
                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 bg-primary-500 text-white hover:bg-primary-600 h-10"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 border border-gray-300 bg-white text-secondary-900 hover:bg-gray-100 h-10"
                >
                  Book Now
                </Link>
              </div>
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
