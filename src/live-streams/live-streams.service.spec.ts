import { Test, TestingModule } from '@nestjs/testing';
import { LiveStreamsService } from './live-streams.service';

describe('LiveStreamsService', () => {
  let service: LiveStreamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveStreamsService],
    }).compile();

    service = module.get<LiveStreamsService>(LiveStreamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
