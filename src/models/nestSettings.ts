import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface nestSettingsAttributes {
  id: string;
  name: string;
  value: string;
  providerName?: string;
  providerKey?: string;
}

@Table({ tableName: 'NestSettings', timestamps: false })
export class nestSettings
  extends Model<nestSettingsAttributes, nestSettingsAttributes>
  implements nestSettingsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'Name', type: DataType.STRING(128) })
  name!: string;

  @Column({ field: 'Value', type: DataType.STRING(2048) })
  value!: string;

  @Column({ field: 'ProviderName', allowNull: true, type: DataType.STRING(64) })
  providerName?: string;

  @Column({ field: 'ProviderKey', allowNull: true, type: DataType.STRING(64) })
  providerKey?: string;
}
