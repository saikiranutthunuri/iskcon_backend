import { Test, TestingModule } from '@nestjs/testing';
import { AudioChantService } from './audio-chant.service';

describe('AudioChantService', () => {
  let service: AudioChantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudioChantService],
    }).compile();

    service = module.get<AudioChantService>(AudioChantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
