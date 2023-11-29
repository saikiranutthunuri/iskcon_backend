import { Model } from 'sequelize-typescript';
export interface nestUserRolesAttributes {
    userId: string;
    roleId: string;
    tenantId?: string;
}
export declare class nestUserRoles extends Model<nestUserRolesAttributes, nestUserRolesAttributes> implements nestUserRolesAttributes {
    userId: string;
    roleId: string;
    tenantId?: string;
}
