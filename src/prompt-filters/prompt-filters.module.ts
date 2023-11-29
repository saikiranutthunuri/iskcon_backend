import { Module } from '@nestjs/common';
import { PromptFiltersService } from './prompt-filters.service';
import { promptFiltersProviders } from './prompt-filters.providers';

@Module({
  providers: [PromptFiltersService, ...promptFiltersProviders],
  exports: [PromptFiltersService],
})
export class PromptFiltersModule {}
