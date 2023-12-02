import { Model } from 'sequelize-typescript';
export interface calenderEventsAttributes {
    id: string;
    tenantId?: string;
    name?: string;
    description?: string;
    eventImage?: Uint8Array;
    bannerImage?: Uint8Array;
    date?: Date;
    hasDonation?: string;
    hasSeva?: string;
    donationId?: string;
    sevaId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    eventId?: string;
    hasEvent?: string;
    hasSpotlight?: string;
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
    hasDonation?: string;
    hasSeva?: string;
    donationId?: string;
    sevaId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    eventId?: string;
    hasEvent?: string;
    hasSpotlight?: string;
    spotlightId?: string;
}
