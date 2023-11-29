"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestRolesProviders = void 0;
const models_1 = require("../models");
exports.nestRolesProviders = [
    {
        provide: 'ROLES_REPOSITORY',
        useValue: models_1.nestRoles,
    },
];
//# sourceMappingURL=roles.providers.js.map