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
exports.AuthenticationController = exports.PasswordUpdateDTO = exports.ConsentValidationDTO = exports.ConsentSignupDTO = exports.SignInDto = exports.SendOTPDto = exports.VerifyOTP = exports.SignUpDto = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("./authentication.service");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const public_decorator_1 = require("./public.decorator");
const class_validator_1 = require("class-validator");
class SignUpDto {
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "username", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "confirmpassword", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "phoneNumber", void 0);
class VerifyOTP {
}
exports.VerifyOTP = VerifyOTP;
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOTP.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyOTP.prototype, "otp", void 0);
class SendOTPDto {
}
exports.SendOTPDto = SendOTPDto;
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendOTPDto.prototype, "phoneNumber", void 0);
class SignInDto {
}
exports.SignInDto = SignInDto;
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignInDto.prototype, "username", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignInDto.prototype, "password", void 0);
class ConsentSignupDTO {
}
exports.ConsentSignupDTO = ConsentSignupDTO;
class ConsentValidationDTO {
}
exports.ConsentValidationDTO = ConsentValidationDTO;
__decorate([
    (0, swagger_2.ApiProperty)(),
    __metadata("design:type", String)
], ConsentValidationDTO.prototype, "consentId", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    __metadata("design:type", String)
], ConsentValidationDTO.prototype, "userName", void 0);
class PasswordUpdateDTO {
}
exports.PasswordUpdateDTO = PasswordUpdateDTO;
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PasswordUpdateDTO.prototype, "oldPassword", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PasswordUpdateDTO.prototype, "newPassword", void 0);
let AuthenticationController = class AuthenticationController {
    constructor(authService) {
        this.authService = authService;
    }
    signUp(signUpDto) {
        if (signUpDto.password != signUpDto.confirmpassword) {
            return new common_1.HttpException("Passwords should match", common_1.HttpStatus.BAD_REQUEST);
        }
        return this.authService.signUp(signUpDto.username, signUpDto.password, signUpDto.email, signUpDto.phoneNumber);
    }
    consentSignup(signInDto) {
        console.debug(signInDto);
        return this.authService.signIn('', signInDto.username, signInDto.password);
    }
    verifyOTP(verifyOTPDto) {
        return;
    }
    sendOTP(sendOTPDto) {
        return;
    }
    signIn(request, signInDto) {
        return this.authService.signIn(signInDto.username, signInDto.password, request.headers['user-agent']);
    }
    async verifyAndDecodeToken(body) {
        const { token } = body;
        try {
            const decodedToken = await this.authService.verifyAndDecodeToken(token);
            return { success: true, decodedToken };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    consentValidation(consentValidationDto) {
        return 'Method Not Implemented';
    }
    PostpasswordValidationMethod(passwordUpdateDto, request) {
        return this.authService
            .updatePassword(request['user'].username, passwordUpdateDto.oldPassword, passwordUpdateDto.newPassword)
            .then((result) => {
            return 'Success';
        });
    }
};
exports.AuthenticationController = AuthenticationController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('signUp'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: "Signs up user without otp verification" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SignUpDto]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "signUp", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('consentSignup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SignInDto]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "consentSignup", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('verifyOTP'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerifyOTP]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "verifyOTP", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('sendOTP'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SendOTPDto]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "sendOTP", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: "Signs in user and gives a access-token" }),
    (0, common_1.Post)('signIn'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, SignInDto]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "signIn", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('verify-and-decode-token'),
    (0, swagger_1.ApiOperation)({
        summary: 'Verify and decode a JWT token',
        description: 'Send a JWT token to verify and decode.',
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                token: {
                    type: 'string',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "verifyAndDecodeToken", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('consentValidation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ConsentValidationDTO]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "consentValidation", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('updatePassword'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: "Updates user password" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PasswordUpdateDTO,
        Request]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "PostpasswordValidationMethod", null);
exports.AuthenticationController = AuthenticationController = __decorate([
    (0, common_1.Controller)('authentication'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('authentication'),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AuthenticationController);
//# sourceMappingURL=authentication.controller.js.map