"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventsModule = void 0;
const common_1 = require("@nestjs/common");
const calendar_events_service_1 = require("./calendar-events.service");
const database_module_1 = require("../database/database.module");
const calendar_events_providers_1 = require("./calendar-events.providers");
let CalendarEventsModule = class CalendarEventsModule {
};
exports.CalendarEventsModule = CalendarEventsModule;
exports.CalendarEventsModule = CalendarEventsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [calendar_events_service_1.CalendarEventsService, ...calendar_events_providers_1.calendarEventsProviders],
        exports: [calendar_events_service_1.CalendarEventsService]
    })
], CalendarEventsModule);
//# sourceMappingURL=calendar-events.module.js.map