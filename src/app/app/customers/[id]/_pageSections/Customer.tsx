'use client';

import type { Customer } from '@/lib/types/types';

import DataView from '@/app/app/_pageSections/DataView';

import CustomerForm from '../../_pageSections/CustomerForm';

const Customer = ({ customerId }: { customerId: string }) => {
  const dataRows = [
    {
      label: 'Email address',
      render: (item: Customer) => item.email
    },
    {
      label: 'Phone number',
      render: (item: Customer) => item.phoneNumber
    }
  ];

  return (
    <DataView
      heading={(item: Customer) => `${item.firstName} ${item.lastName}`}
      dataPath={`customer/${customerId}`}
      editDataForm={CustomerForm}
      dataRows={dataRows}
    />
  );
};

export default Customer;
