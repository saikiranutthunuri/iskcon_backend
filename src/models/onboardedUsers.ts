import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface onboardedUsersAttributes {
  id: string;
  tenantId?: string;
  scheme?: string;
  reciptDate?: string;
  amount?: string;
  rno?: string;
  donorName?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pin?: string;
  concurrencyStamp: string;
  isOnboarded?: number;
  consentId: string;
  isConsentApproved?: number;
  otp?: string;
  randomPasskey?: string;
  did?: string;
}

@Table({ tableName: 'OnboardedUsers', timestamps: false })
export class onboardedUsers
  extends Model<onboardedUsersAttributes, onboardedUsersAttributes>
  implements onboardedUsersAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Scheme', allowNull: true, type: DataType.STRING })
  scheme?: string;

  @Column({ field: 'ReciptDate', allowNull: true, type: DataType.STRING })
  reciptDate?: string;

  @Column({ field: 'Amount', allowNull: true, type: DataType.STRING })
  amount?: string;

  @Column({ field: 'Rno', allowNull: true, type: DataType.STRING })
  rno?: string;

  @Column({ field: 'DonorName', allowNull: true, type: DataType.STRING })
  donorName?: string;

  @Column({ field: 'Phone', allowNull: true, type: DataType.STRING })
  phone?: string;

  @Column({ field: 'Address', allowNull: true, type: DataType.STRING })
  address?: string;

  @Column({ field: 'City', allowNull: true, type: DataType.STRING })
  city?: string;

  @Column({ field: 'State', allowNull: true, type: DataType.STRING })
  state?: string;

  @Column({ field: 'Country', allowNull: true, type: DataType.STRING })
  country?: string;

  @Column({ field: 'Pin', allowNull: true, type: DataType.STRING })
  pin?: string;

  @Column({ field: 'ConcurrencyStamp', type: DataType.STRING(40) })
  concurrencyStamp!: string;

  @Column({ field: 'IsOnboarded', allowNull: true, type: DataType.TINYINT })
  isOnboarded?: number;

  @Column({ field: 'ConsentId', type: DataType.STRING })
  consentId!: string;

  @Column({
    field: 'IsConsentApproved',
    allowNull: true,
    type: DataType.TINYINT,
  })
  isConsentApproved?: number;

  @Column({ field: 'OTP', allowNull: true, type: DataType.STRING })
  otp?: string;

  @Column({ field: 'RandomPasskey', allowNull: true, type: DataType.STRING })
  randomPasskey?: string;

  @Column({ field: 'DID', allowNull: true, type: DataType.STRING })
  did?: string;
}
