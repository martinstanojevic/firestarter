import { siteConfig } from '@/lib/config';

import Employee from './_pageSections/Employee';

export const metadata = {
  title: `${siteConfig.altName} | Employees`
};

export default function CustomerPage({ params }: { params: { id: string } }) {
  return <Employee employeeId={params.id} />;
}
