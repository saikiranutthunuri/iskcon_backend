import { nestSecurityLogs } from 'src/models';
export declare const userSecurityLogsProviders: {
    provide: string;
    useValue: typeof nestSecurityLogs;
}[];
