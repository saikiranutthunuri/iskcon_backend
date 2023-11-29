import { Model } from 'sequelize-typescript';
export interface userEventsAttributes {
    id: string;
    tenantId?: string;
    eventId: string;
    userId?: string;
    amount: number;
    currency: number;
    inTheNameOf?: string;
    paymentMode: number;
    tokenId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
export declare class userEvents extends Model<userEventsAttributes, userEventsAttributes> implements userEventsAttributes {
    id: string;
    tenantId?: string;
    eventId: string;
    userId?: string;
    amount: number;
    currency: number;
    inTheNameOf?: string;
    paymentMode: number;
    tokenId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
