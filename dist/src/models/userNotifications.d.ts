import { Model } from 'sequelize-typescript';
export interface userNotificationsAttributes {
    id: string;
    tenantId?: string;
    promptId: string;
    userId: string;
    messageStatus: number;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
export declare class userNotifications extends Model<userNotificationsAttributes, userNotificationsAttributes> implements userNotificationsAttributes {
    id: string;
    tenantId?: string;
    promptId: string;
    userId: string;
    messageStatus: number;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
