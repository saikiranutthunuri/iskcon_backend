import { Module } from '@nestjs/common';
import { RazorPayService } from './razor-pay.service';

@Module({
  providers: [RazorPayService],
})
export class RazorPayModule {}
