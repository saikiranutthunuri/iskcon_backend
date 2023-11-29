import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { donationsProviders } from './donations.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [DonationsService, ...donationsProviders],
  exports: [DonationsService],
})
export class DonationsModule {}
