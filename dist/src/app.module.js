"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const non_functional_days_module_1 = require("./non-functional-days/non-functional-days.module");
const audio_chant_module_1 = require("./audio-chant/audio-chant.module");
const admin_module_1 = require("./admin/admin.module");
const transactions_module_1 = require("./transactions/transactions.module");
const razor_pay_module_1 = require("./razor-pay/razor-pay.module");
const users_module_1 = require("./users/users.module");
const sequelize_1 = require("@nestjs/sequelize");
const dlt_module_1 = require("./dlt/dlt.module");
const authentication_module_1 = require("./authentication/authentication.module");
const config_1 = require("@nestjs/config");
const health_controller_1 = require("./health/health.controller");
const health_module_1 = require("./health/health.module");
const core_1 = require("@nestjs/core");
const authentication_guard_1 = require("./authentication/authentication.guard");
const user_details_module_1 = require("./user-details/user-details.module");
const user_logins_module_1 = require("./user-logins/user-logins.module");
const user_seculity_logs_module_1 = require("./user-seculity-logs/user-seculity-logs.module");
const spot_light_events_module_1 = require("./spot-light-events/spot-light-events.module");
const donations_module_1 = require("./donations/donations.module");
const sevas_module_1 = require("./sevas/sevas.module");
const nodes_module_1 = require("./nodes/nodes.module");
const roles_module_1 = require("./roles/roles.module");
const sms_messages_module_1 = require("./sms-messages/sms-messages.module");
const ticker_texts_module_1 = require("./ticker-texts/ticker-texts.module");
const live_streams_module_1 = require("./live-streams/live-streams.module");
const calendar_events_module_1 = require("./calendar-events/calendar-events.module");
const festivals_module_1 = require("./festivals/festivals.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            non_functional_days_module_1.NonFunctionalDaysModule,
            audio_chant_module_1.AudioChantModule,
            admin_module_1.AdminModule,
            transactions_module_1.TransactionsModule,
            razor_pay_module_1.RazorPayModule,
            users_module_1.UsersModule,
            dlt_module_1.RubixModule,
            sequelize_1.SequelizeModule,
            authentication_module_1.AuthenticationModule,
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env.local', '.env.server'],
                isGlobal: true,
            }),
            health_module_1.HealthModule,
            user_details_module_1.UserDetailsModule,
            user_logins_module_1.UserLoginsModule,
            user_seculity_logs_module_1.UserSeculityLogsModule,
            spot_light_events_module_1.SpotLightEventsModule,
            donations_module_1.DonationsModule,
            sevas_module_1.SevasModule,
            nodes_module_1.NodesModule,
            roles_module_1.RolesModule,
            sms_messages_module_1.SmsMessagesModule,
            ticker_texts_module_1.TickerTextModule,
            live_streams_module_1.LiveStreamsModule,
            calendar_events_module_1.CalendarEventsModule,
            festivals_module_1.FestivalsModule,
        ],
        controllers: [app_controller_1.AppController, health_controller_1.HealthController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: authentication_guard_1.AuthenticationGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map