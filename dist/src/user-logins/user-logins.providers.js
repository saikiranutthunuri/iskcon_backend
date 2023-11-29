"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginsProviders = void 0;
const nestUserLogins_1 = require("../models/nestUserLogins");
exports.userLoginsProviders = [
    {
        provide: 'USERLOGINS_REPOSITORY',
        useValue: nestUserLogins_1.nestUserLogins,
    },
];
//# sourceMappingURL=user-logins.providers.js.map