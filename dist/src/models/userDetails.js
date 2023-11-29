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
exports.userDetails = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let userDetails = class userDetails extends sequelize_typescript_1.Model {
};
exports.userDetails = userDetails;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDetails.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDetails.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'BirthDay', allowNull: true, type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], userDetails.prototype, "birthDay", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IsVolunter', type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], userDetails.prototype, "isVolunter", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'City', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDetails.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Address', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDetails.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'State', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDetails.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Country', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDetails.prototype, "country", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Pincode', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], userDetails.prototype, "pincode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'UserId', type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], userDetails.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Gender', type: sequelize_typescript_1.DataType.INTEGER, defaultValue: '0' }),
    __metadata("design:type", Number)
], userDetails.prototype, "gender", void 0);
exports.userDetails = userDetails = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'UserDetails', timestamps: false })
], userDetails);
//# sourceMappingURL=userDetails.js.map