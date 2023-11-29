import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface nestUserRolesAttributes {
  userId: string;
  roleId: string;
  tenantId?: string;
}

@Table({ tableName: 'NestUserRoles', timestamps: false })
export class nestUserRoles
  extends Model<nestUserRolesAttributes, nestUserRolesAttributes>
  implements nestUserRolesAttributes
{
  @Column({ field: 'UserId', primaryKey: true, type: DataType.CHAR(36) })
  userId!: string;

  @Column({ field: 'RoleId', primaryKey: true, type: DataType.CHAR(36) })
  roleId!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;
}
