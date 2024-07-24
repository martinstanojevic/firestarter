export type NavItem = {
  title: string;
  link: string;
};

export type NavProps = {
  items: NavItem[];
};

export interface LayoutProps {
  children: React.ReactNode;
}

export type ServiceData = {
  title: string;
  active: boolean;
  description: string;
  duration: number; // Duration time of appointment in minutes
  buffer: number; // Buffer time after appointment in minutes
  price: number;
  loyaltyPrice?: number; // Price for loyalty customers
};

export interface Service extends ServiceData {
  id: string;
  createdAt: Date;
  deletedAt?: Date;
}

export interface CustomerData {
  firstName: string;
  lastName: string;
  active: boolean;
  email: string;
  phoneNumber: string;
}

interface DataItem {
  id: string;
  createdAt: Date;
  deletedAt?: Date;
}

export interface Customer extends DataItem, CustomerData {}

export interface EmployeeData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  color: string;
}

export interface Employee extends DataItem, EmployeeData {}

export type AppointmentData = {
  customer?: Customer;
  services: Service[];
  loyaltyPrice: boolean; // Is the loyalty price of services calculated
  busy: boolean; // true if the the time is blocked-out for the time slot
  start: Date;
  end: Date;
};

export interface Appointment extends AppointmentData {
  id: string;
  createdAt: Date;
}

export interface TimeObject {
  h: number;
  m: number;
}

export interface SelectOption {
  label: string;
  value: string | number | null;
}
