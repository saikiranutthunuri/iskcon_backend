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
exports.users = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let users = class users extends sequelize_typescript_1.Model {
};
exports.users = users;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], users.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserName', type: sequelize_typescript_1.DataType.STRING(256) }),
    __metadata("design:type", String)
], users.prototype, "userName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Name', allowNull: true, type: sequelize_typescript_1.DataType.STRING(64) }),
    __metadata("design:type", String)
], users.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Surname', allowNull: true, type: sequelize_typescript_1.DataType.STRING(64) }),
    __metadata("design:type", String)
], users.prototype, "surname", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Email', type: sequelize_typescript_1.DataType.STRING(256) }),
    __metadata("design:type", String)
], users.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EmailConfirmed', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], users.prototype, "emailConfirmed", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'PasswordHash',
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(256),
    }),
    __metadata("design:type", String)
], users.prototype, "passwordHash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IsExternal', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], users.prototype, "isExternal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PhoneNumber', allowNull: true, type: sequelize_typescript_1.DataType.STRING(16) }),
    __metadata("design:type", String)
], users.prototype, "phoneNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'PhoneNumberConfirmed',
        allowNull: true,
        type: sequelize_typescript_1.DataType.TINYINT,
    }),
    __metadata("design:type", Number)
], users.prototype, "phoneNumberConfirmed", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IsActive', type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], users.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'TwoFactorEnabled',
        allowNull: true,
        type: sequelize_typescript_1.DataType.TINYINT,
    }),
    __metadata("design:type", Number)
], users.prototype, "twoFactorEnabled", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LockoutEnd', allowNull: true, type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], users.prototype, "lockoutEnd", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LockoutEnabled', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], users.prototype, "lockoutEnabled", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'AccessFailedCount',
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: '0',
    }),
    __metadata("design:type", Number)
], users.prototype, "accessFailedCount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ShouldChangePasswordOnNextLogin', type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], users.prototype, "shouldChangePasswordOnNextLogin", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastPasswordChangeTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], users.prototype, "lastPasswordChangeTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ExtraProperties', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], users.prototype, "extraProperties", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'ConcurrencyStamp',
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(40),
    }),
    __metadata("design:type", String)
], users.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], users.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], users.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], users.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], users.prototype, "lastModifierId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IsDeleted', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], users.prototype, "isDeleted", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DeleterId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], users.prototype, "deleterId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DeletionTime', allowNull: true, type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], users.prototype, "deletionTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Role', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(255) }),
    __metadata("design:type", String)
], users.prototype, "role", void 0);
exports.users = users = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Users', timestamps: false })
], users);
//# sourceMappingURL=users.js.map