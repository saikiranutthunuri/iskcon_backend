"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginsModule = void 0;
const common_1 = require("@nestjs/common");
const user_logins_service_1 = require("./user-logins.service");
const user_logins_providers_1 = require("./user-logins.providers");
let UserLoginsModule = class UserLoginsModule {
};
exports.UserLoginsModule = UserLoginsModule;
exports.UserLoginsModule = UserLoginsModule = __decorate([
    (0, common_1.Module)({
        providers: [user_logins_service_1.UserLoginsService, ...user_logins_providers_1.userLoginsProviders],
    })
], UserLoginsModule);
//# sourceMappingURL=user-logins.module.js.map