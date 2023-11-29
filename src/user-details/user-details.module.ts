import { Module } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { userDetailsProviders } from '../user-details/user-details.providers';
@Module({
  providers: [UserDetailsService, ...userDetailsProviders],
  exports: [UserDetailsService],
})
export class UserDetailsModule {}
