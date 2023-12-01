/// <reference types="multer" />
import { Festivals } from 'src/models/festivals';
import { CreateFestivalDTO } from 'src/admin/admin.controller';
export declare class FestivalsService {
    private readonly festivalsRepository;
    private logger;
    constructor(festivalsRepository: typeof Festivals);
    findAll(): Promise<Festivals[]>;
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
    findFestivalByName(name: string): Promise<Festivals | null>;
    createFestival(createFestivalDTO: CreateFestivalDTO): Promise<{
        id: string;
        name: string;
        date: Date;
        description: string;
        hasSpotlight: number;
    }>;
}
