"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonFunctionalDaysModule = void 0;
const common_1 = require("@nestjs/common");
const non_functional_days_service_1 = require("./non-functional-days.service");
const non_functional_days_provider_1 = require("./non-functional-days.provider");
const database_module_1 = require("../database/database.module");
let NonFunctionalDaysModule = class NonFunctionalDaysModule {
};
exports.NonFunctionalDaysModule = NonFunctionalDaysModule;
exports.NonFunctionalDaysModule = NonFunctionalDaysModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [non_functional_days_service_1.NonFunctionalDaysService, ...non_functional_days_provider_1.nonFunctionalDaysProviders],
        exports: [non_functional_days_service_1.NonFunctionalDaysService],
    })
], NonFunctionalDaysModule);
//# sourceMappingURL=non-functional-days.module.js.map