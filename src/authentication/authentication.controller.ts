import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  SetMetadata,
  UsePipes,
  ValidationPipe,
  Req,
  HttpException,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { AuthenticationGuard } from './authentication.guard';
import { Public } from './public.decorator';
import { IsString, IsNotEmpty, ValidateNested, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';
import { Equals } from 'sequelize-typescript';

export class SignUpDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  confirmpassword: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}

export class VerifyOTP {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
  @ApiProperty()
  @IsNotEmpty()
  otp: string;
}

export class SendOTPDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}

export class SignInDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class ConsentSignupDTO {}

export class ConsentValidationDTO {
  @ApiProperty()
  consentId: string;

  @ApiProperty()
  userName: string;
}

export class PasswordUpdateDTO {
  @ApiProperty()
  @IsNotEmpty()
  oldPassword: string;
  @ApiProperty()
  @IsNotEmpty()
  newPassword: string;
}

@Controller('authentication')
@ApiBearerAuth('access-token')
@ApiTags('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  @UsePipes(new ValidationPipe())
  @ApiOperation({summary:"Signs up user without otp verification"})
  signUp(@Body() signUpDto: SignUpDto) {
    if(signUpDto.password != signUpDto.confirmpassword) {
      return new HttpException("Passwords should match", HttpStatus.BAD_REQUEST)
    }
    return this.authService.signUp(
      signUpDto.username,
      signUpDto.password,
      signUpDto.email,
      signUpDto.phoneNumber,
    );
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('consentSignup')
  consentSignup(@Body() signInDto: SignInDto) {
    console.debug(signInDto);
    return this.authService.signIn('', signInDto.username, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('verifyOTP')
  verifyOTP(@Body() verifyOTPDto: VerifyOTP) {
    return;
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('sendOTP')
  sendOTP(@Body() sendOTPDto: SendOTPDto) {
    return;
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  @ApiOperation({summary: "Signs in user and gives a access-token"})
  @Post('signIn')
  signIn(@Req() request: Request, @Body() signInDto: SignInDto) {
    return this.authService.signIn(
      signInDto.username,
      signInDto.password,
      request.headers['user-agent'],
    );
  }
  
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('verify-and-decode-token')
  @ApiOperation({
    summary: 'Verify and decode a JWT token',
    description: 'Send a JWT token to verify and decode.',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        token: {
          type: 'string',
        },
      },
    },
  })
  async verifyAndDecodeToken(@Body() body: { token: string }): Promise<any> {
    const { token } = body;
    
    try {
      const decodedToken = await this.authService.verifyAndDecodeToken(token);
      return { success: true, decodedToken };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('consentValidation')
  consentValidation(@Body() consentValidationDto: ConsentValidationDTO) {
    return 'Method Not Implemented';
  }

  @HttpCode(HttpStatus.OK)
  @Post('updatePassword')
  @UsePipes(new ValidationPipe())
  @ApiOperation({summary:"Updates user password"})
  PostpasswordValidationMethod(
    @Body() passwordUpdateDto: PasswordUpdateDTO,
    @Req() request: Request,
  ) {
    return this.authService
      .updatePassword(
        request['user'].username,
        passwordUpdateDto.oldPassword,
        passwordUpdateDto.newPassword,
      )
      .then((result) => {
        return 'Success';
      });
  }
}
