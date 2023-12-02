import { Injectable, Logger, Inject , HttpException , HttpStatus} from '@nestjs/common';

import { Festivals } from 'src/models/festivals';
import { v4 as uuidv4 } from 'uuid';

import { FestivalAttributes } from 'src/models/festivals';
import { CreateFestivalDTO } from 'src/admin/admin.controller';
import { calenderEvents } from 'src/models';
import * as sharp from 'sharp';

@Injectable()
export class FestivalsService {
  private logger: Logger = new Logger(FestivalsService.name);

  constructor(
    @Inject('FESTIVALS_REPOSITORY')
    private readonly festivalsRepository: typeof calenderEvents,
  ) {}


  async findAll(): Promise<calenderEvents[]> {
    try {
      // Retrieve all festivals from the database
      const allFestivals = await this.festivalsRepository.findAll();

      this.logger.debug('Festivals retrieved successfully', allFestivals);

      return allFestivals;
    } catch (error) {
      this.logger.error(error.message);

      // Handle the error appropriately (logging, returning an error response, etc.)
      throw new Error('Failed to retrieve Festivals');
    }
  }

  async deleteFestivalById(festivalId: string): Promise<{ status: boolean; statusMessage: string }> {
    try {
      // Assuming you have a method in your repository to delete by ID
      const deletedFestival = await this.festivalsRepository.destroy({ where: { id: festivalId } });

      if (deletedFestival) {
        this.logger.debug('Festival deleted successfully');
        return { status: true, statusMessage: 'Festival deleted successfully' };
      } else {
        return { status: false, statusMessage: 'Festival not found' };
      }
    } catch (error) {
      this.logger.error(error.message);
      throw new Error('Failed to delete Festival');
    }
  }


 async updateFestivalById(
    festivalId: string,
    updatedData: {
      title?: string;
      startDate?: Date;
      endDate?: Date;
      file?: Express.Multer.File; // Assuming you are using Multer for file uploads
    },
  ): Promise<{ status: boolean; statusMessage: string }> {
    try {
      const existingFestival = await this.festivalsRepository.findByPk(festivalId);

      if (!existingFestival) {
        return { status: false, statusMessage: 'Festival not found' };
      }

      // // Update festival data
      // existingFestival.title = updatedData.title || existingFestival.title;
      // existingFestival.startDate = updatedData.startDate || existingFestival.startDate;
      // existingFestival.endDate = updatedData.endDate || existingFestival.endDate;

      // // Update festival image if provided
      // if (updatedData.file) {
      //   // Assuming you store the image data in the 'buffer' field
      //   existingFestival.file = updatedData.file.buffer;
      //   // If you want to store the image URL, you can still handle it accordingly
      // }

      await existingFestival.save();

      this.logger.debug('Festival updated successfully');
      return { status: true, statusMessage: 'Festival updated successfully' };
    } catch (error) {
      this.logger.error(error.message);
      throw new Error('Failed to update Festival');
    }
  }

  // Inside FestivalsService
async findFestivalByName(name: string): Promise<calenderEvents | null> {
  return this.festivalsRepository.findOne({
    where: { name },
  });
}



async createFestival(createFestivalDTO: CreateFestivalDTO) {
  try {
    // Check if the name of the festival already exists
    // const existingFestival = await this.findFestivalByName(createFestivalDTO.name);

    // if (existingFestival) {
    //   throw new Error('A festival with this name already exists. Choose a different name.');
    // }

    const festivalId = uuidv4(); // Generate a unique ID for the festival

          const optimizedImageBuffer = await sharp(createFestivalDTO.eventImage.buffer)
          .resize({ width: 800 }) // Set the desired width
          .toBuffer();

    // Create a new festival instance with default value 0 for hasSpotlight
    const newFestival = new this.festivalsRepository({
      id: festivalId,
      name: createFestivalDTO.name,
      date: createFestivalDTO.date,
      description: createFestivalDTO.description,
      hasSpotlight: createFestivalDTO.hasSpotlight ,
      eventImage: createFestivalDTO.eventImage ? optimizedImageBuffer : undefined,
      // Add other properties as needed
      hasSeva: createFestivalDTO.hasSeva,
      sevaId: createFestivalDTO.sevaId,
      hasDonation: createFestivalDTO.hasDonation,
      donationId: createFestivalDTO.donationId,
    });

    // Save the new festival to the database
    await newFestival.save();

    // Return the created festival without relying on the model
    return {
      id: newFestival.id,
      name: newFestival.name,
      date: newFestival.date,
      description: newFestival.description,
      hasSpotlight: newFestival.hasSpotlight,
      // Add other properties as needed
    };
  } catch (error) {
    console.error('Error creating festival:', error.message);
    throw new Error('Failed to create Festival.');
  }
}












}