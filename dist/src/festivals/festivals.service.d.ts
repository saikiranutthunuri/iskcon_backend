/// <reference types="multer" />
import { CreateFestivalDTO } from 'src/admin/admin.controller';
import { calenderEvents } from 'src/models';
export declare class FestivalsService {
    private readonly festivalsRepository;
    private logger;
    constructor(festivalsRepository: typeof calenderEvents);
    findAll(): Promise<calenderEvents[]>;
    deleteFestivalById(festivalId: string): Promise<{
        status: boolean;
        statusMessage: string;
    }>;
    updateFestivalById(festivalId: string, updatedData: {
        title?: string;
        startDate?: Date;
        endDate?: Date;
        file?: Express.Multer.File;
    }): Promise<{
        status: boolean;
        statusMessage: string;
    }>;
    findFestivalByName(name: string): Promise<calenderEvents | null>;
    createFestival(createFestivalDTO: CreateFestivalDTO): Promise<{
        id: string;
        name: string;
        date: Date;
        description: string;
        hasSpotlight: string;
    }>;
}
