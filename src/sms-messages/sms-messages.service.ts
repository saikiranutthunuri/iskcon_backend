import { Injectable } from '@nestjs/common';
import axios from "axios";
const plivo = require('plivo');
const authId= 'MANTM1NJQ4YZMXYJZMZM';
const authToken= 'NWE4ZjJiN2Q4MDU1ZWYwYzNhYzg3ZmVjYWMyMDVj';


@Injectable()
export class SmsMessagesService {
    
    
async sendsms() {
    const client= new plivo.client(authId , authToken)
    client.messages.create({
    src: '+14156667778',
    dst: '14156667777',
    text: 'Hello, this is a sample text from Plivo',
}).then(function(response) {
    console.log(response)
});

}

   
}
