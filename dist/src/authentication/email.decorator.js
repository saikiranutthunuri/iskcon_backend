"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmail = exports.IsEmailConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsEmailConstraint = class IsEmailConstraint {
    validate(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};
exports.IsEmailConstraint = IsEmailConstraint;
exports.IsEmailConstraint = IsEmailConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isEmail', async: false })
], IsEmailConstraint);
function IsEmail(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailConstraint,
        });
    };
}
exports.IsEmail = IsEmail;
//# sourceMappingURL=email.decorator.js.map