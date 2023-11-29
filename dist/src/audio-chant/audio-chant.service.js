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
var AudioChantService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioChantService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let AudioChantService = AudioChantService_1 = class AudioChantService {
    constructor(audioChantRepository) {
        this.audioChantRepository = audioChantRepository;
        this.logger = new common_1.Logger(AudioChantService_1.name);
    }
    async createAudioChant(userId, buffer, link) {
        try {
            if ((buffer && link) || (!buffer && !link)) {
                throw new Error('Please provide either a file or a link, but not both or none.');
            }
            const audioChantData = {
                id: (0, uuid_1.v4)(),
                creatorId: userId,
                creationTime: new Date(),
            };
            if (buffer) {
                audioChantData.audio = buffer;
            }
            else {
                audioChantData.link = link;
            }
            const result = await this.audioChantRepository.create(audioChantData);
            this.logger.debug('AudioChant created successfully', result);
        }
        catch (error) {
            this.logger.error(error.message);
            throw new Error('Failed to create AudioChant');
        }
    }
    async getAudioChant() {
        try {
            const result = await this.audioChantRepository.findOne({
                order: [['creationTime', 'DESC']],
            });
            this.logger.debug('AudioChant retrieved successfully', result);
            return result;
        }
        catch (error) {
            this.logger.error(error);
            throw new Error('Failed to retrieve AudioChant');
        }
    }
};
exports.AudioChantService = AudioChantService;
exports.AudioChantService = AudioChantService = AudioChantService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AUDIOCHANTS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], AudioChantService);
//# sourceMappingURL=audio-chant.service.js.map