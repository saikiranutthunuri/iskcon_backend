import { Test, TestingModule } from '@nestjs/testing';
import { UserDidsService } from './user-dids.service';

describe('UserDidsService', () => {
  let service: UserDidsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDidsService],
    }).compile();

    service = module.get<UserDidsService>(UserDidsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
