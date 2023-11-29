import { Module } from '@nestjs/common';
import { CalendarEventsService } from './calendar-events.service';
import { DatabaseModule } from 'src/database/database.module';
import { calendarEventsProviders } from './calendar-events.providers';

@Module({
  imports:[DatabaseModule],
  providers: [CalendarEventsService, ...calendarEventsProviders],
  exports:[CalendarEventsService]
})
export class CalendarEventsModule {}
