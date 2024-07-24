'use client';

import Link from 'next/link';

import type { NavProps } from '@/lib/types';
import { NavItem } from '@/lib/types/types';

export function AppNav({ items }: NavProps) {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      {items.map((item: NavItem) => (
        <Link
          href={item.link}
          key={item.link}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
