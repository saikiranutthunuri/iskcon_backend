import { Test, TestingModule } from '@nestjs/testing';
import { TickerTextService } from './ticker-texts.service';

describe('TickerTextService', () => {
  let service: TickerTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TickerTextService],
    }).compile();

    service = module.get<TickerTextService>(TickerTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
