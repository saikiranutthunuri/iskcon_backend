"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSeculityLogsModule = void 0;
const common_1 = require("@nestjs/common");
const user_security_logs_provider_1 = require("./user-security-logs.provider");
const user_security_logs_service_1 = require("./user-security-logs.service");
let UserSeculityLogsModule = class UserSeculityLogsModule {
};
exports.UserSeculityLogsModule = UserSeculityLogsModule;
exports.UserSeculityLogsModule = UserSeculityLogsModule = __decorate([
    (0, common_1.Module)({
        providers: [user_security_logs_service_1.UserSecurityLogsService, ...user_security_logs_provider_1.userSecurityLogsProviders],
        exports: [user_security_logs_service_1.UserSecurityLogsService],
    })
], UserSeculityLogsModule);
//# sourceMappingURL=user-seculity-logs.module.js.map