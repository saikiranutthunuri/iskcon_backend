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
var CalendarEventsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventsService = void 0;
const common_1 = require("@nestjs/common");
const sharp = require("sharp");
const uuid_1 = require("uuid");
let CalendarEventsService = CalendarEventsService_1 = class CalendarEventsService {
    constructor(calendarEventRepository) {
        this.calendarEventRepository = calendarEventRepository;
        this.logger = new common_1.Logger(CalendarEventsService_1.name);
    }
    async createFestival(createFestivalDTO) {
        try {
            const festivalId = (0, uuid_1.v4)();
            const optimizedImageBuffer = await sharp(createFestivalDTO.eventImage.buffer)
                .resize({ width: 800 })
                .toBuffer();
            const newFestival = new this.calendarEventRepository({
                id: festivalId,
                name: createFestivalDTO.name,
                date: createFestivalDTO.date,
                description: createFestivalDTO.description,
                hasSpotlight: createFestivalDTO.hasSpotlight,
                eventImage: createFestivalDTO.eventImage ? optimizedImageBuffer : undefined,
                hasSeva: createFestivalDTO.hasSeva,
                sevaId: createFestivalDTO.sevaId,
                hasDonation: createFestivalDTO.hasDonation,
                donationId: createFestivalDTO.donationId,
            });
            await newFestival.save();
            return {
                id: newFestival.id,
                name: newFestival.name,
                date: newFestival.date,
                description: newFestival.description,
                hasSpotlight: newFestival.hasSpotlight,
            };
        }
        catch (error) {
            console.error('Error creating festival:', error.message);
            throw new Error('Failed to create Festival.');
        }
    }
    async getFestivalById(festivalId) {
        try {
            const festival = await this.calendarEventRepository.findByPk(festivalId);
            if (!festival) {
                throw new common_1.NotFoundException('Festival not found');
            }
            return festival;
        }
        catch (error) {
            console.error('Error getting festival by ID:', error.message);
            throw new Error('Failed to get festival by ID.');
        }
    }
    async getAllFestivals() {
        try {
            const festivals = await this.calendarEventRepository.findAll();
            return festivals;
        }
        catch (error) {
            console.error('Error getting all festivals:', error.message);
            throw new Error('Failed to get festivals.');
        }
    }
    async deleteFestivalById(festivalId) {
        try {
            const festival = await this.calendarEventRepository.findByPk(festivalId);
            if (!festival) {
                throw new common_1.NotFoundException('Festival not found');
            }
            await festival.destroy();
            return {
                message: 'Festival deleted successfully',
            };
        }
        catch (error) {
            console.error('Error deleting festival by ID:', error.message);
            throw new Error('Failed to delete festival by ID.');
        }
    }
    async updateFestival(festivalId, updateFestivalDTO) {
        try {
            const existingFestival = await this.calendarEventRepository.findByPk(festivalId);
            if (!existingFestival) {
                throw new common_1.NotFoundException('Festival not found');
            }
            existingFestival.name = updateFestivalDTO.name;
            existingFestival.date = updateFestivalDTO.date;
            existingFestival.description = updateFestivalDTO.description;
            existingFestival.hasSpotlight = updateFestivalDTO.hasSpotlight;
            existingFestival.hasSeva = updateFestivalDTO.hasSeva;
            existingFestival.sevaId = updateFestivalDTO.sevaId;
            existingFestival.hasDonation = updateFestivalDTO.hasDonation;
            existingFestival.donationId = updateFestivalDTO.donationId;
            if (updateFestivalDTO.eventImage) {
                const optimizedImageBuffer = await sharp(updateFestivalDTO.eventImage.buffer)
                    .resize({ width: 800 })
                    .toBuffer();
                existingFestival.eventImage = optimizedImageBuffer;
            }
            const hasSpotlightCheck = updateFestivalDTO.hasSpotlight;
            if (hasSpotlightCheck === 'true') {
                if (!updateFestivalDTO.eventImage) {
                    throw new common_1.BadRequestException('Event image is required when hasSpotlight is true.');
                }
            }
            else if (hasSpotlightCheck !== 'false') {
                throw new common_1.BadRequestException('Invalid value for hasSpotlight. Only true or false are allowed.');
            }
            const hasSevaCheck = updateFestivalDTO.hasSeva;
            if (hasSevaCheck === 'true') {
                if (!updateFestivalDTO.sevaId) {
                    throw new common_1.BadRequestException('Seva ID is required when hasSeva is true.');
                }
            }
            else if (hasSevaCheck !== 'false') {
                throw new common_1.BadRequestException('Invalid value for hasSeva. Only true or false are allowed.');
            }
            const hasDonationCheck = updateFestivalDTO.hasDonation;
            if (hasDonationCheck === 'true') {
                if (!updateFestivalDTO.donationId) {
                    throw new common_1.BadRequestException('Donation ID is required when hasDonation is true.');
                }
            }
            else if (hasDonationCheck !== 'false') {
                throw new common_1.BadRequestException('Invalid value for hasDonation. Only true or false are allowed.');
            }
            await existingFestival.save();
            return {
                id: existingFestival.id,
                name: existingFestival.name,
                date: existingFestival.date,
                description: existingFestival.description,
                hasSpotlight: existingFestival.hasSpotlight,
                hasSeva: existingFestival.hasSeva,
                hasDonation: existingFestival.hasDonation,
                sevaID: existingFestival.sevaId,
                donationID: existingFestival.donationId
            };
        }
        catch (error) {
            console.error('Error updating festival:', error.message);
            throw new Error('Failed to update Festival.');
        }
    }
};
exports.CalendarEventsService = CalendarEventsService;
exports.CalendarEventsService = CalendarEventsService = CalendarEventsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CALENDAREVENTS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], CalendarEventsService);
//# sourceMappingURL=calendar-events.service.js.map