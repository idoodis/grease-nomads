import type { Metadata } from 'next';

const baseUrl = process.env.NEXTAUTH_URL || 'https://greasenomads.com';
const siteName = 'Grease Nomads';
const businessPhone = '+12246527264';
const businessEmail = 'Z@Greasenomads.com';

export const SERVICE_AREAS = [
  'Arlington Heights',
  'Barrington',
  'Mount Prospect',
  'Northbrook',
  'Prospect Heights',
  'Rolling Meadows',
  'Schaumburg',
  'Lisle',
  'Naperville',
  'Mundelein',
];

export function serviceAreaTextShort(): string {
  return 'serving Mount Prospect, Schaumburg, Naperville and nearby northwest suburbs';
}

export function serviceAreaTextFull(): string {
  return SERVICE_AREAS.join(', ');
}

export interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  noindex = false,
}: SEOConfig): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords || 'mobile mechanic, mobile auto repair, ASE certified, Chicago, emergency service',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `Mobile Mechanic in Chicago & Suburbs | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description:
    'Professional mobile mechanic services in Chicago northwest suburbs. Same-day auto repair, maintenance, diagnostics, and emergency roadside assistance delivered to your location. ASE certified technicians.',
  keywords:
    'mobile mechanic, mobile auto repair, mobile mechanic near me, mobile mechanic Chicago, ASE certified, emergency service, car maintenance, diagnostics, roadside assistance',
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName,
    title: `Mobile Mechanic in Chicago Northwest Suburbs | ${siteName}`,
    description:
      'Professional mobile mechanic services in Chicago northwest suburbs. Same-day auto repair, maintenance, diagnostics, and emergency roadside assistance delivered to your location.',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Mobile Mechanic Services`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Mobile Mechanic in Chicago Northwest Suburbs | ${siteName}`,
    description:
      'Professional mobile mechanic services in Chicago northwest suburbs. Same-day auto repair, maintenance, diagnostics, and emergency roadside assistance delivered to your location.',
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#organization`,
    name: siteName,
    description:
      'Professional ASE certified mobile mechanic services in Chicago’s northwest suburbs. Same-day auto repair, maintenance, diagnostics, and emergency roadside assistance delivered to your location.',
    url: baseUrl,
    telephone: businessPhone,
    email: businessEmail,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    serviceType: [
      'Mobile Auto Repair',
      'Mobile Mechanic',
      'Emergency Roadside Assistance',
      'Auto Diagnostics',
      'Car Maintenance',
      'Performance Modifications',
      'Pre-Purchase Inspection',
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}#organization`,
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: businessPhone,
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [],
  };
}

export function getServiceSchema(serviceName: string, serviceDescription: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: siteName,
      url: baseUrl,
      telephone: businessPhone,
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    serviceType: serviceName,
    url: `${baseUrl}${path}`,
  };
}

export function getFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
