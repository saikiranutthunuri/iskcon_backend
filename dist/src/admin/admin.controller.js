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
var AdminController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = exports.FestivalEventDTO = exports.UpdateSevaDTO = exports.CreateSevasDTO = exports.SevaDTO = exports.UpdateDonationDTO = exports.CreateDonationDTO = exports.UpdateFestivalDTO = exports.CreateFestivalDTO = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const audio_chant_service_1 = require("../audio-chant/audio-chant.service");
const donations_service_1 = require("../donations/donations.service");
const non_functional_days_service_1 = require("../non-functional-days/non-functional-days.service");
const prompt_filters_service_1 = require("../prompt-filters/prompt-filters.service");
const sevas_service_1 = require("../sevas/sevas.service");
const ticker_texts_service_1 = require("../ticker-texts/ticker-texts.service");
const live_streams_service_1 = require("../live-streams/live-streams.service");
const festivals_service_1 = require("../festivals/festivals.service");
class CreateFestivalDTO {
}
exports.CreateFestivalDTO = CreateFestivalDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the festival' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], CreateFestivalDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of the festival', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Date is required' }),
    (0, class_validator_1.IsDate)({ message: 'Date must be a valid date' }),
    __metadata("design:type", Date)
], CreateFestivalDTO.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the festival', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFestivalDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Flag to indicate if the festival has spotlight (it must be true or false)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'it must be true or false' }),
    __metadata("design:type", String)
], CreateFestivalDTO.prototype, "hasSpotlight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        format: 'binary',
        description: 'Image file for the festival (required if hasSpotlight is true)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateFestivalDTO.prototype, "eventImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Flag to indicate if the festival has Seva (it must be true or false)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'it must be true or false' }),
    __metadata("design:type", String)
], CreateFestivalDTO.prototype, "hasSeva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the Seva', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFestivalDTO.prototype, "sevaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Flag to indicate if the festival has Donation (it must be true or false)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'it must be true or false' }),
    __metadata("design:type", String)
], CreateFestivalDTO.prototype, "hasDonation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the Donation', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFestivalDTO.prototype, "donationId", void 0);
class UpdateFestivalDTO extends CreateFestivalDTO {
}
exports.UpdateFestivalDTO = UpdateFestivalDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the festival', required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID is required' }),
    (0, class_validator_1.IsString)({ message: 'ID must be a string' }),
    __metadata("design:type", String)
], UpdateFestivalDTO.prototype, "id", void 0);
class CreateDonationDTO {
}
exports.CreateDonationDTO = CreateDonationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the donation' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], CreateDonationDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of the donation', required: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Type is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Type must be a number' }),
    __metadata("design:type", Number)
], CreateDonationDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the donation', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDonationDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target amount of the donation', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateDonationDTO.prototype, "targetAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date of the donation', required: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'StartDate is required' }),
    (0, class_validator_1.IsDate)({ message: 'StartDate must be a valid date' }),
    __metadata("design:type", Date)
], CreateDonationDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date of the donation', required: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'EndDate is required' }),
    (0, class_validator_1.IsDate)({ message: 'EndDate must be a valid date' }),
    __metadata("design:type", Date)
], CreateDonationDTO.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', description: 'Image file for the donation', required: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Uint8Array)
], CreateDonationDTO.prototype, "donationImage", void 0);
class UpdateDonationDTO extends CreateDonationDTO {
}
exports.UpdateDonationDTO = UpdateDonationDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateDonationDTO.prototype, "donationId", void 0);
class CreateAudioChantDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateAudioChantDTO.prototype, "link", void 0);
class CreateNonFunctionalDaysDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateNonFunctionalDaysDTO.prototype, "occassionName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateNonFunctionalDaysDTO.prototype, "occassionDate", void 0);
class CreateTickerTextDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        format: 'binary',
        description: 'Select file to upload',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateTickerTextDTO.prototype, "file", void 0);
class CreateLiveStreamDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateLiveStreamDTO.prototype, "link", void 0);
class SevaDTO {
}
exports.SevaDTO = SevaDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SevaDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SevaDTO.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], SevaDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SevaDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SevaDTO.prototype, "sevaImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SevaDTO.prototype, "sevaImageBanner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Type is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Type must be a number' }),
    __metadata("design:type", Number)
], SevaDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SevaDTO.prototype, "minAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'AmountType is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'AmountType must be a number' }),
    __metadata("design:type", Number)
], SevaDTO.prototype, "amountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], SevaDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], SevaDTO.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'AllowedCurrency is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'AllowedCurrency must be a number' }),
    __metadata("design:type", Number)
], SevaDTO.prototype, "allowedCurrency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'MaxUsers is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'MaxUsers must be a number' }),
    __metadata("design:type", Number)
], SevaDTO.prototype, "maxUsers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'CreationTime is required' }),
    (0, class_validator_1.IsDate)({ message: 'CreationTime must be a valid date' }),
    __metadata("design:type", Date)
], SevaDTO.prototype, "creationTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SevaDTO.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], SevaDTO.prototype, "lastModificationTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SevaDTO.prototype, "lastModifierId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'ActionType is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'ActionType must be a number' }),
    __metadata("design:type", Number)
], SevaDTO.prototype, "actionType", void 0);
class CreateSevasDTO {
}
exports.CreateSevasDTO = CreateSevasDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the seva' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], CreateSevasDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of the seva', required: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Type is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Type must be a number' }),
    __metadata("design:type", Number)
], CreateSevasDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the seva', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSevasDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Minimum amount of the seva', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateSevasDTO.prototype, "minAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date of the seva', required: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'StartDate is required' }),
    (0, class_validator_1.IsDate)({ message: 'StartDate must be a valid date' }),
    __metadata("design:type", Date)
], CreateSevasDTO.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date of the seva', required: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'EndDate is required' }),
    (0, class_validator_1.IsDate)({ message: 'EndDate must be a valid date' }),
    __metadata("design:type", Date)
], CreateSevasDTO.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', description: 'Image file for the seva', required: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Uint8Array)
], CreateSevasDTO.prototype, "sevaImage", void 0);
class UpdateSevaDTO extends CreateSevasDTO {
}
exports.UpdateSevaDTO = UpdateSevaDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateSevaDTO.prototype, "sevaId", void 0);
class FestivalEventDTO {
}
exports.FestivalEventDTO = FestivalEventDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FestivalEventDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FestivalEventDTO.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], FestivalEventDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FestivalEventDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], FestivalEventDTO.prototype, "eventImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], FestivalEventDTO.prototype, "bannerImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Date is required' }),
    (0, class_validator_1.IsDate)({ message: 'Date must be a valid date' }),
    __metadata("design:type", Date)
], FestivalEventDTO.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], FestivalEventDTO.prototype, "hasDonation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], FestivalEventDTO.prototype, "hasSeva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FestivalEventDTO.prototype, "donationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FestivalEventDTO.prototype, "sevaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FestivalEventDTO.prototype, "eventId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], FestivalEventDTO.prototype, "hasEvent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], FestivalEventDTO.prototype, "hasSpotlight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FestivalEventDTO.prototype, "spotlightId", void 0);
class DeleteNonFunctionalDayDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], DeleteNonFunctionalDayDTO.prototype, "occassionDate", void 0);
let AdminController = AdminController_1 = class AdminController {
    constructor(nonFunctionalDays, audioChantService, donationsService, promptFilterService, tickerTextService, sevasService, liveStreamsService, festivalsService) {
        this.nonFunctionalDays = nonFunctionalDays;
        this.audioChantService = audioChantService;
        this.donationsService = donationsService;
        this.promptFilterService = promptFilterService;
        this.tickerTextService = tickerTextService;
        this.sevasService = sevasService;
        this.liveStreamsService = liveStreamsService;
        this.festivalsService = festivalsService;
        this.logger = new common_1.Logger(AdminController_1.name);
    }
    PostNonFunctionalDaysMethod(request, createNonFunctionalDaysDTO) {
        return this.nonFunctionalDays.createNonFunctionalDay(request['user'].id, createNonFunctionalDaysDTO.occassionName, createNonFunctionalDaysDTO.occassionDate);
    }
    GetNonFunctionalDaysMethod() {
        return this.nonFunctionalDays.findAllFromToday();
    }
    DeleteNonFunctionalDayMethod(deleteNonFunctionalDayDto) {
        console.log(deleteNonFunctionalDayDto);
        return this.nonFunctionalDays.delete(deleteNonFunctionalDayDto.occassionDate);
    }
    GetAllTransactionMethod(page = 1, limit = 10) {
        return;
    }
    GetDashboardOverviewReports() {
        return 'Not available';
    }
    CreateTickerTextMethod(request, file, createTickerTextDTO) {
        this.logger.debug(file);
        this.logger.debug(createTickerTextDTO.file, request["file"]);
        return this.tickerTextService.createTickerText(request["user"].id, file.buffer.toString()).catch(e => {
            this.logger.error(e);
        });
    }
    PostPromptFilterMethod(request, createPromptFilterDTO) {
        return this.promptFilterService.createPromptFilter(createPromptFilterDTO);
    }
    DeletePromptFilterMethod(promptFilterId) {
        return;
    }
    GetNotificationAndUpdatesMethod() {
        return;
    }
    CreateAudioChantMethod(request, file, createAudioChantDTO) {
        this.logger.debug("received", createAudioChantDTO.link);
        const chantData = {
            userId: request['user'].id,
            buffer: file ? file.buffer : null,
            link: createAudioChantDTO.link,
        };
        return this.audioChantService.createAudioChant(chantData.userId, chantData.buffer, chantData.link)
            .then(result => {
            console.debug(result);
            return result;
        })
            .catch(e => {
            this.logger.error(e.message);
            throw new common_1.HttpException('Failed to create AudioChant', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }
    GetAllDidTransactions() {
        return;
    }
    GetUserMessagesFromUsers() {
        return;
    }
    async createLiveStream(createLiveStreamDTO) {
        try {
            const response = await this.liveStreamsService.createLiveStream(createLiveStreamDTO.link);
            return response;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to create LiveStream', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createDonation(createDonationDTO, donationImage) {
        createDonationDTO.donationImage = donationImage ? Uint8Array.from(donationImage.buffer) : null;
        return this.donationsService.createDonation(createDonationDTO);
    }
    async updateDonation(donationId, updateDonationDTO, donationImage) {
        updateDonationDTO.donationId = donationId;
        updateDonationDTO.donationImage = donationImage ? Uint8Array.from(donationImage.buffer) : null;
        return this.donationsService.updateDonation(donationId, updateDonationDTO);
    }
    GetAllDonationsMethod(request) {
        return this.donationsService.findDonations();
    }
    GetDonationsByDonationIdMethod(request, donationId) {
        return this.donationsService.findDonationByDonationId(donationId).then(result => {
            if (!result) {
                return new common_1.HttpException("Donation not found", common_1.HttpStatus.NOT_FOUND);
            }
            return result;
        });
    }
    DeleteDonation(request, donationId) {
        return this.donationsService.deleteDonation(donationId);
    }
    async createSeva(createSevaDTO, sevaImage) {
        createSevaDTO.sevaImage = sevaImage ? Uint8Array.from(sevaImage.buffer) : null;
        return this.sevasService.createSeva(createSevaDTO);
    }
    async updateSeva(sevaId, updateSevaDTO, sevaImage) {
        updateSevaDTO.sevaId = sevaId;
        updateSevaDTO.sevaImage = sevaImage ? Uint8Array.from(sevaImage.buffer) : null;
        return this.sevasService.updateSeva(sevaId, updateSevaDTO);
    }
    GetAllSevasMethod(request) {
        return this.sevasService.findSevas();
    }
    GetSevasBySevaIdMethod(request, sevaId) {
        return this.sevasService.findSevaBySevaId(sevaId).then(result => {
            if (!result) {
                return new common_1.HttpException("Donation not found", common_1.HttpStatus.NOT_FOUND);
            }
            return result;
        });
    }
    DeleteSevaMethod(request, sevaId) {
        return this.sevasService.deleteSeva(sevaId);
    }
    async createFestival(createFestivalDTO, eventImage) {
        createFestivalDTO.eventImage = eventImage;
        const hasSpotlightCheck = createFestivalDTO.hasSpotlight;
        const hasSevaCheck = createFestivalDTO.hasSeva;
        const hasDonationCheck = createFestivalDTO.hasDonation;
        const imagedata = createFestivalDTO.eventImage;
        console.log(imagedata);
        try {
            if (hasSpotlightCheck === 'true') {
                if (!createFestivalDTO.eventImage) {
                    throw new common_1.BadRequestException('Event image is required when hasSpotlight is true.');
                }
            }
            else if (hasSpotlightCheck !== 'false') {
                throw new common_1.BadRequestException('Invalid value for hasSpotlight. Only true or false are allowed.');
            }
            if (hasSevaCheck === 'true') {
                if (!createFestivalDTO.sevaId) {
                    throw new common_1.BadRequestException('Seva ID is required when hasSeva is true.');
                }
            }
            else if (hasSevaCheck !== 'false') {
                throw new common_1.BadRequestException('Invalid value for hasSeva. Only true or false are allowed.');
            }
            if (hasDonationCheck === 'true') {
                if (!createFestivalDTO.donationId) {
                    throw new common_1.BadRequestException('Donation ID is required when hasDonation is true.');
                }
            }
            else if (hasDonationCheck !== 'false') {
                throw new common_1.BadRequestException('Invalid value for hasDonation. Only true or false are allowed.');
            }
            return this.festivalsService.createFestival(createFestivalDTO);
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.HttpException('Failed to create Festival', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    GetFestivalMethod(request) {
        return;
    }
    async getAllFestivals() {
        try {
            const festivalsList = await this.festivalsService.findAll();
            this.logger.debug('Festivals retrieved successfully', festivalsList);
            return {
                status: true,
                statusMessage: 'Festivals retrieved successfully',
                data: festivalsList,
            };
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.HttpException('Failed to retrieve Festivals', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteFestival(festivalId) {
        try {
            const result = await this.festivalsService.deleteFestivalById(festivalId);
            return result;
        }
        catch (error) {
            this.logger.error(error.message);
            throw new common_1.HttpException('Failed to delete Festival', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('/postNonFunctionalDays'),
    (0, swagger_1.ApiOperation)({ summary: "Creates a non-Functional Day" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        CreateNonFunctionalDaysDTO]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "PostNonFunctionalDaysMethod", null);
__decorate([
    (0, common_1.Get)('/getNonFunctionalDays'),
    (0, swagger_1.ApiOperation)({ summary: "Gets all non-functional days" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetNonFunctionalDaysMethod", null);
__decorate([
    (0, common_1.Delete)("/deleteNonFunctionalDay"),
    (0, swagger_1.ApiOperation)({ summary: "Deletes a non-functional day" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteNonFunctionalDayDTO]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "DeleteNonFunctionalDayMethod", null);
__decorate([
    (0, common_1.Get)('/getAllTransactions'),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetAllTransactionMethod", null);
__decorate([
    (0, common_1.Get)('/dashboard/overviewReports'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetDashboardOverviewReports", null);
__decorate([
    (0, common_1.Post)('/createTickerText'),
    (0, swagger_1.ApiOperation)({ summary: "creates a ticker text" }),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiBody)({
        type: CreateTickerTextDTO
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({ fileType: 'text/plain' }),
        ]
    }))),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object, CreateTickerTextDTO]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "CreateTickerTextMethod", null);
__decorate([
    (0, common_1.Post)('/prompts/createPromptFilter'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "PostPromptFilterMethod", null);
__decorate([
    (0, common_1.Delete)('/communication/deletePromptFilter/:prompFilterId'),
    __param(0, (0, common_1.Param)('promptFilterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "DeletePromptFilterMethod", null);
__decorate([
    (0, common_1.Get)('/getNotificationAndUpdates'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetNotificationAndUpdatesMethod", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: { type: 'string', format: 'binary' },
                link: { type: 'string', format: 'url' },
            },
        },
    }),
    (0, common_1.Post)('/createAudioChant'),
    (0, swagger_1.ApiConsumes)("multipart/formdata"),
    (0, swagger_1.ApiOperation)({ summary: "Creates an audio chant" }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({ fileType: 'audio/*' }),
        ],
    }))),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object, CreateAudioChantDTO]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "CreateAudioChantMethod", null);
__decorate([
    (0, common_1.Get)('getAllDidTransactions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetAllDidTransactions", null);
__decorate([
    (0, common_1.Get)('/communication/getMessagesFromUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetUserMessagesFromUsers", null);
__decorate([
    (0, common_1.Post)('/createLiveStream'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a Live Stream' }),
    (0, swagger_1.ApiBody)({ type: CreateLiveStreamDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateLiveStreamDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createLiveStream", null);
__decorate([
    (0, common_1.Post)('donations/createDonation'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new donation' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Donation details',
        type: CreateDonationDTO,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('donationImage')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDonationDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createDonation", null);
__decorate([
    (0, common_1.Put)('donations/updateDonation/:donationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a donation by ID' }),
    (0, swagger_1.ApiParam)({ name: 'donationId', description: 'ID of the Donation', type: 'string' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Partial Donation details for update',
        type: UpdateDonationDTO,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('donationImage')),
    __param(0, (0, common_1.Param)('donationId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateDonationDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateDonation", null);
__decorate([
    (0, common_1.Get)("/donations/getDonations"),
    (0, swagger_1.ApiOperation)({ summary: "Gets all donations" }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetAllDonationsMethod", null);
__decorate([
    (0, common_1.Get)("/donations/getDonation/:donationId"),
    (0, swagger_1.ApiOperation)({ summary: "Gets donation from donationId" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("donationId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetDonationsByDonationIdMethod", null);
__decorate([
    (0, common_1.Delete)("/donations/deleteDonation/:donationId"),
    (0, swagger_1.ApiParam)({ name: 'donationId', description: 'ID of the Donation', type: 'string' }),
    (0, swagger_1.ApiOperation)({ summary: "Delete  donation from donationId" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("donationId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "DeleteDonation", null);
__decorate([
    (0, common_1.Post)('sevas/createSeva'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new seva' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Seva details',
        type: CreateSevasDTO,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('sevaImage')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSevasDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createSeva", null);
__decorate([
    (0, common_1.Put)('sevas/updateSeva/:sevaId'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a seva by ID' }),
    (0, swagger_1.ApiParam)({ name: 'sevaId', description: 'ID of the Seva', type: 'string' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Partial Seva details for update',
        type: UpdateSevaDTO,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('sevaImage')),
    __param(0, (0, common_1.Param)('sevaId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateSevaDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateSeva", null);
__decorate([
    (0, common_1.Get)("/sevas/getSevas"),
    (0, swagger_1.ApiOperation)({ summary: "Gets all sevas" }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetAllSevasMethod", null);
__decorate([
    (0, common_1.Get)("/sevas/getSeva/:sevaId"),
    (0, swagger_1.ApiOperation)({ summary: "Gets seva from sevaId" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("sevaId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetSevasBySevaIdMethod", null);
__decorate([
    (0, common_1.Delete)("/sevas/deleteSeva/:sevaId"),
    (0, swagger_1.ApiParam)({ name: 'sevaId', description: 'ID of the Seva', type: 'string' }),
    (0, swagger_1.ApiOperation)({ summary: "Delete  seva from sevaId" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("sevaId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "DeleteSevaMethod", null);
__decorate([
    (0, common_1.Post)('/festivals/createFestival'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new festival' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Festival details',
        type: CreateFestivalDTO,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('eventImage')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFestivalDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createFestival", null);
__decorate([
    (0, common_1.Get)("/festivals/getFestival/:festivalId"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "GetFestivalMethod", null);
__decorate([
    (0, common_1.Get)('/festivals/getAllFestivals'),
    (0, swagger_1.ApiOperation)({ summary: 'Gets all festivals' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllFestivals", null);
__decorate([
    (0, common_1.Delete)('/festivals/deleteFestival/:festivalId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete festival by ID' }),
    __param(0, (0, common_1.Param)('festivalId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteFestival", null);
exports.AdminController = AdminController = AdminController_1 = __decorate([
    (0, common_1.Controller)('admin'),
    (0, swagger_1.ApiTags)('admin'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [non_functional_days_service_1.NonFunctionalDaysService,
        audio_chant_service_1.AudioChantService,
        donations_service_1.DonationsService,
        prompt_filters_service_1.PromptFiltersService,
        ticker_texts_service_1.TickerTextService,
        sevas_service_1.SevasService,
        live_streams_service_1.LiveStreamsService,
        festivals_service_1.FestivalsService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map