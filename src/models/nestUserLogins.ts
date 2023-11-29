import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface nestUserLoginsAttributes {
  userId: string;
  loginProvider: string;
  tenantId?: string;
  providerKey: string;
  providerDisplayName?: string;
}

@Table({ tableName: 'NestUserLogins', timestamps: false })
export class nestUserLogins
  extends Model<nestUserLoginsAttributes, nestUserLoginsAttributes>
  implements nestUserLoginsAttributes
{
  @Column({ field: 'UserId', primaryKey: true, type: DataType.CHAR(36) })
  userId!: string;

  @Column({
    field: 'LoginProvider',
    primaryKey: true,
    type: DataType.STRING(64),
  })
  loginProvider!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'ProviderKey', type: DataType.STRING(196) })
  providerKey!: string;

  @Column({
    field: 'ProviderDisplayName',
    allowNull: true,
    type: DataType.STRING(128),
  })
  providerDisplayName?: string;
}
