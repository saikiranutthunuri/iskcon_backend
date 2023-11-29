"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickerTextModule = void 0;
const common_1 = require("@nestjs/common");
const ticker_texts_service_1 = require("./ticker-texts.service");
const database_module_1 = require("../database/database.module");
const ticker_texts_provider_1 = require("./ticker-texts.provider");
let TickerTextModule = class TickerTextModule {
};
exports.TickerTextModule = TickerTextModule;
exports.TickerTextModule = TickerTextModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [ticker_texts_service_1.TickerTextService, ...ticker_texts_provider_1.tickerTextsProviders],
        exports: [ticker_texts_service_1.TickerTextService]
    })
], TickerTextModule);
//# sourceMappingURL=ticker-texts.module.js.map