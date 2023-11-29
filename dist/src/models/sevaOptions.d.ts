import { Model } from 'sequelize-typescript';
export interface sevaOptionsAttributes {
    id: string;
    tenantId?: string;
    name: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    type?: number;
}
export declare class sevaOptions extends Model<sevaOptionsAttributes, sevaOptionsAttributes> implements sevaOptionsAttributes {
    id: string;
    tenantId?: string;
    name: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    type?: number;
}
