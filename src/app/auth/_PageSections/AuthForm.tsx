'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { googleLogin } from '@/lib/services';
import { useAuth } from '@/lib/hooks';
import { appRoutes } from '@/lib/config';
import { EmailFormSchema, EmailFormValues } from '@/lib/types/validations';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/Form';
import { Input } from '@/components/ui/Input';
import { Icons } from '@/components/Icons';

interface AuthFormPropsI {
  submitText: string;
}

export default function AuthForm({ submitText }: AuthFormPropsI) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      router.push(appRoutes.home.link);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: ''
    }
  });

  const {
    register,
    formState: { isSubmitting }
  } = form;

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const onSubmit = async (values: EmailFormValues) => {
    // const props: EmailFormValues = { email: values.email };
    // await Login(props);
    // router.push(config.redirects.authConfirm);
  };

  const handleGoogleSignIn = async () => {
    await googleLogin();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...register('email')}
                    type="text"
                    placeholder="Email"
                    className="bg-background-light dark:bg-background-dark"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div>
            <Button disabled={isSubmitting} className="w-full">
              {isSubmitting && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
              <Icons.Mail className="mr-2 h-4 w-4" />
              {submitText}
            </Button>
          </div>
        </form>
      </Form>

      <div className="space-y-8 mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
          <Icons.Google />
          <span className="ml-2 font-semibold">Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}
