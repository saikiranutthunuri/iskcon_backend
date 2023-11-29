import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface userSevaDetailsAttributes {
  id: string;
  tenantId?: string;
  userSevaId: string;
  firstName?: string;
  lastName?: string;
  gothra?: string;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
}

@Table({ tableName: 'UserSevaDetails', timestamps: false })
export class userSevaDetails
  extends Model<userSevaDetailsAttributes, userSevaDetailsAttributes>
  implements userSevaDetailsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'UserSevaId', type: DataType.CHAR(36) })
  userSevaId!: string;

  @Column({ field: 'FirstName', allowNull: true, type: DataType.STRING })
  firstName?: string;

  @Column({ field: 'LastName', allowNull: true, type: DataType.STRING })
  lastName?: string;

  @Column({ field: 'Gothra', allowNull: true, type: DataType.STRING })
  gothra?: string;

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
