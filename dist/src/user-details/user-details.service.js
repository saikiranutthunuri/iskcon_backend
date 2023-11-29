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
var UserDetailsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetailsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UserDetailsService = UserDetailsService_1 = class UserDetailsService {
    setVolunteer(userId, value) {
        this.logger.log('user id', userId, value);
        return this.userDetailsRepository.update({ isVolunter: Number(value) }, {
            where: {
                userId,
            },
        });
    }
    setPhoneNumber() {
        throw new Error('Method not implemented.');
    }
    createProfile(userId) {
        return this.userDetailsRepository
            .create({
            id: (0, uuid_1.v4)(),
            userId,
            gender: undefined,
            isVolunter: 0,
        })
            .catch((err) => {
            this.logger.error(err);
        });
    }
    constructor(userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
        this.logger = new common_1.Logger(UserDetailsService_1.name);
    }
    updateUserProfile(userId, updateProfileDTO) {
        this.logger.debug('userId', userId);
        return this.userDetailsRepository
            .update(Object.assign({}, updateProfileDTO), { where: { userId } })
            .then((result) => {
            this.logger.debug(...result);
            return result;
        });
    }
    getUserProfile(userId) {
        console.info('userId', userId);
        return this.userDetailsRepository
            .findOne({
            where: {
                userId: userId,
            },
        })
            .then((result) => {
            console.info(result);
            return result;
        })
            .catch((error) => {
            console.error(error);
        });
    }
};
exports.UserDetailsService = UserDetailsService;
exports.UserDetailsService = UserDetailsService = UserDetailsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USERDETAILS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], UserDetailsService);
//# sourceMappingURL=user-details.service.js.map