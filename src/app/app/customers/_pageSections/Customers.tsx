'use client';
import Link from 'next/link';
import type { Customer } from '@/lib/types/types';

import DataList from '../../_pageSections/DataList';
import CustomerForm from './CustomerForm';

const Customers = () => {
  const columns = [
    {
      label: 'Full name',
      render: (item: Customer) => (
        <Link href={`/app/customers/${item.id}`} className="font-semibold">
          {item.firstName} {item.lastName}
        </Link>
      )
    },
    {
      label: 'Email',
      render: (item: Customer) => item.email
    },
    {
      label: 'Phone number',
      render: (item: Customer) => item.phoneNumber
    }
  ];

  return (
    <DataList
      columns={columns}
      dataPath="customer"
      addDataForm={CustomerForm}
      headingText="Customers"
    />
  );
};

export default Customers;
