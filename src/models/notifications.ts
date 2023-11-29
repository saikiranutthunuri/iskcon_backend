import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface notificationsAttributes {
  id: string;
  handle: string;
  prompt?: string;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  tenantId?: string;
  promptFilterId?: string;
  promptSent?: number;
}

@Table({ tableName: 'Notifications', timestamps: false })
export class notifications
  extends Model<notificationsAttributes, notificationsAttributes>
  implements notificationsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'Handle', type: DataType.STRING })
  handle!: string;

  @Column({ field: 'Prompt', allowNull: true, type: DataType.STRING })
  prompt?: string;

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

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({
    field: 'PromptFilterId',
    type: DataType.CHAR(36),
    defaultValue: '00000000-0000-0000-0000-000000000000',
  })
  promptFilterId?: string;

  @Column({ field: 'PromptSent', allowNull: true, type: DataType.TINYINT })
  promptSent?: number;
}
