/// <reference types="node" />
import { Model } from 'sequelize-typescript';
export interface FestivalAttributes {
    id: string;
    title: string;
    file: Buffer;
    startDate: Date;
    endDate: Date;
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
export declare class Festivals extends Model<FestivalAttributes> implements FestivalAttributes {
    id: string;
    title: string;
    file: Buffer;
    startDate: Date;
    endDate: Date;
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
