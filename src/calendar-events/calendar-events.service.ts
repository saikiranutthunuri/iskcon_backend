import { Inject, Injectable, Logger } from '@nestjs/common';
import { Op } from 'sequelize';
import { calenderEvents } from 'src/models';

@Injectable()
export class CalendarEventsService {
    private logger:Logger = new Logger(CalendarEventsService.name)

    constructor(
        @Inject("CALENDAREVENTS_REPOSITORY") private calendarEventRepository: typeof calenderEvents
    ) {

    }

    createCalendarEvent(userId, calendarEventDTO) {
        return this.calendarEventRepository.create({
            ...calendarEventDTO,
            creatorId: userId,
            creationTime: new Date()
        })
    }

    findCalendarEventById(calendarEventId) {
        return this.calendarEventRepository.findOne({
            where: {
                id: {
                    [Op.eq]: calendarEventId
                }
            }
        })
    }
    
    findAllCalendarEvents() {
        return this.calendarEventRepository.findAll().catch( e=> {
            this.logger.error(e)
        })
    }

    deleteCalendarEvent(calendarId) {
        return this.calendarEventRepository.destroy( {
            where: {
                id: calendarId
            }
        }).catch
    }
}
