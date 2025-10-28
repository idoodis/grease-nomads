export const fallbackServices = [
  {
    id: 'service-maintenance',
    name: 'Mobile Maintenance Service',
    slug: 'maintenance',
    description:
      'Full-service maintenance delivered to your driveway including oil changes, filters, brakes, and fluids.',
    longDescription:
      '• Oil and filter changes\n• Brake inspections and replacements\n• Fluid top-offs and exchanges\n• Battery testing and replacements',
    basePrice: 149,
    priceUnit: 'service',
    isFeatured: true,
  },
  {
    id: 'service-diagnostics',
    name: 'Advanced Diagnostics',
    slug: 'diagnosis',
    description:
      'Professional scan tools and troubleshooting to identify electrical or drivability issues quickly.',
    longDescription:
      '• Computer diagnostics and code scanning\n• Electrical troubleshooting\n• Check engine light repair plans\n• Pre-repair estimates',
    basePrice: 129,
    priceUnit: 'service',
    isFeatured: false,
  },
  {
    id: 'service-repairs',
    name: 'Mobile Auto Repairs',
    slug: 'repairs',
    description:
      'From starters and alternators to suspension work, we handle most repairs right where the vehicle sits.',
    longDescription:
      '• Starter and alternator replacements\n• Cooling system repairs\n• Suspension and steering fixes\n• Same-day emergency repairs when available',
    basePrice: 189,
    priceUnit: 'service',
    isFeatured: true,
  },
  {
    id: 'service-roadside',
    name: 'Roadside Assistance',
    slug: 'roadside-assistance',
    description:
      'Emergency jump starts, battery installs, and fuel delivery anywhere in the Greater Chicago area.',
    longDescription:
      '• Jump starts and battery service\n• Emergency fuel delivery\n• Lockout assistance\n• Quick response throughout Chicagoland',
    basePrice: 89,
    priceUnit: 'service',
    isFeatured: false,
  },
  {
    id: 'service-ppi',
    name: 'Pre-Purchase Inspections',
    slug: 'pre-purchase-inspection',
    description:
      'Comprehensive inspection reports so you can buy with confidence before committing to a vehicle.',
    longDescription:
      '• On-site inspection at seller location\n• Detailed condition report with photos\n• Repair estimate overview\n• Phone consultation to review findings',
    basePrice: 219,
    priceUnit: 'service',
    isFeatured: false,
  },
  {
    id: 'service-mods',
    name: 'Performance Modifications',
    slug: 'modifications',
    description:
      'Installations for suspension upgrades, intakes, exhausts, and more to personalize your ride.',
    longDescription:
      '• Suspension and handling upgrades\n• Intake and exhaust installations\n• Brake system upgrades\n• Custom consultation for performance goals',
    basePrice: 249,
    priceUnit: 'service',
    isFeatured: false,
  },
];

export const fallbackReviews = [
  {
    id: 'review-1',
    authorName: 'Jordan M.',
    rating: 5,
    body: 'Grease Nomads diagnosed my check engine light in under an hour and fixed the issue the same day. Professional and friendly service right in my driveway!',
  },
  {
    id: 'review-2',
    authorName: 'Taylor R.',
    rating: 5,
    body: 'The team handled my brake job while I was at work. Fair pricing, quick turnaround, and amazing communication from start to finish.',
  },
  {
    id: 'review-3',
    authorName: 'Alex P.',
    rating: 5,
    body: 'I booked a pre-purchase inspection and saved thousands avoiding a lemon. The detailed report and photos were incredibly helpful.',
  },
];

export const fallbackServiceAreas = [
  { id: 'area-chicago', city: 'Chicago', slug: 'chicago' },
  { id: 'area-evanston', city: 'Evanston', slug: 'evanston' },
  { id: 'area-oak-park', city: 'Oak Park', slug: 'oak-park' },
  { id: 'area-schaumburg', city: 'Schaumburg', slug: 'schaumburg' },
];
