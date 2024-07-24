import { siteConfig } from '@/lib/config';

import Customers from './_pageSections/Customers';

export const metadata = {
  title: `${siteConfig.altName} | Customers`
};

export default function CustomersPage() {
  return <Customers />;
}
