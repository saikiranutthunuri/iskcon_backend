"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.festivalsProviders = void 0;
const festivals_1 = require("../models/festivals");
exports.festivalsProviders = [
    {
        provide: 'FESTIVALS_REPOSITORY',
        useValue: festivals_1.Festivals,
    },
];
//# sourceMappingURL=festivals.provider.js.map