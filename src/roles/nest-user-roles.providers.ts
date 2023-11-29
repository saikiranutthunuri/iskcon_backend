import { nestUserRoles } from 'src/models';

export const nestRolesProviders = [
  {
    provide: 'USERROLES_REPOSITORY',
    useValue: nestUserRoles,
  },
];