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
var FestivalsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FestivalsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let FestivalsService = FestivalsService_1 = class FestivalsService {
    constructor(festivalsRepository) {
        this.festivalsRepository = festivalsRepository;
        this.logger = new common_1.Logger(FestivalsService_1.name);
    }
    async create(createFestivalDto) {
        try {
            const { title, file, startDate, endDate } = createFestivalDto;
            const newFestival = await this.festivalsRepository.create({
                id: (0, uuid_1.v4)(),
                title: title,
                file: file,
                startDate: startDate,
                endDate: endDate,
            });
            this.logger.debug('Festival created successfully', newFestival);
            return {
                id: newFestival.id,
                title: newFestival.title,
                startDate: newFestival.startDate,
                endDate: newFestival.endDate,
                message: 'Festival created successfully',
            };
        }
        catch (error) {
            this.logger.error(error.message);
            throw new Error('Failed to create Festival');
        }
    }
    async findAll() {
        try {
            const allFestivals = await this.festivalsRepository.findAll();
            this.logger.debug('Festivals retrieved successfully', allFestivals);
            return allFestivals;
        }
        catch (error) {
            this.logger.error(error.message);
            throw new Error('Failed to retrieve Festivals');
        }
    }
    async deleteFestivalById(festivalId) {
        try {
            const deletedFestival = await this.festivalsRepository.destroy({ where: { id: festivalId } });
            if (deletedFestival) {
                this.logger.debug('Festival deleted successfully');
                return { status: true, statusMessage: 'Festival deleted successfully' };
            }
            else {
                return { status: false, statusMessage: 'Festival not found' };
            }
        }
        catch (error) {
            this.logger.error(error.message);
            throw new Error('Failed to delete Festival');
        }
    }
    async updateFestivalById(festivalId, updatedData) {
        try {
            const existingFestival = await this.festivalsRepository.findByPk(festivalId);
            if (!existingFestival) {
                return { status: false, statusMessage: 'Festival not found' };
            }
            existingFestival.title = updatedData.title || existingFestival.title;
            existingFestival.startDate = updatedData.startDate || existingFestival.startDate;
            existingFestival.endDate = updatedData.endDate || existingFestival.endDate;
            if (updatedData.file) {
                existingFestival.file = updatedData.file.buffer;
            }
            await existingFestival.save();
            this.logger.debug('Festival updated successfully');
            return { status: true, statusMessage: 'Festival updated successfully' };
        }
        catch (error) {
            this.logger.error(error.message);
            throw new Error('Failed to update Festival');
        }
    }
};
exports.FestivalsService = FestivalsService;
exports.FestivalsService = FestivalsService = FestivalsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FESTIVALS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], FestivalsService);
//# sourceMappingURL=festivals.service.js.map