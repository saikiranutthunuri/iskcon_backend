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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FestivalsController = exports.CreateFestivalWithFileDto = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const festivals_service_1 = require("./festivals.service");
const create_festival_dto_1 = require("./dto/create-festival.dto");
const swagger_1 = require("@nestjs/swagger");
class CreateFestivalWithFileDto extends create_festival_dto_1.CreateFestivalDto {
}
exports.CreateFestivalWithFileDto = CreateFestivalWithFileDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', description: 'Image file' }),
    __metadata("design:type", Object)
], CreateFestivalWithFileDto.prototype, "eventImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', description: 'Title of the festival' }),
    __metadata("design:type", String)
], CreateFestivalWithFileDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date-time', description: 'Start date of the festival' }),
    __metadata("design:type", Date)
], CreateFestivalWithFileDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date-time', description: 'End date of the festival' }),
    __metadata("design:type", Date)
], CreateFestivalWithFileDto.prototype, "endDate", void 0);
let FestivalsController = class FestivalsController {
    constructor(festivalsService) {
        this.festivalsService = festivalsService;
    }
    async create(file, createFestivalDto) {
        createFestivalDto.file = file;
    }
};
exports.FestivalsController = FestivalsController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        type: CreateFestivalWithFileDto,
        description: 'Festival details with file upload',
    }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_festival_dto_1.CreateFestivalDto]),
    __metadata("design:returntype", Promise)
], FestivalsController.prototype, "create", null);
exports.FestivalsController = FestivalsController = __decorate([
    (0, common_1.Controller)('festivals'),
    (0, swagger_1.ApiTags)('festivals'),
    __metadata("design:paramtypes", [festivals_service_1.FestivalsService])
], FestivalsController);
//# sourceMappingURL=festivals.controller.js.map