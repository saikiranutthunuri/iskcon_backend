import { Module } from '@nestjs/common';
import { NonFunctionalDaysService } from './non-functional-days.service';
import { nonFunctionalDaysProviders } from './non-functional-days.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [NonFunctionalDaysService, ...nonFunctionalDaysProviders],
  exports: [NonFunctionalDaysService],
})
export class NonFunctionalDaysModule {}
