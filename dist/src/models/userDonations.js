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
exports.userDonations = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let userDonations = class userDonations extends sequelize_typescript_1.Model {
};
exports.userDonations = userDonations;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDonations.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDonations.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DonationID', type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDonations.prototype, "donationId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserId', type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDonations.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Amount', type: sequelize_typescript_1.DataType.DOUBLE(22) }),
    __metadata("design:type", Number)
], userDonations.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Currency', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], userDonations.prototype, "currency", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IntheNameOf', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDonations.prototype, "intheNameOf", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PaymentMode', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], userDonations.prototype, "paymentMode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TokenID', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDonations.prototype, "tokenId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ConcurrencyStamp', type: sequelize_typescript_1.DataType.STRING(40) }),
    __metadata("design:type", String)
], userDonations.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], userDonations.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDonations.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], userDonations.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDonations.prototype, "lastModifierId", void 0);
exports.userDonations = userDonations = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'UserDonations', timestamps: false })
], userDonations);
//# sourceMappingURL=userDonations.js.map