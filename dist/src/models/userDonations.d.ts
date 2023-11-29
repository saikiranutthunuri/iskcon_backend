import { Model } from 'sequelize-typescript';
export interface userDonationsAttributes {
    id: string;
    tenantId?: string;
    donationId: string;
    userId: string;
    amount: number;
    currency: number;
    intheNameOf?: string;
    paymentMode: number;
    tokenId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
export declare class userDonations extends Model<userDonationsAttributes, userDonationsAttributes> implements userDonationsAttributes {
    id: string;
    tenantId?: string;
    donationId: string;
    userId: string;
    amount: number;
    currency: number;
    intheNameOf?: string;
    paymentMode: number;
    tokenId?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
