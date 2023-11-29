import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { NonFunctionalDaysModule } from './non-functional-days/non-functional-days.module';
import { AudioChantModule } from './audio-chant/audio-chant.module';
import { AdminModule } from './admin/admin.module';
import { TransactionsModule } from './transactions/transactions.module';
import { RazorPayModule } from './razor-pay/razor-pay.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { RubixModule } from './dlt/dlt.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health/health.controller';
import { HealthModule } from './health/health.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserLoginsModule } from './user-logins/user-logins.module';
import { UserSeculityLogsModule } from './user-seculity-logs/user-seculity-logs.module';
import { SpotLightEventsModule } from './spot-light-events/spot-light-events.module';
import { DonationsModule } from './donations/donations.module';
import { PromptFiltersModule } from './prompt-filters/prompt-filters.module';
import { SevasModule } from './sevas/sevas.module';
import { NodesModule } from './nodes/nodes.module';
import { RolesModule } from './roles/roles.module';
import { SmsMessagesModule } from './sms-messages/sms-messages.module';
import { TickerTextModule } from './ticker-texts/ticker-texts.module';
import { LiveStreamsModule } from './live-streams/live-streams.module';
import { CalendarEventsModule } from './calendar-events/calendar-events.module';
import { FestivalsModule } from './festivals/festivals.module';

@Module({
  imports: [
    DatabaseModule,
    NonFunctionalDaysModule,
    AudioChantModule,
    AdminModule,
    TransactionsModule,
    RazorPayModule,
    UsersModule,
    RubixModule,
    SequelizeModule,
    AuthenticationModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.server'],
      isGlobal: true,
    }),
    HealthModule,
    UserDetailsModule,
    UserLoginsModule,
    UserSeculityLogsModule,
    SpotLightEventsModule,
    DonationsModule,
    SevasModule,
    NodesModule,
    RolesModule,
    SmsMessagesModule,
    TickerTextModule,
    LiveStreamsModule,
    CalendarEventsModule,
    FestivalsModule,
  ],
  controllers: [AppController, HealthController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
  ],
})
export class AppModule {}
