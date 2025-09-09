import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string | null;
}

interface FAQPreviewProps {
  faqs: FAQ[];
}

export function FAQPreview({ faqs }: FAQPreviewProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our mobile mechanic services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-gray-500 h-11 rounded-lg px-8"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
