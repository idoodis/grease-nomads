import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import AnimationProvider from '@/components/animation-provider';
import { defaultMetadata } from '@/lib/seo';

export const metadata: Metadata = defaultMetadata;

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
