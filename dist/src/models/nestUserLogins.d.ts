import { Model } from 'sequelize-typescript';
export interface nestUserLoginsAttributes {
    userId: string;
    loginProvider: string;
    tenantId?: string;
    providerKey: string;
    providerDisplayName?: string;
}
export declare class nestUserLogins extends Model<nestUserLoginsAttributes, nestUserLoginsAttributes> implements nestUserLoginsAttributes {
    userId: string;
    loginProvider: string;
    tenantId?: string;
    providerKey: string;
    providerDisplayName?: string;
}
