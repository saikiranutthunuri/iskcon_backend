import { userDids } from '../models/userDids';

export const userDidsProviders = [
  {
    provide: 'USERDIDS_REPOSITORY',
    useValue: userDids,
  },
];
