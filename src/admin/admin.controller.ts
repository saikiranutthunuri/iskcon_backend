import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Put,
  HttpException,
  HttpStatus,
  Logger,
  MethodNotAllowedException,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  NotFoundException
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, isNumber } from 'class-validator';
import { AudioChantService } from 'src/audio-chant/audio-chant.service';
import { DonationsService } from 'src/donations/donations.service';
import { NonFunctionalDaysService } from 'src/non-functional-days/non-functional-days.service';
import { PromptFiltersService } from 'src/prompt-filters/prompt-filters.service';
import { SevasService } from 'src/sevas/sevas.service';
import { TickerTextService } from 'src/ticker-texts/ticker-texts.service';
import { LiveStreamsService } from 'src/live-streams/live-streams.service';
import { sevas } from 'src/models';
import { extname } from 'path';



// import { CreateFestivalDto } from 'src/festivals/dto/create-festival.dto';
 import { FestivalsService } from 'src/festivals/festivals.service';
 import { CalendarEventsService } from 'src/calendar-events/calendar-events.service';

 import { donations , calenderEvents } from 'src/models';


export class CreateFestivalDTO {
  @ApiProperty({ description: 'Name of the festival' })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({ description: 'Date of the festival', required: true })
  @IsNotEmpty({ message: 'Date is required' })
  @IsDate({ message: 'Date must be a valid date' })
  date: Date;

  @ApiProperty({ description: 'Description of the festival', required: false })
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Flag to indicate if the festival has spotlight (it must be true or false)',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'it must be true or false' })
  hasSpotlight?: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Image file for the festival (required if hasSpotlight is true)',
    required: false,
  })
  @IsOptional()
  eventImage?: Express.Multer.File;

  // New properties for Seva and Donation
  @ApiProperty({
    description: 'Flag to indicate if the festival has Seva (it must be true or false)',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'it must be true or false' })
  hasSeva?: string;

  @ApiProperty({ description: 'ID of the Seva', required: false })
  @IsOptional()
  sevaId?: string;

  @ApiProperty({
    description: 'Flag to indicate if the festival has Donation (it must be true or false)',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'it must be true or false' })
  hasDonation?: string;

  @ApiProperty({ description: 'ID of the Donation', required: false })
  @IsOptional()
  donationId?: string;
}


export class UpdateFestivalDTO extends CreateFestivalDTO {
  @ApiProperty({ description: 'ID of the festival', required: true })
  @IsNotEmpty({ message: 'ID is required' })
  @IsString({ message: 'ID must be a string' })
  id: string;
}


export class CreateDonationDTO {
  @ApiProperty({ description: 'Name of the donation' })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({ description: 'Type of the donation' ,  required: false })
  @IsNotEmpty({ message: 'Type is required' })
  @IsNumber({}, { message: 'Type must be a number' })
  type: number;

  @ApiProperty({ description: 'Description of the donation', required: false })
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Target amount of the donation', required: false })
  @IsOptional()
  targetAmount?: number;

  @ApiProperty({ description: 'Start date of the donation' ,  required: false })
  @IsNotEmpty({ message: 'StartDate is required' })
  @IsDate({ message: 'StartDate must be a valid date' })
  startDate: Date;

  @ApiProperty({ description: 'End date of the donation' ,  required: false})
  @IsNotEmpty({ message: 'EndDate is required' })
  @IsDate({ message: 'EndDate must be a valid date' })
  endDate: Date;

  @ApiProperty({ type: 'string', format: 'binary', description: 'Image file for the donation', required: true })
  @IsOptional()
  donationImage:Uint8Array;
}

export class UpdateDonationDTO extends CreateDonationDTO {
  @ApiProperty()
  donationId: string;
}

class CreateAudioChantDTO {
  @ApiProperty()
  link: string;
  audioBuffer: Buffer;
  userId: string;
}

class CreateNonFunctionalDaysDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  occassionName: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  occassionDate: Date;
}

class CreateTickerTextDTO {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Select file to upload',
  })
  @IsNotEmpty()
  file: any;

}

class CreateLiveStreamDTO {
  @ApiProperty()
  link: string;
}
export class SevaDTO {
  @ApiProperty()
  id: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tenantId?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  description?: string;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  @IsOptional()
  sevaImage?: any;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  @IsOptional()
  sevaImageBanner?: any;

