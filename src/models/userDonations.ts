import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface userDonationsAttributes {
  id: string;
  tenantId?: string;
  donationId: string;
  userId: string;
  amount: number;
  currency: number;
  intheNameOf?: string;
  paymentMode: number;
  tokenId?: string;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
}

@Table({ tableName: 'UserDonations', timestamps: false })
export class userDonations
  extends Model<userDonationsAttributes, userDonationsAttributes>
  implements userDonationsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'DonationID', type: DataType.CHAR(36) })
  donationId!: string;

  @Column({ field: 'UserId', type: DataType.CHAR(36) })
  userId!: string;

  @Column({ field: 'Amount', type: DataType.DOUBLE(22) })
  amount!: number;

  @Column({ field: 'Currency', type: DataType.INTEGER })
  currency!: number;

  @Column({ field: 'IntheNameOf', allowNull: true, type: DataType.STRING })
  intheNameOf?: string;

  @Column({ field: 'PaymentMode', type: DataType.INTEGER })
  paymentMode!: number;

  @Column({ field: 'TokenID', allowNull: true, type: DataType.STRING })
  tokenId?: string;

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
