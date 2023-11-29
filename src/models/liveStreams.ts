import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface liveStreamsAttributes {
  id: string;
  tenantId?: string;
  link: string;
   concurrencyStamp: string;
   creationTime: Date;
   creatorId?: string;
   lastModificationTime?: Date;
   lastModifierId?: string;
}

@Table({ tableName: 'LiveStreams', timestamps: false })
export class liveStreams
  extends Model<liveStreamsAttributes, liveStreamsAttributes>
  implements liveStreamsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

   @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
   tenantId?: string;

  @Column({ field: 'Link', type: DataType.STRING })
  link!: string;

 @Column({
    field: 'concurrencyStamp',
    type: DataType.STRING(40),
    defaultValue: Sequelize.literal('UUID()'), // You can replace 'UUID()' with any other value generation logic
  })
  concurrencyStamp!: string;

  @Column({
    field: 'CreationTime',
    type: DataType.DATE(6),
    defaultValue: Sequelize.fn('CONVERT_TZ', Sequelize.fn('NOW'), '+00:00', '+05:30'), // Adjust the time zone offset as needed
    allowNull: false,
  })
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