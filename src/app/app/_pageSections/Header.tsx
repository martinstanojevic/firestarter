'use client';

import { useAuth } from '@/lib/hooks';
import { appRoutes } from '@/lib/config';

import { MainLogoText } from '@/components/MainLogo';
import { MobileNav } from '@/components/MobileNav';

import { AppNav } from './AppNav';
import { UserNav } from './UserNav';

const Header = () => {
  const { user } = useAuth();
  const routes = Object.values(appRoutes);

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="pr-2">
        <MainLogoText />
      </div>
      <AppNav items={routes} />
      <MobileNav items={routes} />

      <div className="ml-auto flex items-center space-x-4">
        {user && (
          <UserNav avatarUrl={user.avatar_url} displayName={user.display_name} email={user.email} />
        )}
      </div>
    </header>
  );
};

export default Header;
