import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface spotLightEventsAttributes {
  id: string;
  tenantId?: string;
  name: string;
  description?: string;
  eventImage?: Uint8Array;
  bannerImage?: Uint8Array;
  minAmount: number;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  allowedCurrency?: number;
  amountType?: number;
  endDate?: Date;
  eventDate?: Date;
  startDate?: Date;
  actionType?: number;
}

@Table({ tableName: 'SpotLightEvents', timestamps: false })
export class spotLightEvents
  extends Model<spotLightEventsAttributes, spotLightEventsAttributes>
  implements spotLightEventsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Name', type: DataType.STRING })
  name!: string;

  @Column({ field: 'Description', allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'EventImage', allowNull: true, type: DataType.BLOB })
  eventImage?: Uint8Array;

  @Column({ field: 'BannerImage', allowNull: true, type: DataType.BLOB })
  bannerImage?: Uint8Array;

  @Column({ field: 'MinAmount', type: DataType.DOUBLE(22) })
  minAmount!: number;

  @Column({ field: 'ConcurrencyStamp', type: DataType.STRING(40) })
  concurrencyStamp!: string;

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

  @Column({
    field: 'AllowedCurrency',
    type: DataType.INTEGER,
    defaultValue: '0',
  })
  allowedCurrency?: number;

  @Column({ field: 'AmountType', type: DataType.INTEGER, defaultValue: '0' })
  amountType?: number;

  @Column({ field: 'EndDate', allowNull: true, type: DataType.DATE(6) })
  endDate?: Date;

  @Column({ field: 'EventDate', allowNull: true, type: DataType.DATE(6) })
  eventDate?: Date;

  @Column({ field: 'StartDate', allowNull: true, type: DataType.DATE(6) })
  startDate?: Date;

  @Column({ field: 'ActionType', type: DataType.INTEGER, defaultValue: '0' })
  actionType?: number;
}
