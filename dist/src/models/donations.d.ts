import { Model } from 'sequelize-typescript';
export interface donationsAttributes {
    id: string;
    tenantId?: string;
    name: string;
    description?: string;
    donationImage?: Uint8Array;
    donationImageBanner?: Uint8Array;
    type: number;
    minAmount: number;
    amountType: number;
    targetAmount?: number;
    impact: number;
    startDate?: Date;
    endDate?: Date;
    allowedCurrency: number;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    actionType?: number;
    imageLink?: string;
}
export declare class donations extends Model<donationsAttributes, donationsAttributes> implements donationsAttributes {
    id: string;
    tenantId?: string;
    name: string;
    description?: string;
    donationImage?: Uint8Array;
    donationImageBanner?: Uint8Array;
    type: number;
    minAmount: number;
    amountType: number;
    targetAmount?: number;
    impact: number;
    startDate?: Date;
    endDate?: Date;
    allowedCurrency: number;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    actionType?: number;
    imageLink?: string;
}
