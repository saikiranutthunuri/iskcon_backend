import { Module } from '@nestjs/common';
import { TickerTextService } from './ticker-texts.service';
import { DatabaseModule } from 'src/database/database.module';
import { tickerTextsProviders } from './ticker-texts.provider';

@Module({
  imports: [DatabaseModule],
  providers: [TickerTextService, ...tickerTextsProviders],
  exports: [TickerTextService]
})
export class TickerTextModule {}
