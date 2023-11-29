"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDids = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let userDids = class userDids extends sequelize_typescript_1.Model {
};
exports.userDids = userDids;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDids.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDids.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DID', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDids.prototype, "did", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PvtKey', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDids.prototype, "pvtKey", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Shares', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDids.prototype, "shares", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PeerId', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDids.prototype, "peerId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'NodeId', type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDids.prototype, "nodeId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], userDids.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDids.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], userDids.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDids.prototype, "lastModifierId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Type', type: sequelize_typescript_1.DataType.INTEGER, defaultValue: '0' }),
    __metadata("design:type", Number)
], userDids.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDids.prototype, "userId", void 0);
exports.userDids = userDids = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'UserDIDS', timestamps: false })
], userDids);
//# sourceMappingURL=userDids.js.map