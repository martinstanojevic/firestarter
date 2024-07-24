import { LayoutProps } from '@/lib/types/types';

import Header from './_pageSections/Header';

export default async function DashboardLayout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="m-6">{children}</div>
    </main>
  );
}
