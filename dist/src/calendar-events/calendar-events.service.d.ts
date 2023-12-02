import { calenderEvents } from 'src/models';
import { CreateFestivalDTO } from 'src/admin/admin.controller';
import { UpdateFestivalDTO } from 'src/admin/admin.controller';
export declare class CalendarEventsService {
    private calendarEventRepository;
    private logger;
    constructor(calendarEventRepository: typeof calenderEvents);
    createFestival(createFestivalDTO: CreateFestivalDTO): Promise<{
        id: string;
        name: string;
        date: Date;
        description: string;
        hasSpotlight: string;
    }>;
    getFestivalById(festivalId: string): Promise<calenderEvents>;
    getAllFestivals(): Promise<calenderEvents[]>;
    deleteFestivalById(festivalId: string): Promise<{
        message: string;
    }>;
    updateFestival(festivalId: string, updateFestivalDTO: UpdateFestivalDTO): Promise<{
        id: string;
        name: string;
        date: Date;
        description: string;
        hasSpotlight: string;
        hasSeva: string;
        hasDonation: string;
        sevaID: string;
        donationID: string;
    }>;
}
