/// <reference types="multer" />
/// <reference types="node" />
import { HttpException } from '@nestjs/common';
import { AudioChantService } from 'src/audio-chant/audio-chant.service';
import { DonationsService } from 'src/donations/donations.service';
import { NonFunctionalDaysService } from 'src/non-functional-days/non-functional-days.service';
import { PromptFiltersService } from 'src/prompt-filters/prompt-filters.service';
import { SevasService } from 'src/sevas/sevas.service';
import { TickerTextService } from 'src/ticker-texts/ticker-texts.service';
import { LiveStreamsService } from 'src/live-streams/live-streams.service';
import { sevas } from 'src/models';
import { FestivalsService } from 'src/festivals/festivals.service';
export declare class CreateFestivalDTO {
    name: string;
    date: Date;
    description?: string;
    hasSpotlight?: number;
    eventImage?: Express.Multer.File;
    hasSeva?: number;
    sevaId?: string;
    hasDonation?: number;
    donationId?: string;
}
export declare class CreateDonationDTO {
    name: string;
    type: number;
    description?: string;
    targetAmount?: number;
    startDate: Date;
    endDate: Date;
    donationImage: Uint8Array;
}
export declare class UpdateDonationDTO extends CreateDonationDTO {
    donationId: string;
}
declare class CreateAudioChantDTO {
    link: string;
    audioBuffer: Buffer;
    userId: string;
}
declare class CreateNonFunctionalDaysDTO {
    occassionName: String;
    occassionDate: Date;
}
declare class CreateTickerTextDTO {
    file: any;
}
declare class CreateLiveStreamDTO {
    link: string;
}
export declare class SevaDTO {
    id: string;
    tenantId?: string;
    name: string;
    description?: string;
    sevaImage?: any;
    sevaImageBanner?: any;
    type: number;
    minAmount?: number;
    amountType: number;
    startDate?: Date;
    endDate?: Date;
    allowedCurrency: number;
    maxUsers: number;
    creationTime: Date;
    creatorId?: string;
    lastModificationTime?: Date;
    lastModifierId?: string;
    actionType: number;
}
export declare class CreateSevasDTO {
    name: string;
    type: number;
    description?: string;
    minAmount?: number;
    startDate: Date;
    endDate: Date;
    sevaImage: Uint8Array;
}
export declare class UpdateSevaDTO extends CreateSevasDTO {
    sevaId: string;
}
export declare class FestivalEventDTO {
    id: string;
    tenantId?: string;
    name: string;
    description?: string;
    eventImage?: any;
    bannerImage?: any;
    date: Date;
    hasDonation?: boolean;
    hasSeva?: boolean;
    donationId?: string;
    sevaId?: string;
    eventId?: string;
    hasEvent?: boolean;
    hasSpotlight?: boolean;
    spotlightId?: string;
}
declare class DeleteNonFunctionalDayDTO {
    occassionDate: Date;
}
export declare class AdminController {
    private readonly nonFunctionalDays;
    private readonly audioChantService;
    private readonly donationsService;
    private readonly promptFilterService;
    private readonly tickerTextService;
    private readonly sevasService;
    private readonly liveStreamsService;
    private readonly festivalsService;
    private logger;
    constructor(nonFunctionalDays: NonFunctionalDaysService, audioChantService: AudioChantService, donationsService: DonationsService, promptFilterService: PromptFiltersService, tickerTextService: TickerTextService, sevasService: SevasService, liveStreamsService: LiveStreamsService, festivalsService: FestivalsService);
    PostNonFunctionalDaysMethod(request: Request, createNonFunctionalDaysDTO: CreateNonFunctionalDaysDTO): Promise<import("src/models").nonFunctionalDays>;
    GetNonFunctionalDaysMethod(): Promise<import("src/models").nonFunctionalDays[]>;
    DeleteNonFunctionalDayMethod(deleteNonFunctionalDayDto: DeleteNonFunctionalDayDTO): Promise<number | void>;
    GetAllTransactionMethod(page?: number, limit?: number): void;
    GetDashboardOverviewReports(): string;
    CreateTickerTextMethod(request: Request, file: Express.Multer.File, createTickerTextDTO: CreateTickerTextDTO): Promise<void | import("src/models").tickerTexts>;
    PostPromptFilterMethod(request: Request, createPromptFilterDTO: any): Promise<import("src/models").promptFilters>;
    DeletePromptFilterMethod(promptFilterId: string): void;
    GetNotificationAndUpdatesMethod(): void;
    CreateAudioChantMethod(request: Request, file: Express.Multer.File, createAudioChantDTO: CreateAudioChantDTO): Promise<void>;
    GetAllDidTransactions(): void;
    GetUserMessagesFromUsers(): void;
    createLiveStream(createLiveStreamDTO: CreateLiveStreamDTO): Promise<{
        status: boolean;
        statusMessage: string;
        data: null;
    }>;
    createDonation(createDonationDTO: CreateDonationDTO, donationImage: Express.Multer.File): Promise<import("src/models").donations>;
    updateDonation(donationId: string, updateDonationDTO: UpdateDonationDTO, donationImage: Express.Multer.File): Promise<import("src/models").donations>;
    GetAllDonationsMethod(request: Request): Promise<import("src/models").donations[]>;
    GetDonationsByDonationIdMethod(request: Request, donationId: string): Promise<HttpException | import("src/models").donations>;
    DeleteDonation(request: Request, donationId: any): Promise<number>;
    createSeva(createSevaDTO: CreateSevasDTO, sevaImage: Express.Multer.File): Promise<sevas>;
    updateSeva(sevaId: string, updateSevaDTO: UpdateSevaDTO, sevaImage: Express.Multer.File): Promise<sevas>;
    GetAllSevasMethod(request: Request): Promise<sevas[]>;
    GetSevasBySevaIdMethod(request: Request, sevaId: string): Promise<HttpException | sevas>;
    DeleteSevaMethod(request: Request, sevaId: any): Promise<number | void>;
    createFestival(createFestivalDTO: CreateFestivalDTO, eventImage: Express.Multer.File): Promise<{
        status: boolean;
        statusMessage: string;
        data: {
            id: string;
            name: string;
            date: Date;
            description: string;
            hasSpotlight: number;
        };
    }>;
    GetFestivalMethod(request: Request): void;
    getAllFestivals(): Promise<{
        status: boolean;
        statusMessage: string;
        data: any[];
    }>;
    deleteFestival(festivalId: string): Promise<{
        status: boolean;
        statusMessage: string;
    }>;
}
export {};
