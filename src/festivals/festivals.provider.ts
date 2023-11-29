import { Festivals } from 'src/models/festivals'; // Make sure the path is correct

export const festivalsProviders = [
  {
    provide: 'FESTIVALS_REPOSITORY',
    useValue: Festivals,
  },
];
