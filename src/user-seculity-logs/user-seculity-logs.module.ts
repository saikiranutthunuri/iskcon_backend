import { Module } from '@nestjs/common';
import { userSecurityLogsProviders } from './user-security-logs.provider';
import { UserSecurityLogsService } from './user-security-logs.service';

@Module({
  providers: [UserSecurityLogsService, ...userSecurityLogsProviders],
  exports: [UserSecurityLogsService],
})
export class UserSeculityLogsModule {}
