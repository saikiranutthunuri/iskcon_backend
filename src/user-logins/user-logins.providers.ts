import { nestUserLogins } from '../models/nestUserLogins';
export const userLoginsProviders = [
  {
    provide: 'USERLOGINS_REPOSITORY',
    useValue: nestUserLogins,
  },
];
