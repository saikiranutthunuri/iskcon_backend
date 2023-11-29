"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./constants");
const authentication_controller_1 = require("./authentication.controller");
const authentication_service_1 = require("./authentication.service");
const users_module_1 = require("../users/users.module");
const dlt_module_1 = require("../dlt/dlt.module");
const user_details_module_1 = require("../user-details/user-details.module");
const user_seculity_logs_module_1 = require("../user-seculity-logs/user-seculity-logs.module");
const user_dids_module_1 = require("../user-dids/user-dids.module");
const nodes_module_1 = require("../nodes/nodes.module");
let AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule;
exports.AuthenticationModule = AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
            }),
            users_module_1.UsersModule,
            jwt_1.JwtModule,
            dlt_module_1.RubixModule,
            user_details_module_1.UserDetailsModule,
            user_seculity_logs_module_1.UserSeculityLogsModule,
            user_dids_module_1.UserDidsModule,
            nodes_module_1.NodesModule
        ],
        controllers: [authentication_controller_1.AuthenticationController],
        providers: [authentication_service_1.AuthenticationService],
        exports: [authentication_service_1.AuthenticationService],
    })
], AuthenticationModule);
//# sourceMappingURL=authentication.module.js.map