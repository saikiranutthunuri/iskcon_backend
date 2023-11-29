"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tickerTextsProviders = void 0;
const models_1 = require("../models");
exports.tickerTextsProviders = [
    {
        provide: 'TICKERTEXTS_REPOSITORY',
        useValue: models_1.tickerTexts,
    },
];
//# sourceMappingURL=ticker-texts.provider.js.map