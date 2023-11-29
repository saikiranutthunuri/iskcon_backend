// festivals.controller.ts

import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FestivalsService } from './festivals.service';
import { CreateFestivalDto } from './dto/create-festival.dto';
import { ApiTags, ApiConsumes, ApiBody, ApiProperty } from '@nestjs/swagger';

export class CreateFestivalWithFileDto extends CreateFestivalDto {
  @ApiProperty({ type: 'string', format: 'binary', description: 'Image file' })
  eventImage: any;
  

  @ApiProperty({ type: 'string', description: 'Title of the festival' })
  name: string;

  @ApiProperty({ type: 'string', format: 'date-time', description: 'Start date of the festival' })
  startDate: Date;

  @ApiProperty({ type: 'string', format: 'date-time', description: 'End date of the festival' })
  endDate: Date;
}

@Controller('festivals')
@ApiTags('festivals')
export class FestivalsController {
  constructor(private readonly festivalsService: FestivalsService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: CreateFestivalWithFileDto,
    description: 'Festival details with file upload',
  })
  async create(@UploadedFile() file, createFestivalDto: CreateFestivalDto): Promise<any> {
    createFestivalDto.file = file; // Attach the file to the DTO

    return this.festivalsService.create(createFestivalDto);
  }
}
