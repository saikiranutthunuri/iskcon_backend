import { Injectable, Logger, Inject } from '@nestjs/common';
import { CreateFestivalDto } from './dto/create-festival.dto';
import { Festivals } from 'src/models/festivals';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FestivalsService {
  private logger: Logger = new Logger(FestivalsService.name);

  constructor(
    @Inject('FESTIVALS_REPOSITORY')
    private readonly festivalsRepository: typeof Festivals,
  ) {}

  async create(createFestivalDto: CreateFestivalDto): Promise<{ id: string; title: string; startDate: Date; endDate: Date; message: string }> {
    try {
      // Assuming you handle the file upload logic separately

      const { title, file, startDate, endDate } = createFestivalDto;

      // Save the festival details to the database
      const newFestival = await this.festivalsRepository.create({
        id: uuidv4(),
        title: title,
        file: file, // Adjust based on your file handling logic
        startDate: startDate,
        endDate: endDate,
      });

      this.logger.debug('Festival created successfully', newFestival);

      return {
        id: newFestival.id,
        title: newFestival.title,
        startDate: newFestival.startDate,
        endDate: newFestival.endDate,
        message: 'Festival created successfully',
      };
    } catch (error) {
      this.logger.error(error.message);

      // Handle the error appropriately (logging, returning an error response, etc.)
      throw new Error('Failed to create Festival');
    }
  }

  async findAll(): Promise<Festivals[]> {
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

      // Update festival data
      existingFestival.title = updatedData.title || existingFestival.title;
      existingFestival.startDate = updatedData.startDate || existingFestival.startDate;
      existingFestival.endDate = updatedData.endDate || existingFestival.endDate;

      // Update festival image if provided
      if (updatedData.file) {
        // Assuming you store the image data in the 'buffer' field
        existingFestival.file = updatedData.file.buffer;
        // If you want to store the image URL, you can still handle it accordingly
      }

      await existingFestival.save();

      this.logger.debug('Festival updated successfully');
      return { status: true, statusMessage: 'Festival updated successfully' };
    } catch (error) {
      this.logger.error(error.message);
      throw new Error('Failed to update Festival');
    }
  }


}