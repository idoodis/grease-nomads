import { HowItWorksPage } from '@/components/how-it-works-page';
import { generateMetadata } from '@/lib/utils';

export const metadata = generateMetadata({
  title: 'How It Works - Mobile Mechanic Service Process',
  description:
    "Learn how our mobile mechanic service works. Simple 4-step process: Request quote, confirm plan, we come to you, you're back on the road.",
  path: '/how-it-works',
});

export default function HowItWorks() {
  return <HowItWorksPage />;
}

