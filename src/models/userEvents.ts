import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface userEventsAttributes {
  id: string;
  tenantId?: string;
  eventId: string;
  userId?: string;
  amount: number;
  currency: number;
  inTheNameOf?: string;
  paymentMode: number;
  tokenId?: string;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
}

@Table({ tableName: 'UserEvents', timestamps: false })
export class userEvents
  extends Model<userEventsAttributes, userEventsAttributes>
  implements userEventsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'EventID', type: DataType.CHAR(36) })
  eventId!: string;

  @Column({
    field: 'UserId',
    type: DataType.CHAR(36),
    defaultValue: '00000000-0000-0000-0000-000000000000',
  })
  userId?: string;

  @Column({ field: 'Amount', type: DataType.DOUBLE(22) })
  amount!: number;

  @Column({ field: 'Currency', type: DataType.INTEGER })
  currency!: number;

  @Column({ field: 'InTheNameOf', allowNull: true, type: DataType.STRING })
  inTheNameOf?: string;

  @Column({ field: 'PaymentMode', type: DataType.INTEGER })
  paymentMode!: number;

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
}
