import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface contactusesAttributes {
  id: string;
  tenantId?: string;
  message: string;
  fromId: string;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  fromName?: string;
}

@Table({ tableName: 'Contactuses', timestamps: false })
export class contactuses
  extends Model<contactusesAttributes, contactusesAttributes>
  implements contactusesAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Message', type: DataType.STRING })
  message!: string;

  @Column({ field: 'FromId', type: DataType.CHAR(36) })
  fromId!: string;

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

  @Column({ field: 'FromName', allowNull: true, type: DataType.STRING })
  fromName?: string;
}
