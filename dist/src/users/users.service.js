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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    validatePhoneNumber(id, phoneNumber, otp) {
        return this.usersRepository
            .findOne({
            where: {
                id,
            },
        })
            .then((result) => {
            if (result.phoneNumber != phoneNumber) {
                throw new common_1.NotAcceptableException('PhoneNumbers did not match');
            }
            return result;
        });
    }
    setPhoneNumber(id, phoneNumber) {
        return this.usersRepository.update({ phoneNumber }, { where: { id } });
    }
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    updatePassword(username, newPassword) {
        return this.usersRepository
            .update({
            passwordHash: newPassword,
        }, {
            where: {
                userName: username,
            },
        })
            .then((result) => {
            console.info(result);
            return result;
        });
    }
    getUser(username) {
        return this.usersRepository
            .findOne({
            where: {
                userName: username,
            },
        })
            .then((result) => {
            return result;
        });
    }
    signUp(userName, phoneNumber, email, password) {
        return this.usersRepository
            .create({
            id: (0, uuid_1.v4)(),
            userName,
            phoneNumber,
            passwordHash: password,
            email,
            isActive: 1,
            shouldChangePasswordOnNextLogin: 0,
            creationTime: new Date(),
            role: "user"
        })
            .then((result) => {
            console.info(result);
            return result;
        })
            .catch((e) => {
            console.log(e);
        });
    }
    signIn(username) {
        return;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USERS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map