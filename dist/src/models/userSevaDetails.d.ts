import { Model } from 'sequelize-typescript';
export interface userSevaDetailsAttributes {
    id: string;
    tenantId?: string;
    userSevaId: string;
    firstName?: string;
    lastName?: string;
    gothra?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
export declare class userSevaDetails extends Model<userSevaDetailsAttributes, userSevaDetailsAttributes> implements userSevaDetailsAttributes {
    id: string;
    tenantId?: string;
    userSevaId: string;
    firstName?: string;
    lastName?: string;
    gothra?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
