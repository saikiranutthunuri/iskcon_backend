import { nestUserLogins } from '../models/nestUserLogins';
export declare const userLoginsProviders: {
    provide: string;
    useValue: typeof nestUserLogins;
}[];
