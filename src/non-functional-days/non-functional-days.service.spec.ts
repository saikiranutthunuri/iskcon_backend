import { Test, TestingModule } from '@nestjs/testing';
import { NonFunctionalDaysService } from './non-functional-days.service';
import { nonFunctionalDaysProviders } from './non-functional-days.provider';
import { nonFunctionalDays } from '../models/nonFunctionalDays';
import { getModelToken } from '@nestjs/sequelize';
import { DatabaseModule } from '../database/database.module';

describe('NonFunctionalDaysService', () => {
  let service: NonFunctionalDaysService;
  let model: typeof nonFunctionalDays;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [NonFunctionalDaysService, ...nonFunctionalDaysProviders],
    }).compile();

    service = module.get<NonFunctionalDaysService>(NonFunctionalDaysService);
    model = module.get<typeof nonFunctionalDays>(
      getModelToken(nonFunctionalDays),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all nonFunctionalDays from today', () => {
    console.log(service.findAllFromToday());
  });
});
