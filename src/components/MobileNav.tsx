import Link from 'next/link';

import type { NavItem, NavProps } from '@/lib/types';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/Icons';

export const MobileNav = ({ items }: NavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Icons.Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          {items.map((item: NavItem) => (
            <Link href={item.link} key={item.title} className="hover:text-foreground">
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
