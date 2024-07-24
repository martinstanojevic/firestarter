'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import type { EmployeeData } from '@/lib/types';
import {
  Form,
  FormMessage,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormFooter,
  FormSubmit,
  FormCancel
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';

export interface BranchFormData {
  name: string;
  branchNumber: string;
  website: string;
  email: string;
  phoneNumber: string;
  phoneCountryCode: string;
}

interface Props {
  onSubmit: (data: EmployeeData) => void;
  onCancel: () => void;
  saving?: boolean;
  data?: EmployeeData;
}

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'This field is required' }),
  lastName: z.string().min(1, { message: 'This field is required' }),
  email: z.string().email({ message: 'Please provide a valid email' }),
  phoneNumber: z.string().min(1, { message: 'This field is required' })
  // color: z.string().min(1, { message: 'This field is required' })
});

export default function EmployeeForm({ onCancel, onSubmit, saving = false, data }: Props) {
  let defaultValues: EmployeeData = {
    firsName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    color: ''
  };

  if (data) {
    defaultValues = {
      ...defaultValues,
      ...data
    };
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const handleFormSubmit = async (formData: EmployeeData) => {
    onSubmit(formData);
  };

  const handleCancel = () => {
    onCancel();
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormFooter>
          <FormCancel onClick={handleCancel}>Cancel</FormCancel>
          <FormSubmit disabled={saving}>{saving ? 'Saving...' : 'Save'}</FormSubmit>
        </FormFooter>
      </form>
    </Form>
  );
}
