"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spotLightEventsProviders = void 0;
const models_1 = require("../models");
exports.spotLightEventsProviders = [
    {
        provide: 'SPOTLIGHTEVENTS_REPOSITORY',
        useValue: models_1.spotLightEvents,
    },
];
//# sourceMappingURL=spot-light-events.provider.js.map