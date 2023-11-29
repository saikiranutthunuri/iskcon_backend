import { Model } from 'sequelize-typescript';
export interface onboardedUsersAttributes {
    id: string;
    tenantId?: string;
    scheme?: string;
    reciptDate?: string;
    amount?: string;
    rno?: string;
    donorName?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pin?: string;
    concurrencyStamp: string;
    isOnboarded?: number;
    consentId: string;
    isConsentApproved?: number;
    otp?: string;
    randomPasskey?: string;
    did?: string;
}
export declare class onboardedUsers extends Model<onboardedUsersAttributes, onboardedUsersAttributes> implements onboardedUsersAttributes {
    id: string;
    tenantId?: string;
    scheme?: string;
    reciptDate?: string;
    amount?: string;
    rno?: string;
    donorName?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pin?: string;
    concurrencyStamp: string;
    isOnboarded?: number;
    consentId: string;
    isConsentApproved?: number;
    otp?: string;
    randomPasskey?: string;
    did?: string;
}
