'use client';

import type { Employee } from '@/lib/types/types';

import DataView from '@/app/app/_pageSections/DataView';

import EmployeeForm from '../../_pageSections/EmployeeForm';

const Employee = ({ employeeId }: { employeeId: string }) => {
  const dataRows = [
    {
      label: 'Email address',
      render: (item: Employee) => item.email
    },
    {
      label: 'Phone number',
      render: (item: Employee) => item.phoneNumber
    }
  ];

  return (
    <DataView
      heading={(item: Employee) => `${item.firstName} ${item.lastName}`}
      dataPath={`employee/${employeeId}`}
      editDataForm={EmployeeForm}
      dataRows={dataRows}
    />
  );
};

export default Employee;
