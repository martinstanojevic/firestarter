import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/Card';
import { UpdateDisplayName, UpdateEmail } from '../_pageSections/UpdateForms';
// import { GetUser } from '@/lib/API/Database/user/queries';

export default async function ProfileForm() {
  const user = { display_name: 'Martin', email: '', stripe_customer_id: '' }; //await GetUser();

  const display_name = user?.display_name || '';
  const customer = user?.stripe_customer_id || '';
  const email = user?.email;

  return (
    <div>
      <Card className="bg-background-light dark:bg-background-dark">
        <CardHeader>
          <CardTitle>Update Account</CardTitle>
          <CardDescription>Update Account display name, email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <UpdateDisplayName display_name={display_name} />
          <UpdateEmail email={email} customer={customer} />
        </CardContent>
      </Card>
    </div>
  );
}
