"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveStreamsModule = void 0;
const common_1 = require("@nestjs/common");
const live_streams_service_1 = require("./live-streams.service");
const live_stream_providers_1 = require("./live-stream.providers");
const database_module_1 = require("../database/database.module");
let LiveStreamsModule = class LiveStreamsModule {
};
exports.LiveStreamsModule = LiveStreamsModule;
exports.LiveStreamsModule = LiveStreamsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [live_streams_service_1.LiveStreamsService, ...live_stream_providers_1.liveStreamsProviders],
        exports: [live_streams_service_1.LiveStreamsService]
    })
], LiveStreamsModule);
//# sourceMappingURL=live-streams.module.js.map