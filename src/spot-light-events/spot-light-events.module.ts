import { Module } from '@nestjs/common';
import { SpotLightEventsService } from './spot-light-events.service';
import { spotLightEventsProviders } from './spot-light-events.provider';

@Module({
  providers: [SpotLightEventsService, ...spotLightEventsProviders],
})
export class SpotLightEventsModule {}
