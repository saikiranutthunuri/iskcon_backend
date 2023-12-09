import { HttpException } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
export declare class SignUpDto {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
    phoneNumber: string;
}
export declare class VerifyOTP {
    phoneNumber: string;
    otp: string;
}
export declare class SendOTPDto {
    phoneNumber: string;
}
export declare class SignInDto {
    username: string;
    password: string;
}
export declare class ConsentSignupDTO {
}
export declare class ConsentValidationDTO {
    consentId: string;
    userName: string;
}
export declare class PasswordUpdateDTO {
    oldPassword: string;
    newPassword: string;
}
export declare class AuthenticationController {
    private readonly authService;
    constructor(authService: AuthenticationService);
    signUp(signUpDto: SignUpDto): HttpException | Promise<void | import("../models").users>;
    consentSignup(signInDto: SignInDto): Promise<any>;
    verifyOTP(verifyOTPDto: VerifyOTP): void;
    sendOTP(sendOTPDto: SendOTPDto): void;
    signIn(request: Request, signInDto: SignInDto): Promise<any>;
    verifyAndDecodeToken(body: {
        token: string;
    }): Promise<any>;
    consentValidation(consentValidationDto: ConsentValidationDTO): string;
    PostpasswordValidationMethod(passwordUpdateDto: PasswordUpdateDTO, request: Request): Promise<string>;
}
