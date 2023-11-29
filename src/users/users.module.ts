import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';
import { UserDetailsModule } from 'src/user-details/user-details.module';
import { TickerTextModule } from 'src/ticker-texts/ticker-texts.module';
import { AudioChantModule } from 'src/audio-chant/audio-chant.module';
import { LiveStreamsModule } from 'src/live-streams/live-streams.module';

@Module({
  imports: [UserDetailsModule, TickerTextModule, AudioChantModule , LiveStreamsModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
