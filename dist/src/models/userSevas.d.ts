import { Model } from 'sequelize-typescript';
export interface userSevasAttributes {
    id: string;
    tenantId?: string;
    sevaId: string;
    userId: string;
    amount: number;
    currency: number;
    onOccassionOf?: string;
    paymentmode: number;
    tokenId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    sevaOptionId?: string;
    sevaOptionType?: number;
    archanaDate?: Date;
}
export declare class userSevas extends Model<userSevasAttributes, userSevasAttributes> implements userSevasAttributes {
    id: string;
    tenantId?: string;
    sevaId: string;
    userId: string;
    amount: number;
    currency: number;
    onOccassionOf?: string;
    paymentmode: number;
    tokenId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    sevaOptionId?: string;
    sevaOptionType?: number;
    archanaDate?: Date;
}
