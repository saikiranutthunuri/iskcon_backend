import { Test, TestingModule } from '@nestjs/testing';
import { PromptFiltersService } from './prompt-filters.service';

describe('PromptFiltersService', () => {
  let service: PromptFiltersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromptFiltersService],
    }).compile();

    service = module.get<PromptFiltersService>(PromptFiltersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
