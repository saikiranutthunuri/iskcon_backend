"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSecurityLogsProviders = void 0;
const models_1 = require("../models");
exports.userSecurityLogsProviders = [
    {
        provide: 'NESTSECURITYLOGS_REPOSITORY',
        useValue: models_1.nestSecurityLogs,
    },
];
//# sourceMappingURL=user-security-logs.provider.js.map