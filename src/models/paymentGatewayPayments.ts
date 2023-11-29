import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface paymentGatewayPaymentsAttributes {
  id: string;
  tenantId?: string;
  pgPaymentId?: string;
  pgOrderId?: string;
  amount?: number;
  orderId: string;
  gateway: number;
  status: number;
  extraProperties?: string;
  concurrencyStamp?: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  isDeleted?: number;
  deleterId?: string;
  deletionTime?: Date;
}

@Table({ tableName: 'PaymentGatewayPayments', timestamps: false })
export class paymentGatewayPayments
  extends Model<
    paymentGatewayPaymentsAttributes,
    paymentGatewayPaymentsAttributes
  >
  implements paymentGatewayPaymentsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'PG_PaymentId', allowNull: true, type: DataType.STRING })
  pgPaymentId?: string;

  @Column({ field: 'PG_OrderId', allowNull: true, type: DataType.STRING })
  pgOrderId?: string;

  @Column({ field: 'Amount', type: DataType.DOUBLE(22), defaultValue: '0' })
  amount?: number;

  @Column({ field: 'OrderId', type: DataType.CHAR(36) })
  orderId!: string;

  @Column({ field: 'Gateway', type: DataType.INTEGER })
  gateway!: number;

  @Column({ field: 'Status', type: DataType.INTEGER })
  status!: number;

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
}
