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
exports.userSevaDetails = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let userSevaDetails = class userSevaDetails extends sequelize_typescript_1.Model {
};
exports.userSevaDetails = userSevaDetails;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userSevaDetails.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userSevaDetails.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserSevaId', type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userSevaDetails.prototype, "userSevaId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'FirstName', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userSevaDetails.prototype, "firstName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastName', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userSevaDetails.prototype, "lastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Gothra', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userSevaDetails.prototype, "gothra", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ConcurrencyStamp', type: sequelize_typescript_1.DataType.STRING(40) }),
    __metadata("design:type", String)
], userSevaDetails.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], userSevaDetails.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userSevaDetails.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], userSevaDetails.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userSevaDetails.prototype, "lastModifierId", void 0);
exports.userSevaDetails = userSevaDetails = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'UserSevaDetails', timestamps: false })
], userSevaDetails);
//# sourceMappingURL=userSevaDetails.js.map