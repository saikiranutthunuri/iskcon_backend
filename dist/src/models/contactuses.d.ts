import { Model } from 'sequelize-typescript';
export interface contactusesAttributes {
    id: string;
    tenantId?: string;
    message: string;
    fromId: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    fromName?: string;
}
export declare class contactuses extends Model<contactusesAttributes, contactusesAttributes> implements contactusesAttributes {
    id: string;
    tenantId?: string;
    message: string;
    fromId: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    fromName?: string;
}
