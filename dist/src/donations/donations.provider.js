"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationsProviders = void 0;
const donations_1 = require("../models/donations");
exports.donationsProviders = [
    {
        provide: 'DONATIONS_REPOSITORY',
        useValue: donations_1.donations,
    },
];
//# sourceMappingURL=donations.provider.js.map