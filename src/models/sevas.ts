import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface sevasAttributes {
  id: string;
  tenantId?: string;
  name: string;
  description?: string;
  sevaImage?: Uint8Array;
  sevaImageBanner?: Uint8Array;
  type: number;
  minAmount?: number;
  amountType: number;
  startDate?: Date;
  endDate?: Date;
  allowedCurrency: number;
  maxUsers: number;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  actionType?: number;
  
}

@Table({ tableName: 'Sevas', timestamps: false })
export class sevas
  extends Model<sevasAttributes, sevasAttributes>
  implements sevasAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Name', type: DataType.STRING })
  name!: string;

  @Column({ field: 'Description', allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'SevaImage', allowNull: true, type: DataType.BLOB })
  sevaImage?: Uint8Array;

  @Column({ field: 'SevaImageBanner', allowNull: true, type: DataType.BLOB })
  sevaImageBanner?: Uint8Array;

  @Column({ field: 'Type', type: DataType.INTEGER })
  type!: number;

  @Column({ field: 'MinAmount', allowNull: true, type: DataType.DOUBLE(22) })
  minAmount?: number;

  @Column({ field: 'AmountType', type: DataType.INTEGER, defaultValue: 0 }) // or any other default value
  amountType!: number;

  @Column({ field: 'StartDate', allowNull: true, type: DataType.DATE(6) })
  startDate?: Date;

  @Column({ field: 'EndDate', allowNull: true, type: DataType.DATE(6) })
  endDate?: Date;

  @Column({ field: 'AllowedCurrency', type: DataType.INTEGER , defaultValue: 0 })
  allowedCurrency!: number;

  @Column({ field: 'MaxUsers', type: DataType.BIGINT , defaultValue: 6})
  maxUsers!: number;

  @Column({ field: 'CreationTime', type: DataType.DATE(6), defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(6)') })
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

  @Column({ field: 'ActionType', type: DataType.INTEGER, defaultValue: '0' })
  actionType?: number;
}
