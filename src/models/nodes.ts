import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface nodesAttributes {
  id: string;
  tenantId?: string;
  name?: string;
  endPoint?: string;
  masterDid?: string;
  balance?: string;
  status: number;
  creationTime: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  type?: number;
  peerId?: string;
  serverCertificate?: Uint8Array;
  validateSsl?: number;
}

@Table({ tableName: 'Nodes', timestamps: false })
export class nodes
  extends Model<nodesAttributes, nodesAttributes>
  implements nodesAttributes
{
  @Column({ field: 'Id', primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ field: 'TenantId', allowNull: true, type: DataType.CHAR(36) })
  tenantId?: string;

  @Column({ field: 'Name', allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ field: 'EndPoint', allowNull: true, type: DataType.STRING })
  endPoint?: string;

  @Column({ field: 'MasterDID', allowNull: true, type: DataType.STRING })
  masterDid?: string;

  @Column({ field: 'Balance', allowNull: true, type: DataType.DECIMAL(18, 2) })
  balance?: string;

  @Column({ field: 'Status', type: DataType.TINYINT })
  status!: number;


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

  @Column({ field: 'PeerId', allowNull: true, type: DataType.STRING })
  peerId?: string;

  @Column({ field: 'ServerCertificate', allowNull: true, type: DataType.BLOB })
  serverCertificate?: Uint8Array;

  @Column({ field: 'ValidateSSL', allowNull: true, type: DataType.TINYINT })
  validateSsl?: number;
}
