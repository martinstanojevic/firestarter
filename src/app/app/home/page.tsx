import { siteConfig } from '@/lib/config';

import Dashboard from './_pageSections/Dashboard';

export const metadata = {
  title: `${siteConfig.altName} | Home`
};

export default async function HomePage() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
