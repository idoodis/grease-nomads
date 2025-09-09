import { MapPin } from 'lucide-react';
import Link from 'next/link';

interface ServiceArea {
  id: string;
  city: string;
  slug: string;
  intro: string;
}

interface ServiceAreasProps {
  areas: ServiceArea[];
}

export function ServiceAreas({ areas }: ServiceAreasProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring professional automotive services directly to your location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
                  {area.city}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {area.intro}
                </p>

                <Link
                  href={`/service-areas/${area.slug}`}
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-gray-500 h-10 px-4 py-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/service-areas"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-gray-500 h-11 rounded-lg px-8"
          >
            View All Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
