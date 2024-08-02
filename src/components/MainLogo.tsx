import Link from 'next/link';
import { Flame } from 'lucide-react';

import { siteConfig, appRoutes } from '@/lib/config';

export const MainLogoText = () => {
  return (
    <Link href={appRoutes.home.link} className="items-center space-x-1 md:flex">
      <Flame color="#FF006E" />
      <span className="hidden md:inline-block">{siteConfig.altName}</span>
    </Link>
  );
};

export const MainLogoIcon = () => {
  return (
    <Link href={appRoutes.home.link} className="w-4 h-4">
      <Flame />
    </Link>
  );
};
