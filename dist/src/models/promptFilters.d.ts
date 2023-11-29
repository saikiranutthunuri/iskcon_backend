import { Model } from 'sequelize-typescript';
export interface promptFiltersAttributes {
    id: string;
    tenantId?: string;
    name: string;
    type?: number;
    fromDate?: Date;
    toDate?: Date;
    minimumAmount?: number;
    maximumAmount?: number;
    locationState?: string;
    locationCity?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    locationCountry?: string;
    amountAll?: number;
    dateAll?: number;
    locationAll?: number;
}
export declare class promptFilters extends Model<promptFiltersAttributes, promptFiltersAttributes> implements promptFiltersAttributes {
    id: string;
    tenantId?: string;
    name: string;
    type?: number;
    fromDate?: Date;
    toDate?: Date;
    minimumAmount?: number;
    maximumAmount?: number;
    locationState?: string;
    locationCity?: string;
    concurrencyStamp: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    locationCountry?: string;
    amountAll?: number;
    dateAll?: number;
    locationAll?: number;
}
