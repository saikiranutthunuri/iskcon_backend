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
var SevasService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SevasService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
let SevasService = SevasService_1 = class SevasService {
    constructor(sevasRepository) {
        this.sevasRepository = sevasRepository;
        this.logger = new common_1.Logger(SevasService_1.name);
    }
    findSevas() {
        return this.sevasRepository.findAll();
    }
    findSevaBySevaId(sevaId) {
        return this.sevasRepository.findOne({
            where: {
                id: {
                    [sequelize_1.Op.eq]: sevaId
                }
            }
        }).catch(e => {
            this.logger.error(e);
        });
    }
    deleteSeva(sevaId) {
        return this.sevasRepository.destroy({
            where: {
                id: sevaId
            }
        }).catch(e => {
            this.logger.error(e);
        });
    }
    async createSeva(createSevaDTO) {
        const sevaId = (0, uuid_1.v4)();
        const newSeva = new this.sevasRepository({
            id: sevaId,
            name: createSevaDTO.name,
            type: createSevaDTO.type,
            description: createSevaDTO.description,
            minAmount: createSevaDTO.minAmount,
            startDate: createSevaDTO.startDate,
            endDate: createSevaDTO.endDate,
            sevaImage: createSevaDTO.sevaImage
        });
        await newSeva.save();
        return newSeva;
    }
    async updateSeva(sevaId, updateData) {
        const seva = await this.sevasRepository.findOne({
            where: {
                id: sevaId,
            },
        });
        if (!seva) {
            throw new Error('Seva not found');
        }
        await seva.update(updateData);
        return seva;
    }
};
exports.SevasService = SevasService;
exports.SevasService = SevasService = SevasService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SEVAS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], SevasService);
//# sourceMappingURL=sevas.service.js.map