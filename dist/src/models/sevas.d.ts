import { Model } from 'sequelize-typescript';
export interface sevasAttributes {
    id: string;
    tenantId?: string;
    name: string;
    description?: string;
    sevaImage?: Uint8Array;
    sevaImageBanner?: Uint8Array;
    type: number;
    minAmount?: number;
    amountType: number;
    startDate?: Date;
    endDate?: Date;
    allowedCurrency: number;
    maxUsers: number;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    actionType?: number;
}
export declare class sevas extends Model<sevasAttributes, sevasAttributes> implements sevasAttributes {
    id: string;
    tenantId?: string;
    name: string;
    description?: string;
    sevaImage?: Uint8Array;
    sevaImageBanner?: Uint8Array;
    type: number;
    minAmount?: number;
    amountType: number;
    startDate?: Date;
    endDate?: Date;
    allowedCurrency: number;
    maxUsers: number;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    actionType?: number;
}