  @ApiProperty()
  @IsNotEmpty({ message: 'Type is required' })
  @IsNumber({}, { message: 'Type must be a number' })
  type: number;

  @ApiProperty({ required: false })
  @IsOptional()
  minAmount?: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'AmountType is required' })
  @IsNumber({}, { message: 'AmountType must be a number' })
  amountType: number;

  @ApiProperty({ type: Date, required: false })
  @IsOptional()
  startDate?: Date;

  @ApiProperty({ type: Date, required: false })
  @IsOptional()
  endDate?: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'AllowedCurrency is required' })
  @IsNumber({}, { message: 'AllowedCurrency must be a number' })
  allowedCurrency: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'MaxUsers is required' })
  @IsNumber({}, { message: 'MaxUsers must be a number' })
  maxUsers: number;

  // ... other properties

  @ApiProperty()
  @IsNotEmpty({ message: 'CreationTime is required' })
  @IsDate({ message: 'CreationTime must be a valid date' })
  creationTime: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  creatorId?: string;

  @ApiProperty({ type: Date, required: false })
  @IsOptional()
  lastModificationTime?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  lastModifierId?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'ActionType is required' })
  @IsNumber({}, { message: 'ActionType must be a number' })
  actionType: number;
}



export class CreateSevasDTO {
  @ApiProperty({ description: 'Name of the seva' })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({ description: 'Type of the seva', required: false })
  @IsNotEmpty({ message: 'Type is required' })
  @IsNumber({}, { message: 'Type must be a number' })
  type: number;

  @ApiProperty({ description: 'Description of the seva', required: false })
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Minimum amount of the seva', required: false })
  @IsOptional()
  minAmount?: number;

  @ApiProperty({ description: 'Start date of the seva', required: false })
  @IsNotEmpty({ message: 'StartDate is required' })
  @IsDate({ message: 'StartDate must be a valid date' })
  startDate: Date;

  @ApiProperty({ description: 'End date of the seva', required: false })
  @IsNotEmpty({ message: 'EndDate is required' })
  @IsDate({ message: 'EndDate must be a valid date' })
  endDate: Date;

  @ApiProperty({ type: 'string', format: 'binary', description: 'Image file for the seva', required: true })
  @IsOptional()
  sevaImage: Uint8Array;
}

export class UpdateSevaDTO extends CreateSevasDTO {
  @ApiProperty()
  sevaId: string;
}

export class FestivalEventDTO {
  @ApiProperty()
  id: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tenantId?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  description?: string;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  @IsOptional()
  eventImage?: any;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  @IsOptional()
  bannerImage?: any;

  @ApiProperty({ type: Date })
  @IsNotEmpty({ message: 'Date is required' })
  @IsDate({ message: 'Date must be a valid date' })
  date: Date;

  @ApiProperty()
  @IsOptional()
  hasDonation?: boolean;

  @ApiProperty()
  @IsOptional()
  hasSeva?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  donationId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sevaId?: string;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  eventId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  hasEvent?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  hasSpotlight?: boolean;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  spotlightId?: string;
}


class DeleteNonFunctionalDayDTO {
  @ApiProperty()
  occassionDate: Date;
}


@Controller('admin')
@ApiTags('admin')
@ApiBearerAuth('access-token')
export class AdminController {
  private logger:Logger = new Logger(AdminController.name)
  constructor(
    private readonly nonFunctionalDays: NonFunctionalDaysService,
    private readonly audioChantService: AudioChantService,
    private readonly donationsService: DonationsService,
    private readonly promptFilterService: PromptFiltersService,
    private readonly tickerTextService: TickerTextService,
    private readonly sevasService: SevasService,
    private readonly liveStreamsService: LiveStreamsService,
   private readonly festivalsService: FestivalsService,
   private readonly calendareventsService : CalendarEventsService
  ) {}

  @Post('/postNonFunctionalDays')
  @ApiOperation({summary: "Creates a non-Functional Day"})
  PostNonFunctionalDaysMethod(
    @Req() request: Request,
    @Body() createNonFunctionalDaysDTO: CreateNonFunctionalDaysDTO,
  ) {
    return this.nonFunctionalDays.createNonFunctionalDay(
      request['user'].id,
      createNonFunctionalDaysDTO.occassionName,
      createNonFunctionalDaysDTO.occassionDate,
    );
  }

