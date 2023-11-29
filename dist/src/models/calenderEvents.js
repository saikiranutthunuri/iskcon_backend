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
exports.calenderEvents = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let calenderEvents = class calenderEvents extends sequelize_typescript_1.Model {
};
exports.calenderEvents = calenderEvents;
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Id', primaryKey: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], calenderEvents.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'TenantId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], calenderEvents.prototype, "tenantId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Name', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], calenderEvents.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Description', allowNull: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], calenderEvents.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EventImage', allowNull: true, type: sequelize_typescript_1.DataType.BLOB }),
    __metadata("design:type", Uint8Array)
], calenderEvents.prototype, "eventImage", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'BannerImage', allowNull: true, type: sequelize_typescript_1.DataType.BLOB }),
    __metadata("design:type", Uint8Array)
], calenderEvents.prototype, "bannerImage", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Date', allowNull: true, type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], calenderEvents.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'HasDonation', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], calenderEvents.prototype, "hasDonation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'HasSeva', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], calenderEvents.prototype, "hasSeva", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'DonationId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], calenderEvents.prototype, "donationId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SevaId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], calenderEvents.prototype, "sevaId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'ConcurrencyStamp', type: sequelize_typescript_1.DataType.STRING(40) }),
    __metadata("design:type", String)
], calenderEvents.prototype, "concurrencyStamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreationTime', type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], calenderEvents.prototype, "creationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'CreatorId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], calenderEvents.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'LastModificationTime',
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE(6),
    }),
    __metadata("design:type", Date)
], calenderEvents.prototype, "lastModificationTime", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'LastModifierId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], calenderEvents.prototype, "lastModifierId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'EventId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], calenderEvents.prototype, "eventId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'HasEvent', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], calenderEvents.prototype, "hasEvent", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'HasSpotlight', allowNull: true, type: sequelize_typescript_1.DataType.TINYINT }),
    __metadata("design:type", Number)
], calenderEvents.prototype, "hasSpotlight", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'SpotlightId', allowNull: true, type: sequelize_typescript_1.DataType.CHAR(36) }),
    __metadata("design:type", String)
], calenderEvents.prototype, "spotlightId", void 0);
exports.calenderEvents = calenderEvents = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'CalenderEvents', timestamps: false })
], calenderEvents);
//# sourceMappingURL=calenderEvents.js.map