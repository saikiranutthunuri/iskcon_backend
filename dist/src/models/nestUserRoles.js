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
exports.nestUserRoles = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let nestUserRoles = class nestUserRoles extends sequelize_typescript_1.Model {
};
exports.nestUserRoles = nestUserRoles;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserId', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], nestUserRoles.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'RoleId', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], nestUserRoles.prototype, "roleId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], nestUserRoles.prototype, "tenantId", void 0);
exports.nestUserRoles = nestUserRoles = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'NestUserRoles', timestamps: false })
], nestUserRoles);
//# sourceMappingURL=nestUserRoles.js.map