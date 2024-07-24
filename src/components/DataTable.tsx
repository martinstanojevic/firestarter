'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Table, Tbody, Th, Tr, Td } from '@/components/ui/Table';

import { TableSkeleton } from './Skeletons';

export interface Column<T> {
  label: string;
  render: (item: T) => JSX.Element | string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
}

export default function DataTable<T>({ columns, data, loading }: DataTableProps<T>) {
  if (loading)
    return (
      <Card>
        <CardContent className="pt-3 pb-2">
          <TableSkeleton numberOfRows={3} />
        </CardContent>
      </Card>
    );

  return (
    <Card>
      <CardContent className="pt-3 pb-2">
        <Table>
          <Tbody>
            <Tr>
              {columns.map((column, index) => (
                <Th key={index} className="text-left font-medium">
                  {column.label}
                </Th>
              ))}
            </Tr>
            {!data?.length && (
              <Tr>
                <Td colSpan={columns.length + 1} className="text-center pt-10">
                  No data to display
                </Td>
              </Tr>
            )}
            {data &&
              data.map((item, rowIndex) => (
                <Tr key={rowIndex}>
                  {columns.map((column, index) => (
                    <Td key={index} className="text-left">
                      {column.render(item)}
                    </Td>
                  ))}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </CardContent>
    </Card>
  );
}
