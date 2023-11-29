import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { AudioChantService } from 'src/audio-chant/audio-chant.service';
import { UserDetailsService } from 'src/user-details/user-details.service';
import { UsersService } from './users.service';
import { IsNotEmpty } from 'class-validator';
import { TickerTextService } from 'src/ticker-texts/ticker-texts.service';
import { LiveStreamsService } from 'src/live-streams/live-streams.service';


class UpdateProfileDTO {
  @ApiProperty()
  birthDay: Date;

  @ApiProperty()
  isVolunter: number;

  @ApiProperty()
  city: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  state?: string;

  @ApiProperty()
  country?: string;

  @ApiProperty()
  pincode?: string;

  @ApiProperty()
  gender?: number;
}

class SetPhoneNumberDTO {
  @ApiProperty()
  @IsNotEmpty()
  phoneNumber: string;
}

class ValidatePhoneNumberDTO {
  @ApiProperty()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  otp: string;
}

class UpdateVolunteerDTO {
  @ApiProperty()
  @IsNotEmpty()
  isSet: boolean;
}
@Controller('user')
@ApiBearerAuth('access-token')
@ApiTags('user')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(
    private readonly userService: UsersService,
    private readonly userDetailsService: UserDetailsService,
    private readonly tickerTextService: TickerTextService,
    private readonly audioChantService: AudioChantService,
    private readonly liveStreamsService: LiveStreamsService
  ) {}

  @Get('/profile/getProfile')
  @ApiOperation({summary: "Gets user profile"})
  getProfileMethod(@Req() request: Request) {
    return this.userDetailsService.getUserProfile(request['user'].userId);
  }

  @Get("/getTickerText")
  @ApiOperation({summary: "Gets last loaded ticker text"})
  GetTickerTextMethod() {
    return this.tickerTextService.getTickerText()
  }

  @Post('/profile/updateProfile')
  @ApiOperation({summary: "Updates user Profile"})
  @UsePipes(new ValidationPipe())
  updateProfileMethod(
    @Req() request: Request,
    @Body() updateProfileDTO: UpdateProfileDTO,
  ) {
    return this.userDetailsService.updateUserProfile(
      request['user'].userId,
      updateProfileDTO,
    );
  }

  @Put('/updateVolunteer')
  @ApiOperation({summary: "Updates Volunteer Status for user"})
  // @ApiOperation({summary: "FisVolunter flag should be taken as false for 0 and true for 1"})
  updateVoluteerFlag(
    @Req() request: Request,
    @Body() updateVolunteerDTO: UpdateVolunteerDTO,
  ) {
    return this.userDetailsService.setVolunteer(
      request['user'].userId,
      updateVolunteerDTO.isSet,
    );
  }

  @Post('/profile/setProfilePicture')
  @UsePipes(new ValidationPipe())
  setProfilePictureMethod() {
    return;
  }

  @Post('/profile/setPhoneNumber')
  @ApiOperation({summary: "Updates Phone Number for the user"})
  @UsePipes(new ValidationPipe())
  PostUpdatePhoneNumberMethod(
    @Req() request: Request,
    @Body() setPhoneNumberDTO: SetPhoneNumberDTO,
  ) {
    return this.userService
      .setPhoneNumber(request['user'].userId, setPhoneNumberDTO.phoneNumber)
      .then((result) => {
        return 'Success';
      });
  }

  @Post('/profile/validatePhoneNumber')
  @UsePipes(new ValidationPipe())
  PostValidatePhoneNumber(
    @Req() request: Request,
    @Body() validatePhoneNumberDTO: ValidatePhoneNumberDTO,
  ) {
    return this.userService.validatePhoneNumber(
      request['id'],
      validatePhoneNumberDTO.phoneNumber,
      validatePhoneNumberDTO.otp,
    );
  }

  @Get('/getReports')
  @UsePipes(new ValidationPipe())
  getReportsMethod() {}

  @Get('/getAudioChant')
  @ApiOperation({summary: "Gets last audio chant loaded"})
  GetAudioChant() {
    return this.audioChantService.getAudioChant();
  }

  @Get('/live-streams')
  @ApiOperation({summary: "Gets latest live stream link"})
  // @ApiResponse({
  //   status: 200,
  //   description: 'Return the latest live stream link',
  //   type: { status: Boolean, statusMessage: null, data: { streamLink: String } },
  // })
  // @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getLiveStreams(): Promise<{ status: boolean; statusMessage: null; data: { streamLink: string } }> {
    try {
      const response = await this.liveStreamsService.getLiveStreams();
      return response;
    } catch (error) {
      // Handle the error appropriately (logging, returning an error response, etc.)
      throw new Error('Failed to retrieve live stream link');
    }
  }


  

  



  @Get('/getTickerText')
  @UsePipes(new ValidationPipe())
  GetTickerText() {
    return;
  }

  @Get('/getAllEngagements')
  @UsePipes(new ValidationPipe())
  GetAllEngagements() {
    return;
  }
}
