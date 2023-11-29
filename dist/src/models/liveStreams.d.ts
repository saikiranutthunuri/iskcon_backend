import { Model } from 'sequelize-typescript';
export interface liveStreamsAttributes {
    id: string;
    tenantId?: string;
    link: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
export declare class liveStreams extends Model<liveStreamsAttributes, liveStreamsAttributes> implements liveStreamsAttributes {
    id: string;
    tenantId?: string;
    link: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
