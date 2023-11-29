"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDidsProviders = void 0;
const userDids_1 = require("../models/userDids");
exports.userDidsProviders = [
    {
        provide: 'USERDIDS_REPOSITORY',
        useValue: userDids_1.userDids,
    },
];
//# sourceMappingURL=user-dids.providers.js.map