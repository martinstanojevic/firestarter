import { Icons } from '@/components/Icons';

export const appRoutes = {
  home: { title: 'Home', link: '/app/home', icon: Icons.Home },
  customers: { title: 'Customers', link: '/app/customers', icon: Icons.Users },
  employees: { title: 'Employees', link: '/app/employees', icon: Icons.Employees }
};

export const subroutes = {
  todos: [
    { title: 'Create', link: '/app/todos/create' },
    { title: 'My Todos', link: '/app/todos/my-todos' },
    { title: 'All Todos', link: '/app/todos/list-todos' }
  ],
  settings: [
    { title: 'Profile', link: '/app/settings/profile' },
    { title: 'Billing', link: '/app/settings/billing' },
    { title: 'Subscription', link: '/app/settings/subscription' }
  ]
};
