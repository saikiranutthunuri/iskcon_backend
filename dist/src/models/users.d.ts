import { Model } from 'sequelize-typescript';
export interface usersAttributes {
    id: string;
    userName: string;
    name?: string;
    surname?: string;
    email: string;
    emailConfirmed?: number;
    passwordHash?: string;
    isExternal?: number;
    phoneNumber?: string;
    phoneNumberConfirmed?: number;
    isActive: number;
    twoFactorEnabled?: number;
    lockoutEnd?: Date;
    lockoutEnabled?: number;
    accessFailedCount?: number;
    shouldChangePasswordOnNextLogin: number;
    lastPasswordChangeTime?: Date;
    extraProperties?: string;
    concurrencyStamp?: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    isDeleted?: number;
    deleterId?: string;
    deletionTime?: Date;
    role?: string;
}
export declare class users extends Model<usersAttributes, usersAttributes> implements usersAttributes {
    id: string;
    userName: string;
    name?: string;
    surname?: string;
    email: string;
    emailConfirmed?: number;
    passwordHash?: string;
    isExternal?: number;
    phoneNumber?: string;
    phoneNumberConfirmed?: number;
    isActive: number;
    twoFactorEnabled?: number;
    lockoutEnd?: Date;
    lockoutEnabled?: number;
    accessFailedCount?: number;
    shouldChangePasswordOnNextLogin: number;
    lastPasswordChangeTime?: Date;
    extraProperties?: string;
    concurrencyStamp?: string;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    isDeleted?: number;
    deleterId?: string;
    deletionTime?: Date;
    role?: string;
}
