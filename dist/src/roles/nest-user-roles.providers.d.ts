import { nestUserRoles } from 'src/models';
export declare const nestRolesProviders: {
    provide: string;
    useValue: typeof nestUserRoles;
}[];
