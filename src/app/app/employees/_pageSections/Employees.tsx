'use client';
import Link from 'next/link';
import type { Employee } from '@/lib/types/types';

import DataList from '../../_pageSections/DataList';

import CustomerForm from './EmployeeForm';

const Employees = () => {
  const columns = [
    {
      label: 'Full name',
      render: (item: Employee) => (
        <Link href={`/app/employees/${item.id}`} className="hover:underline font-semibold">
          {item.firstName} {item.lastName}
        </Link>
      )
    },
    {
      label: 'Email',
      render: (item: Employee) => item.email
    },
    {
      label: 'Phone number',
      render: (item: Employee) => item.phoneNumber
    }
  ];

  return (
    <DataList
      columns={columns}
      dataPath="employee"
      addDataForm={CustomerForm}
      headingText="Employees"
    />
  );
};

export default Employees;
