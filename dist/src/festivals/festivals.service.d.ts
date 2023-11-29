/// <reference types="multer" />
import { CreateFestivalDto } from './dto/create-festival.dto';
import { Festivals } from 'src/models/festivals';
export declare class FestivalsService {
    private readonly festivalsRepository;
    private logger;
    constructor(festivalsRepository: typeof Festivals);
    create(createFestivalDto: CreateFestivalDto): Promise<{
        id: string;
        title: string;
        startDate: Date;
        endDate: Date;
        message: string;
    }>;
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
}
