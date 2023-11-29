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
exports.nestSecurityLogs = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let nestSecurityLogs = class nestSecurityLogs extends sequelize_typescript_1.Model {
};
exports.nestSecurityLogs = nestSecurityLogs;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ApplicationName',
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(96),
    }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "applicationName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Identity', allowNull: true, type: sequelize_typescript_1.DataType.STRING(96) }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "identity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Action', allowNull: true, type: sequelize_typescript_1.DataType.STRING(96) }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "action", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserName', allowNull: true, type: sequelize_typescript_1.DataType.STRING(256) }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "userName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantName', allowNull: true, type: sequelize_typescript_1.DataType.STRING(64) }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "tenantName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ClientId', allowNull: true, type: sequelize_typescript_1.DataType.STRING(64) }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "clientId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'CorrelationId',
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(64),
    }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "correlationId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ClientIpAddress',
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(64),
    }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "clientIpAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'BrowserInfo', allowNull: true, type: sequelize_typescript_1.DataType.STRING(512) }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "browserInfo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], nestSecurityLogs.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ExtraProperties', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "extraProperties", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ConcurrencyStamp',
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(40),
    }),
    __metadata("design:type", String)
], nestSecurityLogs.prototype, "concurrencyStamp", void 0);
exports.nestSecurityLogs = nestSecurityLogs = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'NestSecurityLogs', timestamps: false })
], nestSecurityLogs);
//# sourceMappingURL=nestSecurityLogs.js.map