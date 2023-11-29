"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptFiltersProviders = void 0;
const promptFilters_1 = require("../models/promptFilters");
exports.promptFiltersProviders = [
    {
        provide: 'PROMPTFILTERS_REPOSITORY',
        useValue: promptFilters_1.promptFilters,
    },
];
//# sourceMappingURL=prompt-filters.providers.js.map