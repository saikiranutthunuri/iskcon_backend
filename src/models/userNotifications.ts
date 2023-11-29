import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface userNotificationsAttributes {
  id: string;
  tenantId?: string;
  promptId: string;
  userId: string;
  messageStatus: number;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
}

@Table({ tableName: 'UserNotifications', timestamps: false })
export class userNotifications
  extends Model<userNotificationsAttributes, userNotificationsAttributes>
  implements userNotificationsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'PromptId', type: DataType.CHAR(36) })
  promptId!: string;

  @Column({ field: 'UserId', type: DataType.CHAR(36) })
  userId!: string;

  @Column({ field: 'MessageStatus', type: DataType.INTEGER })
  messageStatus!: number;

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
