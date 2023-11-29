import { nestUserRoles, sevas } from 'src/models';

export const sevasProviders = [
  {
    provide: 'SEVAS_REPOSITORY',
    useValue: sevas,
  },
];