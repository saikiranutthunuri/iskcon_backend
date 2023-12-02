"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const non_functional_days_module_1 = require("../non-functional-days/non-functional-days.module");
const audio_chant_module_1 = require("../audio-chant/audio-chant.module");
const donations_module_1 = require("../donations/donations.module");
const prompt_filters_module_1 = require("../prompt-filters/prompt-filters.module");
const ticker_texts_module_1 = require("../ticker-texts/ticker-texts.module");
const sevas_module_1 = require("../sevas/sevas.module");
const live_streams_module_1 = require("../live-streams/live-streams.module");
const festivals_module_1 = require("../festivals/festivals.module");
const calendar_events_module_1 = require("../calendar-events/calendar-events.module");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            non_functional_days_module_1.NonFunctionalDaysModule,
            audio_chant_module_1.AudioChantModule,
            donations_module_1.DonationsModule,
            prompt_filters_module_1.PromptFiltersModule,
            ticker_texts_module_1.TickerTextModule,
            sevas_module_1.SevasModule,
            live_streams_module_1.LiveStreamsModule,
            festivals_module_1.FestivalsModule,
            calendar_events_module_1.CalendarEventsModule
        ],
        controllers: [admin_controller_1.AdminController],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map