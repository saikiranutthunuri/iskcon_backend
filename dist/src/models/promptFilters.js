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
exports.promptFilters = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let promptFilters = class promptFilters extends sequelize_typescript_1.Model {
};
exports.promptFilters = promptFilters;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], promptFilters.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], promptFilters.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Name', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], promptFilters.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Type', allowNull: true, type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], promptFilters.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'FromDate', allowNull: true, type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], promptFilters.prototype, "fromDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ToDate', allowNull: true, type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], promptFilters.prototype, "toDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'MinimumAmount',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DOUBLE(22),
    }),
    __metadata("design:type", Number)
], promptFilters.prototype, "minimumAmount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'MaximumAmount',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DOUBLE(22),
    }),
    __metadata("design:type", Number)
], promptFilters.prototype, "maximumAmount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LocationState', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], promptFilters.prototype, "locationState", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LocationCity', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], promptFilters.prototype, "locationCity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ConcurrencyStamp', type: sequelize_typescript_1.DataType.STRING(40) }),
    __metadata("design:type", String)
], promptFilters.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], promptFilters.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], promptFilters.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], promptFilters.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], promptFilters.prototype, "lastModifierId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LocationCountry', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], promptFilters.prototype, "locationCountry", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'AmountAll', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], promptFilters.prototype, "amountAll", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DateAll', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], promptFilters.prototype, "dateAll", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LocationAll', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], promptFilters.prototype, "locationAll", void 0);
exports.promptFilters = promptFilters = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'PromptFilters', timestamps: false })
], promptFilters);
//# sourceMappingURL=promptFilters.js.map