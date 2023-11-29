import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface nonFunctionalDaysAttributes {
  id: string;
  tenantId?: string;
  occassionName: string;
  occassionDate: Date;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
}

@Table({ tableName: 'NonFunctionalDays', timestamps: false })
export class nonFunctionalDays
  extends Model<nonFunctionalDaysAttributes, nonFunctionalDaysAttributes>
  implements nonFunctionalDaysAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'OccassionName', type: DataType.STRING })
  occassionName!: string;

  @Column({ field: 'OccassionDate', type: DataType.DATE(6) })
  occassionDate!: Date;

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
