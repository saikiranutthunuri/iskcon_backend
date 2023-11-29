import { Test, TestingModule } from '@nestjs/testing';
import { SevasService } from './sevas.service';

describe('SevasService', () => {
  let service: SevasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SevasService],
    }).compile();

    service = module.get<SevasService>(SevasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
