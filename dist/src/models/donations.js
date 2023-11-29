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
exports.donations = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let donations = class donations extends sequelize_typescript_1.Model {
};
exports.donations = donations;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], donations.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], donations.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Name', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], donations.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Description', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], donations.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DonationImage', allowNull: true, type: sequelize_typescript_1.DataType.BLOB }),
    __metadata("design:type", Uint8Array)
], donations.prototype, "donationImage", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'DonationImageBanner',
        allowNull: true,
        type: sequelize_typescript_1.DataType.BLOB,
    }),
    __metadata("design:type", Uint8Array)
], donations.prototype, "donationImageBanner", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Type', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], donations.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'MinAmount', type: sequelize_typescript_1.DataType.DOUBLE }),
    __metadata("design:type", Number)
], donations.prototype, "minAmount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'AmountType', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], donations.prototype, "amountType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TargetAmount', allowNull: true, type: sequelize_typescript_1.DataType.DOUBLE }),
    __metadata("design:type", Number)
], donations.prototype, "targetAmount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Impact', type: sequelize_typescript_1.DataType.DOUBLE(22) }),
    __metadata("design:type", Number)
], donations.prototype, "impact", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'StartDate', allowNull: true, type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], donations.prototype, "startDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EndDate', allowNull: true, type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], donations.prototype, "endDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'AllowedCurrency', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], donations.prototype, "allowedCurrency", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], donations.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], donations.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], donations.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], donations.prototype, "lastModifierId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ActionType', type: sequelize_typescript_1.DataType.INTEGER, defaultValue: '0' }),
    __metadata("design:type", Number)
], donations.prototype, "actionType", void 0);
exports.donations = donations = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Donations', timestamps: false })
], donations);
//# sourceMappingURL=donations.js.map