import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface userDidsAttributes {
  id: string;
  tenantId?: string;
  did: string;
  pvtKey?: string;
  shares?: string;
  peerId?: string;
  nodeId: string;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  type?: number;
  userId?: string;
}

@Table({ tableName: 'UserDIDS', timestamps: false })
export class userDids
  extends Model<userDidsAttributes, userDidsAttributes>
  implements userDidsAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'DID', type: DataType.STRING })
  did!: string;

  @Column({ field: 'PvtKey', allowNull: true, type: DataType.STRING })
  pvtKey?: string;

  @Column({ field: 'Shares', allowNull: true, type: DataType.STRING })
  shares?: string;

  @Column({ field: 'PeerId', allowNull: true, type: DataType.STRING })
  peerId?: string;

  @Column({ field: 'NodeId', type: DataType.CHAR(36) })
  nodeId!: string;

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

  @Column({ field: 'Type', type: DataType.INTEGER, defaultValue: '0' })
  type?: number;

  @Column({ field: 'UserId', allowNull: true, type: DataType.CHAR(36) })
  userId?: string;
}
