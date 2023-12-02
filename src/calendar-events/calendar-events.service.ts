import { Inject, Injectable, Logger , NotFoundException , BadRequestException} from '@nestjs/common';
import { Op } from 'sequelize';
import { calenderEvents } from 'src/models';
import * as sharp from 'sharp';
import { UUID } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { CreateFestivalDTO } from 'src/admin/admin.controller';
import { UpdateFestivalDTO } from 'src/admin/admin.controller';
@Injectable()
export class CalendarEventsService {
    private logger:Logger = new Logger(CalendarEventsService.name)

    constructor(
        @Inject("CALENDAREVENTS_REPOSITORY") private calendarEventRepository: typeof calenderEvents
    ) {

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
    const newFestival = new this.calendarEventRepository({
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

async getFestivalById(festivalId: string) {
  try {
    const festival = await this.calendarEventRepository.findByPk(festivalId);
    if (!festival) {
      throw new NotFoundException('Festival not found');
    }

   return festival

  } catch (error) {
    console.error('Error getting festival by ID:', error.message);
    throw new Error('Failed to get festival by ID.');
  }
}

async getAllFestivals() {
  try {
    const festivals = await this.calendarEventRepository.findAll();
    return festivals
  } catch (error) {
    console.error('Error getting all festivals:', error.message);
    throw new Error('Failed to get festivals.');
  }
}

async deleteFestivalById(festivalId: string) {
  try {
    const festival = await this.calendarEventRepository.findByPk(festivalId);
    if (!festival) {
      throw new NotFoundException('Festival not found');
    }

    await festival.destroy();
    return {
      message: 'Festival deleted successfully',
    };
  } catch (error) {
    console.error('Error deleting festival by ID:', error.message);
    throw new Error('Failed to delete festival by ID.');
  }
}


async updateFestival(festivalId: string, updateFestivalDTO: UpdateFestivalDTO) {
  try {
    // Check if the festival with the given ID exists
    const existingFestival = await this.calendarEventRepository.findByPk(festivalId);
    if (!existingFestival) {
      throw new NotFoundException('Festival not found');
    }

    // Update the festival properties
    existingFestival.name = updateFestivalDTO.name;
    existingFestival.date = updateFestivalDTO.date;
    existingFestival.description = updateFestivalDTO.description;
    existingFestival.hasSpotlight = updateFestivalDTO.hasSpotlight;
    existingFestival.hasSeva = updateFestivalDTO.hasSeva;
    existingFestival.sevaId = updateFestivalDTO.sevaId;
    existingFestival.hasDonation = updateFestivalDTO.hasDonation;
    existingFestival.donationId = updateFestivalDTO.donationId;

    // Update the eventImage if provided
    if (updateFestivalDTO.eventImage) {
      const optimizedImageBuffer = await sharp(updateFestivalDTO.eventImage.buffer)
        .resize({ width: 800 }) // Set the desired width
        .toBuffer();
      existingFestival.eventImage = optimizedImageBuffer;
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

    // Save the updated festival to the database
    await existingFestival.save();

    // Return the updated festival
    return {
      id: existingFestival.id,
      name: existingFestival.name,
      date: existingFestival.date,
      description: existingFestival.description,
      hasSpotlight: existingFestival.hasSpotlight,
      hasSeva: existingFestival.hasSeva,
      hasDonation: existingFestival.hasDonation,
      sevaID: existingFestival.sevaId,
      donationID: existingFestival.donationId
      // Add other properties as needed
    };
  } catch (error) {
    console.error('Error updating festival:', error.message);
    throw new Error('Failed to update Festival.');
  }
}




}
