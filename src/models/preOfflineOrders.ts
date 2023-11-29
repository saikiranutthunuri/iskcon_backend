import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface preOfflineOrdersAttributes {
  id: string;
  tenantId?: string;
  scheme?: string;
  category?: string;
  reciptDate: Date;
  amount: string;
  phone?: string;
  donor?: string;
  email?: string;
  address?: string;
  mode?: string;
  city?: string;
  state?: string;
  pin?: string;
  concurrencyStamp: string;
  rno?: string;
  isDataTokenCreated?: number;
}

@Table({ tableName: 'PreOfflineOrders', timestamps: false })
export class preOfflineOrders
  extends Model<preOfflineOrdersAttributes, preOfflineOrdersAttributes>
  implements preOfflineOrdersAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Scheme', allowNull: true, type: DataType.STRING })
  scheme?: string;

  @Column({ field: 'Category', allowNull: true, type: DataType.STRING })
  category?: string;

  @Column({ field: 'ReciptDate', type: DataType.DATE(6) })
  reciptDate!: Date;

  @Column({ field: 'Amount', type: DataType.DECIMAL(18, 2) })
  amount!: string;

  @Column({ field: 'Phone', allowNull: true, type: DataType.STRING })
  phone?: string;

  @Column({ field: 'Donor', allowNull: true, type: DataType.STRING })
  donor?: string;

  @Column({ field: 'Email', allowNull: true, type: DataType.STRING })
  email?: string;

  @Column({ field: 'Address', allowNull: true, type: DataType.STRING })
  address?: string;

  @Column({ field: 'Mode', allowNull: true, type: DataType.STRING })
  mode?: string;

  @Column({ field: 'City', allowNull: true, type: DataType.STRING })
  city?: string;

  @Column({ field: 'State', allowNull: true, type: DataType.STRING })
  state?: string;

  @Column({ field: 'Pin', allowNull: true, type: DataType.STRING })
  pin?: string;

  @Column({ field: 'ConcurrencyStamp', type: DataType.STRING(40) })
  concurrencyStamp!: string;

  @Column({ field: 'Rno', allowNull: true, type: DataType.STRING })
  rno?: string;

  @Column({
    field: 'IsDataTokenCreated',
    allowNull: true,
    type: DataType.TINYINT,
  })
  isDataTokenCreated?: number;
}
