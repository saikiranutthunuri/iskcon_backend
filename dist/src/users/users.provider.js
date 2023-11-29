"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const users_1 = require("../models/users");
exports.usersProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useValue: users_1.users,
    },
];
//# sourceMappingURL=users.provider.js.map