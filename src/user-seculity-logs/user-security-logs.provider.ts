import { nestSecurityLogs } from 'src/models';

export const userSecurityLogsProviders = [
  {
    provide: 'NESTSECURITYLOGS_REPOSITORY',
    useValue: nestSecurityLogs,
  },
];
