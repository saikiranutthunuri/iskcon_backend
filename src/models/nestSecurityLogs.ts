import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface nestSecurityLogsAttributes {
  id: string;
  tenantId?: string;
  applicationName?: string;
  identity?: string;
  action?: string;
  userId?: string;
  userName?: string;
  tenantName?: string;
  clientId?: string;
  correlationId?: string;
  clientIpAddress?: string;
  browserInfo?: string;
  creationTime: Date;
  extraProperties?: string;
  concurrencyStamp?: string;
}

@Table({ tableName: 'NestSecurityLogs', timestamps: false })
export class nestSecurityLogs
  extends Model<nestSecurityLogsAttributes, nestSecurityLogsAttributes>
  implements nestSecurityLogsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({
    field: 'ApplicationName',
    allowNull: true,
    type: DataType.STRING(96),
  })
  applicationName?: string;

  @Column({ field: 'Identity', allowNull: true, type: DataType.STRING(96) })
  identity?: string;

  @Column({ field: 'Action', allowNull: true, type: DataType.STRING(96) })
  action?: string;

  @Column({ field: 'UserId', allowNull: true, type: DataType.CHAR(36) })
  userId?: string;

  @Column({ field: 'UserName', allowNull: true, type: DataType.STRING(256) })
  userName?: string;

  @Column({ field: 'TenantName', allowNull: true, type: DataType.STRING(64) })
  tenantName?: string;

  @Column({ field: 'ClientId', allowNull: true, type: DataType.STRING(64) })
  clientId?: string;

  @Column({
    field: 'CorrelationId',
    allowNull: true,
    type: DataType.STRING(64),
  })
  correlationId?: string;

  @Column({
    field: 'ClientIpAddress',
    allowNull: true,
    type: DataType.STRING(64),
  })
  clientIpAddress?: string;

  @Column({ field: 'BrowserInfo', allowNull: true, type: DataType.STRING(512) })
  browserInfo?: string;

  @Column({ field: 'CreationTime', type: DataType.DATE(6) })
  creationTime!: Date;

  @Column({ field: 'ExtraProperties', allowNull: true, type: DataType.STRING })
  extraProperties?: string;

  @Column({
    field: 'ConcurrencyStamp',
    allowNull: true,
    type: DataType.STRING(40),
  })
  concurrencyStamp?: string;
}
