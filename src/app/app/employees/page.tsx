import { siteConfig } from '@/lib/config';

import Customers from './_pageSections/Employees';

export const metadata = {
  title: `${siteConfig.altName} | Employees`
};

export default function EmployeesPage() {
  return <Customers />;
}
