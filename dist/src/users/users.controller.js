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
var UsersController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const audio_chant_service_1 = require("../audio-chant/audio-chant.service");
const user_details_service_1 = require("../user-details/user-details.service");
const users_service_1 = require("./users.service");
const class_validator_1 = require("class-validator");
const ticker_texts_service_1 = require("../ticker-texts/ticker-texts.service");
const live_streams_service_1 = require("../live-streams/live-streams.service");
class UpdateProfileDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UpdateProfileDTO.prototype, "birthDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateProfileDTO.prototype, "isVolunter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "pincode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateProfileDTO.prototype, "gender", void 0);
class SetPhoneNumberDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetPhoneNumberDTO.prototype, "phoneNumber", void 0);
class ValidatePhoneNumberDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ValidatePhoneNumberDTO.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ValidatePhoneNumberDTO.prototype, "otp", void 0);
class UpdateVolunteerDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], UpdateVolunteerDTO.prototype, "isSet", void 0);
let UsersController = UsersController_1 = class UsersController {
    constructor(userService, userDetailsService, tickerTextService, audioChantService, liveStreamsService) {
        this.userService = userService;
        this.userDetailsService = userDetailsService;
        this.tickerTextService = tickerTextService;
        this.audioChantService = audioChantService;
        this.liveStreamsService = liveStreamsService;
        this.logger = new common_1.Logger(UsersController_1.name);
    }
    getProfileMethod(request) {
        return this.userDetailsService.getUserProfile(request['user'].userId);
    }
    GetTickerTextMethod() {
        return this.tickerTextService.getTickerText();
    }
    updateProfileMethod(request, updateProfileDTO) {
        return this.userDetailsService.updateUserProfile(request['user'].userId, updateProfileDTO);
    }
    updateVoluteerFlag(request, updateVolunteerDTO) {
        return this.userDetailsService.setVolunteer(request['user'].userId, updateVolunteerDTO.isSet);
    }
    setProfilePictureMethod() {
        return;
    }
    PostValidatePhoneNumber(request, validatePhoneNumberDTO) {
        return this.userService.validatePhoneNumber(request['id'], validatePhoneNumberDTO.phoneNumber, validatePhoneNumberDTO.otp);
    }
    getReportsMethod() { }
    GetAudioChant() {
        return this.audioChantService.getAudioChant();
    }
    async getLiveStreams() {
        try {
            const response = await this.liveStreamsService.getLiveStreams();
            return response;
        }
        catch (error) {
            throw new Error('Failed to retrieve live stream link');
        }
    }
    GetTickerText() {
        return;
    }
    GetAllEngagements() {
        return;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('/profile/getProfile'),
    (0, swagger_1.ApiOperation)({ summary: "Gets user profile" }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getProfileMethod", null);
__decorate([
    (0, common_1.Get)("/getTickerText"),
    (0, swagger_1.ApiOperation)({ summary: "Gets last loaded ticker text" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "GetTickerTextMethod", null);
__decorate([
    (0, common_1.Post)('/profile/updateProfile'),
    (0, swagger_1.ApiOperation)({ summary: "Updates user Profile" }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        UpdateProfileDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateProfileMethod", null);
__decorate([
    (0, common_1.Put)('/updateVolunteer'),
    (0, swagger_1.ApiOperation)({ summary: "Updates Volunteer Status for user" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        UpdateVolunteerDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateVoluteerFlag", null);
__decorate([
    (0, common_1.Post)('/profile/setProfilePicture'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setProfilePictureMethod", null);
__decorate([
    (0, common_1.Post)('/profile/validatePhoneNumber'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        ValidatePhoneNumberDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "PostValidatePhoneNumber", null);
__decorate([
    (0, common_1.Get)('/getReports'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getReportsMethod", null);
__decorate([
    (0, common_1.Get)('/getAudioChant'),
    (0, swagger_1.ApiOperation)({ summary: "Gets last audio chant loaded" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "GetAudioChant", null);
__decorate([
    (0, common_1.Get)('/live-streams'),
    (0, swagger_1.ApiOperation)({ summary: "Gets latest live stream link" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getLiveStreams", null);
__decorate([
    (0, common_1.Get)('/getTickerText'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "GetTickerText", null);
__decorate([
    (0, common_1.Get)('/getAllEngagements'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "GetAllEngagements", null);
exports.UsersController = UsersController = UsersController_1 = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        user_details_service_1.UserDetailsService,
        ticker_texts_service_1.TickerTextService,
        audio_chant_service_1.AudioChantService,
        live_streams_service_1.LiveStreamsService])
], UsersController);
//# sourceMappingURL=users.controller.js.map