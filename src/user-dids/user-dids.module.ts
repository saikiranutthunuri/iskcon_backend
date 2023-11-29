import { Module } from '@nestjs/common';
import { UserDidsService } from './user-dids.service';
import { userDidsProviders } from './user-dids.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [UserDidsService],
  providers: [UserDidsService, ...userDidsProviders],
})
export class UserDidsModule {}
