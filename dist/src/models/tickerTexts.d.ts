import { Model } from 'sequelize-typescript';
export interface tickerTextsAttributes {
    id: string;
    tenantId?: string;
    quotation: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    status?: number;
}
export declare class tickerTexts extends Model<tickerTextsAttributes, tickerTextsAttributes> implements tickerTextsAttributes {
    id: string;
    tenantId?: string;
    quotation: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    status?: number;
}
