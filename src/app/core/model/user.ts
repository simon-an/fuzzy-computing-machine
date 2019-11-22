import { Administrator } from './administrator';
import { Customer } from './customer';

export type User = Administrator | Customer;

export const UserTypeGuard = {
  Customer: (user: User): user is Customer => {
    return user.role === 'Customer';
  },
  Administrator: (user: User): user is Administrator => {
    return user.role === 'Administrator';
  },
};
