import { Inject, Injectable } from '@nestjs/common';
import { promptFilters } from 'src/models';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PromptFiltersService {
  constructor(
    @Inject('PROMPTFILTERS_REPOSITORY')
    private readonly promptFiltersRepository: typeof promptFilters,
  ) {}

  createPromptFilter(createPromptFilterDTO) {
    return this.promptFiltersRepository.create({
      id: uuidv4(),
      ...createPromptFilterDTO,
    });
  }
}
