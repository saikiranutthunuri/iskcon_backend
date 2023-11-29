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
exports.userNotifications = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let userNotifications = class userNotifications extends sequelize_typescript_1.Model {
};
exports.userNotifications = userNotifications;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userNotifications.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userNotifications.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'PromptId', type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userNotifications.prototype, "promptId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserId', type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userNotifications.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'MessageStatus', type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], userNotifications.prototype, "messageStatus", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ConcurrencyStamp', type: sequelize_typescript_1.DataType.STRING(40) }),
    __metadata("design:type", String)
], userNotifications.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], userNotifications.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userNotifications.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], userNotifications.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userNotifications.prototype, "lastModifierId", void 0);
exports.userNotifications = userNotifications = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'UserNotifications', timestamps: false })
], userNotifications);
//# sourceMappingURL=userNotifications.js.map