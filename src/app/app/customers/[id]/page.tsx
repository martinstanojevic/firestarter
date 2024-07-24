import { siteConfig } from '@/lib/config';

import Customer from './_pageSections/Customer';

export const metadata = {
  title: `${siteConfig.altName} | Customers`
};

export default function CustomerPage({ params }: { params: { id: string } }) {
  return <Customer customerId={params.id} />;
}
