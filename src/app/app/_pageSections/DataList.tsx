'use client';

import { useState } from 'react';

import { useDatabaseList } from '@/lib/hooks/database.hooks';
import DataTable, { type Column } from '@/components/DataTable';
import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/Dialog';

interface DataListProps<T> {
  columns: Column<T>[];
  dataPath: string;
  addDataForm: React.ComponentType<{
    onCancel: () => void;
    onSubmit: (data: T) => void;
    saving?: boolean;
  }>;
  headingText: string;
}

export default function DataList<T>({
  addDataForm: AddDataForm,
  columns,
  dataPath,
  headingText
}: DataListProps<T>) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const { data, loading, add } = useDatabaseList(dataPath);

  const handleFormSubmmit = async (formData: T) => {
    setSaving(true);
    await add(formData);
    setDialogOpen(false);
    setSaving(false);
  };

  return (
    <div className="">
      <div className="flex justify-between pb-4">
        <h1 className="text-2xl leading-10">{headingText}</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add new</Button>
          </DialogTrigger>
          <DialogContent
            aria-describedby="add-dialog-description"
            className="max-h-[80vh] overflow-y-auto p-6 w-[600px]"
            onInteractOutside={(e) => {
              e.preventDefault();
            }}
          >
            <DialogHeader>
              <DialogTitle>Add new</DialogTitle>
              <DialogDescription id="add-dialog-description"></DialogDescription>
            </DialogHeader>
            <AddDataForm
              onCancel={() => setDialogOpen(false)}
              onSubmit={handleFormSubmmit}
              saving={saving}
            />
          </DialogContent>
        </Dialog>
      </div>
      <DataTable data={data} columns={columns} loading={loading} />
    </div>
  );
}
