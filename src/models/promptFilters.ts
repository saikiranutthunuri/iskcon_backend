import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface promptFiltersAttributes {
  id: string;
  tenantId?: string;
  name: string;
  type?: number;
  fromDate?: Date;
  toDate?: Date;
  minimumAmount?: number;
  maximumAmount?: number;
  locationState?: string;
  locationCity?: string;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  locationCountry?: string;
  amountAll?: number;
  dateAll?: number;
  locationAll?: number;
}

@Table({ tableName: 'PromptFilters', timestamps: false })
export class promptFilters
  extends Model<promptFiltersAttributes, promptFiltersAttributes>
  implements promptFiltersAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Name', type: DataType.STRING })
  name!: string;

  @Column({ field: 'Type', allowNull: true, type: DataType.INTEGER })
  type?: number;

  @Column({ field: 'FromDate', allowNull: true, type: DataType.DATE(6) })
  fromDate?: Date;

  @Column({ field: 'ToDate', allowNull: true, type: DataType.DATE(6) })
  toDate?: Date;

  @Column({
    field: 'MinimumAmount',
    allowNull: true,
    type: DataType.DOUBLE(22),
  })
  minimumAmount?: number;

  @Column({
    field: 'MaximumAmount',
    allowNull: true,
    type: DataType.DOUBLE(22),
  })
  maximumAmount?: number;

  @Column({ field: 'LocationState', allowNull: true, type: DataType.STRING })
  locationState?: string;

  @Column({ field: 'LocationCity', allowNull: true, type: DataType.STRING })
  locationCity?: string;

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

  @Column({ field: 'LocationCountry', allowNull: true, type: DataType.STRING })
  locationCountry?: string;

  @Column({ field: 'AmountAll', allowNull: true, type: DataType.TINYINT })
  amountAll?: number;

  @Column({ field: 'DateAll', allowNull: true, type: DataType.TINYINT })
  dateAll?: number;

  @Column({ field: 'LocationAll', allowNull: true, type: DataType.TINYINT })
  locationAll?: number;
}
