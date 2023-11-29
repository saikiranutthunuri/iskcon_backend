import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface userDetailsAttributes {
  id: string;
  tenantId?: string;
  birthDay?: Date;
  isVolunter: number;
  city?: string;
  address?: string;
  state?: string;
  country?: string;
  pincode?: string;
  userId: string;
  gender?: number;
}

@Table({ tableName: 'UserDetails', timestamps: false })
export class userDetails
  extends Model<userDetailsAttributes, userDetailsAttributes>
  implements userDetailsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'BirthDay', allowNull: true, type: DataType.DATE(6) })
  birthDay?: Date;

  @Column({ field: 'IsVolunter', type: DataType.TINYINT })
  isVolunter!: number;

  @Column({ field: 'City', allowNull: true, type: DataType.STRING })
  city?: string;

  @Column({ field: 'Address', allowNull: true, type: DataType.STRING })
  address?: string;

  @Column({ field: 'State', allowNull: true, type: DataType.STRING })
  state?: string;

  @Column({ field: 'Country', allowNull: true, type: DataType.STRING })
  country?: string;

  @Column({ field: 'Pincode', allowNull: true, type: DataType.STRING })
  pincode?: string;

  @Column({ field: 'UserId', type: DataType.CHAR(36) })
  userId!: string;

  @Column({ field: 'Gender', type: DataType.INTEGER, defaultValue: '0' })
  gender?: number;
}
