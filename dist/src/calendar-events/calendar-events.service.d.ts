import { calenderEvents } from 'src/models';
export declare class CalendarEventsService {
    private calendarEventRepository;
    private logger;
    constructor(calendarEventRepository: typeof calenderEvents);
    createCalendarEvent(userId: any, calendarEventDTO: any): Promise<calenderEvents>;
    findCalendarEventById(calendarEventId: any): Promise<calenderEvents>;
    findAllCalendarEvents(): Promise<void | calenderEvents[]>;
    deleteCalendarEvent(calendarId: any): <TResult = never>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>) => Promise<number | TResult>;
}
