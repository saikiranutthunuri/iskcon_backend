import { FestivalsService } from './festivals.service';
import { CreateFestivalDto } from './dto/create-festival.dto';
export declare class CreateFestivalWithFileDto extends CreateFestivalDto {
    eventImage: any;
    name: string;
    startDate: Date;
    endDate: Date;
}
export declare class FestivalsController {
    private readonly festivalsService;
    constructor(festivalsService: FestivalsService);
    create(file: any, createFestivalDto: CreateFestivalDto): Promise<any>;
}
