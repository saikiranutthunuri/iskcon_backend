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
exports.nestSettings = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let nestSettings = class nestSettings extends sequelize_typescript_1.Model {
};
exports.nestSettings = nestSettings;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], nestSettings.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Name', type: sequelize_typescript_1.DataType.STRING(128) }),
    __metadata("design:type", String)
], nestSettings.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Value', type: sequelize_typescript_1.DataType.STRING(2048) }),
    __metadata("design:type", String)
], nestSettings.prototype, "value", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ProviderName', allowNull: true, type: sequelize_typescript_1.DataType.STRING(64) }),
    __metadata("design:type", String)
], nestSettings.prototype, "providerName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ProviderKey', allowNull: true, type: sequelize_typescript_1.DataType.STRING(64) }),
    __metadata("design:type", String)
], nestSettings.prototype, "providerKey", void 0);
exports.nestSettings = nestSettings = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'NestSettings', timestamps: false })
], nestSettings);
//# sourceMappingURL=nestSettings.js.map