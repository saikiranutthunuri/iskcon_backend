"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioChantsProviders = void 0;
const models_1 = require("../models");
exports.audioChantsProviders = [
    {
        provide: 'AUDIOCHANTS_REPOSITORY',
        useValue: models_1.audioChants,
    },
];
//# sourceMappingURL=audio-chant.providers.js.map