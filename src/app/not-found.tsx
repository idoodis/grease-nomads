'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

// Disable static generation for this page
export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-heading font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 h-11 rounded-lg px-8"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-gray-500 h-11 rounded-lg px-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Need help? Contact us:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="tel:+13122085007"
              className="text-primary hover:text-primary/80"
            >
              (312) 208-5007
            </a>
            <a
              href="mailto:Z@Greasenomads.com"
              className="text-primary hover:text-primary/80"
            >
              Z@Greasenomads.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
