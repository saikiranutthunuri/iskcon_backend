import { Model } from 'sequelize-typescript';
export interface nestRolesAttributes {
    id: string;
    tenantId?: string;
    name: string;
    normalizedName: string;
    isDefault: number;
    isStatic: number;
    isPublic: number;
    entityVersion: number;
    extraProperties?: string;
    concurrencyStamp?: string;
}
export declare class nestRoles extends Model<nestRolesAttributes, nestRolesAttributes> implements nestRolesAttributes {
    id: string;
    tenantId?: string;
    name: string;
    normalizedName: string;
    isDefault: number;
    isStatic: number;
    isPublic: number;
    entityVersion: number;
    extraProperties?: string;
    concurrencyStamp?: string;
}
