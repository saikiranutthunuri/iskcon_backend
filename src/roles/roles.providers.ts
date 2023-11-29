import { nestRoles } from 'src/models';

export const nestRolesProviders = [
  {
    provide: 'ROLES_REPOSITORY',
    useValue: nestRoles,
  },
];