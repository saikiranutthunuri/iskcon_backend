import { Model } from 'sequelize-typescript';
export interface nonFunctionalDaysAttributes {
    id: string;
    tenantId?: string;
    occassionName: string;
    occassionDate: Date;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
export declare class nonFunctionalDays extends Model<nonFunctionalDaysAttributes, nonFunctionalDaysAttributes> implements nonFunctionalDaysAttributes {
    id: string;
    tenantId?: string;
    occassionName: string;
    occassionDate: Date;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
}
