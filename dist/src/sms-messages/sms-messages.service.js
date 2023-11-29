"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsMessagesService = void 0;
const common_1 = require("@nestjs/common");
const plivo = require('plivo');
const authId = 'MANTM1NJQ4YZMXYJZMZM';
const authToken = 'NWE4ZjJiN2Q4MDU1ZWYwYzNhYzg3ZmVjYWMyMDVj';
const sendPhoneNumber = '917032128349';
let SmsMessagesService = class SmsMessagesService {
    constructor() {
        this.plivoClient = new plivo.Client(authId, authToken);
    }
    sentOTP(phoneNumber) {
        return this.plivoClient;
    }
};
exports.SmsMessagesService = SmsMessagesService;
exports.SmsMessagesService = SmsMessagesService = __decorate([
    (0, common_1.Injectable)()
], SmsMessagesService);
//# sourceMappingURL=sms-messages.service.js.map