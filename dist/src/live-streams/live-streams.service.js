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
var LiveStreamsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveStreamsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const authId = 'MAMDK5NJBMMDA2ODBLNT';
const authToken = 'YjBkMWQ0ODk5OTJiZWJhOGU0M2JlNDc4MTcwYTNi';
const sendPhoneNumber = '+13502003495';
const SMS_MESSAGE_TEMPLATE_FOR_OTP = (userName, token) => `Dear ${userName}, Your OTP for completing this transaction is ${token}. Valid for 10 minutes. If you have not requested this OTP, please ignore this message.`;
const SMS_MESSAGE_TEMPLATE_FOR_CONSERT = 'Hare Krishna!\r\n\r\nWe have built a new platform for Devotees, making the experience faster and more transparent. Please click the link to Register - https://iskconclient.azurewebsites.net/empty/registerConsentPage?consent_id={0}';
let LiveStreamsService = LiveStreamsService_1 = class LiveStreamsService {
    constructor(liveStreamsRepository) {
        this.liveStreamsRepository = liveStreamsRepository;
        this.logger = new common_1.Logger(LiveStreamsService_1.name);
        this.phoneNumberOTP = {};
    }
    async createLiveStream(link) {
        try {
            const liveStreamData = {
                id: (0, uuid_1.v4)(),
                link: link,
            };
            const result = await this.liveStreamsRepository.create(liveStreamData);
            this.logger.debug('LiveStream created successfully', result);
            return {
                status: true,
                statusMessage: 'Successfully Created',
                data: null,
            };
        }
        catch (error) {
            this.logger.error(error.message);
            throw new Error('Failed to create LiveStream');
        }
    }
    async getLiveStreams() {
        try {
            const latestLiveStream = await this.liveStreamsRepository.findOne({
                attributes: ['link'],
                order: [['CreationTime', 'DESC']],
            });
            const latestLink = latestLiveStream ? latestLiveStream.link : null;
            return {
                status: true,
                statusMessage: null,
                data: {
                    streamLink: latestLink,
                },
            };
        }
        catch (error) {
            throw new Error('Failed to retrieve live stream link');
        }
    }
    generateOTP() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
};
exports.LiveStreamsService = LiveStreamsService;
exports.LiveStreamsService = LiveStreamsService = LiveStreamsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('LIVESTREAMS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], LiveStreamsService);
//# sourceMappingURL=live-streams.service.js.map