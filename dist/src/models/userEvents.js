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
exports.userEvents = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let userEvents = class userEvents extends sequelize_typescript_1.Model {
};
exports.userEvents = userEvents;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userEvents.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userEvents.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EventID', type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userEvents.prototype, "eventId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'UserId',
        type: sequelize_typescript_1.DataType.CHAR(36),
        defaultValue: '00000000-0000-0000-0000-000000000000',
    }),
    __metadata("design:type", String)
], userEvents.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Amount', type: sequelize_typescript_1.DataType.DOUBLE(22) }),
    __metadata("design:type", Number)
], userEvents.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Currency', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], userEvents.prototype, "currency", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'InTheNameOf', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userEvents.prototype, "inTheNameOf", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PaymentMode', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], userEvents.prototype, "paymentMode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TokenId', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userEvents.prototype, "tokenId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ConcurrencyStamp', type: sequelize_typescript_1.DataType.STRING(40) }),
    __metadata("design:type", String)
], userEvents.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], userEvents.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userEvents.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], userEvents.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userEvents.prototype, "lastModifierId", void 0);
exports.userEvents = userEvents = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'UserEvents', timestamps: false })
], userEvents);
//# sourceMappingURL=userEvents.js.map