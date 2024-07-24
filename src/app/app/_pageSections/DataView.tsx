'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useDatabaseObject } from '@/lib/hooks/database.hooks';
import { appRoutes } from '@/lib/config';
import { Icons } from '@/components/Icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogFooter
} from '@/components/ui/AlertDialog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/Dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';

export interface DataRow<T> {
  label: string;
  render: (item: T) => JSX.Element | string;
}

interface DataViewProps<T> {
  dataPath: string;
  dataRows: DataRow<T>[];
  editDataForm: React.ComponentType<{
    onCancel: () => void;
    onSubmit: (data: T) => void;
    saving?: boolean;
    data: T;
  }>;
  heading: (data: T) => string | JSX.Element;
}

export default function DataView<T>({
  editDataForm: EditDataForm,
  dataPath,
  heading,
  dataRows
}: DataViewProps<T>) {
  const { data, loading, delete: deleteItem, update: updateItem } = useDatabaseObject<T>(dataPath);
  const router = useRouter();

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [deleteing, setDeleteing] = useState<boolean>(false);

  const handleDeleteConfirm = async () => {
    setDeleteing(true);
    try {
      await deleteItem();
      setDeleteing(false);
      setDeleteDialogOpen(false);

      router.replace(appRoutes.customers.link);
    } catch (error) {
      setDeleteing(false);
    }
  };

  const handleFormSubmmit = async (formData: T) => {
    setSaving(true);

    await updateItem({
      ...data,
      ...formData
    });

    setEditDialogOpen(false);
    setSaving(false);
  };

  useEffect(() => {
    if (data) {
      document.title += ` - ${heading(data)}`;
    }
  }, [data, heading]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogPortal>
          <AlertDialogContent aria-describedby="delete-dialog-description">
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription id="delete-dialog-description">
              Are you sure you want to delete this item?
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button variant={'destructive'} onClick={handleDeleteConfirm} disabled={deleteing}>
                {deleteing ? 'Deleting...' : 'Delete'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent
          aria-describedby="add-dialog-description"
          className="max-h-[80vh] overflow-y-auto p-6 md:w-[600px]"
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription id="add-dialog-description"></DialogDescription>
          </DialogHeader>
          <EditDataForm
            onCancel={() => setEditDialogOpen(false)}
            onSubmit={handleFormSubmmit}
            data={data}
            saving={saving}
          />
        </DialogContent>
      </Dialog>
      <div className="">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>{heading(data)}</CardTitle>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Icons.Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setEditDialogOpen(true)}>Edit</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setDeleteDialogOpen(true)}
                  className="text-destructive"
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <dl className="grid md:grid-cols-2">
              {dataRows.map(({ label, render }, index) => (
                <div key={index} className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-1">
                  <dt className="text-sm font-medium text-gray-500">{label}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {render(data)}
                  </dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
