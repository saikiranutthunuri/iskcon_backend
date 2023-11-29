import { Injectable } from '@nestjs/common';
import axios from "axios";
const plivo = require('plivo');
const authId= 'MANTM1NJQ4YZMXYJZMZM';
const authToken= 'NWE4ZjJiN2Q4MDU1ZWYwYzNhYzg3ZmVjYWMyMDVj';
 const sendPhoneNumber= '917032128349';
@Injectable()
export class SmsMessagesService {
    private plivoClient:any = new plivo.Client(authId, authToken)

    sentOTP(phoneNumber) {
        return this.plivoClient
    }
}
