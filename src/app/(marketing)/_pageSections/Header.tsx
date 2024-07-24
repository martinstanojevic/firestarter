import Link from 'next/link';

import { cn } from '@/lib/utils/helpers';
import { MainLogoText } from '@/components/MainLogo';
import { ThemeDropDownMenu } from '@/components/ThemeDropdown';
import { buttonVariants } from '@/components/ui/Button';

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between p-6">
        <MainLogoText />

        <div className="flex justify-center items-center">
          <ThemeDropDownMenu />
          <nav>
            <Link
              href="/auth/login"
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-6')}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