  @Get('/getNonFunctionalDays')
  @ApiOperation({summary:"Gets all non-functional days"})
  GetNonFunctionalDaysMethod() {
    return this.nonFunctionalDays.findAllFromToday();
  }

@Delete("/deleteNonFunctionalDay")
@ApiOperation({summary: "Deletes a non-functional day"})
  DeleteNonFunctionalDayMethod(@Body() deleteNonFunctionalDayDto:DeleteNonFunctionalDayDTO) {
    console.log(deleteNonFunctionalDayDto)
    return this.nonFunctionalDays.delete(
      deleteNonFunctionalDayDto.occassionDate,
    );
  }
  @Get('/getAllTransactions')
  GetAllTransactionMethod(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return;
  }
  @Get('/dashboard/overviewReports')
  GetDashboardOverviewReports() {
    return 'Not available';
  }
  
  @Post('/createTickerText')
  @ApiOperation({summary:"creates a ticker text"})
  @ApiConsumes("application/x-www-form-urlencoded")
  // @ApiConsumes("multipart/formdata")
  @ApiBody({
    type: CreateTickerTextDTO
  })
  @UseInterceptors(FileInterceptor('file'))
  CreateTickerTextMethod(@Req() request: Request,
  @UploadedFile(
    new ParseFilePipe(
    {
      validators: [
        new FileTypeValidator({ fileType: 'text/plain' }),
      ]
    }
    )
  ) file: Express.Multer.File, @Body() createTickerTextDTO:CreateTickerTextDTO) {

    this.logger.debug(file)
    this.logger.debug(createTickerTextDTO.file, request["file"])

    return this.tickerTextService.createTickerText(request["user"].id,file.buffer.toString()).catch( e => {
      this.logger.error(e)
    });
  }

  @Post('/prompts/createPromptFilter')
  @UsePipes(new ValidationPipe())
  PostPromptFilterMethod(
    @Req() request: Request,
    @Body() createPromptFilterDTO,
  ) {
    return this.promptFilterService.createPromptFilter(createPromptFilterDTO);
  }

  @Delete('/communication/deletePromptFilter/:prompFilterId')
  DeletePromptFilterMethod(@Param('promptFilterId') promptFilterId: string) {
    return;
  }



  // notifications
  @Get('/getNotificationAndUpdates')
  GetNotificationAndUpdatesMethod() {
    return;
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        link: { type: 'string', format: 'url' },
      },
    },
  })


// create audio chant

@Post('/createAudioChant')
@ApiConsumes("multipart/formdata")
@ApiOperation({ summary: "Creates an audio chant" })
@UseInterceptors(FileInterceptor('file'))
CreateAudioChantMethod(
  @Req() request: Request,
  @UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: 'audio/*' }),
      ],
    }),
  )
  file: Express.Multer.File,
  @Body() createAudioChantDTO: CreateAudioChantDTO,
) {
  this.logger.debug("received", createAudioChantDTO.link);

  // If file is provided, use it; otherwise, use null
  const chantData = {
    userId: request['user'].id,
    buffer: file ? file.buffer : null,
    link: createAudioChantDTO.link,
  };

  // Call the existing service method to create the audio chant
  return this.audioChantService.createAudioChant(
    chantData.userId,
    chantData.buffer,
    chantData.link
  )
    .then(result => {
      console.debug(result);
      return result;
    })
    .catch(e => {
      this.logger.error(e.message);
      throw new HttpException('Failed to create AudioChant', HttpStatus.INTERNAL_SERVER_ERROR);
    });
}


