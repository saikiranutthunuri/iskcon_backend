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
var SpotLightEventsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotLightEventsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let SpotLightEventsService = SpotLightEventsService_1 = class SpotLightEventsService {
    constructor(spotLightEventsRepository) {
        this.spotLightEventsRepository = spotLightEventsRepository;
        this.logger = new common_1.Logger(SpotLightEventsService_1.name);
    }
    createSpotLightEvent(userId, createSpotlightEventDTO) {
        return this.spotLightEventsRepository.create(Object.assign(Object.assign({ id: (0, uuid_1.v4)() }, createSpotlightEventDTO), { creatorId: userId, creationTime: new Date() }));
    }
    updateSpotLightEvent(updateSpotLightEventDTO) {
        return this.spotLightEventsRepository.update({}, {
            where: {
                id: updateSpotLightEventDTO.id
            }
        });
    }
};
exports.SpotLightEventsService = SpotLightEventsService;
exports.SpotLightEventsService = SpotLightEventsService = SpotLightEventsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SPOTLIGHTEVENTS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], SpotLightEventsService);
//# sourceMappingURL=spot-light-events.service.js.map