import { donations } from 'src/models';
import { donationsAttributes } from 'src/models';
import { CreateDonationDTO } from 'src/admin/admin.controller';
export declare class DonationsService {
    private donationsRepository;
    private logger;
    constructor(donationsRepository: typeof donations);
    createDonation(createDonationDTO: CreateDonationDTO): Promise<donations>;
    deleteDonation(donationId: any): Promise<number>;
    updateDonation(donationId: string, updateData: Partial<donationsAttributes>): Promise<donations>;
    findDonations(): Promise<donations[]>;
    findDonationByDonationId(donationId: any): Promise<donations>;
}
