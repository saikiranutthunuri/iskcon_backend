"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotLightEventsModule = void 0;
const common_1 = require("@nestjs/common");
const spot_light_events_service_1 = require("./spot-light-events.service");
const spot_light_events_provider_1 = require("./spot-light-events.provider");
let SpotLightEventsModule = class SpotLightEventsModule {
};
exports.SpotLightEventsModule = SpotLightEventsModule;
exports.SpotLightEventsModule = SpotLightEventsModule = __decorate([
    (0, common_1.Module)({
        providers: [spot_light_events_service_1.SpotLightEventsService, ...spot_light_events_provider_1.spotLightEventsProviders],
    })
], SpotLightEventsModule);
//# sourceMappingURL=spot-light-events.module.js.map