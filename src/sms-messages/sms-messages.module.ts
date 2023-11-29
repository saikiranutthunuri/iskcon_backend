import { Module } from '@nestjs/common';
import { SmsMessagesService } from './sms-messages.service';

@Module({
  providers: [SmsMessagesService],
})
export class SmsMessagesModule {}
