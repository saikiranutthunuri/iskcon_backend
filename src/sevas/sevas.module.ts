import { Module } from '@nestjs/common';
import { SevasService } from './sevas.service';
import { sevasProviders } from './sevas.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [SevasService, ...sevasProviders],
  imports: [DatabaseModule],
  exports: [SevasService]
})
export class SevasModule {}
