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
exports.onboardedUsers = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let onboardedUsers = class onboardedUsers extends sequelize_typescript_1.Model {
};
exports.onboardedUsers = onboardedUsers;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Scheme', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "scheme", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ReciptDate', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "reciptDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Amount', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Rno', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "rno", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DonorName', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "donorName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Phone', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Address', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'City', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'State', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Country', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "country", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Pin', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "pin", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ConcurrencyStamp', type: sequelize_typescript_1.DataType.STRING(40) }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'IsOnboarded', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], onboardedUsers.prototype, "isOnboarded", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ConsentId', type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "consentId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'IsConsentApproved',
        allowNull: true,
        type: sequelize_typescript_1.DataType.TINYINT,
    }),
    __metadata("design:type", Number)
], onboardedUsers.prototype, "isConsentApproved", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'OTP', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "otp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'RandomPasskey', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "randomPasskey", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DID', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], onboardedUsers.prototype, "did", void 0);
exports.onboardedUsers = onboardedUsers = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'OnboardedUsers', timestamps: false })
], onboardedUsers);
//# sourceMappingURL=onboardedUsers.js.map