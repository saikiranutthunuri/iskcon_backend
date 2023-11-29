import { Module } from '@nestjs/common';
import { FestivalsService } from './festivals.service';
import { FestivalsController } from './festivals.controller';
import { DatabaseModule } from 'src/database/database.module';
import { festivalsProviders } from './festivals.provider';

@Module({
  imports: [DatabaseModule],
  providers: [FestivalsService, ...festivalsProviders],
  exports: [FestivalsService],
})
export class FestivalsModule {}

