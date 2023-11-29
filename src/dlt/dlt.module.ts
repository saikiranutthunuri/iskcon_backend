import { Module } from '@nestjs/common';
import { RubixService } from './dlt.service';

@Module({
  providers: [RubixService],
  exports: [RubixService],
})
export class RubixModule {}
