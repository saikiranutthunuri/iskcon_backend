import { Model } from 'sequelize-typescript';
export interface userDidsAttributes {
    id: string;
    tenantId?: string;
    did: string;
    pvtKey?: string;
    shares?: string;
    peerId?: string;
    nodeId: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    type?: number;
    userId?: string;
}
export declare class userDids extends Model<userDidsAttributes, userDidsAttributes> implements userDidsAttributes {
    id: string;
    tenantId?: string;
    did: string;
    pvtKey?: string;
    shares?: string;
    peerId?: string;
    nodeId: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    type?: number;
    userId?: string;
}
