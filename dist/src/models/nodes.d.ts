import { Model } from 'sequelize-typescript';
export interface nodesAttributes {
    id: string;
    tenantId?: string;
    name?: string;
    endPoint?: string;
    masterDid?: string;
    balance?: string;
    status: number;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    type?: number;
    peerId?: string;
    serverCertificate?: Uint8Array;
    validateSsl?: number;
}
export declare class nodes extends Model<nodesAttributes, nodesAttributes> implements nodesAttributes {
    id: string;
    tenantId?: string;
    name?: string;
    endPoint?: string;
    masterDid?: string;
    balance?: string;
    status: number;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    type?: number;
    peerId?: string;
    serverCertificate?: Uint8Array;
    validateSsl?: number;
}
