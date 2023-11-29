import { Inject, Injectable } from '@nestjs/common';
import { nestSecurityLogs } from 'src/models';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UserSecurityLogsService {
  constructor(
    @Inject('NESTSECURITYLOGS_REPOSITORY')
    private readonly nestSecurityLogsRepository: typeof nestSecurityLogs,
  ) {}
  log(userId, browserInfo: string) {
    return this.nestSecurityLogsRepository
      .create({
        id: uuidv4(),
        userId,
        browserInfo,
        creationTime: new Date(),
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
