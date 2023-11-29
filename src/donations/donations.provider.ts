import { donations } from '../models/donations';

export const donationsProviders = [
  {
    provide: 'DONATIONS_REPOSITORY',
    useValue: donations,
  },
];
