import { promptFilters } from '../models/promptFilters';

export const promptFiltersProviders = [
  {
    provide: 'PROMPTFILTERS_REPOSITORY',
    useValue: promptFilters,
  },
];
