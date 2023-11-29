import { Module } from '@nestjs/common';
import { AudioChantService } from './audio-chant.service';
import { audioChantsProviders } from './audio-chant.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [AudioChantService, ...audioChantsProviders],
  exports: [AudioChantService],
})
export class AudioChantModule {}
