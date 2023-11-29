import { Model } from 'sequelize-typescript';
export interface preOfflineOrdersAttributes {
    id: string;
    tenantId?: string;
    scheme?: string;
    category?: string;
    reciptDate: Date;
    amount: string;
    phone?: string;
    donor?: string;
    email?: string;
    address?: string;
    mode?: string;
    city?: string;
    state?: string;
    pin?: string;
    concurrencyStamp: string;
    rno?: string;
    isDataTokenCreated?: number;
}
export declare class preOfflineOrders extends Model<preOfflineOrdersAttributes, preOfflineOrdersAttributes> implements preOfflineOrdersAttributes {
    id: string;
    tenantId?: string;
    scheme?: string;
    category?: string;
    reciptDate: Date;
    amount: string;
    phone?: string;
    donor?: string;
    email?: string;
    address?: string;
    mode?: string;
    city?: string;
    state?: string;
    pin?: string;
    concurrencyStamp: string;
    rno?: string;
    isDataTokenCreated?: number;
}
