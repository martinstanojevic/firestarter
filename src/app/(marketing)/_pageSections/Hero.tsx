import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';

export default function Hero() {
  return (
    <div className="container mx-auto px-8 lg:flex">
      <div className="text-center lg:text-left lg:w-1/2 lg:pr-24">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">
          Main title of your landing page
        </h1>
        <p className="text-xl lg:text-2xl mt-6 font-light">
          Free landing page template to promote your business startup and generate leads for the
          offered services
        </p>
        <p className="mt-8 md:mt-12">
          <Button size="lg">Get Started</Button>
        </p>
        <p className="mt-4">
          Hero section borrowed from{' '}
          <Link
            href="https://tailwindflex.com/@limaa-m/simple-landing-page"
            className="hover:underline"
          >
            Tailwind Flex
          </Link>
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <Image src="/static/images/hero.svg" alt="hero" width={500} height={500} />
      </div>
    </div>
  );
}
