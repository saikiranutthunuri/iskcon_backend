"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarEventsProviders = void 0;
const models_1 = require("../models");
exports.calendarEventsProviders = [
    {
        provide: 'CALENDAREVENTS_REPOSITORY',
        useValue: models_1.calenderEvents,
    },
];
//# sourceMappingURL=calendar-events.providers.js.map