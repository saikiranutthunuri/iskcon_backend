import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  Sequelize,
} from 'sequelize-typescript';

export interface FestivalAttributes {
  id: string;
  title: string;
  file: Buffer; // Assuming you store the file as a binary buffer
  startDate: Date;
  endDate: Date;
  tenantId?: string;
  name?: string;
  description?: string;
  eventImage?: Uint8Array;
  bannerImage?: Uint8Array;
  date?: Date;
  hasDonation?: number;
  hasSeva?: number;
  donationId?: string;
  sevaId?: string;
  concurrencyStamp: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  eventId?: string;
  hasEvent?: number;
  hasSpotlight?: string;
  spotlightId?: string;
}

@Table({ tableName: 'calenderevents', timestamps: false })
export class Festivals
  extends Model<FestivalAttributes>
  implements FestivalAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) , defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(6)')})
  id!: string;

  @Column({ field: 'Title', type: DataType.STRING })
  title!: string;

  @Column({ field: 'File', type: DataType.BLOB })
  file!: Buffer;

  @Column({ field: 'StartDate', type: DataType.DATE })
  startDate!: Date;

  @Column({ field: 'EndDate', type: DataType.DATE })
  endDate!: Date;


  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Name', allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ field: 'Description', allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'EventImage', allowNull: true, type: DataType.BLOB })
  eventImage?: Uint8Array;

  @Column({ field: 'BannerImage', allowNull: true, type: DataType.BLOB })
  bannerImage?: Uint8Array;

  @Column({ field: 'Date', allowNull: true, type: DataType.DATE(6) })
  date?: Date;

  @Column({ field: 'HasDonation', allowNull: true, type: DataType.TINYINT })
  hasDonation?: number;

  @Column({ field: 'HasSeva', allowNull: true, type: DataType.TINYINT })
  hasSeva?: number;

  @Column({ field: 'DonationId', allowNull: true, type: DataType.CHAR(36) })
  donationId?: string;

  @Column({ field: 'SevaId', allowNull: true, type: DataType.CHAR(36) })
  sevaId?: string;

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

  @Column({ field: 'EventId', allowNull: true, type: DataType.CHAR(36) })
  eventId?: string;

  @Column({ field: 'HasEvent', allowNull: true, type: DataType.TINYINT })
  hasEvent?: number;

  @Column({ field: 'HasSpotlight', allowNull: true, type: DataType.STRING })
  hasSpotlight?: string;;

  @Column({ field: 'SpotlightId', allowNull: true, type: DataType.CHAR(36) })
  spotlightId?: string;
}


