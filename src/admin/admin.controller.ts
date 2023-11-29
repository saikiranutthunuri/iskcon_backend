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
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
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

export  class CreateFestivalDto {
  @ApiProperty({ type: 'string',  description: 'id' })
  id: string;
  @ApiProperty({ type: 'string', format: 'binary', description: 'Image file' })
  file: string;

  @ApiProperty({ type: 'string', description: 'Title of the festival' })
  title: string;

  @ApiProperty({ type: 'string', format: 'date-time', description: 'Start date of the festival' })
  startDate: Date;

  @ApiProperty({ type: 'string', format: 'date-time', description: 'End date of the festival' })
  endDate: Date;
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
   private readonly festivalsService: FestivalsService
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



 
  

  @Get("/donations/getDonations")
  @ApiOperation({summary:"Gets all donations"})
  GetAllDonationsMethod(@Req() request: Request) {
    return this.donationsService.findDonations()
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

  @Get("/sevas/getSevas")
  @ApiOperation({summary:"Gets all sevas"})
  GetAllSevasMethod(@Req() request: Request) {
    return this.sevasService.findSevas()
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


  @Get("/festivals/getFestival/:festivalId")
  GetFestivalMethod(@Req() request:Request) {
    return
  }

    @Get('/festivals/getAllFestivals')
  @ApiOperation({ summary: 'Gets all festivals' })
  async getAllFestivals(): Promise<{ status: boolean; statusMessage: string; data: any[] }> {
    try {
      const festivalsList = await this.festivalsService.findAll();

      // Log the successful retrieval
      this.logger.debug('Festivals retrieved successfully', festivalsList);

      return {
        status: true,
        statusMessage: 'Festivals retrieved successfully',
        data: festivalsList,
      };
    } catch (error) {
      // Log and handle the error appropriately
      this.logger.error(error.message);

      // Return an error response or rethrow the error depending on your requirements
      throw new HttpException('Failed to retrieve Festivals', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/festivals/deleteFestival/:festivalId')
  @ApiOperation({ summary: 'Delete festival by ID' })
  async deleteFestival(@Param('festivalId') festivalId: string): Promise<{ status: boolean; statusMessage: string }> {
    try {
      const result = await this.festivalsService.deleteFestivalById(festivalId);
      return result;
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException('Failed to delete Festival', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

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


  

  @Get('getAllDidTransactions')
  GetAllDidTransactions() {
    return;
  }

  @Get('/communication/getMessagesFromUsers')
  GetUserMessagesFromUsers() {
    return;
  }

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




@Post('festivals/createfestival')
@UseInterceptors(FileInterceptor('file'))
@ApiConsumes('multipart/form-data')
@ApiBody({
  type: CreateFestivalDto,
  description: 'Festival details with file upload',
})
async create(@UploadedFile() file, @Body() createFestivalDto: CreateFestivalDto): Promise<any> {
  try {
    console.log('Create Festival DTO:', createFestivalDto); // Add this line for debugging

    if (!createFestivalDto) {
      throw new Error('DTO is undefined.');
    }

    if (!file) {
      throw new Error('File upload failed or file is missing.');
    }

    if (!this.isValidImageFile(file)) {
      throw new Error('Invalid file type. Only PNG and JPEG files are allowed.');
    }

    // Attach the file to the DTO if everything is valid
    createFestivalDto.file = file;
    

    console.log('Create Festival DTO after attaching file:', createFestivalDto); // Add this line for debugging

    return this.festivalsService.create(createFestivalDto);
  } catch (error) {
    // Log the error and handle it appropriately
    console.error(error.message);

    // Return an error response or rethrow the error depending on your requirements
    throw new Error('Failed to create Festival');
  }
}


private isValidImageFile(file: Express.Multer.File): boolean {
  const allowedExtensions = ['.png', '.jpeg', '.jpg'];
  const fileExtension = extname(file.originalname).toLowerCase();
  return allowedExtensions.includes(fileExtension);
}

@Put('/festivals/updateFestival/:festivalId')
  @ApiOperation({ summary: 'Update a festival with image upload' })
  @ApiParam({ name: 'festivalId', description: 'ID of the Festival', type: 'string' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        startDate: { type: 'string', format: 'date-time' },
        endDate: { type: 'string', format: 'date-time' },
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async updateFestival(
    @Param('festivalId') festivalId: string,
    @Body() updatedData: {
      title?: string;
      startDate?: Date;
      endDate?: Date;
      file?: Express.Multer.File;
    },
  ): Promise<{ status: boolean; statusMessage: string }> {
    try {
      const result = await this.festivalsService.updateFestivalById(festivalId, updatedData);
      return result;
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException('Failed to update Festival', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }









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





}