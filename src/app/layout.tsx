import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import AnimationProvider from '@/components/animation-provider';

export const metadata: Metadata = {
  title: 'Grease Nomads - ASE Certified Mobile Mechanics | Chicago Auto Repair',
  description:
    'Professional ASE certified mobile mechanic services in Chicago. Same-day auto repair, maintenance, diagnostics, and emergency service delivered to your location. Licensed, insured, and trusted by thousands.',
  keywords:
    'mobile mechanic, ASE certified, auto repair, Chicago, emergency service, car maintenance, diagnostics, performance modifications, pre-purchase inspection',
  authors: [{ name: 'Grease Nomads' }],
  creator: 'Grease Nomads',
  publisher: 'Grease Nomads',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://greasenomads.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Grease Nomads - ASE Certified Mobile Mechanics | Chicago Auto Repair',
    description:
      'Professional ASE certified mobile mechanic services in Chicago. Same-day auto repair, maintenance, diagnostics, and emergency service delivered to your location.',
    url: 'https://greasenomads.com',
    siteName: 'Grease Nomads',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grease Nomads - ASE Certified Mobile Mechanics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Grease Nomads - ASE Certified Mobile Mechanics | Chicago Auto Repair',
    description:
      'Professional ASE certified mobile mechanic services in Chicago. Same-day auto repair, maintenance, diagnostics, and emergency service delivered to your location.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning style={{ backgroundColor: '#000000', color: '#e5e7eb' }}>
        <AnimationProvider>
          <Header />
          <main style={{ paddingTop: '80px' }}>{children}</main>
        </AnimationProvider>
      </body>
    </html>
  );
}
