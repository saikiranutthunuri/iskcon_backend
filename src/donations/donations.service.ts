import { Inject, Injectable, Logger } from '@nestjs/common';
import { Op } from 'sequelize';
import { donations  } from 'src/models';
import { v4 as uuidv4 } from 'uuid';
import { donationsAttributes } from 'src/models'
import { CreateDonationDTO , CreateFestivalDTO, UpdateDonationDTO  } from 'src/admin/admin.controller';
import * as sharp from 'sharp';

@Injectable()
export class DonationsService {
  private logger: Logger = new Logger(DonationsService.name);

  constructor(
    @Inject('DONATIONS_REPOSITORY')
    private donationsRepository: typeof donations,
  ) {}

    async createDonation(createDonationDTO: CreateDonationDTO) {
    const donationId = uuidv4(); // Generate a unique ID for the donation
    
     const optimizedImageBuffer = await sharp(createDonationDTO.donationImage.buffer)
        .resize({ width: 800 }) // Set the desired width
        .toBuffer();
   
    // Create a new donation instance
    const newDonation = new this.donationsRepository({
      id: donationId,
      name: createDonationDTO.name,
      type: createDonationDTO.type,
      description: createDonationDTO.description,
      targetAmount: createDonationDTO.targetAmount,
      startDate: createDonationDTO.startDate,
      endDate: createDonationDTO.endDate,
      donationImage: optimizedImageBuffer
      // Add other properties as needed
    });

    // Save the new donation to the database
    await newDonation.save();

    return newDonation;
  }
  


  deleteDonation(donationId) {
    return this.donationsRepository.destroy({
      where: {
        id: donationId,
      },
    });
  }

    async updateDonation(donationId: string, updateData: Partial<donationsAttributes>) {
    const donation = await this.donationsRepository.findOne({
      where: {
        id: donationId,
      },
    });

    if (!donation) {
      throw new Error('Donation not found');
    }

    // Only update the fields that are present in the updateData
    await donation.update({
      ...updateData,
      // lastModificationTime: new Date(),
    });

    return donation;
  }

  findDonations() {
    return this.donationsRepository.findAll();
  }

  findDonationByDonationId(donationId) {
    return this.donationsRepository.findOne({
      where: {
        id: {
          [Op.eq]: donationId,
        },
      },
    });
  }
}
