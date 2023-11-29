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
exports.nestUserLogins = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let nestUserLogins = class nestUserLogins extends sequelize_typescript_1.Model {
};
exports.nestUserLogins = nestUserLogins;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserId', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], nestUserLogins.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LoginProvider',
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING(64),
    }),
    __metadata("design:type", String)
], nestUserLogins.prototype, "loginProvider", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], nestUserLogins.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ProviderKey', type: sequelize_typescript_1.DataType.STRING(196) }),
    __metadata("design:type", String)
], nestUserLogins.prototype, "providerKey", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ProviderDisplayName',
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(128),
    }),
    __metadata("design:type", String)
], nestUserLogins.prototype, "providerDisplayName", void 0);
exports.nestUserLogins = nestUserLogins = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'NestUserLogins', timestamps: false })
], nestUserLogins);
//# sourceMappingURL=nestUserLogins.js.map