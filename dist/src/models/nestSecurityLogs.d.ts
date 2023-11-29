import { Model } from 'sequelize-typescript';
export interface nestSecurityLogsAttributes {
    id: string;
    tenantId?: string;
    applicationName?: string;
    identity?: string;
    action?: string;
    userId?: string;
    userName?: string;
    tenantName?: string;
    clientId?: string;
    correlationId?: string;
    clientIpAddress?: string;
    browserInfo?: string;
    creationTime: Date;
    extraProperties?: string;
    concurrencyStamp?: string;
}
export declare class nestSecurityLogs extends Model<nestSecurityLogsAttributes, nestSecurityLogsAttributes> implements nestSecurityLogsAttributes {
    id: string;
    tenantId?: string;
    applicationName?: string;
    identity?: string;
    action?: string;
    userId?: string;
    userName?: string;
    tenantName?: string;
    clientId?: string;
    correlationId?: string;
    clientIpAddress?: string;
    browserInfo?: string;
    creationTime: Date;
    extraProperties?: string;
    concurrencyStamp?: string;
}
