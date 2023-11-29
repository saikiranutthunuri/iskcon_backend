import { userDetails } from '../models/userDetails';

export const userDetailsProviders = [
  {
    provide: 'USERDETAILS_REPOSITORY',
    useValue: userDetails,
  },
];
