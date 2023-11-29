"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const users_provider_1 = require("./users.provider");
const user_details_module_1 = require("../user-details/user-details.module");
const ticker_texts_module_1 = require("../ticker-texts/ticker-texts.module");
const audio_chant_module_1 = require("../audio-chant/audio-chant.module");
const live_streams_module_1 = require("../live-streams/live-streams.module");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [user_details_module_1.UserDetailsModule, ticker_texts_module_1.TickerTextModule, audio_chant_module_1.AudioChantModule, live_streams_module_1.LiveStreamsModule],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, ...users_provider_1.usersProviders],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map