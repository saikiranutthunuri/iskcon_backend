import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from '../users/users.module';
import { RubixModule } from 'src/dlt/dlt.module';
import { UserDetailsModule } from 'src/user-details/user-details.module';
import { UserSeculityLogsModule } from 'src/user-seculity-logs/user-seculity-logs.module';
import { UserDidsModule } from 'src/user-dids/user-dids.module';
import { NodesModule } from 'src/nodes/nodes.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
    UsersModule,
    JwtModule,
    RubixModule,
    UserDetailsModule,
    UserSeculityLogsModule,
    UserDidsModule,
    NodesModule
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
