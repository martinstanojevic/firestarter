'use client';

import Employee from './_pageSections/Employee';

export default function CustomerPage({ params }: { params: { id: string } }) {
  return <Employee employeeId={params.id} />;
}
