import { Module } from '@nestjs/common';
import { UserLoginsService } from './user-logins.service';
import { userLoginsProviders } from './user-logins.providers';

@Module({
  providers: [UserLoginsService, ...userLoginsProviders],
})
export class UserLoginsModule {}
