"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetailsProviders = void 0;
const userDetails_1 = require("../models/userDetails");
exports.userDetailsProviders = [
    {
        provide: 'USERDETAILS_REPOSITORY',
        useValue: userDetails_1.userDetails,
    },
];
//# sourceMappingURL=user-details.providers.js.map