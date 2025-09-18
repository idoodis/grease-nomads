import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  MessageSquare,
  CheckCircle,
  Truck,
  Wrench,
  Clock,
  Shield,
  DollarSign,
  Users,
} from 'lucide-react';

export function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: 'Request a Quote',
      description:
        'Contact us via phone, email, or our online form. Tell us about your vehicle and the service you need.',
      icon: MessageSquare,
      details: [
        'Free consultation and estimate',
        'No obligation to proceed',
        'Transparent pricing upfront',
        'Available 7 days a week',
      ],
    },
    {
      number: 2,
      title: 'We Confirm the Plan',
      description:
        "We'll review your needs, provide a detailed estimate, and schedule a convenient time for service.",
      icon: CheckCircle,
      details: [
        'Detailed service plan',
        'Exact pricing breakdown',
        'Flexible scheduling',
        'Parts and labor included',
      ],
    },
    {
      number: 3,
      title: 'We Come to You',
      description:
        'Our certified technician arrives at your location with all necessary tools and equipment.',
      icon: Truck,
      details: [
        'Fully equipped mobile service',
        'Professional technician',
        'All tools and equipment included',
        'Clean, organized work area',
      ],
    },
    {
      number: 4,
      title: "You're Back on the Road",
      description:
        "Service completed, vehicle tested, and you're ready to go with a warranty on all work.",
      icon: Wrench,
      details: [
        'Quality workmanship guaranteed',
        'Vehicle testing and inspection',
        'Warranty on all repairs',
        'Detailed service report',
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description:
        'No need to drop off and pick up your vehicle. We come to you at your convenience.',
    },
    {
      icon: DollarSign,
      title: 'Fair Pricing',
      description:
        "Transparent pricing with no hidden fees. You know exactly what you're paying for.",
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description:
        'Fully licensed and insured professionals with years of experience.',
    },
    {
      icon: Users,
      title: 'Personal Service',
      description:
        'One-on-one attention and personalized service tailored to your needs.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Getting professional automotive service has never been easier.
              Here&apos;s our simple 4-step process.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                        {step.number}
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-secondary-900">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gray-50 rounded-2xl p-12 text-center">
                      <div className="bg-primary/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
                        Step {step.number}
                      </h3>
                      <p className="text-gray-600">{step.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              Why Choose Mobile Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convenience and quality of professional mobile
              mechanic service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our mobile mechanic service
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                How much does mobile service cost?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our pricing is competitive with traditional repair shops, and
                you save time and convenience. We provide free estimates before
                starting any work, so you know exactly what you&apos;ll pay.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                What if you can&apos;t fix my car on-site?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most repairs can be completed on-site. For major repairs
                requiring specialized equipment, we&apos;ll provide a detailed
                diagnosis and recommend the best course of action.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                Do you provide warranties?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! We provide warranties on all parts and labor. The specific
                warranty terms depend on the type of service performed, and
                we&apos;ll explain the details before starting work.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                How quickly can you come out?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We typically can schedule same-day service for most requests.
                Emergency roadside assistance is available 24/7. Contact us to
                check availability for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Experience Mobile Service?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get your free quote today and see how convenient professional
            automotive service can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary-900 text-white hover:bg-secondary-800 focus-visible:ring-secondary-900 h-11 rounded-lg px-8"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+12246527264"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent text-white hover:bg-white hover:text-primary h-11 rounded-lg px-8"
            >
              Call 224-652-7264
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
