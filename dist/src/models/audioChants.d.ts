import { Model } from 'sequelize-typescript';
export interface audioChantsAttributes {
    id: string;
    tenantId?: string;
    audio?: Uint8Array;
    link?: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
export declare class audioChants extends Model<audioChantsAttributes, audioChantsAttributes> implements audioChantsAttributes {
    id: string;
    tenantId?: string;
    audio?: Uint8Array;
    link?: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
