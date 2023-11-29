import { Module } from '@nestjs/common';
import { LiveStreamsService } from './live-streams.service';
import { liveStreams } from 'src/models';
import { liveStreamsProviders } from './live-stream.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [LiveStreamsService, ...liveStreamsProviders],
  exports:[LiveStreamsService]
})
export class LiveStreamsModule {}
