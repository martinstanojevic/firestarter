import { redirect } from 'next/navigation';

import { appRoutes } from '@/lib/config';

export async function GET() {
  redirect(appRoutes.home.link);
}
