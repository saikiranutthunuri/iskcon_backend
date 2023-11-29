import { Model } from 'sequelize-typescript';
export interface paymentGatewayPaymentsAttributes {
    id: string;
    tenantId?: string;
    pgPaymentId?: string;
    pgOrderId?: string;
    amount?: number;
    orderId: string;
    gateway: number;
    status: number;
    extraProperties?: string;
    concurrencyStamp?: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    isDeleted?: number;
    deleterId?: string;
    deletionTime?: Date;
}
export declare class paymentGatewayPayments extends Model<paymentGatewayPaymentsAttributes, paymentGatewayPaymentsAttributes> implements paymentGatewayPaymentsAttributes {
    id: string;
    tenantId?: string;
    pgPaymentId?: string;
    pgOrderId?: string;
    amount?: number;
    orderId: string;
    gateway: number;
    status: number;
    extraProperties?: string;
    concurrencyStamp?: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    isDeleted?: number;
    deleterId?: string;
    deletionTime?: Date;
}
