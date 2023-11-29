import { Model } from 'sequelize-typescript';
export interface userDetailsAttributes {
    id: string;
    tenantId?: string;
    birthDay?: Date;
    isVolunter: number;
    city?: string;
    address?: string;
    state?: string;
    country?: string;
    pincode?: string;
    userId: string;
    gender?: number;
}
export declare class userDetails extends Model<userDetailsAttributes, userDetailsAttributes> implements userDetailsAttributes {
    id: string;
    tenantId?: string;
    birthDay?: Date;
    isVolunter: number;
    city?: string;
    address?: string;
    state?: string;
    country?: string;
    pincode?: string;
    userId: string;
    gender?: number;
}
