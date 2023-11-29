"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var DonationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
let DonationsService = DonationsService_1 = class DonationsService {
    constructor(donationsRepository) {
        this.donationsRepository = donationsRepository;
        this.logger = new common_1.Logger(DonationsService_1.name);
    }
    async createDonation(createDonationDTO) {
        const donationId = (0, uuid_1.v4)();
        const newDonation = new this.donationsRepository({
            id: donationId,
            name: createDonationDTO.name,
            type: createDonationDTO.type,
            description: createDonationDTO.description,
            targetAmount: createDonationDTO.targetAmount,
            startDate: createDonationDTO.startDate,
            endDate: createDonationDTO.endDate,
        });
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
    async updateDonation(donationId, updateData) {
        const donation = await this.donationsRepository.findOne({
            where: {
                id: donationId,
            },
        });
        if (!donation) {
            throw new Error('Donation not found');
        }
        await donation.update(Object.assign({}, updateData));
        return donation;
    }
    findDonations() {
        return this.donationsRepository.findAll();
    }
    findDonationByDonationId(donationId) {
        return this.donationsRepository.findOne({
            where: {
                id: {
                    [sequelize_1.Op.eq]: donationId,
                },
            },
        });
    }
};
exports.DonationsService = DonationsService;
exports.DonationsService = DonationsService = DonationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DONATIONS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], DonationsService);
//# sourceMappingURL=donations.service.js.map