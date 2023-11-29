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
var TickerTextService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickerTextService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let TickerTextService = TickerTextService_1 = class TickerTextService {
    constructor(tickerTextRepository) {
        this.tickerTextRepository = tickerTextRepository;
        this.logger = new common_1.Logger(TickerTextService_1.name);
    }
    createTickerText(userId, line) {
        this.logger.debug(userId, line);
        return this.tickerTextRepository.create({
            id: (0, uuid_1.v4)(),
            creatorId: userId,
            creationTime: new Date(),
            quotation: line
        }).catch(e => {
            this.logger.error(e);
        });
    }
    getTickerText() {
        return this.tickerTextRepository.findOne({
            order: [["creationTime", "DESC"]]
        }).then(result => {
            this.logger.debug("tickerText", result);
            return result;
        }).catch(e => {
            this.logger.error(e);
        });
    }
};
exports.TickerTextService = TickerTextService;
exports.TickerTextService = TickerTextService = TickerTextService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("TICKERTEXTS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], TickerTextService);
//# sourceMappingURL=ticker-texts.service.js.map