import { Model } from 'sequelize-typescript';
export interface notificationsAttributes {
    id: string;
    handle: string;
    prompt?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    tenantId?: string;
    promptFilterId?: string;
    promptSent?: number;
}
export declare class notifications extends Model<notificationsAttributes, notificationsAttributes> implements notificationsAttributes {
    id: string;
    handle: string;
    prompt?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    tenantId?: string;
    promptFilterId?: string;
    promptSent?: number;
}
