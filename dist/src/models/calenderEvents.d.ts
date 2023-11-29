import { Model } from 'sequelize-typescript';
export interface calenderEventsAttributes {
    id: string;
    tenantId?: string;
    name?: string;
    description?: string;
    eventImage?: Uint8Array;
    bannerImage?: Uint8Array;
    date?: Date;
    hasDonation?: number;
    hasSeva?: number;
    donationId?: string;
    sevaId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    eventId?: string;
    hasEvent?: number;
    hasSpotlight?: number;
    spotlightId?: string;
}
export declare class calenderEvents extends Model<calenderEventsAttributes, calenderEventsAttributes> implements calenderEventsAttributes {
    id: string;
    tenantId?: string;
    name?: string;
    description?: string;
    eventImage?: Uint8Array;
    bannerImage?: Uint8Array;
    date?: Date;
    hasDonation?: number;
    hasSeva?: number;
    donationId?: string;
    sevaId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    eventId?: string;
    hasEvent?: number;
    hasSpotlight?: number;
    spotlightId?: string;
}
