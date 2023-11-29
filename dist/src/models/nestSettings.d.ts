import { Model } from 'sequelize-typescript';
export interface nestSettingsAttributes {
    id: string;
    name: string;
    value: string;
    providerName?: string;
    providerKey?: string;
}
export declare class nestSettings extends Model<nestSettingsAttributes, nestSettingsAttributes> implements nestSettingsAttributes {
    id: string;
    name: string;
    value: string;
    providerName?: string;
    providerKey?: string;
}
