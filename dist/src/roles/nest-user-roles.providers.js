"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestRolesProviders = void 0;
const models_1 = require("../models");
exports.nestRolesProviders = [
    {
        provide: 'USERROLES_REPOSITORY',
        useValue: models_1.nestUserRoles,
    },
];
//# sourceMappingURL=nest-user-roles.providers.js.map