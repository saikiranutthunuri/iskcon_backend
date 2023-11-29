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
exports.preOfflineOrders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let preOfflineOrders = class preOfflineOrders extends sequelize_typescript_1.Model {
};
exports.preOfflineOrders = preOfflineOrders;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Scheme', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "scheme", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Category', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ReciptDate', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], preOfflineOrders.prototype, "reciptDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Amount', type: sequelize_typescript_1.DataType.DECIMAL(18, 2) }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Phone', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Donor', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "donor", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Email', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Address', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Mode', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "mode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'City', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'State', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Pin', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "pin", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ConcurrencyStamp', type: sequelize_typescript_1.DataType.STRING(40) }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Rno', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], preOfflineOrders.prototype, "rno", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'IsDataTokenCreated',
        allowNull: true,
        type: sequelize_typescript_1.DataType.TINYINT,
    }),
    __metadata("design:type", Number)
], preOfflineOrders.prototype, "isDataTokenCreated", void 0);
exports.preOfflineOrders = preOfflineOrders = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'PreOfflineOrders', timestamps: false })
], preOfflineOrders);
//# sourceMappingURL=preOfflineOrders.js.map