// DID's
  @Get('getAllDidTransactions')
  GetAllDidTransactions() {
    return;
  }

  @Get('/communication/getMessagesFromUsers')
  GetUserMessagesFromUsers() {
    return;
  }


  // livestream
  @Post('/createLiveStream')
  @ApiOperation({ summary: 'Create a Live Stream' })
  @ApiBody({ type: CreateLiveStreamDTO })
  async createLiveStream(
    @Body() createLiveStreamDTO: CreateLiveStreamDTO,
  ): Promise<{ status: boolean; statusMessage: string; data: null }> {
    try {
      const response = await this.liveStreamsService.createLiveStream(createLiveStreamDTO.link);
      return response;
    } catch (error) {
      // Handle the error appropriately (logging, returning an error response, etc.)
      throw new HttpException('Failed to create LiveStream', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



// DOnations


@Post('donations/createDonation')
@ApiOperation({ summary: 'Create a new donation' })
@ApiConsumes('multipart/form-data')
@ApiBody({
  description: 'Donation details',
  type: CreateDonationDTO,
})
@UseInterceptors(FileInterceptor('donationImage'))
async createDonation(
  @Body() createDonationDTO: CreateDonationDTO, // Removed ValidationPipe
  @UploadedFile() donationImage: Express.Multer.File,
) {
  // Access the uploaded file using the donationImage parameter
  createDonationDTO.donationImage = donationImage ? Uint8Array.from(donationImage.buffer) : null;

  return this.donationsService.createDonation(createDonationDTO);
}



@Put('donations/updateDonation/:donationId')
@ApiOperation({ summary: 'Update a donation by ID' })
@ApiParam({ name: 'donationId', description: 'ID of the Donation', type: 'string' })
@ApiConsumes('multipart/form-data')
@ApiBody({
  description: 'Partial Donation details for update',
  type: UpdateDonationDTO,
})
@UseInterceptors(FileInterceptor('donationImage'))
async updateDonation(
  @Param('donationId') donationId: string,
  @Body() updateDonationDTO: UpdateDonationDTO,
  @UploadedFile() donationImage: Express.Multer.File,
) {
  updateDonationDTO.donationId = donationId;
  updateDonationDTO.donationImage = donationImage ? Uint8Array.from(donationImage.buffer) : null;

  return this.donationsService.updateDonation(donationId, updateDonationDTO);
}


@Get('/donations/getDonations')
  @ApiOperation({ summary: 'Gets all donations' })
  async GetAllDonationsMethod(@Req() request: Request) {
    try {
      return {
        data: (await this.donationsService.findDonations()).map(
          (donation: donations) => {
            return {
              id: donation.id,
              title: donation.name,
              startDate: donation.startDate,
              endDate: donation.endDate,
              donationType: donation.type,
              imagelink: donation.imageLink,
              targetamount: donation.targetAmount,
              actiontype: donation.actionType,
              description: donation.description,
              amountype: donation.amountType,
              impact: donation.impact,
              

            };
          },
        ),
      };
    } catch (error) {
      this.logger.error(error);
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

@Get("/donations/getDonation/:donationId")
  @ApiOperation({summary: "Gets donation from donationId"})
  GetDonationsByDonationIdMethod(@Req() request:Request,@Param("donationId") donationId:string) {
    return this.donationsService.findDonationByDonationId(donationId).then( result => {
      if(!result) {
        return new HttpException("Donation not found", HttpStatus.NOT_FOUND)
      }
      return result
    })
  }

@Delete("/donations/deleteDonation/:donationId")
  @ApiParam({ name: 'donationId', description: 'ID of the Donation', type: 'string' })
  @ApiOperation({summary: "Delete  donation from donationId"})
  DeleteDonation(@Req() request:Request, @Param("donationId") donationId:any) {
    return this.donationsService.deleteDonation(donationId)
  }



// sevas


  @Post('sevas/createSeva')
  @ApiOperation({ summary: 'Create a new seva' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Seva details',
    type: CreateSevasDTO,
  })
  @UseInterceptors(FileInterceptor('sevaImage'))
  async createSeva(
    @Body() createSevaDTO: CreateSevasDTO,
    @UploadedFile() sevaImage: Express.Multer.File,
  ) {
    createSevaDTO.sevaImage = sevaImage ? Uint8Array.from(sevaImage.buffer) : null;

    return this.sevasService.createSeva(createSevaDTO);
  }

  
  @Put('sevas/updateSeva/:sevaId')
  @ApiOperation({ summary: 'Update a seva by ID' })
  @ApiParam({ name: 'sevaId', description: 'ID of the Seva', type: 'string' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Partial Seva details for update',
    type: UpdateSevaDTO,
  })


  @UseInterceptors(FileInterceptor('sevaImage'))
  async updateSeva(
    @Param('sevaId') sevaId: string,
    @Body() updateSevaDTO: UpdateSevaDTO,
    @UploadedFile() sevaImage: Express.Multer.File,
  ) {
    updateSevaDTO.sevaId = sevaId;
    updateSevaDTO.sevaImage = sevaImage ? Uint8Array.from(sevaImage.buffer) : null;

    return this.sevasService.updateSeva(sevaId, updateSevaDTO);
  }


  @Get('/sevas/getSevas')
  @ApiOperation({ summary: 'Gets all sevas' })
  async GetAllSevasMethod(@Req() request: Request) {
    try {
      return {
        data: (await this.sevasService.findSevas()).map((seva: sevas) => {
          return {
            id: seva.id,
            title: seva.name,
            description: seva.description,
            startDate: seva.startDate,
            endDate: seva.endDate,
            sevaType: seva.type,
            minAmount: seva.minAmount,
            imagelink: seva.imageLink,
            actiontype: seva.actionType,
            maxusers: seva.maxUsers,
            

          };
        }),
      };
    } catch (error) {
      this.logger.error(error);
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("/sevas/getSeva/:sevaId")
  @ApiOperation({summary: "Gets seva from sevaId"})
  GetSevasBySevaIdMethod(@Req() request:Request,@Param("sevaId") sevaId:string) {
    return this.sevasService.findSevaBySevaId(sevaId).then( result => {
      if(!result) {
        return new HttpException("Donation not found", HttpStatus.NOT_FOUND)
      }
      return result
    })
  }

  @Delete("/sevas/deleteSeva/:sevaId")
  @ApiParam({ name: 'sevaId', description: 'ID of the Seva', type: 'string' })
  @ApiOperation({summary: "Delete  seva from sevaId"})
  DeleteSevaMethod(@Req() request:Request, @Param("sevaId") sevaId:any) {
    return this.sevasService.deleteSeva(sevaId)
  }

  

// festivals




@Post('/festivals/createFestival')
@ApiOperation({ summary: 'Create a new festival' })
@ApiConsumes('multipart/form-data')
@ApiBody({
  description: 'Festival details',
  type: CreateFestivalDTO,
})
@UseInterceptors(FileInterceptor('eventImage'))
async createFestival(
  @Body() createFestivalDTO: CreateFestivalDTO,
  @UploadedFile() eventImage: Express.Multer.File,
) {
  // Access the uploaded file using the eventImage parameter
  createFestivalDTO.eventImage = eventImage;
  const hasSpotlightCheck = createFestivalDTO.hasSpotlight;
  const hasSevaCheck = createFestivalDTO.hasSeva;
  const hasDonationCheck = createFestivalDTO.hasDonation;

  const imagedata = createFestivalDTO.eventImage;

  console.log(imagedata)

  try {
    // Check the hasSpotlight value and handle accordingly
    if (hasSpotlightCheck === 'true') {
      // If hasSpotlight is true, check if eventImage is provided
      if (!createFestivalDTO.eventImage) {
        throw new BadRequestException('Event image is required when hasSpotlight is true.');
      }
    } else if (hasSpotlightCheck !== 'false') {
      // Throw a BadRequestException for invalid values of hasSpotlight
      throw new BadRequestException('Invalid value for hasSpotlight. Only true or false are allowed.');
    }

    // Check the hasSeva value and handle accordingly
    if (hasSevaCheck === 'true') {
      // If hasSeva is true, check if sevaId is provided
      if (!createFestivalDTO.sevaId) {
        throw new BadRequestException('Seva ID is required when hasSeva is true.');
      }
    } else if (hasSevaCheck !== 'false') {
      // Throw a BadRequestException for invalid values of hasSeva
      throw new BadRequestException('Invalid value for hasSeva. Only true or false are allowed.');
    }

    // Check the hasDonation value and handle accordingly
    if (hasDonationCheck === 'true') {
      // If hasDonation is true, check if donationId is provided
      if (!createFestivalDTO.donationId) {
        throw new BadRequestException('Donation ID is required when hasDonation is true.');
      }
    } else if (hasDonationCheck !== 'false') {
      // Throw a BadRequestException for invalid values of hasDonation
      throw new BadRequestException('Invalid value for hasDonation. Only true or false are allowed.');
    }

    // Proceed with creating the festival
    return this.calendareventsService.createFestival(createFestivalDTO);
  } catch (error) {
    // Log and handle the error appropriately
    this.logger.error(error.message);

    // Return an error response or rethrow the error depending on your requirements
    throw new HttpException('Failed to create Festival', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}




  @Get("/festivals/getFestival/:id")

  @ApiOperation({ summary: 'Get festival by ID' })
  async getFestivalById(@Param('id') festivalId: string) {
  try {
    return this.calendareventsService.getFestivalById(festivalId);
  } catch (error) {
    this.logger.error(error.message);
    throw new HttpException('Failed to get festival by ID', HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }



  @Get('/festivals/getFestivals')
  @ApiOperation({ summary: 'Gets all fesytivals' })
  async GetAllFestivalsMethod(@Req() request: Request) {
    try {
      return {
        data: (await calenderEvents.findAll()).map((festival: calenderEvents) => {
          return {
            id: festival.id,
            title: festival.name,
            description: festival.description,
            date: festival.date,
            imageLink: festival.imageLink,
            hasdonation: festival.hasDonation,
            hasseva: festival.hasSeva,
            hasevent: festival.hasEvent,
            sevaid: festival.sevaId,
            donationid: festival.donationId,
            eventid: festival.eventId,
            hasspotlight: festival.hasSpotlight,
            spotlightid: festival.spotlightId

            
          };
        }),
      };
    } catch (error) {
      this.logger.error(error);
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
 

 

@Delete('/festivals/deleteFestival/:id')
@ApiOperation({ summary: 'Delete festival by ID' })
async deleteFestivalById(@Param('id') festivalId: string) {
  try {
    return this.calendareventsService.deleteFestivalById(festivalId);
  } catch (error) {
    this.logger.error(error.message);
    throw new HttpException('Failed to delete festival by ID', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

@Put('/festivals/updateFestival/:id')
@ApiOperation({ summary: 'Update an existing festival' })
@ApiConsumes('multipart/form-data')
@ApiBody({
  description: 'Festival details',
  type: UpdateFestivalDTO,
})
@UseInterceptors(FileInterceptor('eventImage'))
async updateFestival(
  @Param('id') festivalId: string,
  @Body() updateFestivalDTO: UpdateFestivalDTO,
  @UploadedFile() eventImage: Express.Multer.File,
) {
  try {
    // Access the uploaded file using the eventImage parameter
    updateFestivalDTO.eventImage = eventImage;

    // Check if the festival with the given ID exists
    const existingFestival = await this.calendareventsService.getFestivalById(festivalId);
    if (!existingFestival) {
      throw new NotFoundException('Festival not found');
    }

    // Check the hasSpotlight value and handle accordingly
    const hasSpotlightCheck = updateFestivalDTO.hasSpotlight;
    if (hasSpotlightCheck === 'true') {
      // If hasSpotlight is true, check if eventImage is provided
      if (!updateFestivalDTO.eventImage) {
        throw new BadRequestException('Event image is required when hasSpotlight is true.');
      }
    } else if (hasSpotlightCheck !== 'false') {
      // Throw a BadRequestException for invalid values of hasSpotlight
      throw new BadRequestException('Invalid value for hasSpotlight. Only true or false are allowed.');
    }

    // Check the hasSeva value and handle accordingly
    const hasSevaCheck = updateFestivalDTO.hasSeva;
    if (hasSevaCheck === 'true') {
      // If hasSeva is true, check if sevaId is provided
      if (!updateFestivalDTO.sevaId) {
        throw new BadRequestException('Seva ID is required when hasSeva is true.');
      }
    } else if (hasSevaCheck !== 'false') {
      // Throw a BadRequestException for invalid values of hasSeva
      throw new BadRequestException('Invalid value for hasSeva. Only true or false are allowed.');
    }

    // Check the hasDonation value and handle accordingly
    const hasDonationCheck = updateFestivalDTO.hasDonation;
    if (hasDonationCheck === 'true') {
      // If hasDonation is true, check if donationId is provided
      if (!updateFestivalDTO.donationId) {
        throw new BadRequestException('Donation ID is required when hasDonation is true.');
      }
    } else if (hasDonationCheck !== 'false') {
      // Throw a BadRequestException for invalid values of hasDonation
      throw new BadRequestException('Invalid value for hasDonation. Only true or false are allowed.');
    }

    // Call the service to update the festival
    return this.calendareventsService.updateFestival(festivalId, updateFestivalDTO);
  } catch (error) {
    this.logger.error(error.message);

    // Return an error response or rethrow the error depending on your requirements
    throw new HttpException('Failed to update Festival', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}





}