import { Star, Quote } from 'lucide-react';
import Link from 'next/link';

interface Review {
  id: string;
  authorName: string;
  rating: number;
  body: string;
  publishedAt: Date;
  city?: string | null;
}

interface RecentReviewsProps {
  reviews: Review[];
}

export function RecentReviews({ reviews }: RecentReviewsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              <div className="absolute top-6 left-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;{review.body}&rdquo;
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-secondary-900">
                      {review.authorName}
                    </p>
                    {review.city && (
                      <p className="text-sm text-gray-500">{review.city}</p>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(review.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/reviews"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-gray-500 h-11 rounded-lg px-8"
          >
            Read All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
