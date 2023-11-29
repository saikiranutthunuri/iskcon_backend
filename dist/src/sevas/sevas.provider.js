"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sevasProviders = void 0;
const models_1 = require("../models");
exports.sevasProviders = [
    {
        provide: 'SEVAS_REPOSITORY',
        useValue: models_1.sevas,
    },
];
//# sourceMappingURL=sevas.provider.js.map