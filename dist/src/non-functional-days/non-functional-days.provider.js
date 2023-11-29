"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonFunctionalDaysProviders = void 0;
const nonFunctionalDays_1 = require("../models/nonFunctionalDays");
exports.nonFunctionalDaysProviders = [
    {
        provide: 'NONFUNCTIONALDAYS_REPOSITORY',
        useValue: nonFunctionalDays_1.nonFunctionalDays,
    },
];
//# sourceMappingURL=non-functional-days.provider.js.map