import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface userSevasAttributes {
  id: string;
  tenantId?: string;
  sevaId: string;
  userId: string;
  amount: number;
  currency: number;
  onOccassionOf?: string;
  paymentmode: number;
  tokenId?: string;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  sevaOptionId?: string;
  sevaOptionType?: number;
  archanaDate?: Date;
}

@Table({ tableName: 'UserSevas', timestamps: false })
export class userSevas
  extends Model<userSevasAttributes, userSevasAttributes>
  implements userSevasAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'SevaId', type: DataType.CHAR(36) })
  sevaId!: string;

  @Column({ field: 'UserId', type: DataType.CHAR(36) })
  userId!: string;

  @Column({ field: 'Amount', type: DataType.DOUBLE(22) })
  amount!: number;

  @Column({ field: 'Currency', type: DataType.INTEGER })
  currency!: number;

  @Column({ field: 'OnOccassionOf', allowNull: true, type: DataType.STRING })
  onOccassionOf?: string;

  @Column({ field: 'Paymentmode', type: DataType.INTEGER })
  paymentmode!: number;

  @Column({ field: 'TokenId', allowNull: true, type: DataType.STRING })
  tokenId?: string;

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

  @Column({ field: 'SevaOptionId', allowNull: true, type: DataType.CHAR(36) })
  sevaOptionId?: string;

  @Column({
    field: 'SevaOptionType',
    type: DataType.INTEGER,
    defaultValue: '0',
  })
  sevaOptionType?: number;

  @Column({ field: 'ArchanaDate', allowNull: true, type: DataType.DATE(6) })
  archanaDate?: Date;
}
