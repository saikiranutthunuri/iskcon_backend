import { Model } from 'sequelize-typescript';
export interface spotLightEventsAttributes {
    id: string;
    tenantId?: string;
    name: string;
    description?: string;
    eventImage?: Uint8Array;
    bannerImage?: Uint8Array;
    minAmount: number;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    allowedCurrency?: number;
    amountType?: number;
    endDate?: Date;
    eventDate?: Date;
    startDate?: Date;
    actionType?: number;
}
export declare class spotLightEvents extends Model<spotLightEventsAttributes, spotLightEventsAttributes> implements spotLightEventsAttributes {
    id: string;
    tenantId?: string;
    name: string;
    description?: string;
    eventImage?: Uint8Array;
    bannerImage?: Uint8Array;
    minAmount: number;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    allowedCurrency?: number;
    amountType?: number;
    endDate?: Date;
    eventDate?: Date;
    startDate?: Date;
    actionType?: number;
}
