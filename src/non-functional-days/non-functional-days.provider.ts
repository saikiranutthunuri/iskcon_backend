import { nonFunctionalDays } from '../models/nonFunctionalDays';

export const nonFunctionalDaysProviders = [
  {
    provide: 'NONFUNCTIONALDAYS_REPOSITORY',
    useValue: nonFunctionalDays,
  },
];
