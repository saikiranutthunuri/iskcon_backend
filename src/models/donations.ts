import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface donationsAttributes {
  id: string;
  tenantId?: string;
  name: string;
  description?: string;
  donationImage?: Uint8Array;
  donationImageBanner?: Uint8Array;
  type: number;
  minAmount: number;
  amountType: number;
  targetAmount?: number;
  impact: number;
  startDate?: Date;
  endDate?: Date;
  allowedCurrency: number;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  actionType?: number;
  imageLink?: string; //MODIFIED

}

@Table({ tableName: 'Donations', timestamps: false })
export class donations
  extends Model<donationsAttributes, donationsAttributes>
  implements donationsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Name', type: DataType.STRING })
  name!: string;

  @Column({ field: 'Description', allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'DonationImage', allowNull: true, type: DataType.BLOB })
  donationImage?: Uint8Array;

  @Column({
    field: 'DonationImageBanner',
    allowNull: true,
    type: DataType.BLOB,
  })
  donationImageBanner?: Uint8Array;

  @Column({ field: 'Type', type: DataType.INTEGER })
  type!: number;

  @Column({ field: 'MinAmount', type: DataType.DOUBLE })
  minAmount!: number;

  @Column({ field: 'AmountType', type: DataType.INTEGER })
  amountType!: number;

  @Column({ field: 'TargetAmount', allowNull: true, type: DataType.DOUBLE })
  targetAmount?: number;

  @Column({ field: 'Impact', type: DataType.DOUBLE(22) })
  impact!: number;

  @Column({ field: 'StartDate', allowNull: true, type: DataType.DATE })
  startDate?: Date;

  @Column({ field: 'EndDate', allowNull: true, type: DataType.DATE })
  endDate?: Date;

  @Column({ field: 'AllowedCurrency', type: DataType.INTEGER })
  allowedCurrency!: number;

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

  @Column({ field: 'ActionType', type: DataType.INTEGER, defaultValue: '0' })
  actionType?: number;

  @Column({ field: 'imageLink', allowNull: true, type: DataType.CHAR(36) })
  imageLink?: string;  //MODIFIED
}