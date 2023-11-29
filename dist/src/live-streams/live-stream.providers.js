"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liveStreamsProviders = void 0;
const models_1 = require("../models");
exports.liveStreamsProviders = [
    {
        provide: 'LIVESTREAMS_REPOSITORY',
        useValue: models_1.liveStreams,
    },
];
//# sourceMappingURL=live-stream.providers.js.map