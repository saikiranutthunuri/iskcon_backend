import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { NonFunctionalDaysModule } from '../non-functional-days/non-functional-days.module';
import { AudioChantModule } from 'src/audio-chant/audio-chant.module';
import { DonationsModule } from 'src/donations/donations.module';
import { PromptFiltersModule } from 'src/prompt-filters/prompt-filters.module';
import { TickerTextModule } from 'src/ticker-texts/ticker-texts.module';
import { SevasModule } from 'src/sevas/sevas.module';
import { LiveStreamsModule } from 'src/live-streams/live-streams.module';
import { FestivalsModule } from 'src/festivals/festivals.module';
import { CalendarEventsModule } from 'src/calendar-events/calendar-events.module';


@Module({
  imports: [
    NonFunctionalDaysModule,
    AudioChantModule,
    DonationsModule,
    PromptFiltersModule,
    TickerTextModule,
    SevasModule,
    LiveStreamsModule,
    FestivalsModule,
    CalendarEventsModule
  ],
  controllers: [AdminController],
})
export class AdminModule {}
