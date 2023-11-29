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
exports.paymentGatewayPayments = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let paymentGatewayPayments = class paymentGatewayPayments extends sequelize_typescript_1.Model {
};
exports.paymentGatewayPayments = paymentGatewayPayments;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PG_PaymentId', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "pgPaymentId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PG_OrderId', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "pgOrderId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Amount', type: sequelize_typescript_1.DataType.DOUBLE(22), defaultValue: '0' }),
    __metadata("design:type", Number)
], paymentGatewayPayments.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'OrderId', type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "orderId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Gateway', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], paymentGatewayPayments.prototype, "gateway", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Status', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], paymentGatewayPayments.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ExtraProperties', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "extraProperties", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ConcurrencyStamp',
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(40),
    }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], paymentGatewayPayments.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], paymentGatewayPayments.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "lastModifierId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IsDeleted', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], paymentGatewayPayments.prototype, "isDeleted", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DeleterId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], paymentGatewayPayments.prototype, "deleterId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DeletionTime', allowNull: true, type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], paymentGatewayPayments.prototype, "deletionTime", void 0);
exports.paymentGatewayPayments = paymentGatewayPayments = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'PaymentGatewayPayments', timestamps: false })
], paymentGatewayPayments);
//# sourceMappingURL=paymentGatewayPayments.js.map