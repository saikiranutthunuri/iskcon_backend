import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface nestRolesAttributes {
  id: string;
  tenantId?: string;
  name: string;
  normalizedName: string;
  isDefault: number;
  isStatic: number;
  isPublic: number;
  entityVersion: number;
  extraProperties?: string;
  concurrencyStamp?: string;
}

@Table({ tableName: 'NestRoles', timestamps: false })
export class nestRoles
  extends Model<nestRolesAttributes, nestRolesAttributes>
  implements nestRolesAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Name', type: DataType.STRING(256) })
  name!: string;

  @Column({ field: 'NormalizedName', type: DataType.STRING(256) })
  normalizedName!: string;

  @Column({ field: 'IsDefault', type: DataType.TINYINT })
  isDefault!: number;

  @Column({ field: 'IsStatic', type: DataType.TINYINT })
  isStatic!: number;

  @Column({ field: 'IsPublic', type: DataType.TINYINT })
  isPublic!: number;

  @Column({ field: 'EntityVersion', type: DataType.INTEGER })
  entityVersion!: number;

  @Column({ field: 'ExtraProperties', allowNull: true, type: DataType.STRING })
  extraProperties?: string;

  @Column({
    field: 'ConcurrencyStamp',
    allowNull: true,
    type: DataType.STRING(40),
  })
  concurrencyStamp?: string;
}
