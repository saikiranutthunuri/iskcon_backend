import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { RUBIXBRIDGECREATEDIDAPI } from '../dlt/dlt.constants';

@Injectable()
export class RubixService {
  private logger: Logger = new Logger();

  constructor() {}

  async generateDid() {
    // Call rubix API
    return (await axios.get(RUBIXBRIDGECREATEDIDAPI)).data;
  }

  getAllDids() {
    return;
  }
}
