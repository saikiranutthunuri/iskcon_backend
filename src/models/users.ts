import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  AllowNull,
} from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';

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
  role?:string;
}

@Table({ tableName: 'Users', timestamps: false })
export class users
  extends Model<usersAttributes, usersAttributes>
  implements usersAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'UserName', type: DataType.STRING(256) })
  userName!: string;

  @Column({ field: 'Name', allowNull: true, type: DataType.STRING(64) })
  name?: string;

  @Column({ field: 'Surname', allowNull: true, type: DataType.STRING(64) })
  surname?: string;

  @Column({ field: 'Email', type: DataType.STRING(256) })
  email!: string;

  @Column({ field: 'EmailConfirmed', allowNull: true, type: DataType.TINYINT })
  emailConfirmed?: number;

  @Column({
    field: 'PasswordHash',
    allowNull: true,
    type: DataType.STRING(256),
  })
  passwordHash?: string;

  @Column({ field: 'IsExternal', allowNull: true, type: DataType.TINYINT })
  isExternal?: number;

  @Column({ field: 'PhoneNumber', allowNull: true, type: DataType.STRING(16) })
  phoneNumber?: string;

  @Column({
    field: 'PhoneNumberConfirmed',
    allowNull: true,
    type: DataType.TINYINT,
  })
  phoneNumberConfirmed?: number;

  @Column({ field: 'IsActive', type: DataType.TINYINT })
  isActive!: number;

  @Column({
    field: 'TwoFactorEnabled',
    allowNull: true,
    type: DataType.TINYINT,
  })
  twoFactorEnabled?: number;

  @Column({ field: 'LockoutEnd', allowNull: true, type: DataType.DATE(6) })
  lockoutEnd?: Date;

  @Column({ field: 'LockoutEnabled', allowNull: true, type: DataType.TINYINT })
  lockoutEnabled?: number;

  @Column({
    field: 'AccessFailedCount',
    type: DataType.INTEGER,
    defaultValue: '0',
  })
  accessFailedCount?: number;

  @Column({ field: 'ShouldChangePasswordOnNextLogin', type: DataType.TINYINT })
  shouldChangePasswordOnNextLogin!: number;

  @Column({
    field: 'LastPasswordChangeTime',
    allowNull: true,
    type: DataType.DATE(6),
  })
  lastPasswordChangeTime?: Date;

  @Column({ field: 'ExtraProperties', allowNull: true, type: DataType.STRING })
  extraProperties?: string;

  @Column({
    field: 'ConcurrencyStamp',
    allowNull: true,
    type: DataType.STRING(40),
  })
  concurrencyStamp?: string;

  @Column({ field: 'CreationTime', type: DataType.DATE(6) })
  creationTime!: Date;

  @Column({ field: 'CreatorId', allowNull: true, type: DataType.CHAR(36) })
  creatorId?: string;

  @Column({
    field: 'LastModificationTime',
    allowNull: true,
    type: DataType.DATE(6),
  })
  lastModificationTime?: Date;

  @Column({ field: 'LastModifierId', allowNull: true, type: DataType.CHAR(36) })
  lastModifierId?: string;

  @Column({ field: 'IsDeleted', allowNull: true, type: DataType.TINYINT })
  isDeleted?: number;

  @Column({ field: 'DeleterId', allowNull: true, type: DataType.CHAR(36) })
  deleterId?: string;

  @Column({ field: 'DeletionTime', allowNull: true, type: DataType.DATE(6) })
  deletionTime?: Date;

  @Column({field: 'Role',allowNull: true, type: DataType.CHAR(255)})
  role?:string;
}
